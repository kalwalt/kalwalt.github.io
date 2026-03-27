---
layout: post
idx: 34
slug: webar-evoluzione-webarkitlib-rs-purecv
title: "Evoluzione WebAR: Da WebARKitLib-rs a purecv"
description: "Un aggiornamento sulle mie ultime attività open source: lo sviluppo di WebARKitLib-rs in Rust e la nuova libreria di computer vision purecv."
author: Walter Perdan
date: 2026-03-27 17:11:43
lang: it
seo:
  datePublished: 2026-03-27
  type: BlogPosting
  author: Walter Perdan
image: https://raw.githubusercontent.com/webarkit/purecv/main/assets/purecv_banner.png
intro_paragraph: "Dopo una pausa dal blog dal novembre 2022, condivido il mio recente lavoro su WebARKitLib-rs e purecv, volto a creare un nuovo ecosistema WebAR basato su Rust e WASM."
categories: [programming, open-source, web-ar]
tags: webar webarkit webarkitlib JsartoolkitNFT ARnft purecv rust 2026
---

## Oltre il C++: Il mio viaggio nel WebAR con Rust e SIMD

![purecv banner](https://raw.githubusercontent.com/webarkit/purecv/main/assets/purecv_banner.png)

È passato un bel po' di tempo dal mio ultimo aggiornamento qui (novembre 2022). Anche se il blog è rimasto in silenzio, l'attività dietro le quinte è stata intensa, segnata da una transizione significativa verso **Rust** e dalla crescita dell'organizzazione [webarkit](https://github.com/webarkit).

In questi anni mi sono concentrato sulla riscrittura delle fondamenta dei miei strumenti per garantire sicurezza e performance superiori all'interno del browser. Due progetti, in particolare, rappresentano il cuore di questo sforzo:

* **[WebARKitLib-rs](https://github.com/webarkit/WebARKitLib-rs)**: Un porting completo in Rust del classico motore ARToolkit. Sfruttando **WASM e istruzioni SIMD**, ho ottimizzato il tracciamento dei marker per ottenere prestazioni significativamente più elevate rispetto alle versioni precedenti.
* **[purecv](https://github.com/kalwalt/purecv)**: Una libreria di Computer Vision scritta interamente in Rust. Focalizzata sui moduli *core* e *imgproc*, è progettata per essere leggera, modulare e performante.

**Il Futuro: Un ecosistema integrato**
La mia visione per il prossimo futuro è quella di integrare `purecv` come **crate opzionale** all'interno di `WebARKitLib-rs`. Questa sinergia aprirà la strada a un nuovo e potente strumento per la WebAR, offrendo agli sviluppatori una soluzione Rust "all-in-one" ottimizzata per il web, pur rimanendo pronta per architetture native.

**Sostenere l'Ecosistema**
Nonostante l'immersione nello sviluppo con Rust, il mio impegno verso le comunità JavaScript e AR rimane invariato. Ho continuato a mantenere ed evolvere **[jsartoolkitNFT](https://github.com/webarkit/jsartoolkitNFT)** e **[ARnft](https://github.com/webarkit/ARnft)**, assicurandomi che rimangano strumenti robusti per gli sviluppatori web. Inoltre, sono tuttora attivo nella gestione e manutenzione dell'organizzazione **[AR-js-org](https://github.com/AR-js-org)**, supportando l'incredibile comunità che si affida ad AR.js per i propri progetti.

Sebbene il mio background affondi le radici nelle arti visive, vedo il codice come un mezzo espressivo fondamentale. C'è ancora molto da sperimentare — e molto da scrivere, sia in codice che nel mio romanzo *L'ultimo Giardino sulla terra* — ma sono felice di essere tornato a condividere questo percorso con voi.

*Restate sintonizzati!*