---
layout: post
idx: 28
slug: ar.js nuova organizzazione
title: 'AR.js: nuova organizzazione e versione 3.0.0'
description: >-
  AR.js si è trasformata in una nuova organizzazione github ed è giunta alla
  versione 3.0.0; un breve articolo per annunciare questo importante traguardo.
author: Walter Perdan
date: '2020-03-19 20:03:04'
lang: it
seo:
  datePublished: '2020-03-19'
  type: BlogPosting
  author: Walter Perdan
image: ' https://ucarecdn.com/2d7fac12-ca25-46dd-a6ba-497560a30e33/ar_js_org_introduction.jpg'
intro_paragraph: >-
  AR.js si è trasformato in una nuova organizzazione github ed è stata
  rilasciata la versione 3.0.0; Leggi l'articolo per saperne di più ...
---
{% include figure.html width="1299" caption="Scopri la nuova organizzazione AR.js su github!" height="741" alt="Ar.js new github organization" name="ar_js_org_introduction" target="_blank" title="AR.js github org" rel="author" jpg_id="2d7fac12-ca25-46dd-a6ba-497560a30e33" link="https://github.com/AR-js-org" webp_id="6e60f782-d54c-4d4b-9995-9def4f01ac5e" %}

**AR.js** è giunto ad un notevole traguardo, che di fatto lo porta ad essere uno dei più importanti progetti opensource per la Realtà Aumentata: la prima cosa più riguardevole è che è diventato un organizzazione su [github](https://ar-js-org.github.io/), secondo ma non meno importante è arrivato alla versione 3.0.0 con integrata la tecnologia **NFT**( Natural Feature Tracking ).

AR.js è un progetto iniziato da [Jerome Etienne](https://github.com/jeromeetienne) e mantenuto da [Nicolò Carpignoli](https://github.com/nicolocarpignoli). La trasformazione in organizzazione permetterà una migliore gestione del codice e di tutti gli aspetti di un progetto Open Source.

## Che cos’è AR.js ?

**Ar.js** è una libreria interamente scritta in javascript per la creazione di Web App per la Realtà Aumentata (di seguito **AR**). Si basa internamente su jsartolkit5, il port in javascript di [Artoolkit5](https://github.com/artoolkitx/artoolkit5) il ben noto progetto per la AR Non scenderò in dettaglio sulle parti di codice, vi dirò solamente che attualmente sono possibili tre tipi di AR :

* Image Tracking
* Location Based AR
* Marker Tracking.

**Image Tracking** ovvero la tracciatura di immagini è una tecnologia Markerless cioè senza l’uso di Pattern Marker. Questo grazie alla recente implementazione di **NFT**( Natural Feature Tracking )all’interno di jsartoolkit5. I vantaggi sono l’uso di quasi qualsiasi immagine e una maggior libertà. Ma attenzione questa è una caratteristica da poco implementata e necessità dei miglioramenti.

**Location Based** ovvero la AR posizionabile in un luogo,grazie ai dati GPS. Ciò permette di posizionare qualsiasi oggetto 3d o di altro tipo nella scena.

**Marker Tracking** è la AR più tradizionale, che fa uso di Pattern Marker necessariamente quadrati con un bordo di un certo spessoree di colore uniforme (di norma nero o bianco).

Il maggior vantaggio di usare AR.js sta nel fatto che una volta scritto il codice è immediatamente usufruibile, è sufficiente posizionarlo in un Server: si tratta solamente di una pagina scritta in HTML, javascript e CSS.

{% include figure.html className="" width="1299" caption="NFT tracking con jsartoolkit5 il cuore di AR.js" height="741" alt="NFT tracking jsartoolkit5" name="NFTjsartoolkit5" target="_blank" title="NFT la nuova tecnologia markerless allinterno di AR.js" rel="author" jpg_id="554de6fd-e32f-4901-90f8-68c31f60e8f1" link="https://ar-js-org.github.io/AR.js/aframe/examples/image-tracking/nft/" webp_id="499fec07-8fbd-4cff-85ae-4dc0ff26bbaa" %}

## Nuova organizzazione, nuova documentazione.

Una aspetto fondamentale di un progetto, riveste la sua documentazione. A che cosa serve infatti una libreria se poi non si sa come usarla? Scrivere una buona documentazione è una parte importante delprogetto, per questo è stato creata unadocumentazioneufficiale di Ar.js in questa [repository github](https://github.com/AR-js-org/AR.js-Docs) e consultabile online a questo indirizzo: [ar-js-org.github.io/AR.js-Docs](https://ar-js-org.github.io/AR.js-Docs/). Crediamo che una buona documentazione sia un punto forte dei ogni progetto opensource, per questo cercheremo di migliorarla sempre di più. Se intendi dare un contributo al progetto aiutaci a migliorarla, unisciti a noi.

{% include figure.html width="1299" caption="Visita la pagina https://ar-js-org.github.io/AR.js-Docs/" height="741" alt="AR.js documentation page" name="ar_js_org_documentation_page" target="_blank" title="AR.js Docs" rel="author" jpg_id="510f2285-6a67-4212-ba1d-e8cac35bc08e" link="https://ar-js-org.github.io/AR.js-Docs/" webp_id="b1572ac2-d950-4069-b5f9-e92f7f9c621e" %}

Inoltre l’organizzazione è nata per un semplice motivo: non volevamo veder morire un così bel progetto, e pensiamo che la collaborazione sia una parte importante dell’opensoucre: quali incredibili traguardi possiamo raggiungere insieme se ognuno comincia a collaborare e dare un proprio contributo?

A nostro parere AR.js e la nuova organizzazione avrà un glorioso futuro e sarà promotrice di importanti ed incredibili progetti!

### Useful links:

AR.js organization: [https://github.com/AR-js-org](https://github.com/AR-js-org/AR.js)

AR.js: <https://github.com/AR-js-org/AR.js>

AR.js Documentazione: <https://ar-js-org.github.io/AR.js-Docs/> github repository <https://github.com/AR-js-org/AR.js-Docs>                         

Mio articolo su NFT (Natural Feature Tracking): [](https://www.kalwaltart.com/blog/2020/01/21/nft-natural-feature-tracking-with-jsartoolkit5/)<https://www.kalwaltart.it/blog/2020/01/19/nft-natural-feature-tracking-con-jsartoolkit5/>
