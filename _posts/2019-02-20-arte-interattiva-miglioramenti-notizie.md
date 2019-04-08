---
layout: post
title: Miglioramenti e notizie sull'arte interattiva
description: >-
  Alcune notizie sull'arte interattiva, web design e programmazione relative al mio sito web e le mie opere, articolo di Kalwalt alias Walter Perdan.
author: Walter Perdan
date: '2019-02-20 14:02:55'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2019-02-20'
  type: BlogPosting
image: 'https://ucarecdn.com/5e541b7f-4561-45b6-9a10-dc432fb350e4/Art_is_a_joke_abstract_painting_augmented_reality_interactive_kalwalt.jpg'
intro_paragraph: >-
   Alcune notizie relative all'arte interattiva, al web design e al mondo della programmazione.
categories: Interactive-art
tags: Interactive-art AR Artoolitx NFT Gatsbyjs React Uploadcare 2019
---
## Miglioramenti: migrazione su uploadcare e altre notizie.

{% include figure.html width="1200" caption="Art is a joke, colore acrilico su tela, 70x50 cm, 2018." height="895" alt="Art is a joke - dipinto astratto con realtà aumentata by Kalwalt" attrlink="https://www.walterperdan.com" name="Art_is_a_joke_abstract_painting_augmented_reality_interactive_kalwalt" target="_blank" attr="Walter Perdan" title="Art is a joke" rel="author" jpg_id="5e541b7f-4561-45b6-9a10-dc432fb350e4" link="https://www.walterperdan.com" webp_id="f1715675-7cbf-4dc9-972d-bea39c527b84" %}

In questo ultimo mese mi sono concentrato sullo sviluppo dei miei due siti Web e della libreria javascript [jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5). Mi spiego meglio. Sono un artista visivo ma mi interesso anche di programmazione ed in particolare sullo sviluppo di applicazioni indirizzate alla realtà aumentata: potete trovare alcune informazioni sull'arte interattiva nel sito [kalwaltart.it](www.kalawaltart.it), invece tutte le mie opere (non correlate solo all'arte interattiva) sono presentati nel mio sito ufficiale [www.walterperdan.com](https://www.walterperdan.com). Come ho detto ho lavorato per aggiungere la funzionalità di immagini responsive al mio sito kalwaltart.it; all'inizio ho implementato il [jekyll-responsive-image](https://github.com/wildlyinaccurate/jekyll-responsive-image) plugin ( il mio sito è un sito statico basato su [Jekyll](https://jekyllrb.com/)), non male ma come ho iniziato ad aggiungere il formato .webp ho avuto qualche problema con il server perché non ha la libreria imagemagick richiesta che supporta il formato .webp. E anche il mio repository github stava diventando sempre più grande. Per questo motivo ho iniziato a migrare al servizio [**uploadcare**](https://uploadcare.com): È una società di servizi che fornisce una rete **CDN** dove conservare le proprie immagini. Si caricano le immagini sul server di uploadcare e poi si posta un link all'interno del tag < img >:

```
<img src="https://ucarecdn.com/70146e27-890d-498c-af4f-7000cf842210/">
```

Il vantaggio di questo approccio è:

* meno stress per il server di hosting (almeno con jekyll e imagemagick)
* il repository github risulterà più leggero, poiché non verranno memorizzate più immagini.

Userò questo servizio anche per il mio altro sito web, ma, per questo,sto lentamente migrando ad un sistema "Gatsbyjs". [**Gatsby.js**](https://www.gatsbyjs.org) è un ecosistema di plugin basato principalmente su React. Sto imparando entrambi, ma sembra molto promettente. La caratteristica principale di [**React**](https://reactjs.org) è l'uso del Virtual DOM e dell'architettura modulare Component. Vi informerò dei miei progressi ...

In questi giorni ho trascorso anche il mio tempo per migliorare la libreria [Jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5). Vorrei aggiungere ad essa la tecnologia **NFT** ( Natural Feature Tracking ) , questo è un approccio senza marker per le applicazioni di realtà aumentata. Ad essere onesti, c'è già un [NFT branch](https://github.com/artoolkitx/jsartoolkit5/tree/nft) ma il problema sono le lente prestazioni nei termini di fps, e il fatto che sia molto vecchio: richiede un aggiornamento.

Per ora ho risolto alcuni problemi durante la compilazione della libreria; il prossimo passo sarà trovare i colli di bottiglia del codice (penso che non sarà così facile), spero di risolverlo, sarà molto interessante sviluppare alcune app con un approccio markless.

Da questo punto di vista sto lavorando su alcuni collage art con marcatori e realtà aumentata grazie alla libreria AR.js. È lo stesso approccio che facevo per ["Art is a joke"](https://www.walterperdan.com/it/opere/pittura/artisajoke-pittura-astratta) la pittura acrilica ha mostrato in questa pagina.

Comincio anche a creare alcune app e opere d'arte di Markerless basate sulla libreria [**ArtoolkitX**](https://github.com/artoolkitx/artoolkitx) per sistemi Android, fino a quando NFT non sarà disponibile in jsartoolkit5 e AR.js.
