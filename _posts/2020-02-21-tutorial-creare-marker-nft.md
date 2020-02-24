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

I marker **NFT** (**N**atural **F**eature **T**racking) sono dei marker che vengono usati per tracciare delle immagini predeterminate. In sostanza si tratta di una tecnologia markerless, cioè senza l'utilizzo di markers. Per una distinzione su i tipi di marker vi rimando a questo [articolo](https://www.kalwaltart.it/blog/2020/01/19/nft-natural-feature-tracking-con-jsartoolkit5/) ed in fondo troverete altre risorse utili.

### Materiali necessari

Per la creazione dei marker NFT è prerequisito fondamentale il possesso di un **immagine** in formato jpg o png a colori e del software necessario: **NFT-Marker-Creator.**

Sebbene sia possibile creare i marker NFT con diverse risoluzioni e dimensioni in pixel, è fortemente consigliato generare il marker NFT con un ottimale risoluzione e dimensione: una dimensione totale in pixels ( base x altezza ) tra i 3.300.000 - 3.500.000 pixels e dpi di almeno 200 ottimale 300.

È possibile usare la versione online dell'applicazione oppure la versione a linea di comando. Di seguito vi illustrerò i due modi.

### Generare il marker NFT

#### Tramite Webapp

Si può utilizzare la Web App andando su questo sito: [carnaux.github.io/NFT-Marker-Creator](https://carnaux.github.io/NFT-Marker-Creator/) la pagina si presenterà in questo modo:

{% include figure.html width="1299" caption="Web app per la creazione di marker NFT" height="741" alt="Pagina iniziale NFT-Marker-Creator webapp" name="NFT_Marker_Creator_node_webapp_start" target="_blank" title="Pagina iniziale NFT-Marker-Creator" rel="author" jpg_id="f799693d-a7a8-4611-bc9c-e0c2b71dd1e8" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="186b4e8f-7671-43c1-9080-ce2fa89e0fdd" %}

cliccate su **Upload Image** si aprirà una finestra dove potete accedere alla cartella dove è contenuto il file immagine. Per esempio in questo caso andiamo a utilizzare l'immagine di riferimento pinball.jpg nel progetto jsartoolkit5:

{% include figure.html width="1203" caption="Finestra per la scelta dellimmagine." height="741" alt="NFT-Marker-Creator upload immagine" name="NFT_Marker_Creator_node_webapp_upload_image" target="_blank" title="Scegliere un immagine per NFT-Marker-Creator" rel="author" jpg_id="00c87ff0-04ea-4f75-83e9-15f05aa1f59c" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="6613dad6-cc67-440d-bfbb-0633fa9fa65b" %}

a questo punto la vostra finestra sarà simile alla seguente:

{% include figure.html width="1299" caption="Schermata iniziale della webapp NFT-Marker-Creator" height="741" alt="Creare marker NFT con NFT-Marker-Creator" name="Tutorial_NFT_Marker_Creator_AR" target="_blank" title="Immagine caricata nella webapp NFT-Marker-Creator" rel="author" jpg_id="f574b279-d6d8-4392-8dfa-8d56fa10ac50" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="5386020e-47cd-46b1-b877-44fda675a77d" %}

nella pagina è mostrato anche il `confidence level` cioè una valutazione dell'immagine in base al quale l'immagine è più o meno idonea: piu stelle ci sono meglio è. Diciamo che è meglio che ne abbia almeno 3 per avere il numero sufficiente di descrittori.

Non vi resta a questo punto, che cliccare sul bottone **Generate**, immediatatamente partirà il programma ed in breve tempo verranno creati tre file in questo caso: pinball.fset pinball.iset e pinball.fset3.

#### Tramite linea di comando

È possibile generare i propri NFT markers anche con l'applicazione a linea di comando ( cioè tramite console ). In questo caso però è necessario installare [nodejs](https://nodejs.org/it/) seguite le istruzioni per l'installazione nel sito. È necessario inoltre scaricare NFT-Marker-Creator tramite git. [Git](https://it.wikipedia.org/wiki/Git_(software)) è un programma di controllo versione distribuito usato dagli sviluppatori. Bisogna innanzitutto [installare git](https://www.html.it/pag/53180/installazione-di-git/). Una volta installato nella cartella dove volete scaricare NFT-Marker-Creator digitate in un terminale a linea di comando:

```
git clone https://github.com/Carnaux/NFT-Marker-Creator.git
```

in questo modo verrà scaricato l'intero progetto, entrate nella cartella:

```
cd NFT-Marker-Creator
```

e lanciate la node app ( con **\-i** potete indicare il percorso dell'immagine ):

```
node app.js -i pinball.jpg
```

vedi anche nell'immagine di esempio:

{% include figure.html width="1200" caption="Lanciando il programma con un immagine" height="711" alt="NFT-Marker-Creator con la node app" name="NFT_Marker_Creator_node_app_start" target="_blank" title="Lanciare il programma con un immagine" rel="author" jpg_id="8eecea84-cce8-46eb-8568-fb63ac6b44b2" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="075545fd-8cf8-4635-8ea9-bfedcc45e2eb" %}

date invio ed il programma vi chiederà i dati exif digitate Yes (Y):

{% include figure.html width="1200" caption="Immettere i dati exif" height="711" alt="NFT-Marker-Creator con la node app e exif" name="NFT_Marker_Creator_node_app_exif" target="_blank" title="Dati exif" rel="author" jpg_id="68274b7d-401c-4280-ae7b-2abe95d746c7" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="72c95d00-165b-43f3-b011-0820d50ee9c7" %}

 quindi il programma vi chiederà di immettere i dati di larghezza (W) e altezza (H):

{% include figure.html width="1200" caption="Larghezza e altezza dellimmagine per il NFT marker" height="711" alt="NFT-Marker-Creator con la node app e exif" name="NFT_Marker_Creator_node_app_width_height" target="_blank" title="Larghezza e altezza dellimmagine" rel="author" jpg_id="40f7323d-a1bd-42a7-b485-a7c44a867fa2" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="7c73a4cd-722c-498d-a225-6e5e72596851" %}

In questo caso W=1637 e H=2048, la finestra dovrebbe essere simile a questa:

{% include figure.html width="1200" caption="Larghezza e altezza dellimmagine per il NFT marker" height="711" alt="NFT-Marker-Creator con la node app e larghezza altezza immagine" name="NFT_Marker_Creator_node_app_width_height_ok" target="_blank" title="Larghezza e altezza dellimmagine" rel="author" jpg_id="1456af7b-a1a7-4abc-b9ad-6789f2100dc3" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="83313613-8225-450b-8198-0fe82d975d84" %}

nel passo successivo vi verrà richiesto di immettere il dpi:

{% include figure.html width="1200" caption="Dpi dellimmagine" height="711" alt="NFT-Marker-Creator con la node app e dpi" name="NFT_Marker_Creator_node_app_dpi" target="_blank" title="Dpi dellimmagine" rel="author" jpg_id="e7089dd6-4b1d-4b2a-b4a5-f2e2d1ee723d" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="8587a967-9e5c-4718-93af-a589b4b88daf" %}

Immessi questi dati finali il programma incominicerà ad elaborare l'immagine per creare i files:

{% include figure.html width="1200" caption="Il marker NFT comincia ad essere generato..." height="711" alt="NFT-Marker-Creator con la node app e inizio procedura" name="NFT_Marker_Creator_node_app_init_marker" target="_blank" title="Inizio procedura di creazione del marker NFT" rel="author" jpg_id="6e809a5d-004b-437f-9843-cd55cd82d86a" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="da39384a-eedd-4068-a130-e163c591b7c8" %}

In breve tempo il software genererà i files e vi chiedera di salvarli:

{% include figure.html width="1200" caption="Il marker NFT é stato generato!" height="711" alt="NFT-Marker-Creator con la node app - procedura completata" name="NFT_Marker_Creator_node_app_end" target="_blank" title="Fine procedura di creazione del marker NFT" rel="author" jpg_id="0a30be76-de1b-496c-8758-7eaad59ce51e" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="72d8b29b-dcf0-4ddf-b6e8-2771c863d882" %}

Alla fine viene mostrato anche il `confidence level` come per la web app.

### Risorse utili

wiki di NFT-Marker-Creator: https://github.com/Carnaux/NFT-Marker-Creator/wiki

Artoolkit-docs: web version [https://kalwalt.github.io/artoolkit-docs](https://kalwalt.github.io/artoolkit-docs/3_Marker_Training/marker_nft_training.html)

Artoolkit-docs: github repository <https://github.com/kalwalt/artoolkit-docs>

marker-nft-utilities: <https://github.com/kalwalt/artoolkit-docs/blob/master/3_Marker_Training/marker_nft_utilities.md>
