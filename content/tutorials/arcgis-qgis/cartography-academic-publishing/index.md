---
title: "Styling Maps for Academic Publishing in QGIS"
date: 2026-04-17
tags: ["qgis-hub"]
layout: single2
draft: false
description: This guide provides cartography tips for map making in QGIS to ensure legibility in grayscale / black-and-white printing by way of academic journal publishing standards. 
---

## Introductory resources

Please find the following go-to resources for getting started with styling a map:
* [QGIS Cartography, Stanford Geospatial Center](https://sites.google.com/stanford.edu/gis-cartography/workshops/maps-for-academic-journals) _This guide is a must-read if you are new to map design. It covers important concepts, especially that of **visual hierarchy**, and includes sets of useful instructional graphics._
* [Cartography Guide, Axis Maps](https://www.axismaps.com/guide) _This guide goes into more depth about important map design topics, such as why cartographers label maps or choose a projection in a certain way. You don't need to memorize this guide, but it can be helpful to understand the **why** behind cartographic principles._
* [ColorBrewer: Color Advice for Maps, Pennsylvania State University](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3) _This resource is useful for generating **reliable** color scales and testing against **colorblind**, **print**, and **photocopy** safety._

> ## Using this guide
> At the time of writing, [QGIS](https://qgis.org/download/) is in-between versions. Version 3.4 is the **long-term release** which means the features are more or less tried and true. Newer versions (e.g. v. 4), while with overall improved features, can often have bugs and functionalities that don't match expected behavior. Navigating the distance between different versions can result in guides with slightly differing instructions than your version of software. This can usually be resolved with a quick online search (e.g. "I can't find where to turn my labels into uppercase in QGIS"), but if you would appreciate additional troubleshooting support after trying on your own, please don't hesitate to [fill out our request support form](https://ask.library.harvard.edu/maps?_gl=1*1uxp7rt*_ga*ODE1NzM1NTExLjE3Njc2MzQzMTc.*_ga_3CXC97RWEK*czE3NzY0NDMyNTIkbzQzJGcxJHQxNzc2NDQzNjAwJGo2MCRsMCRoMA..). 

## Where to find terms used in this guide
> `Print Layout`
> `Natural Earth` 

## General rules of thumb

* Academic publishing has strict requirements: High contrast, legibility at small scales, and no reliance on color. Many readers print in grayscale or journals charge extra for color.

* For academic maps, less is more. Do not use Google Maps/Satellite imagery unless that style is the actual subject.


## Background

* Set your project background to white: `#ffffff`
    * **Option 1**: Set the `Canvas Background` (The Working Area). This changes the "paper" color you see while working in the main QGIS window.
        * Go to `Project` > `Properties`.
        * Select the `General` tab on the left sidebar.
        * Locate the `Background` color setting.
        * Click the `color` bar and set the hex code: `#ffffff`.
    * **Option 2**: Set the `Map Background` in the `Print Layout`. This ensures your final exported map has a clean white background.
        * Open your `Print Layout` window.
        * Select the `Map` item on your layout.
        * In the `Item Properties` panel on the right, scroll down to the `Background` section.
        * Ensure the box is `checked` and set the color to `#ffffff`.

## Water

* Water Bodies: Use a very light gray `#e0e0e0` or a subtle hatch pattern. Avoid blue.

* You don't technically *need* GIS data layers to represent water bodies, but it improves the aesthetics of the map. 
    * **Option 1**: If you want to opt out of using additional water data, you can set the background of the map to light gray from the `Print Layout`. 
        * In the `Print Layout`, click on the `Map`. In `Item Properties`, find the `Background` section.
        * Change the color from white to a very light gray `#f0f0f0` or `#e0e0e0`.
        * The problem with this method is that it doesn't show any inland water bodies, such as lakes or rivers. This will be fixed if you download ocean/lakes datasets.
    * **Option 2**: The professional standard for map making is to obtain data to represent water features. You can obtain this data on [Natural Earth](https://www.naturalearthdata.com/downloads/10m-physical-vectors/) by visiting the `Physical Vectors` section of the downloads page. 
        * Download [Ocean](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/physical/ne_10m_ocean.zip) and [Lakes + Reservoirs](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/physical/ne_10m_lakes.zip) datasets from Natural Earth. 
        * Place the ocean layer underneath any landmass data layers you have, e.g. countries.
            * **Styling option #1**: 
                * `Fill`: `#f2f2f2` _Almost white, but distinct._
                * `Stroke`: `No Pen` _You don't want a dark line around the ocean._
            * **Styling option #2**: You can also use a `Line Pattern Fill` to achieve subtle hatching with thin, light gray lines spaced widely apart. This signifies "water" without using color.
                * `Symbol layer type`: `Line Pattern Fill`
                * `Hatch color`: `#d0d0d0`
                * `Stroke`: `0.1 mm` or `0.05 mm`
                * `Rotation`: `45.0°`
                * `Spacing`: `3.0 mm`
                * `Base Fill (Optional)`: Beneath the lines, you may include a solid `Simple Fill` layer set to a very light gray `#f9f9f9` or white `#ffffff` to define the water's surface. Add a base fill by using the `Add symbol layer`, represented by a green plus sign to the right of the lines symbology widget, and the `Move down` button represented by a blue arrow to move it down below the hatching. 
                * **Lakes**: If you added a lake layer, you'll want to copy the same symbology you used for oceans. 
                    * Right-click the Oceans layer in the `Layer list` and select `Styles` > `Copy Style`, and then right-click the Lakes layer and select `Styles` > `Paste Style`.







> If something in this guide is not working as expected, please consider letting us know. Here is the link to the Harvard Map Collection's [support request form](https://ask.library.harvard.edu/maps?_gl=1*kcj41q*_ga*ODE1NzM1NTExLjE3Njc2MzQzMTc.*_ga_3CXC97RWEK*czE3NzY0NDE0MTYkbzQyJGcwJHQxNzc2NDQxNDE2JGo2MCRsMCRoMA..). We will get back to you promptly. 