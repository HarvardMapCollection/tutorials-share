---
title: Exporting Geospatial Data from Felt
date: 2024-07-08
image: cover.png
tags: ["felt", "file-formats"]
layout: single2
description: How to save data in Felt so it will work in other GIS software, such as QGIS and ArcGIS Pro.
---

If you have created data in Felt, either by manually drawing features, or by uploading a spreadsheet and converting the spreadsheet data to features using geocoding or joins, you may be wondering how to share the geospatial data you have created. What formats should you use to make sure the data you've created will work in other GIS software?

Luckily, Felt allows you to export data in geopackage format `.gpkg`, which is an open format for encoding point, line, or polygon data. If you export data in this format, send it to someone, or include it in a project repository, it will work in the majority of GIS software including ArcGIS and QGIS.

## Export steps

1. To export your data layer in geopackage format, find the layer in the `Legend`, and click the button with `...` three dots. 

2. Select `Export` → `To Geopackage`.


## Saving your data

- If you are considering options for storing your project data (and any associated metadata or source citations you'd like to include), consider setting up a project on the [Open Science Framework](https://library.harvard.edu/services-tools/open-science-framework), which allows you to collaboratively organize many different data types. 
- Check out an [example project](https://osf.io/9jg2u/) from the Harvard Map Collection Research, Teaching, and Learning GIS Collections for inspiration.

## Importing your data to other software

### ArcGIS Pro

Here is a tutorial on [How to Add GeoPackage to ArcGIS Pro](https://learn.openwaterfoundation.org/owf-learn-geopackage/using-geopackage/arcgis/).

### QGIS

Here is a tutorial on [How to Add GeoPackage to QGIS](https://docs.qgis.org/3.34/en/docs/training_manual/basic_map/preparation.html).