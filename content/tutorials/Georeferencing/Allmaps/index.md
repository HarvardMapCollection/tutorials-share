---
title: Georeference library digital collections using Allmaps
date: 2023-01-19
tags: ["tutorials","georeferencing", "allmaps"]
image: 4.png
layout: single2
description: Learn how to use AllMaps to georeference Harvard Library Digital Collections items in the browser, to use in GIS and map making projects.
---

## Topics covered by this guide

 - Select a map to georeference from the Harvard Libraries' digital collections
 - Repeat the process for maps in any library digital collection
 - Learn how to georeference with free browser tool, [AllMaps](https://allmaps.org/)
 - How to use the georeferenced map with the rest of your project

## Select a map to georeference from the Harvard Libraries' digital collections

1. If you visit the Harvard Library catalog, [HOLLIS](https://hollis.harvard.edu/primo-explore/search?query=any,contains,map%20cambridge&tab=books&search_scope=default_scope&vid=HVD2&facet=library,include,map&lang=en_US&offset=0), you can:

- Change the initial search drop-down from `Catalog & Articles` to `Library Catalog` to show only items held by the library, and exclude journal articles.
- Scroll down to the `Location` filter on the right, and filter by `Harvard Map Collection`

You'll notice that some of the maps from the Harvard Map Collection have been scanned and added to the catalog record, so that you can view the map in high-resolution online from a link in the catalog that says `ONLINE ACCESS`.

2. Select `ONLINE ACCESS`. 

3. In the top-right corner of the Harvard Library image viewer, select the metadata Tooltip by clicking the `i` icon.
![Digital collections image viewer with a red box around the metadata Tooltip represented by an i icon in the upper-right corner](media/1.png)

4. Scroll to the bottom of the popup window and under `Links → Manifest`, copy the manifest URL.

<div class="alert-success">
<h3>Example IIIF Manifest</h3>
<ul>
<li><a href="https://iiif.lib.harvard.edu/manifests/ids:12216977">https://iiif.lib.harvard.edu/manifests/ids:12216977</a></li>
<li>If the map you are interested has not been scanned, you are working with a multi-page book, or otherwise need help finding the manifest URL, contact us at <strong>maps@harvard.edu</strong>.</li>
</ul>
<img src="media/2.png" alt="Digital colletions image viewer with metadata tooltip open, showing a highlighted manifest URL">
</div>

5. Navigate to the [AllMaps.org Editor](https://editor.allmaps.org/#/)
<div class="alert-success">AllMaps is a free, open-source software for georeferencing maps in the browser.</div>

6. Paste the map's IIIF manifest URL into the input box and select `Load`. 
![Screenshot of the AllMaps.org editor input box with the map manifest URL pasted in.](media/3.png)


## Learn how to georeference with free browser tool, AllMaps

Use the `georeference` tab to assign control points between the map on the left, and the baselayer on the right. Start with at least three control points, evenly distributed at equidistant spots around the map. You can add a few more, for more specificity. Click the `results` tab to check the results. 
![Screenshot of a map being georeferenced in the AllMaps editor.](media/4.png)

<div class="alert-danger">
Right now, AllMaps works best for larger-scale maps, or maps that show a smaller area, in more detail. If you need more robust transformations for small-scale maps, you might try one of our <a href="https://mapping.share.library.harvard.edu/tags/georeferencing/">other georeferencing guides</a>. <a href="http://www.geo.hunter.cuny.edu/~jochen/gtech361/lectures/lecture02/concepts/04%20Understanding%20map%20scale.html#:~:text=You%20will%20commonly%20see%20references,large%20area%20in%20less%20detail.">Learn the difference between small and large scale maps.</a>
</div>

## How to use the georeferenced map with the rest of your project

Once you have finished georeferencing your map in AllMaps, click the `Results` tab. AllMaps is now hosting your georeferenced map as a GIS web layer you can use in any project. All you will need is the layer link. You can find it on the `Results` page:
![Allmaps layer link](media/allmaps-tiles-link.png)


## Add the layer to a QGIS project

1. Open QGIS. If you need to download the free desktop software, learn how to do so [here](https://harvardmapcollection.github.io/tutorials/qgis/download/).

2. Open a new project.

3. In the `Browser` window, under `XYZ Tiles` drag `OpenStreetMap` into the map canvas window.
![GIF of adding a basemap to QGIS](media/add.gif)

4. In the `Browser` window, right-click `XYZ Tiles` and select `New Connection`.
![Screenshot of QGIS browser menu](media/7.png)

5. Name your map, and paste in tile URL you copied from the AllMaps `Results` panel. Select `OK`. 
![Screenshot of QGIS New XYZ Tile Connection menu](media/8.png)

6. In the `Browser` window, under `XYZ Tiles`, double-click the new connection item you just created to add it to the map. 

7. Zoom in to your area of interest using the zoom controls in the banner menu across the top of the program. As you zoom in, your georeferenced map should appear. 
> Tip: it may take a second for the quality of the tiles to resolve.
![GIF of zooming in on the map](media/zoom.gif)

8. To adjust opacity of your map, right-click the map layer in the `Layer list` and select `Properties`.
![Screenshot of opening layer properties in QGIS](media/10.png)

9. Under the `Legend` tab in the `Properties` menu, highlight `Opacity Slider` and use the right-pointing arrow to move the widget from `Available widgets` to `Used Widgets`. 
![Screenshot of Legend tab in QGIS layer properties](media/11.png)

10. Select `OK`. There should now be an opacity control under the map layer item in the `Layer list`.
![GIF of using the new opacity control in the QGIS layer list](media/qgisopacity.gif)






