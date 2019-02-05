---
layout: home
id: 01
title: Interactive art | Kalwalt official website for AR apps
permalink: /
section: home
description: Original website of Kalwalt alias Walter Perdan. In this website are stored all my augmented reality applications for interactive art.
lang: en
google_site_verification: j0ERzKxg-XSHmYaPullKXtZYYqOssFy-_e2SEjgpyhU
intro_paragraph: ''
---

## Painting, sculpture, drawing, interactive art and more...

{% assign path = 'assets/images/uploads/glitch_abstract_painting_interactive_art_augmented_reality_Walter_Perdan.jpg' %}
{% assign alt = 'Glitch - Interactive art - Abstract painting with augmented reality by Walter Perdan' %}
{% assign title = 'Glitch' %}
{% assign caption = 'Glitch, acrylic color on canvas, 70x50 cm, 2018.'%}

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
  {% if caption %}
  caption: {{ caption }}
  {% endif %}
{% endresponsive_image_block %}

I am Kalwalt alias Walter Perdan, i am an italian visual artist specialized in interactive art. My artistic research has a wide range, from painting, sculpture, drawing and, of course, interactive art.
I like to mix different languages and search connections between innovative media and traditional one. I love abstract and surreal art and some aspect of psicadelyc art. I believe in experimentation and this is a daily practice.
In this website you can find all my applications used for my interactive artworks [Read more about my life...](/about)

{% include fontawesome-menu.html %}
{% include parallax-image-window.html %}

## Introduction to my artistic research

<amp-youtube data-videoid="moG_76T_Jv0" layout="responsive" width="480" height="270"></amp-youtube>

I became to be really interested in interactive art when i graduated from the my first degree in painting at Academy of Fine Arts in Bologna. To be honest i was interested in computer science and informathics as i was a teenager, but during my first studies at Academy in fine arts i was interested to perceive the theme of ascension in the contemporary art. I explain this aspect in my official web page. As i said as i took my first degree i feel that i needed to find new possibilities and try new approach to art making. I started developing virtual worlds with game engines like OGRE but after i discovered augmented reality with ARToolkit and Openframeworks. This wasn't an easy path because they are based on C++ language. Even if Openframeworks has a lot of facilities it's not easy as Javascript and Html i think. So i discovered AR.js open source project and was my best decision. Developing with AR.js has a lot of advantages in terms of usability and cross code compatibilty. No worries about that kind of issue, simply your code will work on every operative system simply uploading an Html and some javascript files.

If you are interested, you will find more explanations in the artworks page. I wish you a good continuation of my site, and thanks for your attention!
