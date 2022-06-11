---
# Aquí diligencias los campos title, description, category, tags, h1, hero, altheader, img1, img2, img3, autor y date
layout: articulo
# Los comentarios y artículos en inglés siempre llevan la palabra reservada "es"
language: es
# La variable handle debe ser igual en las 2 versiones, en inglés y en español.
handle: /test-comment
# Aquí va el title para SEO
title: Artículo de prueba
#Recuerda que la descripción debe incluir las keywords hacia el comienzo de la oración
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem
# Agrega la categoría Crypto-News si es una noticia. Si es un artículo escoge el nombre.
category: Cryptomodeler
tags: [Crypto, Bitcoin]
# Agrega una url si es solo un comentario. Si es un artículo, agrega la palabra reservada "false"
link: https://es.cointelegraph.com/news/btc-price-approaches-32k-as-analyst-warns-of-boring-summer-for-bitcoin
# Procura que el h1 sea diferente al title. Si es un comentario, lo agregas aquí. Si es un artículo, agregas el título del artículo.
h1: El mercado se está recuperando. Entonces, este es el momento de invertir. No pierdas esta valiosa oportunidad.
# Aquí agregas la imagen principal del artículo o del comentario
hero: articulos/articulo-1.jpg
# Aquí va el atributo alt de la imagen principal o hero
altheader: Imagen del mercado bursátil recuperándose
# Recuerda que aquí la cantidad de imágenes depende de las imágenes que lleva el artículo. Si solo lleva 1 imagen, debes agregar la imagen en la carpeta img, y poner solo el nombre de la imagen aquí con su extensión. La ruta ya está programada en el código de la imagen que está en el contenido.
img1: articulo-1.jpg
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
![Alt text]({{site.baseurl}}/img/articulos/{{page.img1}} "title text")

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

{% include cta.html %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

![Alt text]({{site.baseurl}}/img/{{page.img3}} "title text")

>lorem ipsum dolor si amet consectetur

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis commodi voluptatem fuga voluptates porro! Perferendis, fuga.
