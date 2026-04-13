---
title: "Using Points to Path for Journey Maps in QGIS"
date: 2026-04-13
tags: ["qgis-hub"]
layout: single2
draft: true
description: Step-by-step instructions for converting a series of locations into a journey map.
---

## 1. Ensure you have data for the travel stops stored as points

### If you already have point data...

If you already have a spreadsheet that indicates the stops on the route as points or latitude and longitude coordinate pairs, you'll want to make sure you've successfully added your spreadsheet data to the map ([tutorial](https://mapping.share.library.harvard.edu/tutorials/arcgis-qgis/add-spreadsheet/)). The add a spreadsheet to QGIS tutorial also gives some example spreadsheet data you can use to model how to format the coordinates, if you are creating or cleaning this data yourself. 

> Tip: If you are working with a spreadsheet of locations, make sure you have a column that indicates the order in which the locations were traveled to. For instance, in the row for stop #1, in a column `order` enter "1". This will help later when you automatically generating the route. 

### Creating centroids

Alternatively, you can start with a polygon `shapefile` of places, and use this file to generate centroids or stops on the journey. For example, in this tutorial we will work with countries. If you are showing how someone traveled from country to country, you can download a file of all of the countries from cartographic data site Natural Earth. ([Download countries](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/)). Add the file to QGIS by dragging the extension ending in `.shp` or the entire compressed shapefile folder. 
![map of all countries from natural earth](media/map4.png)
*Countries shapefile from Natural Earth loaded into QGIS.*

From this file, you can select the countries traveled to by right-clicking the layer in the layer list and selecting `Open Attribute Table`. 

![How to open the attribute table](media/attribute-table.png)

Use the columns to make sense of which record pertains to which country. You can select features you want to include on the travel route by highlighting the row corresponding to that country. To the very left of the rows, there is a list 1, 2, 3, 4, etc. numbering the rows. To select a row, click the number to the left of that row. To highlight multiple rows, hold down the `command` key while making your selection. You'll notice that once you have selected a feature, that feature will now be highlighted on the map. 

Alternatively, you can also visually select features by using the `Select Features by Area or Single Click` button. This is on the icon banner menu across the top of the QGIS project. Once this is engaged, you can simply click features on the map to add them to your selection, rather than using the attributes in the attribute table to make your selection.
![select features button on QGIS](media/select-features.png)

Once you have all of your features selected, save the selected features to a new layer. Right-click the layer in the layer list, and select `Export` → `Save Selected Features As`. Make sure to indicate where on your computer you want to save the `shapefile` or `geopackage`. 

Add that new file to the project. Here is a map showing the two layers (all countries, selected countries), and a background ocean layer. The data has been styled using the cartographic conventions for academic publishing tutorial, which you can apply at the end, or as you're working along.
![selected countries](media/map2.png)