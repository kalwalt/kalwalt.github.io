---
layout: post
idx: 35
slug: KPM-WebARKitLib-rs-completamente-in-Rust
title: KPM di WebARKitLib-rs completamente in Rust
description: >-
  WebARKitLib-rs: il modulo KPM è stato migrato con successo a Rust.

  Parità funzionale garantita e alta precisione ottenute grazie alla strategia Strangler Fig.
author: Walter Perdan
date: 2026-07-19 18:07:SS
lang: it
seo:
  type: BlogPosting
  author: Walter Perdan
image: https://ucarecdn.com/9ad1c018-0c32-423c-8fee-5b4c48a5f3d9/WebARKitLibrsKPMnoFFiRustfig.jpg
intro_paragraph: Il modulo KPM di WebARKitLib-rs è ora in Rust. Grazie alla
  strategia Strangler Fig e all'IA, ho garantito la parità funzionale con il
  codice nativo.
categories: programming open-source webar
tags: " webar, webarkit, rust, webarkitlib-rs purecv, 2026"
---
# La Strategia: Strangler Fig

![KPM di Webarkitlib-rs completamente in Rust](https://ucarecdn.com/9ad1c018-0c32-423c-8fee-5b4c48a5f3d9/WebARKitLibrsKPMnoFFiRustfig.jpg "KPM di Webarkitlib-rs completamente in Rust")

Il modulo **KPM** (Key Point Matching) del progetto [WebARKitLib-rs](https://github.com/webarkit/WebARKitLib-rs), che in precedenza si affidava a FFI per interagire con il codice C/C++, è stato ora interamente convertito in Rust. Per raggiungere questo obiettivo, ho adottato la strategia "*Strangler Fig*": ho scomposto il modulo in sotto-moduli, isolando le funzioni critiche. Per ciascuna di esse, ho predisposto test di parità che confrontano l'implementazione in Rust con la corrispondente nativa in C/C++, garantendo l'assoluta precisione del porting. Ecco un esempio pratico:

```rust
/// From crates/core/src/kpm/freak/homography.rs#L3028
/// Same as above but compares the full `RobustHomography::find()` 
/// pipeline (RANSAC + IRLS polish) against the C++ baseline. 
#[test] 
fn robust_homography_find_matches_cpp() { 
    let mut rng = StdRng::seed_from_u64(0xF00DBABE); 
    let mut max_diff = 0.0_f32; 
    for trial in 0..5 { 
        let h_true = [ 
            1.0 + rng.random_range(-0.1_f32..0.1), 
            rng.random_range(-0.1_f32..0.1), 
            rng.random_range(-1.0_f32..1.0), 
            rng.random_range(-0.1_f32..0.1), 
            1.0 + rng.random_range(-0.1_f32..0.1), 
            rng.random_range(-1.0_f32..1.0), 
            rng.random_range(-0.001_f32..0.001), 
            rng.random_range(-0.001_f32..0.001), 
            1.0, 
        ]; 
        let n: usize = 16; 
        let mut p = vec![0.0_f32; n * 2]; 
        let mut q = vec![0.0_f32; n * 2]; 
        for i in 0..n { 
            p[i * 2] = rng.random_range(-5.0_f32..5.0); 
            p[i * 2 + 1] = rng.random_range(-5.0_f32..5.0); 
            let mut q_pt = [0.0_f32; 2]; 
            multiply_point_homography_inhomogenous( 
                &mut q_pt, 
                &h_true, 
                &[p[i * 2], p[i * 2 + 1]], 
            ); 
            q[i * 2] = q_pt[0]; 
            q[i * 2 + 1] = q_pt[1]; 
        } 
        let estimator = RobustHomography::default(); 
        let mut h_rust = [0.0_f32; 9]; 
        let r = estimator.find(&mut h_rust, &p, &q, n); 
        let mut h_cpp = [0.0_f32; 9]; 
        let c = unsafe { 
            webarkit_cpp_robust_homography_find( 
                h_cpp.as_mut_ptr(), 
                p.as_ptr(), 
                q.as_ptr(), 
                n as i32, 
                HOMOGRAPHY_DEFAULT_CAUCHY_SCALE, 
                HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES, 
                HOMOGRAPHY_DEFAULT_MAX_TRIALS, 
                HOMOGRAPHY_DEFAULT_CHUNK_SIZE, 
            ) 
        } != 0; 
        assert_eq!(r, c, "trial {}: Rust and C++ disagreed on success", trial); 
        if r { 
            for i in 0..9 { 
                let diff = (h_rust[i] - h_cpp[i]).abs(); 
                if diff > max_diff { 
                    max_diff = diff; 
                } 
                assert!( 
                    diff < 1e-5, 
                    "trial {}: RobustHomography::find diverged at H[{}]: rust={}, cpp={}, diff={}", 
                    trial, i, h_rust[i], h_cpp[i], diff 
                ); 
            } 
        } 
    } 
    arlog_e!( 
        "RobustHomography::find: max element diff = {} over 5 random trials", 
        max_diff 
    ); 
}  
```

# Metodologia e il supporto dell'IA

Questo approccio mi ha fornito la certezza quasi assoluta di una transizione fedele. Suddividendo il lavoro in 9 milestones, ho potuto procedere in modo sistematico. In questo percorso, il supporto di agenti IA come **Gemini** e, in particolare, **Claude Code**, è stato fondamentale: quest'ultimo si è rivelato estremamente efficace nella progettazione, nel refactoring, nella stesura dei test e nell'identificazione di bug e incongruenze. Grazie a questi strumenti, il porting è stato fluido e lineare, completato in poco più di due mesi (dal 1° aprile al 5 giugno), un tempo impensabile senza tale ausilio. Il modulo integra ora [purecv](https://github.com/webarkit/purecv) — anch'esso scritto in Rust — che implementa diversi algoritmi di computer vision derivati da **OpenCV**. Questa scelta conferisce a WebARKitLib-rs una modularità superiore, aprendo la strada a futuri potenziamenti, come la sostituzione di DoG con Orb per la detection.

# Verso il futuro di WebAR

**WebARKitLib-rs** rappresenta, con ogni probabilità, il futuro di **WebARKit**: sarà la base per sviluppare il nuovo motore open source dedicato alla WebAR. Questa non è l'unica strada intrapresa; di recente ho infatti rilasciato in [WebARKitLib](https://github.com/webarkit/WebARKitLib) il nuovo codice basato su OpenCV, testabile nella repository [webarkit-testing](https://github.com/webarkit/webarkit-testing). Con la conversione completa a Rust, la soglia d'ingresso per nuovi contributori si abbassa notevolmente. Tale modularità semplifica l'integrazione di nuovi algoritmi e getta le fondamenta per un ecosistema WebAR più solido, trasparente e accessibile alla community open source.
