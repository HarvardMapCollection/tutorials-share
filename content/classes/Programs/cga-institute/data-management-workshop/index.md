---
title: Open access practices for GIS
date: 2024-05-17
tags: ["class"]
image: arcgispro.png
layout: class
description: Hands-on workshop materials for practicing GIS project management consistent with open access publishing
---

## Pre-work to complete before class

### Homework #1: Set up your OSF.io account
1. Instantiate your [Harvard OSF (Open Science Framework)](https://library.harvard.edu/services-tools/open-science-framework) account.

<div class="alert-info">
  If you do not have a Harvard Key, you can make a free, non-affiliate account on <a href="https://osf.io/">osf.io</a>.
</div>

2. Select `Create New Project`.

![Create a new project in OSF](../../../media/osf-new-proj.png)

3. Name your new project `Data Management Workshop`.

<img src="../../../media/osf-proj-name.png" alt="Name a new project in OSF" style="max-width:500px;">


### Homework #2: Framing ideas

Read this [article about balancing data safety and open science](https://mapping.share.library.harvard.edu/posts/potterbusch/) in an academic research context.


## In-class workshop

### 1. Saving in reusable formats

#### Discussion

![Keziah's project](../../../media/map-package.png)
_Example from previous CGA GIS Institute participants._


<div class="alert-success">
<img src='../../../media/ppkg.png' alt="Tutorial materials in ArcGIS Online">
<p><em>While ESRI map package formats are the default, they are not backwards-compatible.</em></p>
<img src='../../../media/noppkg.png' alt="Map package fails in QGIS">
<p><em>ESRI map packages are not recognized by open source GIS software.</em></p>
</div>

<div class="alert-success">
<img src='../../../media/file-expl-arc.png' alt="Tutorial materials in file exporer">
<p><em>ESRI map package file in a downloads folder</em></p>
</div>

<div class="alert-danger">
<p>⚠️ If we want any of our data layers to be accessible, we need to export them to more persistent file formats. </p>
</div>




#### Activity 

1. Download the data from the georeferencing and digitizing activity by navigating to the [ArcGIS Online map package page](https://www.arcgis.com/home/item.html?id=afdbbd419b2c4729ad37c9b5d95f4990), and selecting `Download`.

2. Open the map package in ArcGIS Pro by either double-clicking on the file, or from ArcGIS Pro, selecting `Open → Computer → Open another project` and navigating to the file.

3. Toolbox > Copy Raster

1. Practice exporting `.geoJSON` and `shapefile` data using [Features to JSON (Conversion)](https://pro.arcgis.com/en/pro-app/latest/tool-reference/conversion/features-to-json.htm) and [Export data](https://pro.arcgis.com/en/pro-app/latest/help/data/geodatabases/overview/export-data.htm#:~:text=To%20export%20a%20shapefile%2C%20you,click%20the%20shapefile%2C%20select%20Export.) ArcGIS Pro documentation.


### 2. Upload data to OSF.io

<div class="alert-danger">
  Belle populate.
</div>

### 3. Mockumentation

<div class="alert-danger">
  Belle populate.
  Use this project example: [Harvard CGA Georeferencing and Digitizing](https://storymaps.arcgis.com/stories/77c9dc5c82bc4392b061a4ba3d3a8efd).
</div>

## Resources
[DIY documenatation guide](https://mapping.share.library.harvard.edu/resources/researchers-handbook/prompts/)

[Make a consultation](https://library.harvard.edu/staff/belle-lipton)



