---
layout: post
title: Interactive art improvements and news
description: >-
  Some news on interactive art, web design and programming by kalwalt alias
  Walter Perdan.
author: Walter Perdan
date: '2019-02-20 14:02:55'
lang: en
seo:
  author: Walter Perdan
  datePublished: '2019-02-20'
  type: BlogPosting
image: 'https://ucarecdn.com/0deeb9ed-f632-4986-8c2d-725e0c8dec5c/'
intro_paragraph: 'Some news related to interactive art, web design and programming world.'
---
In this last month i was focused in the development of my two websites and to the development of the javascript library [jsartoolit5](https://github.com/artoolkitx/jsartoolkit5). I will explain better. I am a visual artist but i am interested in developing of application with augmented reality: you can found some informations for the intereactive part of my works in this [website](www.kalawaltart.it) and all my artworks ( not related to interactive art) are presented in my official website [www.walterperdan.com](https://www.walterperdan.com). As i said i worked on adding image responsive feature to my kalwaltart.it website; at the beggining i implemented the [jekyll-responsive-image](https://github.com/wildlyinaccurate/jekyll-responsive-image) plugin ( my site is a static site based on [Jekyll](https://jekyllrb.com/)), not bad but as i started to add .webp format i had some issue with the server because it hasn't the required imagemagick library supporting the .webp format. And also my github repository was getting bigger and bigger. For this reason i'm migrating to [uploadcare](https://uploadcare.com) services: That is a service company that provide a CDN where to store your images. You upload your images to the uploadcare server and you past a link in your **< img >** tag:

```
<img src="https://ucarecdn.com/0deeb9ed-f632-4986-8c2d-725e0c8dec5c/">
```

The benefit of this approach is:

* less stress for the hosting server (at least with jekyll and imagemagick)
* the github repository will be lighter, because you will not store anymore any images.

I will use this service also for my other website, but, for this, i slowly migrating to a "Gatsbyjs" system. [Gatsby.js](https://www.gatsbyjs.org) is an plugin ecosystem based primarly on React. I am learning both, but it seems very promising. [React](https://reactjs.org) main characteristic is the use of Virtual DOM and the Component architecture. I will inform you of my progress...

In these days i spent also my time to improve the [Jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5) library. I would add the NFT ( Natural Feature Tracking ) , that is a markerless approach for the augmented reality applications. To be honest there is already a [NFT branch](https://github.com/artoolkitx/jsartoolkit5/tree/nft) but the problem is the slow performances in fps terms and it is very old it require an update.
