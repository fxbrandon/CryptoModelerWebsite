---
layout: docs
title: Documento sobre la sección noticias
h1: ¿Cómo agregar noticias en crytomodeler.app?
language: en
handle: /documentos
description: Documentación del sitio cryptomodeler.app
noindex: true
---
La documentación presente tiene el propósito de facilitar el uso del sitio cryptomodeler.app. Cada subtema es uno de los principales pilares del uso de esta valiosa herramienta en tu emprendimiento. ¡Comencemos!

## Cómo agregar noticias

La sección de noticias fue diseñada para agregar pequeñas referencias sobre el mundo de las criptomonedas. Algunas de estas noticias dirigen a otras páginas web. Otras dirigirán a páginas del mismo sitio web.

### Agregar una noticia con enlace externo

Para hacer referencia a una noticia externa solo debes dirigirte a los siguientes archivos:

_data/news.yml
_data/noticias.yml

En estos archivos, encontrarás la información que se publica organizada en variables en formato json. **Para agregar una nueva noticia solo es necesario repetir las variables. O en otras palabras, copiar y pegar. Finalmente, debes reemplazar la información de cada variable**.

Por ejemplo, en la variable *title*, cambia el título según la noticia. En la variable *text*, agrega el comentario. En la variable *img*, escribe el nombre de la imagen de la noticia con su respectiva extención jpg, png o webp. En la variable *date*, escribe la fecha de ingreso de la noticia. Y finalmente, en la variable *link*, pones el sitio web que es fuente y enlace de esta noticia.

#### Así quedaría una noticia en el archivo

```json
- title: Título ejemplo
  text: Comentario de ejemplo para esta noticia tan importante.
  img: nombre-de-imagen.png
  date: 01/01/2022
  link: https://paginaweb.com
```

Siempre que agregues una noticia recuerda lo siguiente:

* Cada noticia comienza con el símbolo "-".
* Debes respetar la indexación de cada variable
* Entre cada noticia debe haber un espacio o salto de línea.
* Cada variable recibe su valor después de los 2 puntos ":".
* Si el valor de una variable incluye símbolos que cause problemas al renderizar la noticia en la página - que no es común que suceda -, solo debes convertir el contenido en un string. Para esto, incluye el texto dentro de comillas.

¡Importante! La noticia debe **agregarse en los archivos de los 2 idiomas** con sus respectivas traducciones

## Cómo agregar un artículo

Los artículos contienen información más extensa y completa en el sitio web. Estos se generan en las carpetas *_posts/*, tanto de la sección principal en inglés, como de la subcarpeta posts de la carpeta principal con el contenido en español, *_es/*.

Para agregar un artículo nuevo debes copiar y pegar un archivo de la carpeta posts. De esta manera puedes conservar el frontmatter predeterminado para los artículos. Esta sección es la información contenida en variables al comienzo del archivo.

### Modificar el nombre de los artículos

Para comenzar, el nombre del archivo de cada artículo se modificará así:

* Debe llevar la fecha de la modificación del artículo en el orden año, mes y día. Luego sigue el nombre del archivo con la extensión .md
* No puede tener espacios. Cada espacio se representa con el símbolo "-"

Debes tener en cuenta que **el nombre del archivo es exatamente igual a la url del artículo**. Por esta razón, si tienes un artículo que se llama "Este es un artículo de ejemplo", y quieres que la url sea "articulo-ejemplo", el nombre del archivo será el siguiente: **2022-01-01-articulo-ejemplo.md.**

### Modificar las variables del frontmatter

Las variables de cada artículo están diseñadas para que utilice la información dentro del contenido, para generar o no contenido en el renderizado y para posicionar con el SEO onpage de tu información.

Teniendo esto presente, antes de cada variable del frontmatter he agregado comentarios que te facilitarán la tarea. Solo lee atentamente que debe ir en cada una de las variables hasta que ya te acostumbres a diligenciarlas. En la siguiente sección te explico como funciona cada una.

#### Variables del frontmatter

**layout: articulo**. Esta variable nunca se modifica, pues indica cuál es el diseño html que sigue el artículo.

**language: es**. Los artículos en español siempre llevan la palabra reservada "es". En inglés la palabra reservada "en".

**handle: /test-comment** La variable handle debe ser igual en las 2 versiones, tanto en inglés y en español. Esta variable es un identificador que le dice al código cuál es el artículo correspondiente en los 2 idiomas.

**title: Artículo de prueba** # Aquí va el meta title para SEO.

**description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit ex sequi mollitia harum consequuntur iusto, nobis** Esta es la meta description para SEO. Recuerda que la descripción debe incluir las keywords hacia el comienzo de la oración.

**category: Cryptomodeler** Agrega la categoría a la que corresponde el artículo. Planea muy bien la estructura de tu blog para no agregar categorías de manera indiscriminada.

**tags: [Crypto, Bitcoin]** Agrega los tags a los que corresponda el artículo. Planea muy bien la estructura de tu blog para no agregar tags de manera indiscriminada.

**h1: El mercado se está recuperando. Entonces, este es el momento de invertir** Aquí va el título del artículo. Procura que el h1 sea diferente al title.

**hero: articulos/articulo-1.jpg** Aquí agregas el nombre de la imagen principal del artículo o del comentario. Nota que la sección "articulos/" hace referencia a la carpeta que contiene la imagen. Si la carpeta cambia, debes incluir el enlace a la carpeta. Ejemplo: si dentro de "_articulos/" creas una carpeta llamada "_bitcoin/", entonces el enlace a la imagen sería así: "articulos/bitcoin/nombre-imagen.jpg". La extensión de la imagen puede ser jpg, png o webp.

**altheader: Imagen del mercado bursátil recuperándose** Aquí va el atributo alt de la imagen principal o hero

**img1: articulo-1.jpg - img2: bg-cryptos-min.webp - img3: workflows-crypto.webp** Recuerda que aquí la cantidad de variables (img1, img2, img3, img4, img5, etc) depende de la cantidad de imágenes que lleva el nuevo artículo. Primero, debes agregar la imagen en la carpeta img. Luego pones el nombre de esa imagen en estas variables con su extensión. Finalmente, agregas la imagen en el contenido del artículo como se explica más adelante.

**autor: Crypto Modeler**. Aquí va el autor del artículo

**copyright: Crypto Modeler** Esta variable es para el meta author y el author de las redes sociales.

**excerpt_separator:** El código ```<!-- excerpt -->``` es un separador. No se debe modificar.

**date: 2022-03-26** La fecha de publicación del artículo.

### Redactar el artículo

Cuando ya tengas las variables listas, puedes comenzar a redactar la información del artículo. Esta información es la que aparece después de la división marcada por 3 guiones "---".

El primer párrafo es un texto corto, llamativo, concreto y activo. Este aparece antes de la separación ```<!-- excerpt -->```. Nunca debes borrar esta separación.

Luego de la separación va el resto de la información. **Recuerda que la información debe escribirse en formato markdown**. En internet encuentras muchos tutoriales sobre este sencillo y práctico lenguaje de marcado.

#### Agregar imágenes en el contenido

Para agregar una imagen debes tener en cuenta 2 cosas. La primera son las variables que agregaste en el frontmatter del artículo (img1, img2, img3, img4, etc). Y la segunda es que donde vaya una imagen, debes utilizar siempre el siguiente código:

**\!\[Alt text](\{\{site.baseurl}}/img/\{\{page.img2}} "title text")**.

**Alt text** Aquí va el texto alternativo de la imagen para la accesibilidad del contenido.

**\{\{site.baseurl}}/img/\{\{page.img2}}** De esta línea solo se puede modificar la variable img. Aquí es donde cobra importancia las variables antes mencionadas. En este ejemplo se está utilizando la imagen número 2. Por lo tanto, según la imagen que corresponda en el artículo, así es la variable de esta línea. No se debe modificar ni los símbolos ni ninguna otra palabra.

**title text** Este title es la leyenda que aparece al hacer hover en la imagen.

### Llamados a la acción

Con el código **\{ % include cta.html %}** puedes incluir llamados a la acción para descargar la app en medio de los artículos. (para poder mostrar el código en esta línea, tuve que incluir un espacio entre la primera llave y el porcentaje. Recuerda quitar ese espacio)

### Comentarios o blockquotes

Con el símbolo ">" puedes incluir comentarios o citas en medio del artículo. Por ejemplo:

>Así se vería un comentario en los artículos

### Traducir el artículo

Recuerda que el artículo debe traducirse manualmente. Luego de tener la traducción, debes guardar cada artículo con sus respectivas variables y en la carpeta que corresponda. Recuerda las notas sobre las variables de idioma y de identificador, para que se renderice de forma correcta.
