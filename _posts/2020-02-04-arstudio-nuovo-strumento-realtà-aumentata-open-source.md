---
layout: post
idx: 25
title: arStudio un nuovo strumento open source per i creativi della realtà aumentata
description: >-
  arStudio è un editor in via di sviluppo per la creazione di applicazioni in
  javascript per la realtà aumentata. Si basa sul https://webglstudio.org e
  permetterà con pochi click di realizzare applicazioni interattive.
author: Walter Perdan
date: '2020-02-04 15:02:31'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2020-02-04'
  type: BlogPosting
image: >-
  https://ucarecdn.com/641dbcae-4b8a-48b1-9020-8441f1c28ba2/arStudiojavascriptaugmentedrealityeditor.jpg
intro_paragraph: >-
  ArStudio è un nuovo strumento in via di sviluppo per i creativi e
  programmatori interessati alla realtà aumentata. Basato sul
  https://webglstudio.org permetterà di realizzare molto facilmente delle
  applicazioni javascript .
tags: >-
  2020 arStudio webglstudio Realtà-Aumentata AR Artoolkit NFT jsartoolkit5
  markerless
---
{% include figure.html width="1366" caption="Schermata di ingresso di arStudio" height="768" alt="arStudio un editor javascript per la realtà aumentata" name="arStudio-javascript-augmented-reality-editor" target="_blank" title="arStudio un editor innovativo per la realtà aumentata" rel="author" jpg_id="641dbcae-4b8a-48b1-9020-8441f1c28ba2" link="https://github.com/augmentmy-world/arStudio" webp_id="f18071fc-d83e-4a69-acf5-6949e8928698" %}

Sviluppare una applicazione per la realtà aumentata può essere un compito non molto facile. Ci sono diverse tappe obbligate da seguire ed il compito può risultare molto complicato. Sopratutto se non sei uno sviluppatore esperto ma un “creativo” od un artista visivo con una esperienza nella programmazione. Per aiutare e semplificare questo processo abbiamo cominciato a sviluppare un editor per creare delle piccole applicazioni web per la realtà aumentata. L’editor si chiama **arStudio** e si basa su [webglstudio.org](https://webglstudio.org/): il programma è scritto interamente in javascript, e permette la creazione di applicazioni interattive in un ambiente 3D. Il progetto è stato iniziato da [Thorsten Bux](https://augmentmy.world/) e io faccio parte del team di sviluppo.

### Caratteristiche di webglstudio.

**Webglstudio** non è un programma per la creazione di oggetti 3d come Blender, 3dSmax o Maya, è piuttosto un editor per la trasformazione di scene 3d in applicazioni web interattive. Si compone di diverse finestre e funzioni, è insieme un editor per la scena, un editor per il codice di scripting (Js e GLSL) e un editor per i “grafi” come molti altri software sono forniti. Ma la cosa più importante è che quando decidete che il vostro progetto è finito, potete pubblicarlo direttamente come codice html e javascript, solo con un click di mouse. Le proprietà di questo editor, comunque, non si limitano a quelle che ho elencate ma vanno ben oltre le aspettative. Vi consiglio di vistare la pagina del demo per farvi un idea.

{% include figure.html width="1366" caption="arStudio con un arTracker e un cubo nella scena" height="768" alt="arStudio javascript editor test" name="ar-Studio-javascript-editor-AR-testing" target="_blank" title="arStudio " rel="author" jpg_id="84a75c2e-f972-4f89-b5fb-0f6d92e0eb82" link="https://github.com/augmentmy-world/arStudio" webp_id="0be2deec-80d9-4833-8614-8469f12fe39b" %}

### ArStudio e la realtà aumentata.

Che cosa permetterà di fare **arStudio**? Sarà possibile con pochissimo sforzo sviluppare un’applicazione web interattiva per la realtà aumentata. Senza nemmeno scrivere una riga di codice! Al momento è possibile aggiungere nella scena:

* **Pattern markers** (Hiro e Kanj)
* **Barcode markers**
* **NFT markers** (solo la immagine Pinball)

C’è ancora molto da fare ma il futuro è promettente per questo progetto, non esente da bug e altri problemi al momento, ma siamo molto fiduciosi e convinti che riusciremo a miglioralo sempre di più. Se volete testare l‘editor andate nella pagina github di [arStudio](https://github.com/augmentmy-world/arStudio), potete scaricare il file zip o clonare il progetto con **git** lanciando questo comando in un terminale:

```
git clone https://github.com/augmentmy-world/arStudio.git
```

per far funzionare l'editor é necessario comunque lanciare un server (python o node)

```
//Python 2.x
python -m SimpleHTTPServer

//Python 3.x
python -m http.server
```

oppure con node, installare prima il server module:

```
npm install http-server -g
```

e quindi:

```
http-server . -p 8000
```

Questo non vi permetterà di salvare e importare le scene salvate nel server. Per fare questo è necessario installare un server che supporti php come Apache e seguire la procedura riportata nel [sito](https://github.com/augmentmy-world/arStudio#installing). Ci vediamo presto con altre interessanti novità!
