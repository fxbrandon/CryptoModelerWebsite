---
# Aquí diligencias los campos title, description, category, tags, h1, hero, altheader, img1, img2, img3, autor y date
layout: articulo
language: es
handle: /test-article
# Aquí va el title para SEO
title: Artículo de prueba
#Recuerda que la descripción debe incluir las keywords hacia el comienzo de la oración
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem
category: Crypto-News
tags: [Crypto, Bitcoin]
# Procura que el h1 sea diferente al title
h1: Este es el artículo de prueba
# Aquí agregas la imagen principal del artículo
hero: header.jpg
# Aquí va el atributo alt de la imagen principal o hero
altheader: Lorem ipsum dolor sit amet
# Recuerda que aquí la cantidad de imágenes depende de las imágenes que lleva el artículo. Si solo lleva 1 imagen, debes agregar la imagen en la carpeta img, y poner solo el nombre de la imagen aquí con su extensión. La ruta ya está programada en el código de la imagen que está en el contenido.
img1: app-home.jpg
img2: bg-cryptos-min.webp
img3: workflows-crypto.webp
autor: Crypto Modeler
copyright: Crypto Modeler
excerpt_separator: <!-- excerpt -->
date: 2022-03-26
---

Crypto Modeler loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem

<!-- excerpt -->

<!-- Este es el código para insertar imágenes. La sección que dice Alt text es para el atributo Alt. Luego puedes cambiar la sección que dice title text para agregar un título a tu imagen. No debes cambiar nada más. Solo recuerda que si aquí dice "img1" debes poner el nombre de la imagen en el frontmatter con la variable img1:nombre de la imagen -->
![Alt text]({{site.baseurl}}/img/{{page.img2}} "title text")

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

{% include cta.html %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

![Alt text]({{site.baseurl}}/img/{{page.img3}} "title text")

>lorem ipsum dolor si amet consectetur

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.
