---
layout: post
idx: 30
slug: arnft jsartoolkitnft webarkit
title: ARnft e JsartoolkitNFT di proprietà di WebAR Kit
description: >-
  Durante questi mesi sono stato coinvolto nello sviluppo di ARnft e
     JsartoolkitNFT, due piccole librerie per il tracciamento delle immagini con NFT. Adesso fanno parte
     del Kit WebAR org. Vedere maggiori dettagli sul sito web www.webarkit.org.
author: Walter Perdan
date: 2020-11-29 20:11:46
lang: it
seo:
  datePublished: 2020-11-29
  type: BlogPosting
  author: Walter Perdan
image: https://github.com/webarkit/ARnft/blob/master/examples/Data/arNFT-logo.gif
intro_paragraph: " **ARnft**  e  **JsartoolkitNFT**  ora fanno parte del  **WebAR Kit** !!"
tags: 2020 Realtà-Aumentata AR NFT markerless ARnft JsartoolkitNFT
  WEbARKitLib   WebARKit WebAR ES6
---
{% include figure.html width="1299" caption="A screenshot of the ARnft development in the Atom editor" height="741" alt="A screenshot of the ARnft development" name="ARnft_WebAR_Kit_Aframe" target="_blank" title="ARnft WebAR with NFT markerless" rel="author" jpg_id="f860e41f-7ff6-48e4-947b-8dd84a10cacb" link="https://github.com/webarkit/ARnft" webp_id="f860e41f-7ff6-48e4-947b-8dd84a10cacb" %}

Ho deciso di trasferire la proprietà dei miei due progetti  **ARnft**  e  **JsartoolkitNFT**  all'organizzazione github ** [WebAR Kit](https://github.com/webarkit)** , perché credo in questo progetto. Per prendere visione del tipo di organizzazione puoi visitare il sito web [www.webarkit.org](https://www.webarkit.org),. Ho scritto di jsartoolkitNFT in un articolo precedente: [JsartoolkitNFT: versione semplificata di jsartoolkit5 per NFT](https://www.kalwaltart.it/blog/2020/05/06/jsartoolkitnft-light-jsartoolkit5-per-nft/) . Inizialmente ARnft è stato sviluppato come parte di jsartoolkitNFT, ma ho capito che era meglio separare i due progetti. JsartoolkitNFT è l'API di basso livello con il port Emscripten di [WebARKitLib](https://github.com/webarkit/WebARKitLib), invece ARnft gestisce e semplifica la parte del rendering. È basato sul fantastico progetto di rendering  **Three.js** , ma abbiamo in programma di aggiungere il supporto per  **Aframe.js**  e il motore  **Babylon.js** .

Non sono perfette e non sono sicuramente le migliori librerie che puoi trovare per la Realtà Aumentata senza marker, ma è possibile migliorarle. Un ottimo punto è che possono essere importati come modulo perché hanno il supporto  **ES6** . Stiamo lavorando per migliorare il “filtraggio” della matrice di posa, vogliamo anche aggiungere nuove funzionalità e metodi.

Spero che molti progetti vengano creati con loro e che la comunità open source contribuisca al suo sviluppo, come parte del progetto  **WebAR Kit** .

Se riscontri problemi con ARnft o jsartoolkitNFT, puoi segnalarlo nel'[ARnft issue tracker](https://github.com/webarkit/ARnft/issues) o in [jsartoolkitNFT issue tracker](https://github.com/webarkit/jsartoolkitNFT/issues). Grazie per aver letto e ci vediamo di nuovo!