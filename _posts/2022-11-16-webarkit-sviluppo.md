---
layout: post
idx: 31
slug: webarkit-sviluppo
title: Lo sviluppo di WebARKit e oltre
description: Parliamo di Webarkit e del suo sviluppo in questo ultimo periodo.
  Facciamo il punto sulla situazione e sulle prospettive e sui progetti futuri.
author: Walter Perdan
date: 2022-11-16 17:11:43
lang: it
seo:
  datePublished: 2022-11-16
  type: BlogPosting
  author: Walter Perdan
image: https://ucarecdn.com/157bb7d7-795d-4bd9-8cb0-931b0eae9517/webarkit_logo_social.jpg
intro_paragraph: "Un riassunto di questi ultimi mesi: jsfeatNext e
  webarkit-jsfeat.cpp come passaggi per il nostro progetto a lungo termine
  WebARKit."
tags: webar webarkit jsfeat jsfeatNext JsartoolkitNFT ARnft dlib 2022
---
Nel corso di questi mesi/anni dall'ultimo articolo su questo blog sono successe molte cose, in primis l’avvento del Covid con tutte le conseguenze che ha portato di restrizioni e preoccupazioni ed in secondo luogo cambiamenti di lavoro ma che non starò qui a dilungarmi su questi fatti. Voglio solo dire che ci sono state delle difficoltà che però comunque hanno lasciato spazio e tempo allo sviluppo dei progetti software.

Ho continuato a mantenere e sviluppare **ARnft** e **jsartoolkitNFT** appartenenti alla nostra organizzazione open source **WebARKit**, e parallelamente portare avanti altre ricerche. 

Infatti entrambi i progetti citati, ARnft e jsartoolkitNFT, sono solo dei passi verso quello che sarà veramente WebARKit. Essi sono ancora basati in parte su il codice C++ di ARToolKit5 compilato in WASM/javascript grazie a Emscripten. Nel corso del tempo ho fatto dei miglioramenti, ma intendiamo creare un progetto distinto o perlomeno dare linfa nuova al codice. La parte del codice per il NFT tracking - nota: qui NFT sta per Natural Feature Tracking ! - è scritto in C++ ma ha già più di 7 anni. Adesso Emscripten può compilare codice con lo standard C++17 con molte caratteristiche ed ottimizzazioni che non esistevano a quel tempo. Che cosa si potrebbe fare ora? Recentemente ho riscritto il progetto [jsfeat](https://github.com/inspirit/jsfeat) nella versione typescript: [jsfeatNext](https://github.com/webarkit/jsfeatNext). Esso sebbene scritto in typescript dimostra come si possa scrivere del codice adatto al web e all’ambiente backend con algoritmi per l’image processing e la computer vision.

Non sono riuscito ancora a convertire tutto il codice e non ci sono ancora degli esempi esaurienti ed efficaci ma penso che nel prossimo futuro questo sarà possibile. **JsfeatNext** mi ha servito come stimolo per sviluppare un prototipo di una libreria in C++ da compilare in Wasm grazie a Emscripten. Il progetto in questione si chiama [webarkit-jsfeat-cpp](https://github.com/kalwalt/webarkit-jsfeat-cpp) e include nel suo cuore le strutture base del progetto jsfeat, per esempio la classe [matrix_t](https://inspirit.github.io/jsfeat/#structs), imgproc, orb e yape06 per citarne alcune, ovviamente javascript e C++ sono due linguaggi con caratteristiche molto diverse e non era possibile una conversione 1:1 del codice. Non sono sicuro di aver fatto la scelta ottimale per la gestione dei dati grezzi , ma ho cercato quanto più possibile di usare la STL del C++; la classe data_t da cui deriva matrix_t, implementa dei `std::vector` per interpretare i dati sottostanti. Anche in questo caso non tutte le classi sono state implementate né tutte le funzioni.  Inoltre mancano ancora degli esempi esaurienti e una documentazione. Tempo permettendo spero di colmare questa lacuna e presentare anche dei test soddisfacenti.

Allo stesso tempo poiché nel caso di webarkit-jsfeat-cpp significava riscrivere da zero un progetto, ho guardato ad altre librerie che potessero soddisfare le esigenze del progetto come base o elemento da essere integrato. Tra molti che ho sondato, tra cui OpenCV, mi è parso conveniente **[dlib](https://github.com/davisking/dlib)** potete trovare qui la documentazione [dlib.net](http://dlib.net/). Dlib offre oltre oltre algoritmi utili per l’image processing e la computer vision anche algoritmi per il Machine learning. ma non sarà questo il motivo per sceglierlo. Da un primo assaggio ho potuto vedere che è molto semplice applicare delle trasformazioni alle immagini. Potete vederlo in questa mia repository [dlib_em.js](https://github.com/kalwalt/dlib_em.js) la differenza che mi è parso di vedere è che la libreria finale in wasm è molto più piccola se fosse stata compilata con OpenCV. Caratteristica interessante è che dlib contiene varie ottimizzazioni per il calcolo delle matrici che risulta difficile sviluppare ex novo. Per cui penso sia un candidato molto appetibile. Penso che comincerò a creare un prototipo anche basato su dlib e poi paragonarlo a webarkit-jsfeat-cpp. Questo sarà il mio obiettivo nei prossimi mesi, tempo permettendo ovviamente. Di sicuro ne vedremo delle belle.

A presto e felice codice!