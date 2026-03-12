---
title: Vectorizing from Historic Maps in QGIS
date: 2024-08-08
tags: ["qgis-hub"]
image: digi-parcel.gif
description: Step-by-step instructions for vectorizing data from historic maps, including an example using Atlascope and spatial analysis.
---

<p>This tutorial provides detailed, step-by-step instructions for digitizing features from raster (image) maps to create new vector data in QGIS. This process is essential for transforming historical maps or scanned images into analyzable geospatial datasets, enabling you to conduct spatial analyses like area calculations and attribute queries.</p>

<h3>Set a Project Coordinate Reference System</h3>

<ol>
	<li>Download QGIS.</li>
	<li>Create a new QGIS project.</li>
	<li>Add a basemap to the project by going to the <code>Browser</code> panel, expanding <code>XYZ Tiles</code> and double-clicking <code>OpenStreetMap</code>.
	<blockquote>If you do not see a browser panel, you can go to the program menu at the top of the screen and select <code>View</code> &rarr; <code>Panels</code> and turn on <code>Browser</code>.</blockquote>
	</li>
	<li>The project coordinate reference system should now reflect that of the basemap we just added. In the bottom-right hand corner of the QGIS window, find the button that says <code>EPSG: 3857</code>. Click that button to open the <code>Project Properties - CRS</code> window.</li>
</ol>

<p><img alt="project properties crs window" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/projection.png" /></p>

<p>You can search for coordinate reference systems by name, place, or <a href="https://spatialreference.org/ref/epsg/?search=massachusetts" target="_blank">EPSG code</a>. You will want to choose a projection that is suited for the area you are creating data for, and is measured in units such as meters or feet, if you want to do area calculations. You can find this information in the properties of each coordinate reference system.</p>

<ol start="5">
	<li>Zoom in to the area of interest using the Zoom buttons.</li>
</ol>

<p><img alt="zoom controls" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/zoom.png" /></p>

<ol start="6">
	<li>If the map disappears when you move it, or looks as though it is a strange shape, it could be due to the software attempting to reproject the basemap to the shape of a coordinate reference system built for the location you have chosen. Wait for the screen to re-load, or you can zoom to the extent of the basemap by right-clicking <code>OpenStreetMap</code> in the layer list, and choosing <code>Zoom to Layer</code>. Continue zooming until the area of interest is centered on the map. Any notifications about ballpark transformations you can click through or ignore.</li>
</ol>

<h3>Import Georeferenced Maps</h3>

<ul>
	<li>If you have a <code>.geoTIFF</code>, you should be able to drag the file directly into the QGIS document and have it show up in the correct place.</li>
	<li>If you do not yet have a georeferenced map you&#39;d like to work with, please refer to other guides on this pre-requisite step. A useful place to start is our Introduction to Georeferencing tutorial. You can also <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">make an appointment</a>.</li>
</ul>

<h3>Create New Shapefile Layer</h3>

<ol>
	<li>Click on <code>Layer</code> &gt; <code>Create Layer</code> &gt; <code>New Shapefile Layer</code>.</li>
	<li>Select <code>Polygon</code> as the geometry type.</li>
	<li>Important! From the coordinate reference system menu in this interface, ensure you are creating the new shapefile in the coordinate reference system you selected.</li>
</ol>

<p><img alt="select crs" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/crs.png" /></p>

<ol start="4">
	<li>Add necessary fields for the attributes you want to record (e.g., development status, owner name). These fields will become the column headers in the data table you will create. For every polygon you create, you will also fill out a value for each of these attributes.
	<blockquote>These attributes are also what powers the map symbolization. In the orange and purple map, we were able to ask the software to turn every polygon with the value of <code>Developed=no</code> orange, and every polygon with the value of <code>Developed=yes</code> purple.</blockquote>
	</li>
	<li>Pay attention to field types. If you are recording categories or text data, make sure you select <code>Text</code> as the field&#39;s data type. If you are recording a number you&#39;d like to be able to symbolize by density, make sure to select <code>Number</code> as the field type.</li>
</ol>

<h3>Draw Polygons on the Map</h3>

<ol>
	<li>Start drawing polygons by clicking on the <code>Toggle Editing</code> button, which looks like a pencil.</li>
</ol>

<p><img alt="start editing" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/toggle-editing.png" /></p>

<ol start="2">
	<li>Select the <code>Create Polygon</code> button.</li>
</ol>

<p><img alt="create polygon" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/create-polygon.png" /></p>

<ol start="3">
	<li>Start drawing!</li>
</ol>

<p><img alt="digitizing a parcel in QGIS" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/digi-parcel.gif" /></p>

<p>This takes a little bit of practice to get used to. To make it easier, use the snapping tool to make sure your lines and vertices match up, and don&#39;t leave any holes between your polygons.</p>

<ol start="4">
	<li>In the main QGIS menu choose <code>Project</code> then <code>Snapping Options</code>. Toggle on the magnet icon on the far left of the wizard. Turn on <code>Vertex</code> and <code>Segment</code>. Turn on <code>Topological Editing</code> and <code>Snapping on Intersection</code> so that both buttons are engaged.</li>
	<li>You can right-click your in-progress data layer in the <code>Layer</code> panel, and choose <code>View Attribute Table</code>. This will show you each polygon as a row in the table, and you can edit the values there.</li>
	<li>Any changes you don&#39;t want to lose, make sure to <code>Save</code> by continuously clicking the <code>Pencil</code> or <code>Toggle Editing</code> icon.</li>
	<li>To really learn the true ins and outs of everything you can do with the editing toolbar, including moving or deleting points, check out the <a href="https://docs.qgis.org/3.34/en/docs/user_manual/working_with_vector/editing_geometry_attributes.html" target="_blank">QGIS Editing Documentation</a>.</li>
</ol>

<h3>Calculate Area of Each Polygon</h3>

<ol>
	<li>Open the Attribute Table.</li>
	<li>Go to <code>Field Calculator</code>.</li>
	<li>Create a new field named <code>Area</code>.</li>
	<li>Use the <code>$area</code> expression to calculate the area of each polygon.</li>
</ol>

<h3>Edit Map Symbology</h3>

<ol>
	<li>Double-click the map layer to open its properties.</li>
	<li>Go to the <code>Symbology</code> tab.</li>
	<li>Change symbology from <code>single symbol</code> to <code>categorized</code>.</li>
	<li>Choose <code>developed</code> for Value and select distinct colors for <code>yes</code> and <code>no</code> (e.g., #cd782e and #8c5fed).</li>
</ol>

<h3>Identify Parcels Based on Variables of Interest</h3>

<ol>
	<li>Filter the attribute table to highlight specific parcels.</li>
	<li>For example, to identify parcels owned by Harvard College, apply the filter <code>owner_name = &quot;Harvard College&quot;</code>.</li>
</ol>

<h3>Export Data Table for Analysis</h3>

<ol>
	<li>Right-click on the map layer.</li>
	<li>Select <code>Export</code> and choose the file type (<code>.xlsx</code> or <code>.csv</code>) as needed for your analysis.</li>
</ol>

