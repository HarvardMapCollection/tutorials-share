---
title: How to Export GeoJSON and Geopackage from ArcGIS Pro
date: 2025-02-10
tags: ["qgis-hub"]
image: gdb.png
layout: single2
---


A common question students ask GIS librarians is "How do I get my data out of ArcGIS Pro or share it with someone not using this software?"

You may notice that when using ArcGIS dialog boxes, you are prompted to save files by default in your project's file geodatabase.

 <img src="gdb.png" alt="Save output in ArcGIS Pro highlighting file geodatabases"><br>
It is okay to use the file .gdb temporarily while working on your project. Keep in mind the suggestion to periodically archive any important files using legible, open data formats such as geopackage or geojson.


## Save as GeoJSON

Use the `Features to JSON` geoprocessing tool to save as GeoJSON.

## Save as GeoPackage

1. <code>Insert tab</code> → <code>Add Folder</code> → Create a normal, non-file-gdb folder on your computer to organize your geospatial data. Select this new folder as the folder you'd like to add as the folder connection in the ArcGIS Pro `Add Folder` interface. 
3. <code>Catalog pane</code> → Right click the folder you created to manage your geospatial data → <code>New</code> → <code>Geopackage</code>. 
4. Rename the new geopackage the name of the layer you want to save, e.g. `example_coordinates.gpkg`. 
5. Use <code>Feature Class to Geodatabase</code> tool to export your layer:
  - <code>Input Features</code> = the layer you want to copy 
  - <code>Output Geodatabase</code> = the empty <code>.gpkg</code> you just created.


## Follow-up resources
- Use the <a href="https://mapping.share.library.harvard.edu/tags/data-curation/">Harvard Library GIS Data Management online guides</a> for guidance on your project data. 
- Set yourself up for success by booking a <a href="https://ask.library.harvard.edu/maps?_gl=1*8tuawi*_ga*MTc0Nzk5MjkyOS4xNzcwNjYxOTEz*_ga_3CXC97RWEK*czE3NzA2NjIwNTIkbzEkZzAkdDE3NzA2NjIwNTIkajYwJGwwJGgw">45 minute instruction session</a> with a GIS librarian to ensure your project structure and data practices are top notch. 