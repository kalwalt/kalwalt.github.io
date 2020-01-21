---
layout: post
idx: 24
title: NFT Natural Feature Tracking con jsartoolkit5
description: >-
  NFT Natural Feature Tracking è un sistema di tracciamento markerless per la
  realtà aumentata. Questa nuova tecnologia è disponibile da poco nella libreria
  javascript jsartoolkit5. Walter Perdan alias @kalwalt ha contribuito
  all'implementazione di NFT nel cuore di jsartoolkit5.
author: Walter Perdan
date: '2020-01-19 17:01:56'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2020-01-19'
  type: BlogPosting
image: 'https://ucarecdn.com/554de6fd-e32f-4901-90f8-68c31f60e8f1/NFTjsartoolkit5.jpeg'
intro_paragraph: >-
  **NFT N**atural **F**eature **T**racking è una tecnologia markerless per la
  realtà aumenta che permette il tracciamento di quasi qualsiasi immagine.
---
{% include figure.html width="1500" caption="Screenshot di un test con la immagine pinball.jpg" height="750" alt="NFT Natural Feature Tracking markerless jsartoolkit5" name="NFT-jsartoolkit5" target="_self" title="NFT una tecnologia Makrerless con jsartoolkit." rel="author" jpg_id="554de6fd-e32f-4901-90f8-68c31f60e8f1" link="#" webp_id="499fec07-8fbd-4cff-85ae-4dc0ff26bbaa" %}

## Una nuova release per Jsartoolkit5 con NFT (Natural Feature Tracking)

La tecnologia **NFT** ( **N**atural **F**eature **T**racking ) è una nuova opzione tecnologica disponibile nel progetto open source jsartoolkit5 . Si tratta di una tecnologia Markerless che permette il tracciamento di qualsiasi immagine ( o quasi ) a dispetto della tecnologia con Marker che prevede o l'uso solo di Pattern geometrici bianco/neri ( ma si possono usare anche colorati purché mono colore e molto contrastati ) o Barcode cioè una matrice di valori binari in forma di quadrati nero o bianchi. Entrambi Barcode o Pattern, nel progetto Artoolkit5, devono necessariamente essere circondati da una cornice scura (meglio se nera) , ed è possibile persino decidere lo spessore di questa cornice, ma comunque il marker deve essere necessariamente di forma quadrata. Le tecnologie Markerless invece lasciano più libertà per le applicazioni di Realtà Aumentata. 

### Che cosè la tecnologia NFT markerless

Il termine Markerless comunque abbraccia un ampio spettro di possibilità, non solo riguarda il tracciamento in tempo reale di immagini, ma anche il posizionamento di modelli 3d su superfici reali provenienti da un flusso video oppure il posizionamento di modelli 3d tramite il sistema di coordinate GPS. In questo breve articolo, però, si parlerà solo della tecnologia markerless **NFT** implementata nel cuore di jsartoolkit5.  Questo tipo di tecnologia riconosce determinate immagini a seguito di un pre-training. Necessariamente bisogna estrarre quelli che vengono chiamati i **features points** e conservare questi dati per successivamente confrontarli con l'immagine da tracciare. Questo processo si esegue con una specifica applicazione software; è possibile creare una applicazione standalone scaricando e compilando il codice sorgente ma noi consigliamo di usare la nuova applicazione web [NFT-Marker-Creator](https://carnaux.github.io/NFT-Marker-Creator/) oppure la utility da linea di comando che potete trovare nella sua [repository github](https://github.com/Carnaux/NFT-Marker-Creator). Il risultato finale è il data set costituito da 3 files con estensione `.fset .iset e .fset3`. con questi sarà possibile impostare il successivo tracciamento dell'immagine.

### Caratteristiche delle immagini per la NFT

Le immmagini da usare con la tecnologia NFT devono possedere un ragionevole **grado di dettaglio** e di **bordi taglienti** ( un basso grado di auto-somiglianza e alta frequenza spaziale ), una **buona risoluzione** ed una forma rettangolare. Come riferimento tenete conto della immagine che abbiamo usato per i test la [pinball.jpg](https://github.com/artoolkitx/artoolkit5/blob/master/doc/Marker%20images/pinball.jpg) (1637 x 2048 px)

{% include figure.html width="1200" caption="La immagine pinball usata per i test, ottima per  la NFT" height="1500" alt="pinball jsartoolkit5 artoolkit" name="pinball" target="_self" title="La immagine pinball" rel="author" jpg_id="f4ab8949-a3a7-4144-924e-459e28100dae" link="#" webp_id="f4ab8949-a3a7-4144-924e-459e28100dae" %}

invece un immagine non molto adatta per la NFT potrebbe essere la seguente:

L'immagine sopra non è l'ideale per la NFT poiché anche se dotata di una buona risoluzione è provvista di poca varianza il risultato sarà inferiore all'esempio di prima e di conseguenza l'applicazione farà fatica a tracciare l'immagine.

### NFT nel cuore di Jsartoolkit5

Ho iniziato a lavorare su questo progetto perché avevo scoperto un ramo (branch) nft morto nella repository [artoolkitx/jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5) il problema era che le prestazioni erano veramente scarse su desktop e ancora peggio su dispositivo mobile. Inoltre c'era nel branch master il supporto per WASM. Il mio sforzo quindi è stato di fare l'upgrade del branch NFT con la master che conteneva WASM. Compito non facile perché richiedeva una buona conoscenza della struttura del codice di Jsartoolkit5, una buona dimestichezza con Emscripten e conoscenza del linguaggio C/C++ e javascript, poiché Emscripten non fa che tradurre il codice C/C++ in linguaggio javascript utilizzabile poi successivamente in un browser od in una applicazione basata su Node.js. Devo dire che all'inizio non sapevo cosa stavo facendo e non ero sicuro del risultato. Ma ho cominciato a piccoli passi e a poca a poco abbiamo trovato una soluzione soddisfacente.  Il fatto che mi ha più sorpreso è che gradualmente incominciarono ad interessarsi altre persone e questo mi permise di risolvere molti problemi inerenti al codice. Infatti è possibile usufruire della NFT grazie all'implementazione di un WebWorker questo permette di sgravare una parte del carico di lavoro dal thread principale con conseguente aumento in prestazioni e fps. Certamente se rapportato ad applicazioni basate su ARcore, 8Wall o Artivive  non c'è confronto, ma siamo fiduciosi di poter fare degli ulteriori miglioramenti nel prossimo futuro.

### Un esempio di codice con Jsartoolkit5 e la NFT

Qui di seguito vi mostro un frammento di codice come esempio per una semplice applicazione con la NFT come potete ben vedete ed indispensabile inizializzare il video con Event Listener per poter iniettare il flusso video alla funzione start. Essa è il cuore principale della applicazione poichè gestisce il flusso di informazioni tra il Worker ed il Thread principale. 

```html
<div id="container">
    <video id="video"></video>
    <canvas style="position: absolute; left:0; top:0" id="canvas_draw"></canvas>
</div>
// main worker create the web worker see in the examples/nft_improved_worker for details
<script src="main_worker.js"></script>
<script>
var container = document.getElementById('container');
var video = document.getElementById('video');
var canvas_draw = document.getElementById('canvas_draw');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    var hint = {};
    if (isMobile()) {
        hint = {
            facingMode: {"ideal": "environment"},
            audio: false,
            video: {
                width: {min: 240, max: 240},
                height: {min: 360, max: 360},
            },
        };
    }

    navigator.mediaDevices.getUserMedia({video: hint}).then(function (stream) {
        video.srcObject = stream;
        video.play();
        video.addEventListener("loadedmetadata", function() {
            start(container, markers["pinball"], video, video.videoWidth, video.videoHeight, canvas_draw, function() { statsMain.update() }, function() { statsWorker.update()) };
        });
    });
}
</script>
```

Noi abbiamo usato la libreria Three.js per il rendering 3d ma sicuramente si può usare anche un'altra libreria. Questa parte del codice è gestita dal file **main_three.js** come potete vedere nell'esempio.
