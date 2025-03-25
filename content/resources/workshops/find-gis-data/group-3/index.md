---
title: Group 3 [Georeferencing]
date: 2024-08-11
layout: single2
image: cover.png
description: Understand the value of georeferenced maps and how to start using them in a GIS project. 
---

## Objectives

- Understand why georeferenced maps can be useful when asking and answering spatial questions
- Understand how to find georeferenced maps to use in a GIS project
- Find out how to take next steps in using information from paper maps in a GIS project
## 10 minutes to get started

### Example of using georeferenced maps

> 1. Visit [Atlascope.org](https://www.atlascope.org/), search for a place in Boston or Cambridge you are interested in exploring on a historical map, and experiment with toggling between different georeferenced map layers.

### How to find georeferenced maps to use in a project

> 2. Visit the [Harvard Geospatial Library (HGL)](https://hgl.harvard.edu/?_gl=1*1y0xlw4*_ga*NTcxOTEzNDcyLjE3MjE4NTI2NzQ.*_ga_3CXC97RWEK*MTcyNDQzNTUyMC4yNy4wLjE3MjQ0MzU1MjAuNjAuMC4w).

![HGL Search](hgl-search.png)

> 3. Click the `Search` button.

> 4. In the left-hand side facets, under `Format` choose `GeoTIFF`. Under `Access`, choose `Public`. You can further filter results by the `Institution` which holds the source, the `Place` it depicts, or you can use the `Search Bar` to further refine results. 

> 5. Choose a result, and click `Click to Wake` on the map, to see a preview of the georeferenced image.

> 6. Notice on the page where to download the `.geoTIFF`, so that you could bring the file into your GIS project.


## Follow-up resources (next steps)

If you have additional time, or would like to get started working with information from paper maps in your GIS project, you can use these step-by-step guides:
1. [How to select a map to georeference](https://mapping.share.library.harvard.edu/tutorials/georeferencing/selecting-a-map/)
2. [How to georeference a map in QGIS](https://mapping.share.library.harvard.edu/tutorials/georeferencing/qgis/)
3. [How to vectorize information from georeferenced maps](https://mapping.share.library.harvard.edu/tutorials/qgis/adler/)

## Discussion questions


1. How do you think using georeferenced maps such as the ones overlaid in the Atlascope tool can help us ask and answer spatial questions?
2. What are some other examples of information one might be able to find in paper maps that could be useful in a project, if georeferenced?
3. What are some ways to get started finding georeferenced maps to use in a GIS project?
4. Prepare to present any demos which could help communicate these takeaways.

5. Did you find anything surprising or interesting in the follow-up resources?
6. When faceting by `FORMAT`, why do you think we select `GeoTIFF` instead of `Shapefile`? How might working with raster vs. vector data impact how we approach looking for datasets?


--- 

## In class
- Get a feel for what georeferencing is and why it’s useful (layering old maps on new maps) by searching for a few Boston/Cambridge addresses in Atlascope
- Search HGL on `Institution = Harvard` and `Format = GeoTIFF` to see which maps are already GIS layers. Click on some results, choose `click to wake` to see the georeferenced map layer. Notice the `Download GeoTIFF` button which gives a file that will work in QGIS.


## Demo and explore more

### Sample data
You can download and explore sample datasets related to this activity from the workshop data homepage, hosted on the Open Science Framework (OSF.io)
> 1. Visit the [workshop data homepage](https://osf.io/exnyg). 

> 2. Click the three vertical dots icon and select `Download`.
![OSF data download page](../media/download.png)

> 3. The folder that downloads to your computer contains sample data from all the workshop activities. It is a zipped or compressed file. In order to use it, you will have to `double-click` it on Mac or `right-click` → `Extract` or `Uncompress` on a PC. 

<div class="alert-success">
<p>4. The sample data for this activity, <strong>Activity 3</strong> is in the folder <code>activity3_georeferencing</code>. In this folder you will find the following files:
</p>
<ul>
<li><code>G7625_1897_W2.tif</code>, a georeferenced TIFF image of the <a href="https://id.lib.harvard.edu/alma/990126040650203941/catalog">Afghanistan-Pakistan Border Region, 1897</a>.</li>
</ul>
</div>


### Follow-along steps

- Search HOLLIS for MA maps filtering `In Library` and `Harvard Map Collection`
- Page 4 or [**`Map of Massachusetts : exhibiting the Representative, Senatorial and Councillor districts`](https://hollis.harvard.edu/primo-explore/fulldisplay?docid=01HVD_ALMA212094551850003941&context=L&vid=HVD2&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=books&query=any%2Ccontains%2Cmassachusetts&facet=library%2Cinclude%2Cmap&facet=searchcreationdate%2Cinclude%2C1800%7C%2C%7C1950&offset=30)** noting `ONLINE ACCESS`
- Georeference in AllMaps and show as a layer in QGIS
- All of the steps in the demo can be replicated using two guides:
    - How to find a map in HMC ; How to georeference collections with Allmaps
- If the scanned image of the map is not streaming online via HOLLIS, you will need to obtain a hard copy of the image on your computer and use QGIS to georeference it:
    - Make an appointment ; Georeference with QGIS



