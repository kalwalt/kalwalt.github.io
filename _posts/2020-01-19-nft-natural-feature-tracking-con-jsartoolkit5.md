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
{% include figure.html width="1500" caption="screenshot di un test con la immagine pinball.jpg" height="750" alt="NFT Natural Feature Tracking markerless jsartoolkit5" name="NFT-jsartoolkit5" target="_self" title="NFT Makrerless con jsartoolkit5" rel="author" jpg_id="554de6fd-e32f-4901-90f8-68c31f60e8f1" link="#" webp_id="499fec07-8fbd-4cff-85ae-4dc0ff26bbaa" %}

## Una nuova release per Jsartoolkit5 con NFT (Natural Feature Tracking)

La tecnologia **NFT** ( **N**atural **F**eature **T**racking ) è una nuova opzione tecnologica disponibile nel progetto open source jsartoolkit5 . Si tratta di una tecnologia Markerless che permette il tracciamento di qualsiasi immagine ( o quasi ) a dispetto della tecnologia con Marker che prevede o l'uso solo di Pattern geometrici bianco/neri ( ma si possono usare anche colorati purché mono colore e molto contrastati ) o Barcode cioè una matrice di valori binari in forma di quadrati nero o bianchi. Entrambi Barcode o Pattern, nel progetto Artoolkit5, devono necessariamente essere circondati da una cornice scura (meglio se nera) , ed è possibile persino decidere lo spessore di questa cornice, ma comunque il marker deve essere necessariamente di forma quadrata. Le tecnologie Markerless invece lasciano più libertà per le applicazioni di Realtà Aumentata. 

Il termine Markerless comunque abbraccia un ampio spettro di possibilità, non solo riguarda il tracciamento di immagini, ma anche il posizionamento di modelli 3d su superfici reali da un flusso video oppure il posizionamento di modelli 3d tramite il sistema di coordinate GPS. In questo breve articolo, però, si parlerà solo della tecnologia markerless **NFT** implementata nel cuore di jsartoolkit5.  



Ho iniziato a lavorare su questo progetto perchè avevo scoperto un ramo (branch) morto nella repository.
