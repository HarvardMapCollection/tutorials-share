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
> `Natural Earth` → While you may have data you have created or obtained elsewhere, you will likely need background or cartographic data layers to make your map more legible. [Natural Earth](https://www.naturalearthdata.com/) is a great source for open cartography data.

> `Print Layout` → While much of the individual layer styling will occur in the `Layer Properties` from the main QGIS project window, a good portion of the map design will happen in QGIS' `Print Layout`. You can access this facet of QGIS by navigating in the top menu `Project` → `New Print Layout`. You will be prompted to enter a name for your map; this simply refers to what the image you end up exporting will be called as a filename (e.g. if you name your map "map", the filename will be called `map.png` or `map.pdf`). It is highly recommended to become briefly acquainted with the different elements of the QGIS `Print Layout` before starting your mapping. Here is a YouTube video that is under 3 minutes about the print layout: [A quick guide to setting up a Print Layout in QGIS](https://www.youtube.com/watch?v=ojRrIZ0M8o4). 

## General rules of thumb

* Academic publishing has strict requirements: High contrast, legibility at small scales, and no reliance on color. Many readers print in grayscale or journals charge extra for color.
* For academic maps, less is more. Do not use Google Maps/Satellite imagery unless that style is the actual subject.
* Journals often compress images. Colors that look different to you may look identical when desaturated.
* If categorizing data, use no more than 3-4 shades of gray. If you need more categories, use patterns, e.g. use a solid light gray for "Category A" and a diagonal line pattern for "Category B."
* **Line Widths**:
    * Primary boundaries: `0.3 mm`
    * Secondary boundaries/Roads: `0.1 mm`
* **The Scale Bar**: Use the "Line Ticks Up/Down" style (avoid zebra blocks, which can appear too heavy).
* **North Arrows**: Avoid decorative roses. If you want to include one, a simple arrow is sufficient.
* **The Frame**: Add a simple black frame `0.2 mm` around the map item in the `Print Layout`.
* **The Squint Test**: Squint at your map. If you can't tell the difference between two layers, a reader won't be able to either.
* **Aspect Ratios**: Academic journals usually have specific widths (e.g., 3.5 inches for single column, 7 inches for double). Set `Page Size` in the `Print Layout` to the exact dimensions the journal requests before you start styling.

## Centering the map 

* Academic journals usually have strict size limits. You will want to gain facility with displaying important areas at the right scale/size.
* Your study area should occupy at least 70-80% of the map frame.
* From the vertical toolbar in the `Print Layout` you will find the `Select` tool, which is represented by a standard white arrow. This moves the "box" around the page.
* You will also find the `Move Item Content` tool, which is represented by a blue map with a four-way arrow inside it. Once this tool is engaged, you can click and drag inside the map to pan (re-center the world).
* Technically, if you have the `Move Item Content` tool engaged, you are able to zoom in and out of the map to adjust the `Scale`. You can achieve this on by holding the `Ctrl` key (or `Command` on Mac) and scroll the mouse wheel while the tool is active.
* The scroll approach to adjustment of scale, however, can be quite finnicky, and you also might not always have a mouse! A more precise way is to use the sidebar to set scale.
    * Click on the map in the layout using the `Select` tool.
    * On the right-hand side, look for the `Item Properties` tab.
    * Find the `Scale` box.
        * A _smaller_ number means you are zoomed _in_ further, e.g. If the scale is `100,000,000`, try changing it to `40,000,000` to zoom into a specific continent.
* Above the `Scale` box in the `Item Properties` there are icons that let you set the QGIS map project canvas to match the scale of the map in the `Print Layout` and vice versa.
* You can show at least one area of neighboring countries/water bodies around your target area so a reader can orient themselves.
* **Inset Maps**: If you need to show two far-apart places, you can use two map frames or an `Inset Map`. 
* **Locator Maps**: If you want to give more geographic context about where in the world your map data is situated, you can add a locator map. 
* Steps for adding `Inset` or `Locator` maps in the QGIS `Print Layout` are included in the Stanford Geospatial Center [QGIS Cartography guide](https://sites.google.com/stanford.edu/gis-cartography/workshops/maps-for-academic-journals) included in the introductory resources section at the top of this page. 

## Choosing a projection

> QGIS defaults to using Mercator (EPSG: 4326), but you should probably **avoid using Mercator** for your map. While this is a common style you will recognize from Google Maps, it's known to warp continents in ways that misrepresent size and imply bias. Also, there are generally usually more attractive projections available to you, depending on which region of the world you're representing.

* If you click the `Coordinate Reference System` box at the bottom of the **QGIS project canvas** (it is likely to display `EPSG: 4326`), this will open a widget that allows you to search for other projections.
* A good way to start choosing a projection is to ask yourself "What am I measuring?":
    * If you're creating a **global reference map**, you can choose `World_Robinson` or `World_Winkel_Tripel_NGS`. These don't perfectly preserve area or shape, but they look right to the human eye.
    * If you are **comparing the size or density** (e.g. choropleth) of regions, choose an Mollweide or Albers Equal Area projection for the region you are studying, such as `World_Mollweide` or `Europe_Albers_Equal_Area`. 
    * If you are showing a **specific continent or country**, you can choose a localized UTM Zone or State Plane. Because they're focused so locally, there is way less distortion. Search in the widget for specific places.
* Don't be afraid to search online for help selecting a projection. GIS forums or search results will give you EPSG codes you can apply in the QGIS `Coordinate Reference System` widget.


## Canvas background

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

## Land mass

* Use Natural Earth data (1:10m or 1:50m) for country/state outlines.
    * Landmass: `#f2f2f2` _No fill, or a very light gray._
    * Borders: `#636363` _Dark gray._
* **Selected polygons**: If you have particular polygons you want to call out or draw attention to, you can style them differently than the background landmass features.
    * **Option 1 double-encode**: In academic cartography, you can "double-encode" information so it works even if the print quality is poor. Identify callout polygons by both their `Fill` and their `Outline`.
        * `Fill Style`: `#b3b3b3` 
        * `Stroke Color`: `#000000` 
        * `Stroke Width`: `0.3 mm`
        * **Contrast**: Keep the background polygon layer outline at `0.1 mm` and a light gray `#cccccc`. This makes the selected polygons stand out.
    * **Option 2 adding subtle texture**: The "Stipple" effect makes polygons look distinct.
        * From `Symbology` you should see `Simple Fill` in the box. Click `Add symbol layer`, represented by a green plus sign button at the top right of that box to add a second layer.
        * Click on the bottom `Simple Fill` in the tree.
            * `Fill color`: `#f2f2f2` 
            * `Stroke color`: `#000000` 
            * `Stroke width`: `0.3 mm`
        * Click on the top `Simple Fill` in the tree.
            * `Symbol layer type`: Change this from `Simple Fill` to `Point Pattern Fill`
            * `Distance X and Y`: Set both to `2.0 mm`
            * `Displacement X`: `1.0 mm`
        * Click on `Simple Marker` nested inside the `Point Pattern Fill`
            * `Size`: `0.2 mm` 
            * `Fill color`: `#000000`
            * `Stroke style`: `No Pen`

## Typography and labels

* Use a standard Sans-Serif (Arial, Helvetica, or Roboto). They remain legible even when the map is shrunk to a single-column width in a PDF.
* For font size, never go below `6pt`. Aim for `8pt` for general labels.
* Use label buffers:
    * **Size**: `0.7 mm`
    * **Color**: `White` _This creates a tiny "halo" so text remains readable when it crosses lines or borders._
    * **Target Countries**: `8pt` or `9pt`, and `BOLD CAPS`. _Caps are found under `Labels` sub-menu `Formatting`. Under `Type Case` select `All uppercase`._
    * **Water Bodies**: Use *Italics*, `7pt` or `8pt`, `#555555` or `#454545`.
* Use the `Move Label` tool in the `QGIS Label Toolbar` to manually move names so they don't overlap important features.
* For small regions, enable `Callouts` in the `Labels tab`. This will draw a neat "leader line" from text back to the feature.



## Advanced map design

If you have facility with Adobe Illustrator, you can export your GIS map layers from QGIS into a format that will open in Illustrator and preserve the layer relationships. From the `Print Layout` select `Layout` from the top menu. You can choose to export your map data as either `SVG` or `PDF`. Check `Export labels as paths` (if you don't have the font) or `Export labels as text objects` (if you want to edit them).

## Contracting a cartographer

If you are looking for even more professional-looking maps, or have limited bandwidth to try your own hand at map making, don't worry, you have options. The North American Cartographic Information Society, or NACIS, maintains an up-to-date [list of professional cartography companies](https://nacis.org/our-society/companies/) or independent map makers. Peruse this list, check out the designs on the portfolio pages, and you might find a style of cartographer you want to hire. You might also consider NACIS' [list of University cartography labs](https://nacis.org/our-society/university-labs/). Schools with cartography programs often have talented students looking to build their portfolios and gain experience. 


## Additional support
Thank you for reading this guide! If any features are not working as expected, please consider letting us know. Here is the link to the Harvard Map Collection's [support request form](https://ask.library.harvard.edu/maps?_gl=1*kcj41q*_ga*ODE1NzM1NTExLjE3Njc2MzQzMTc.*_ga_3CXC97RWEK*czE3NzY0NDE0MTYkbzQyJGcwJHQxNzc2NDQxNDE2JGo2MCRsMCRoMA..). We aim to get back to you promptly. 