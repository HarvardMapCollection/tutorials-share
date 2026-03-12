---
title: 2. Coordinates
image: coordinates.png
date: 2024-08-12
layout: single2
description: Learn how to create coordinate data compatible with GIS software.
---

- Learn where to find coordinate information for locations
- Learn how to format coordinates in a table so they can be opened in a map
- Learn how to import a table of coordinates into a GIS mapping interface

## In class activity

> 1. Open a new spreadsheet, for example in Excel, or quickly make a new Google Sheets by typing `sheets.new` into a browser. 

> 2. Create three header columns, `name`, `latitude`, and `longitude`. 

> 3. In a new tab, navigate to [Google Maps](https://www.google.com/maps/).

> 4. Find a location you are interested in mapping.

> 5. In your spreadsheet, under the `name` column, give the location a name. 

> 6. `Right click` on the map in Google maps in the area you are interested in. A window with coordinates should pop up. Click on the coordinates, and they will copy to your clipboard. 

> 7. Paste the value into the spreadsheet, under the `latitude` column.

> 8. You will need to edit the values so that the first number in the set of coordinates is under the `latitude` column, and the second number is in `longitude` column. Make sure to include the negative `-` symbol, if it exists, and remove the separating comma. 

<img src="table.png" style="width:100%; max-height:70em;" alt="table">

*Properly formatted table.*

> 9. Repeat this process and add two more points, so you have three altogether.

> 10. When you are finished entering your data, name your spreadsheet, and export it to a `.csv` format by clicking `File` → `Download` → `Comma Separated Values (.csv)`.

--- 

## Demo and explore more

### Sample data
You can download and explore sample datasets related to this activity from the workshop data homepage, hosted on the Open Science Framework (OSF.io)
> 1. Visit the [workshop data homepage](https://osf.io/exnyg). 

> 2. Click the three vertical dots icon and select `Download`.
![OSF data download page](../media/download.png)

> 3. The folder that downloads to your computer contains sample data from all the workshop activities. It is a zipped or compressed file. In order to use it, you will have to `double-click` it on Mac or `right-click` → `Extract` or `Uncompress` on a PC. 

<div class="alert-success">
<p>4. The sample data for this activity, <strong>Activity 2</strong> is in the folder <code>activity2_coordinates</code>. In this folder you will find the following files:
</p>
<ul>
<li><code>example-coordinates.csv</code></li>
<li><code>example-coordinates.geojson</code></li>
</ul>
</div>



### Follow-along steps

1. Import the coordinates csv, `example-coordinates.csv`. From the `Map` menu tab → Click the arrow below the `Add Data` icon to expand the `Add Data Menu` → Hover over `Points from Table` → Select `XY Table to Point`. 

2. In the resulting `XY Table to Point` menu, populate the parameters. `Input Table` = Click the folder icon and navigate into `Computer` and then the folder where the downloaded data is saved. Select folder `activity2_coordinates` and then file `example_coordinates.csv`. The rest of the parameter fields should autopopulate. 

> Depending on how the x,y data is labelled in your table, you may need to manually designate which column maps to `X Field` and `Y Field` respectively.

<div class="alert-success">
<h2>Saving Geospatial Data for Future Use</h2>
  <p>A common question students ask GIS librarians is "How do I get my data out of ArcGIS Pro or share it with someone not using this software?"</p> 
  <p>You may notice that when using this import wizard (and may other dialog boxes in ArcGIS Pro), you are prompted to save files by default in your project's file geodatabase.</p>
  <img src="gdb.png" alt="Save output in ArcGIS Pro highlighting file geodatabases"><br>
  <p>It is okay to use the file .gdb temporarily while working on your project. Keep in mind the suggestion to periodically archive any important files using legible, open data formats such as geopackage or geojson.</p>
  <h3>Next steps</h3>
  <ol>
  <li>Learn <a href="https://mapping.share.library.harvard.edu/tutorials/arcgis-hub/export-file-types/">how to export your data as geojson or geopackage</a> from ArcGIS Pro.</li>
 <li>Use the <a href="https://mapping.share.library.harvard.edu/tags/data-curation/">Harvard Library GIS Data Management online guides</a> for guidance on your project data. </li>
  <li>Set yourself up for success by booking a <a href="https://ask.library.harvard.edu/maps?_gl=1*8tuawi*_ga*MTc0Nzk5MjkyOS4xNzcwNjYxOTEz*_ga_3CXC97RWEK*czE3NzA2NjIwNTIkbzEkZzAkdDE3NzA2NjIwNTIkajYwJGwwJGgw">45 minute instruction session</a> with a GIS librarian to ensure your project structure and data practices are top notch. </li>
  </ol>
</div>


  
3. Right-click `example-coordinates` in the Layers pane → `Zoom to layer` to see the points better.
4. Right-click `example-coordinates` in the Layers pane → `Attribute table` to view the data attributes.
5. Right-click `example-coordinates` in the Layers pane → `Symbology` → Change `Single Symbol` to `Unique Values` → Under `Field 1` choose `type` → `Classify` → `OK` to change the color symbols of the map. 
7. Export your data as either geoJSON or geopackage. ([Tutorial](https://mapping.share.library.harvard.edu/tutorials/arcgis-hub/export-file-types/))
8. Notice how you can drag the `.geoJSON` file directly into the ArcGIS window to display the geometry now (rather than use the XY Points to Table import wizard). This is because it is now stored as spatial data.

