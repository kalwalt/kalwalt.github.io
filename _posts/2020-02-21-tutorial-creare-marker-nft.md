---
layout: post
idx: 27
slug: 'tutorial creare marker NFT '
title: 'Tutorial: come creare un marker NFT.'
description: >-
  In questo articolo tutorial verrà spiegato come realizzare un marker NFT per
  la realtà aumentata con il NFT-Marker-Creator da usare con il progetto
  opensource jsartoolkit5.
author: Walter Perdan
date: '2020-02-21 11:02:53'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2020-02-21'
  type: BlogPosting
image: >-
  https://ucarecdn.com/3aa158e5-f175-4d74-a3fc-ed54deaea815/Tutorial_NFT_Marker_Creator_AR.jpg
intro_paragraph: >-
  Tutorial per la creazione di marker **NFT** per la Realtà Aumentata da usare
  con il progetto open source **jsartoolkit5**.
tags: 2020 Realtà-Aumentata NFT markerless tutorial
---
{% include figure.html width="1299" caption="Schermata iniziale della webapp NFT-Marker-Creator" height="741" alt="NFT-Marker-Creator per marker NFT per la Realtà Aumentata" name="Tutorial_NFT_Marker_Creator_AR" target="_blank" title="Realizzare un NFT Marker con NFT-Marker-Creator" rel="author" jpg_id="3aa158e5-f175-4d74-a3fc-ed54deaea815" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="8af1c1d3-7bd4-4bad-8814-ee466692cd06" %}

### Introduzione

In questo tutorial vi spiegherò passo passo la creazione di marker **NFT** da usare con il progetto **jsartoolkit5** per la realtà aumentata. Questo articolo è indirizzato a tutti i creativi che intendono creare le loro applicazioni Web di realtà aumentata. Una minima conoscenza di alcuni concetti è comunque necessaria per affrontare l'argomento.

I marker **NFT** (**N**atural **F**eature **T**racking) sono dei marker che vengono usati per tracciare delle immagini predeterminate. In sostanza si tratta di una tecnologia markerless. cioè senza l'utilizzo di markers. Per una distinzione su i tipi di marker vi rimando a questo articolo ed in fondo troverete altre risorse utili.

### Materiali necessari

Per la creazione dei marker NFT è prerequisito fondamentale il possesso di un **immagine** in formato jpg o png a colori e del software necessario: **NFT-Marker-Creator.**

Sebbene sia possibile creare i marker NFT con diverse risoluzioni e dimensioni in pixel, è fortemente consigliato generare il marker NFT con un ottimale risoluzione e dimensione: una dimensione totale in pixels ( base x altezza ) tra i 3.300.000 - 3.500.000 pixels e dpi di almeno 200 ottimale 300.

é possibile usare la versione online dell'applicazione oppure la versione a linea di comando. Di seguito vi illustrerò i due modi.

### Generare il marker NFT

Si può utilizzare la Web App andando su questo sito: [carnaux.github.io/NFT-Marker-Creator](https://carnaux.github.io/NFT-Marker-Creator/) la pagina si presenterà in questo modo:

{% include figure.html width="1299" caption="Web app per la creazione di marker NFT" height="741" alt="Pagina iniziale NFT-Marker-Creator webapp" name="NFT_Marker_Creator_node_webapp_start" target="_blank" title="Pagina iniziale NFT-Marker-Creator" rel="author" jpg_id="f799693d-a7a8-4611-bc9c-e0c2b71dd1e8" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="186b4e8f-7671-43c1-9080-ce2fa89e0fdd" %}

cliccate su **Upload Image** si aprirà una finestra dove potete accedere alla cartella dove è contenuto il file immagine. Per esempio in questo caso andiamo a utilizzare l'immagine di riferimento pinball.jpg nel progetto jsartoolkit5:



{% include figure.html width="1299" caption="Schermata iniziale della webapp NFT-Marker-Creator" height="741" alt="Creare marker NFT con NFT-Marker-Creator" name="Tutorial_NFT_Marker_Creator_AR" target="_blank" title="Immagine caricata nella webapp NFT-Marker-Creator" rel="author" jpg_id="f574b279-d6d8-4392-8dfa-8d56fa10ac50" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="5386020e-47cd-46b1-b877-44fda675a77d" %}
