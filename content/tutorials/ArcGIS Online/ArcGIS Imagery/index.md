---
title: Uploading georeferenced maps to ArcGIS Online
date: 2022-12-20
tags: ["tutorials", "ArcGIS", "Georeferencing"]
image: spyglass-arcgis.gif
---

Do you want to be able to use a historic map for comparison in one of your ArcGIS Online projects, such as [StoryMaps](https://storymaps.arcgis.com/) or ArcGIS [Experience Builder](https://experience.arcgis.com/)?


![Screen recording of an old map compared to it's modern geography.](media/spyglass-arcgis.gif)
<figcaption class="append">Georeferenced map from 1880 compared to a modern map in ArcGIS Online.</figcaption>

There are a number of pathways or workflows for accomplishing this. Which one you pick will depend on a. the format your map data is in and b. the software environment you prefer to work in.

## Options

### Option 1: Use a map hosted as a web link

There are many data sources which offer maps available as `hosted web services`. For example, if you visit a georeferenced map in the University of Texas at Austin's [data portal](https://geodata.lib.utexas.edu/catalog/utaustin_121147), and select `web services`, a pop-up window with links will appear. If you copy these links to your clipboard, you can paste them into your ArcGIS Online web application, including StoryMaps or Experience Builder. To do this, see the ArcGIS Online documentation to [Add a Tile Layer](https://doc.arcgis.com/en/arcgis-online/create-maps/add-layers-from-url.htm).

![Sceenshot of web services popup on U of Texas geoportal](media/web-services.png)
<figcaption class="append">University of Texas at Austin's<a href="(https://geodata.lib.utexas.edu/catalog/utaustin_121147"> data portal</a> with maps hosted as web services.</figcaption>

Unfortunately, while the [Harvard Geospatial Library](https://hgl.harvard.edu/?_gl=1*1olmc9p*_ga*MTk0NzAyODI4Ni4xNjY4NDYxOTEz*_ga_3CXC97RWEK*MTY3NDEyNTAzMy4zNS4xLjE2NzQxMjY0NTMuNjAuMC4w) contains nearly 4,000 georeferenced maps -- more on how to work with these later-- it does not provide access to georeferenced maps as streaming data layers (link URLs).

The easiest way to use georeferenced maps in ArcGIS Online products like StoryMaps or Experience Builder is if your data is available as one of these web links. When you are searching for maps online, check to see if the hosting repository provides these URLs. Then, you can use ESRI's [Add a Tile Layer documentation](https://doc.arcgis.com/en/arcgis-online/create-maps/add-layers-from-url.htm) to add it to your online map in ArcGIS Online.

If you want to use a map from the Harvard Map Collection in your ArcGIS Online web map, you'll first need to figure out what format the map is in.

| Format | Instructions |
| --- | --- |
| In the physical map collection, but not yet scanned | Request a scan from [maps@harvard.edu](mailto:maps@harvard.edu), then use either Option 2 or 3 on this page. |
| Scanned and in the [Harvard Digital Collections](https://library.harvard.edu/digital-collections), but not yet georeferenced from the [Harvard Geospatial Library](https://hgl.harvard.edu/?_gl=1%2A1gaxm7z%2A_ga%2AMTk0NzAyODI4Ni4xNjY4NDYxOTEz%2A_ga_3CXC97RWEK%2AMTY3NDEzMTA5My4zNi4wLjE2NzQxMzEwOTMuNjAuMC4w&f%5Bdc_format_s%5D%5B%5D=GeoTIFF&f%5Bdct_provenance_s%5D%5B%5D=Harvard&q=&search_field=all_fields) | Use our [tutorial]() to generate a tile link layer directly from the Harvard Digital Collections. Then, use ESRI's [Add a Tile Layer documentation](https://doc.arcgis.com/en/arcgis-online/create-maps/add-layers-from-url.htm) to add it to your online map. |
| Already georeferenced and available in `GeoTIFF` format for download from the  [Harvard Geospatial Library](https://hgl.harvard.edu/?_gl=1%2A1gaxm7z%2A_ga%2AMTk0NzAyODI4Ni4xNjY4NDYxOTEz%2A_ga_3CXC97RWEK%2AMTY3NDEzMTA5My4zNi4wLjE2NzQxMzEwOTMuNjAuMC4w&f%5Bdc_format_s%5D%5B%5D=GeoTIFF&f%5Bdct_provenance_s%5D%5B%5D=Harvard&q=&search_field=all_fields)| Download the map from the Harvard Geospatial Library. Then, follow the instructions in Option 3 on this page. |



### Option 2: Use ArcGIS Pro to publish your map as a tile layer

If you do not already have a web link for your map, and you still need to georeference it, you can use ArcGIS Pro to georeference the map and publish it to your online map. 

ArcGIS Pro is a desktop software made by the same company who makes ArcGIS Online and Storymaps. Harvard key holders have access to ArcGIS Pro. 

#### Steps to use option 2

1. Once you have a copy of the map as a picture on your computer (ideally a high-resolution `TIFF`, but a high-quality `.jpeg` or `.png` could also work), use our [tutorial]() to georeference the map in ArcGIS Pro. 
The tutorial will cover how to access the software using your Harvard key.

2. Publish the georeferenced map from ArcGIS Pro to ArcGIS Online using [this guide](https://doc.arcgis.com/en/arcgis-online/manage-data/publish-tiles.htm).

### Option 3: Use the ArcGIS Imagery Extension

If you already have a GeoTIFF, but do not yet have it hosted as a web layer, this is the best way to get your georeferenced maps into an ArcGIS Online web map. Possible scenarios where this might occur are:

- You have georeferenced the map using the open source software QGIS ([tutorial]()), or otherwise want to generally avoid having to use ArcGIS Pro.
> ESRI allows you to upload `GeoTIFFs` to ArcGIS Online without using their desktop software, but once the maps are uploaded, you frustratingly cannot add them to a web map or StoryMap ([documentation](https://support.esri.com/en/technical-article/000016852)). 

- You already have a `GeoTIFF`, acquired from the [Harvard Geospatial Library](https://hgl.harvard.edu/?_gl=1%2A1gaxm7z%2A_ga%2AMTk0NzAyODI4Ni4xNjY4NDYxOTEz%2A_ga_3CXC97RWEK%2AMTY3NDEzMTA5My4zNi4wLjE2NzQxMzEwOTMuNjAuMC4w&f%5Bdc_format_s%5D%5B%5D=GeoTIFF&f%5Bdct_provenance_s%5D%5B%5D=Harvard&q=&search_field=all_fields) or elsewhere, and want to bypass having to use any desktop software.


<div class="alert-warning">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  Warning: The following steps require access to the ArcGIS Imagery extension, which is not free with a standard public ArcGIS Online account. Harvard key holders have access, instructions are below.
</div>


#### Enable the ArcGIS Imagery Extension

1. Make sure you have [created an ArcGIS Online account using your Harvard key](https://gis.harvard.edu/arcgis-online).

2. [Request access](https://projects.iq.harvard.edu/cga-pin/request) to the ArcGIS Imagery tool. It is not free, but Harvard key holders have access. When prompted with which option to request, select, `ArcGIS Image for ArcGIS Online`.

3. You’ll receive an email when the request is fulfilled. This should not take longer than one business day. To inquire about the status of your request, contact Jeff Blossom at jblossom@cga.harvard.edu. 

#### Upload the GeoTIFF

Once your extension has been enabled, you can upload the `GeoTIFF`. From `My Content` select `New Item`, and choose `Imagery Layer`. Follow the prompts. 


## Configure your web project

Once you have added your georeferenced map as a layer in ArcGIS Online, there are many ways to configure the online apps for exploration and comparison with other georeferenced maps or modern datasets.

To learn how, check out the following resources:
- [Apps you can use to swipe and compare](https://www.esri.com/arcgis-blog/products/arcgis-online/mapping/swipe-compare-apps/)
- [StoryMap Swipe and Spyglass](https://storymaps-classic.arcgis.com/en/app-list/swipe-spyglass/)

<div class="alert-danger">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  <strong>Important!</strong> Make sure the tile layer, the web map, and the StoryMap are all set to <strong>public</strong>. All three items --found in <strong>My Content</strong>-- must be publicly shared in order for the final StoryMap to be viewable.
</div>

