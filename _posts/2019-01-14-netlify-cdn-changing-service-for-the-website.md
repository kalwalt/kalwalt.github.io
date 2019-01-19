---
layout: post
title: 'Netlify CDN Changing service for the website'
description: "In this post i explain why i switched to Netlify for my website www.kalwaltart.it, for his CDN and other services. Article by Kalwalt alias Walter Perdan."
author: walter_perdan
date: '2019-01-14 18:01:58'
lang: en
seo:
  type: BlogPosting
  author: Walter Perdan
  datePublished: date
image: /assets/images/uploads/Noise_abstract_painting_augmented_reality_Walter_Perdan.jpg
intro_paragraph: ''
---
{% assign path = 'assets/images/uploads/Noise_abstract_painting_augmented_reality_Walter_Perdan.jpg' %}
{% assign alt = 'Noise (Mon cher Mondrian) interactive acrylic painting made with Ar.js by Walter Perdan.' %}
{% assign title = 'Noise (Mon cher Mondrian)' %}

{% responsive_image_block %}
  path: {{ path }}
  alt: {{ alt }}
  sizes:
   - width: 1200
   - width: 720
   - width: 600
   - width: 480
   - width: 320
  {% if title %}
  title: {{ title }}
  {% endif %}
{% endresponsive_image_block %}

<a href="https://www.walterperdan.com/en/artworks/painting/2018/painting/noise-abstract-art">Noise (Mon cher Mondrian)</a>

I decided to change hosting for my website [www.kalwaltart.it](https://www.kalwaltart.it) . I found that [Netlify](https://www.netlify.com) has a lot of interesting features. Visually will not change a lot but for sure my website will gain in speed and performance. These are the features that make very appealing Netlify:

* it has his own CDN network.
* it has a CMS system for many static generators.
* it has the ability to inject script code and his form content.
* it is possible to change http headers.
* you can create a post or a page without code to much, because it is based on markdown language.
* it is free! but has also pro plans...

I created also another website [walterperdan.netlify.com](https://walterperdan.netlify.com): i will use for testing Netlify and maybe in a future switch my official page [www.walterperdan.com](https://www.walterperdan.com) to the Netlify service.

In my official portal **www.walterperdan.com** are presented most of my artworks of painting, sculpture, performance and all my art. You can found also my biography, my statement and other informations.  It is built with Joomla CMS, but maybe i could switch to Jekyll static generator thanks to the [import.jekyllrb.com/](https://import.jekyllrb.com/), but this is is a long term project...

In this period i am working again on wood sculpture, making some paper collage and continuing on interactive art with Artivive software. I hope also to develop other AR.js artworks in the near future....
