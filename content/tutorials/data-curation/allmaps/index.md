---
title: "Georeference scanned library maps in a web browser"
date: 2023-01-19
description: "Learn how to use AllMaps to georeference Harvard Library Digital Collections items in the browser, to use in GIS and map making projects."
tags: ["data-curation"]
categories: ["Georeferencing"]
image: "media/4.png"
draft: true
---

## Topics covered by this guide
* Select a map to georeference from the Harvard Libraries’ digital collections
* Georeference with free browser tool, [AllMaps](https://allmaps.org/)
* Add the georeferenced map to a GIS project in QGIS or ArcGIS Pro

---

## Select a map to georeference from the Harvard Libraries' digital collections

1. Visit the Harvard Library catalog, [HOLLIS](https://hollis.harvard.edu/primo-explore/search?query=any,contains,map%20cambridge&tab=books&search_scope=default_scope&vid=HVD2&facet=library,include,map&lang=en_US&offset=0).
    * Change the initial search drop-down from `Catalog & Articles` to `Library Catalog`.
    * Scroll down to the **Location** filter on the right and filter by **Harvard Map Collection**.
2. Select **ONLINE ACCESS** on a scanned map record.
3. In the top-right corner of the image viewer, select the metadata Tooltip by clicking the **"i" icon**.
4. Scroll to the bottom of the popup and under **Links → Manifest**, copy the manifest URL.


> **Example IIIF Manifest:** [https://iiif.lib.harvard.edu/manifests/ids:12216977](https://iiif.lib.harvard.edu/manifests/ids:12216977)  
> If you need help finding a manifest for a specific item, contact the [Harvard Map Collection](https://ask.library.harvard.edu/maps?_gl=1*12rkoui*_ga*MjE0NTMxNzk2My4xNzcwNzMxMDAx*_ga_3CXC97RWEK*czE3NzA3MzEyODAkbzEkZzEkdDE3NzA3MzI2MDYkajYwJGwwJGgw).



5. Navigate to the [AllMaps.org Editor](https://editor.allmaps.org/#/).
6. Paste the manifest URL into the input box and select **Load**.

---

## Learn how to georeference with AllMaps

Use the **Georeference** tab to assign control points between the map (left) and the baselayer (right). 
* Start with at least three control points, evenly distributed. 
* Click the **results** tab to check the accuracy of your placement.

![Georeferencing in AllMaps](media/4.png)

### View the results
1. Select the **Results** tab.

![Georeferencing in AllMaps](media/opacity.png)

2. Click the gear icon to adjust view settings, such as background baselayer and map opacity/transparency. 

---

## Get a link for GIS software

1. On the **Results** tab, click the `Export` button.
2. Scroll down to `XYZ map tiles`.
3. Copy the URL to your computer's clipboard.

---

## Add the layer to a Felt map

1. In a Felt map, select the **Upload anything** button.
2. Choose **From URL**.
3. Paste the **XYZ tile URL** from AllMaps.
4. Select **Add to map**.
5. To adjust settings, click the layer name in the **Legend**. You can edit the title and use the slider to adjust **Opacity**.

---

## Add the layer to a QGIS project

1. Open **QGIS** and start a new project.
2. In the **Browser** window, under **XYZ Tiles**, drag **OpenStreetMap** into the canvas.
3. Right-click **XYZ Tiles** and select **New Connection**.
4. Name your map and paste the **XYZ tile URL** from AllMaps. Select **OK**.
5. Double-click your new connection in the Browser window to add it to the map.

### Adjusting Opacity in QGIS
1. Right-click the map layer in the **Layer list** and select **Properties**.
2. Under the **Legend** tab, highlight **Opacity Slider** in "Available widgets."
3. Click the **right-pointing arrow** to move it to "Used Widgets."
4. Select **OK**. You can now control opacity directly from the Layer list.

![QGIS Opacity Control](media/qgisopacity.gif)

## Add the layer to an ArcGIS Pro project
1. Click the `Map` tab.
2. In the banner in the `Layer` section, select `Add Layer from Path`. 

