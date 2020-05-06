---
layout: post
idx: 29
slug: jsartoolkitnft light jsartoolkit5 per nft
title: "JsartoolkitNFT: una versione leggera di Jsartoolkit5"
description: "Un breve articolo per parlare del nuovo progetto jsartoolkitNFT:
  una versione leggera di jsartoolkit5."
author: Walter Perdan
date: 2020-05-06T15:05:72.020Z
lang: it
seo:
  datePublished: 2020-05-06T15:05:72.020Z
  type: BlogPosting
  author: Walter Perdan
image: https://ucarecdn.com/18f403aa-52ce-4035-b418-c5c57794843b/JsartoolkitNFT_kalwalt_augmented_reality.jpg
intro_paragraph: "JsartoolkitNFT: una versione leggera e migliorata di Jsartoolkit5"
---
{% include figure.html width="1299" caption="Uno screenshot dello sviluppo di arNft e jsartoolkitNFT nell'editor Atom" height="741" alt="Uno screenshot dello sviluppo di arNft" name="JsartoolkitNFT_kalwalt_augmented_reality" target="_blank" title="JsartoolkitNFT: una versione semplificata di jsartoolkit5" rel="author" jpg_id="18f403aa-52ce-4035-b418-c5c57794843b" link="https://github.com/kalwalt/jsartoolkitNFT" webp_id="01f28032-74e0-423f-bb46-3fb7166e264c" %}

Ho da poco incominciato lo sviluppo di una versione allegerita di **jsartoolkit5** dedicata esclusivamente solo ad i marker **NFT** (**N**atural **F**eature **T**racking) con alcuni miglioramenti.

Per chi non sapesse cosa sono i marker **NFT** vi invito a leggere questo altro articolo sul mio blog [](https://www.kalwaltart.it/blog/2020/01/19/nft-natural-feature-tracking-con-jsartoolkit5/)[NFT Natural Feature Tracking con jsartoolkit5.](https://www.kalwaltart.it/blog/2020/01/19/nft-natural-feature-tracking-con-jsartoolkit5/) Attualmente ho tolto tutto il codice che non è necessario cercando di lasciare solamente il stretto necessario per importare la libreria **KPM** che gestisce i marker **NFT**.

Ho rimosso gran parte del codice perchè non veniva affatto utilizzato per i marker NFT, per esempio le funzioni **getUserMedia** e **getUserMediaARController** non vengono affatto utilizzate in jsartoolkit5 poiché il stream video viene gestito esternamente alla classe e all’interno del WebWorker ( artoolkit.worker.js ). Ho eliminato poi tutto il codice riguardante i Pattern, Barcode e Multi Markers, perché ovviamente non mi interessa.

Quale è l’idea? Rendere il più semplice possibile il codice, per questo motivo ho sviluppato un livello ulteriore per semplificare ed aiutare lo sviluppatore. Ho creato una nuova libreria **arNFT** che una volta inizializzata permette di scrivere il codice in questo modo:

```
<script src="../dist/arNFT.min.js"></script>
<script>

			var nft = new ARnft(640, 480, 'config.json');

			nft.init("../examples/DataNFT/pinball", true);

			var mat = new THREE.MeshLambertMaterial({color: 0xff0000});
			var cubeGeom = new THREE.CubeGeometry(1,1,1);
			var cube = new THREE.Mesh(cubeGeom, mat);
			cube.position.z = 90;
			cube.position.x = 90;
			cube.position.y = 90;
			cube.scale.set(180,180,180);

			nft.add(cube);

    </script>
```

Come vedete è molto semplificato, è basato su Three.js ma forse in futuro potrò estenderla ad altre librerie 3D. Nell’immediato futuro voglio anche implementare una serie di funzioni per il display sul marker di semplici immagini o oggetti video. Inoltre è mia intenzione aggiornare il codice ai più moderni standard **ES6** cosi da poterlo utilizzare in progetti come React, Vue, e altri.

In sintesi apportare questa serie di features:

* **arNFT** layer
* **ES6** standard
* set di funzioni da riutilizzare per un facile sviluppo
* migliorare le prestazioni

Scriverò altri articoli per informare sugli ulteriori sviluppi del progetto. Per il momento è tutto, restate sintonizzati!
