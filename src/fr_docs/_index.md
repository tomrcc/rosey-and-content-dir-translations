---
_schema: page
permalink: /fr/docs/
title: Commencer
layout: layouts/page.html
eleventyNavigation:
  key: Commencer
  order: 1
tags: page
SEO_options:
  title:
  image:
  description:
draft: false
---
Pour créer un nouveau site Alto et le déployer immédiatement sur CloudCannon, cliquez <a href="https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/alto-eleventy-template" target="_blank" rel="noopener">ici</a>.

## Création de nouvelles pages du site

Dans ce guide, nous allons prendre un exemple&nbsp;: créer une nouvelle documentation sur Alto dans CloudCannon et vérifier qu'elle s'affiche au bon endroit dans votre barre de navigation.

La navigation dans Alto est gérée par les pages d'accueil d'Eleventy, facilement modifiables <a href="https://cloudcannon.com/documentation/articles/introducing-the-data-editor/" target="_blank" rel="noopener">dans l'éditeur</a> de données de CloudCannon.

The site side-navigation only supports one level of nesting, and is configured via the `eleventyNavigation` front matter.

La navigation latérale du site ne prend en charge qu'un seul niveau d'imbrication et est configurée via la page d'accueil `eleventyNavigation`.

Les groupes de niveau supérieur (balises&nbsp;: 'page') sont classés par `order` d'apparition après le tri de toutes les pages. Réduire le poids d'une page peut déplacer la `eleventyNavigation` de cette page vers le haut de la hiérarchie.

Les pages peuvent être placées en dehors d'un groupe (à côté de la page d'accueil) en leur attribuant les `tags` de la `page`.

{% figure "/assets/images/uploads/screenshot-2023-12-21-at-12.08.25-pm.png" "" "alt" "" "#link" "target" "rel" "" "attrlink" "className" "300" "200" %}