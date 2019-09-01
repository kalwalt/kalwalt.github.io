---
layout: post
idx: 22
title: Open Source e Realtà Aumentata
description: >-
  Alcune considerazioni sul rapporto tra open source e realtà aumentata: La
  filosofia dell'open source e quali possibilità open source esistono per un
  creativo nel campo della realtà aumentata e dell'arte interattiva.
author: Walter Perdan
date: '2019-09-01 13:09:39'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2019-09-01'
  type: BlogPosting
image: >-
  https://ucarecdn.com/1be8cb43-b584-439c-a7a3-72a74e11465f/Artoolkitx_inside_atom.webp
intro_paragraph: Lo scenario della Realtà Aumentata nel mondo Open Source.
tags: Interactive-art AR Arte 2019 Realtà-Aumentata Artoolkit ArtoolkitX
---
# Open Source e la Realtà Aumentata

{% include figure.html width="1200" caption="Sviluppando ArtoolkitX.js in Atom..." height="685" alt="Schermata su Artoolkitx.js" name="Artoolkitx_inside_atom" target="_blank" title="ArtoolkitX.js un progetto Open Source per la AR" rel="author" link="https://github.com/kalwalt" jpg_id="1be8cb43-b584-439c-a7a3-72a74e11465f" webp_id="1be8cb43-b584-439c-a7a3-72a74e11465f" %}

L'[**Open Source**](https://it.wikipedia.org/wiki/Open_source) è un termine che deriva direttamente dal mondo dell'informatica. Letteralmente significa "sorgente aperto", nel senso che il codice sorgente è aperto a tutti i programmatori, in base alla licenza con cui viene distribuito. Un progetto Open Source quindi potrà essere copiato, modificato,  re-distribuito oppure se, la licenza lo permette, lo sviluppatore può anche vendere il software da lui creato.

L'idea dell'Open Source nasce con la fondazione della Free Software Foundation (**FSF**) da parte di Richard Stallman nel 1985, per favorire lo sviluppo e la distribuzione libero del software. La **FSF** fu solo l'inizio, negli anni successivi sorsero altre istituzioni, fondazioni e progetti per incentivare l'Open Source: **Gnu**, il sistema operativo **Linux** e tante altre.

Ma perché un programmatore si dedica all'Open Source?  Perché alla base c'è un altra modalità di pensiero. La base è l'idea di collaborazione, di volontà di un altro modello di sviluppo economico, sociale e di pensiero, di condivisione delle idee. Jeremy Rifkin ha insistito molto su questo concetto. Secondo Rifkin il modello capitalista finirà e verrà sostituito da un modello collaborativo come appunto quello che succede nel mondo dell'Open Source. Specialmente nel campo del design e della programmazione "creativa" abbiamo degli interessanti progetti: basti pensare a [**Processing**](https://processing.org/), [**OpenFrameworks**](https://openframeworks.cc), [**Gimp**](https://www.gimp.org), [**Krita**](https://krita.org)  e [**Blender**](https://www.blender.org) per fare degli esempi. I prime due sono due progetti costituiti da un Frameworks con cui è possibile sviluppare delle applicazioni di grafica, video, audio e molto altro. **Gimp** e **Krita** invece sono due programmi con cui è possibile modificare le immagini o crearne delle nuove da zero. Anche questi sono Open Source, quindi si possono scaricare gratuitamente già compilati, oppure si può accedere al codice sorgente e modificarlo a proprio piacimento. **Blender,** anch'esso Open Source, invece è un software per la modellazione 3D.

Ma che cosa dire della Realtà Aumentata e l'Open Source?  Il progetto Open Source più importante per la **Realtà Aumentata** è [**ARToolKit**](https://en.wikipedia.org/wiki/ARToolKit) ora alla nuova versione 6.0 con il nuovo nome [**ARToolKitX**](https://www.artoolkitx.org/): disponibile per varie piattaforme (Windows, Linux, Mac, Android e iOS) e distribuito con licenza GNU 3.0.

Per il creativo e l'artista può significare un incentivo a sviluppare delle specifiche applicazioni che forse non sarebbero alla sua portata. Negli ultimi anni oltre alla versione per Android ed iOS è stata sviluppata una versione javascript, grazie ad Emscripten, un traduttore che trasforma il codice dal linguaggio (C/C++) in javascript e WASM. Questo semplifica le cose poiché è più semplice sviluppare un applicazione in questo modo, infatti è necessario collocare il codice (html e javascript) in un server è sarà fruibile a chiunque.

Di questa esiste la versione [**jsartoolkit5**](https://github.com/artoolkit/jsartoolkit5) ed è in sviluppo la nuova versione basata su ARtoolkitX [**ArtoolkitX.js**](https://github.com/augmentmy-world/artoolkitX.js), sviluppata da [Thorsten Bux](http://augmentmy.world/), è la nuova versione migliorata  rispetto alla precedente. Io collaboro al progetto per cui se ci saranno delle novità importanti verranno comunicate su questo blog. L'idea è quella di creare uno strumento per il creativo ed il designer, grazie al quale semplifichi la creazione di applicazioni per la realtà aumentata. [**Webglstudio**](https://webglstudio.org) è un editor che permette di creare una scena 3d, aggiungendo anche codice javascript, glsl e molto altro. Sarebbe bello creare il proprio contenuto grazie all'editor di Webglstudio e in pochi click completare un progetto di arte interattiva e di visual design. Che cosa ne pensate? Se siete interessati seguite la pagina github di [ArtoolkitX.js](https://github.com/augmentmy-world/artoolkitX.js). A presto!
