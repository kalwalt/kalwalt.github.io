---
layout: post
idx: 21
title: 'Realtà aumentata con tecnologia NFT '
description: >-
  In questo breve articolo presento la tecnologia NFT (Natural Feature Tracking)
  per la realtà aumentata. Si tratta di una tecnologia markerless che permette
  più libertà per i creativi e gli artisti.
author: Walter Perdan
date: '2019-07-30 18:07:95'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2019-07-30'
  type: BlogPosting
image: 'https://ucarecdn.com/f15a0ef1-2749-4a54-8499-53f3ea1a9178/'
intro_paragraph: >-
  **N**atural **F**eature **T**racking: una tecnologia markerless per la realtà
  aumentata.
categories: ''
tags: Interactive-art AR Arte 2019 Pittura  Realtà-Aumentata
---
{% include figure.html width="1200" caption="Suono di superficie, colore acrilico su tela, esempio di tecnologia Markerless con Artivive, 70x50 cm, 2018." height="844" alt="Suono di superficie dipinto acrilico interattivo con Artivive by Walter Perdan" name="suono_di_superficie_artivive_acrylic_painting_interactive_art_Walter_Perdan" target="_blank" rel="author" jpg_id="cb9f79fd-d999-4ddd-8532-4655bcc3d756" link="https://www.walterperdan.com" webp_id="67b0703f-a242-496a-98c3-30e5b4243007" %}

<a href="https://www.walterperdan.com/it/opere/pittura/suono-superficie-artivive">Leggi di più su "Suono di superficie" un dipinto acrilico con tecnologia Artivive Markerless...</a>

La realtà aumentata ha avuto uno sviluppo sorprendente. Dalla tecnologia con Marker geometrici si è arrivati a sofisticati sistemi con i quali sembra non ci siano limiti alla creatività. Una tecnologia che è emersa in modo deciso è la tecnologia Markerless. Con essa è possibile "aumentare" la realtà con quasi qualsiasi immagine. 

Ci sono vari progetti  ed applicativi a pagamento che offrono diverse varianti di questa tecnologia, per quanto riguarda  l'open source,  [ARToolKit](https://github.com/artoolkit) è forse il progetto  più stabile e testato. Il codice sorgente è disponibile per diversi sistemi operativi e dispositivi ( Mac, Windows, Linux, Android, Ios and arm). Oltre al progetto principale esiste da qualche anno una versione convertita in Javascript, che è capace di funzionare in un browser web. Il progetto si chiama [jsartoolkit5](https://github.com/artoolkit/jsartoolkit5) ed è di casa, come ARToolKit, sulla piattaforma github. **Jsartoolkit5** permette una notevole flessibilità e praticità. Con lo stesso codice infatti è usufruibile da diversi  sistemi operativi, senza quindi il bisogno di riscrivere, compilare e pubblicare un applicazione differente per ogni sistema operativo. Con **Jsartoolkit5** é sufficiente pubblicare  su di un server una pagina html con il codice Javascript e collegarsi alla pagina web per poter usufruire dell'applicazione. Decisamente molto più semplice.

Ma veniamo al tema di questo breve articolo: NFT. La **N**atural **F**eature **T**racking ovverosia il riconoscimento di caratteristiche naturali nelle immagini video è una tecnica relativamente recente. Permette, attraverso l'individuazione di punti e regioni con caratteristiche salienti, il riconoscimento di immagini. A differenza della tecnologia con i Marker, molto più restrittiva anche se robusta ed efficace, la tecnologia NFT permette più libertà nella scelta delle immagini da sottoporre al tracciamento. ARToolKit v.5 ha implementata la tecnologia NFT ed è disponibile per diverse piattaforme. Tempo fa era stato tentato di portarla in javascript via emscripten nel framework di **jsartoolkit5** ma aveva delle performances non molto incoraggianti ed era stato abbandonata. Recentemente ho cercato di ripristinarla e aggioranarla: quella originale è in questo [`ramo`](https://github.com/kalwalt/jsartoolkit5/tree/fixing-nft) e la PR relativa é disponibile qui [github.com/kalwalt/jsartoolkit5/pull/1](https://github.com/kalwalt/jsartoolkit5/pull/1).

Ho inoltre sviluppato e sto sviluppando una versione con multithreading ( -pthread  enabled) in questo [ramo](https://github.com/kalwalt/jsartoolkit5/tree/nft-with-threads)  la PR relativa é disponibile qui [github.com/kalwalt/jsartoolkit5/pull/2](https://github.com/kalwalt/jsartoolkit5/pull/2)  Abbiamo registrato un miglioramento significativo delle prestazioni. Ma ci servono ancora diversi test su dispositivi smartphone. L'altra faccia della medaglia è che bisogna abilitare la flag `SharedArrayBuffer` nel browser, condizione questa non  proprio "user friendly". C'è ancora possibilità di migliorare il codice, per quanto riguarda questo aspetto se volete intervenire nella discussioni vi invito a lasciare un commento all'interno delle PR relative (vedi sopra). 

Come considerazioni finali posso dire che ho in mente anche di sviluppare altre alternative markerless open source: si potrebbe tentare di sviluppare la  nuova versione di [ARToolKitX](https://github.com/artoolkitx/artoolkitx) in javascript ed un altro approccio basato su OpenCV, mi riferisco alla soluzione proposta da Ahmet Özlü in questo articolo su [Medium](https://medium.com/@ahmetozlu93/marker-less-augmented-reality-by-opencv-and-opengl-531b2af0a130), il codice sorgente è disponibile qui [github.com/ahmetozlu/augmented_reality](https://github.com/ahmetozlu/augmented_reality).

Vedremo cosa ci riserva il futuro, e spero di realizzare dei bellissimi progetti di realtà aumentata grazie a questi sviluppi!
