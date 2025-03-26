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

1. Open QGIS ([download instructions](https://mapping.share.library.harvard.edu/tutorials/census-data-primer/download-software/)).
2. Add a basemap ([instructions](https://mapping.share.library.harvard.edu/tutorials/qgis/add-basemap/)).
3. Import the coordinates ([instructions](https://mapping.share.library.harvard.edu/tutorials/qgis/add-spreadsheet/)).
4. Right-click `example-coordinates` in the Layers pane → `Zoom to layer` to see the points better.
5. Right-click `example-coordinates` in the Layers pane → `Open attribute table` to view the data attributes.
6. Right-click `example-coordinates` in the Layers pane → `Properties` → `Symbology` → Change `Single Symbol` to `Categorized` → Under `Value` choose `type` → `Classify` → `OK` to change the color symbols of the map. Click the dot icon next to `Symbol` (underneath `Value`) to change the size of the points.
7. Save as spatial data by right-clicking `example-coordinates` in the Layers pane → `Export` → `Format = GeoJSON` → Click `...` icon next to `Filename` to choose where to save.
8. Notice how you can drag the `.geoJSON` file directly into the QGIS window to display the geometry now (rather than use the table import window). This is because it is stored as spatial data.

