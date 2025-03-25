---
title: Group 2 [Coordinates]
image: coordinates.png
date: 2024-08-12
layout: single2
description: Learn how to create coordinate data compatible with GIS software.
---


## Objectives

- Learn where to find coordinate information for locations
- Learn how to format coordinates in a table so they can be opened in a map
- Learn how to import a table of coordinates into a GIS mapping interface


## 10 minutes to get started

*Imagine you want to make a map of all the places referenced in Chekhov's plays. Where would you get that data? In many cases, you may need to assemble location data yourself into a spreadsheet. This is just one example of the type of project where creating a spreadsheet of coordinates may be necessary. For this activity, you can choose to create data points from any location of your choice.*

> 1. Create a new Google Sheets by typing `sheets.new` into a browser. 

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

> 11. In a search engine, search for `Google My Maps`. 

> 12. From Google My Maps, choose `CREATE A NEW MAP`.

![Create new map button on Google My Maps](new.png)

> 13. Next to `Untitled Layer`, select the three dots (`Layer options`), and choose `Import`. 

> 14. Choose `Browse` and upload the `.csv` you exported from Google Sheets. 

> 15. Make sure all columns are checked off, and choose `Continue`. 

> 16. Under `Choose a column to title your markers`, select `name`. Choose `Finish`. 




## Follow-up resources (next steps)
- [Add a Spreadsheet .XLSX or .CSV to a QGIS project](https://mapping.share.library.harvard.edu/tutorials/qgis/add-spreadsheet/) 
- Follow an ArcGIS Pro [geocoding tutorial](https://storymaps.arcgis.com/stories/4c42eb942db4454f80dcaffb41c81c11) by clicking  `Your ArcGIS Organization's URL`, typing in `harvard-cga`, and authenticating with your Harvard Key
- Here's a [blog post](https://musingsaboutlibrarianship.blogspot.com/2017/03/openrefine-reconciliation-services.html) about how to extend records you have in a spreadsheet by "reconciling" them with matches in Wikidata, using a tool called OpenRefine. One of the data points you can pull into your spreadsheet are coordinates

## Discussion questions
1. Why might someone need to create location data of their own?
2. How does importing the data into Google MyMaps exemplify what you can do with tabular coordinate data? What do the Google MyMaps activity and the follow-up resource, [Add a Spreadsheet .XLSX or .CSV to a QGIS project](https://mapping.share.library.harvard.edu/tutorials/qgis/add-spreadsheet/) have in common?
3. Prepare to present any demos which could help communicate these takeaways.
4. Did you find anything else surprising or interesting in the follow-up resources?

--- 

## In class

- Create a Google sheets spreadsheet
- Make headers
- Open Google MyMaps
- Right-click
- Copy in coordinates
- Format them correctly

## Demo and explore more

### Sample data
You can download and explore sample datasets related to this activity from the workshop data homepage, hosted on the Open Science Framework (OSF.io)
1. Visit the [workshop data homepage](https://osf.io/exnyg). 
2. Click the three vertical dots icon and select `Download`.
![OSF data download page](../media/download.png)
3. The folder that downloads to your computer contains sample data from *all* activities in this workshop. It is a zipped or compressed file. In order to use it, you will have to `double-click` it on Mac or `right-click` → `Extract` or `Uncompress` on a PC. 

<div class="alert-success">
<p>4. The sample data for this activity, <strong>Activity 2</strong> is in the folder <code>activity2_coordinates</code>. In this folder you will find the following files:
</p>
<ul>
<li><code>example-coordinates.csv</code></li>
<li><code>example-coordinates.geojson</code></li>
</ul>
</div>


### Follow-along steps

- Open QGIS
- Add a basemap
- Import the coordinates
- Right-click `example-coordinates` in the Layers pane → `Zoom to layer` to see the points better
- Right-click `example-coordinates` in the Layers pane → `Open attribute table` to view the data attributes
- Right-click `example-coordinates` in the Layers pane → `Properties` → `Symbology` → Change `Single Symbol` to `Categorized` → Under `Value` choose `type` → `Classify` → `OK` to change the color symbols of the map. Click the dot icon next to `Symbol` (underneath `Value`) to change the size of the points.
- Save as spatial data by right-clicking `example-coordinates` in the Layers pane → `Export` → `Format = GeoJSON` → Click `...` icon next to `Filename` to choose where to save
- Notice how you can drag the `.geoJSON` file directly into the QGIS window to display the geometry now (rather than use the table import window). This is because it is stored as spatial data.

