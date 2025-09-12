---
title: Perform a table join in QGIS
date: 2023-01-17
tags: ["qgis-hub"]
image: 2.png
layout: single2
description: How to attach or merge boundaries to spreadsheet data (or perform a table join) in QGIS 

---

<p>Need help turning your spreadsheet data into a map? In this tutorial, you will learn how to join tables to GIS shapefiles to create a new, mappable dataset with both geographic boundaries and statistical or attribute information.</p>

<hr />
<h3>1. Understanding Table Joins: Why Connect Data to Geography?</h3>

<p>Often, spreadsheets contain useful information we want to map. GIS software, however, does not know how to translate a spreadsheet without any inherent spatial information (such as point coordinates) into a visual map.</p>

<p>Consider a spreadsheet containing demographic statistics for various towns. While this data is clearly geographic &ndash; arranged by town&ndash; if we were to bring it into a GIS program, the program would not know (without being told by you) which column to interpret as the &ldquo;geography&rdquo; to display visually. Formats like <code>.csv</code> or <code>.xlsx</code> are not inherently spatial data formats.</p>

<p>On the other hand, a dataset of town boundaries, often available as a <strong>shapefile</strong>, is an inherently geospatial format. Because this data is spatial, GIS software can recognize it and automatically make a map out of it.</p>

<p>GIS software displays spatial data, but how is that data organized behind the scenes? It&#39;s stored in what&#39;s called an <strong>attribute table</strong>, which functions much like a spreadsheet or a database table.</p>

<ul>
	<li>Each <strong>row</strong> in the table represents a distinct geographic <strong>feature</strong> on your map (for example, one town polygon).</li>
	<li>Each <strong>column</strong> in the table holds a specific piece of information, or <strong>attribute</strong>, about that feature (such as the town&#39;s name, its unique ID, or its population count).</li>
</ul>

<p>While this table provides fundamental information and links to the map&#39;s shapes, it often doesn&#39;t contain all the statistical data you might want to map. That&#39;s why connecting it with other spreadsheets is essential for showing meaningful statistics.</p>

<p>Need help understanding the best way to structure your data for mapping, or if a join is the right approach for your project? <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">Schedule a consultation with our team</a>.</p>

<hr />
<h3>2. How Table Joins Work: The Core Mechanics</h3>

<p>To perform a join, you must have a column in each dataset which contains the same literal values. Factors such as case sensitivity and hidden characters matter significantly. The values must be exactly the same in both tables for the join to work.</p>

<p>For instance, if you&#39;re joining a spreadsheet of demographic data to a spatial layer of geographic units, you would use a common column found in both datasets, such as a unique geographic identifier (e.g., a FIPS code or a town name). Column headers do not necessarily have to match, but the values inside the columns&rsquo; cells must be identical.</p>

<p>For a successful join, both the spatial and non-spatial datasets must contain a unique identifier column with exact matching values. Common join keys include unique IDs, shared names, or other distinct alphanumeric codes. Pay close attention to case sensitivity and leading/trailing spaces.</p>

<p>If your data requires cleaning or a join key isn&#39;t immediately obvious, our team can help strategize the best approach. <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">Consult with us</a> for assistance in preparing your data for a robust join.</p>

<hr />
<h3>3. Step-by-Step in QGIS: Connecting Tabular Data to Spatial Layers</h3>

<p>This section demonstrates the table joining process in QGIS using a common scenario: connecting your prepared tabular data (a spreadsheet) to a corresponding GIS spatial layer (a shapefile).</p>

<h4>Join steps:</h4>

<ol>
	<li>Add your spatial layer (e.g., a polygon shapefile of geographic units) to the QGIS document.</li>
	<li>Add your statistical tabular data (CSV or XLSX) to the map.</li>
	<li>Right-click your spatial layer in the layer list and select <strong>Properties</strong>.</li>
	<li>In the menu, select <strong>Joins</strong>.</li>
	<li>In the bottom of the wizard interface, select the <strong>Add new join</strong> button.</li>
	<li>Configure the join parameters:
	<ul>
		<li>Join layer: Select your tabular data layer.</li>
		<li>Join field: Select the column in your tabular data that contains the common identifier.</li>
		<li>Target field: Select the column in your spatial layer&#39;s attribute table that contains the matching common identifier.</li>
	</ul>
	</li>
	<li>Select the checkbox next to <strong>Joined Fields</strong>. You can selectively choose which fields from your tabular data you wish to add to the spatial layer&#39;s attribute table.</li>
	<li>Select <strong>OK</strong>.</li>
	<li>Select <strong>Apply</strong>.</li>
	<li>Select <strong>OK</strong>.</li>
	<li>Right-click your spatial layer in the layer list and select <strong>Open Attribute Table</strong>.</li>
	<li>Confirm the join worked by checking that the new fields from your tabular data are populated.</li>
	<li><strong>Important!</strong> Joins performed within the QGIS document are ephemeral and will not save with the project file unless exported. To preserve the joined data, right-click the joined spatial layer, select Export &rarr; Save Features As and save it as a new geospatial dataset (e.g., a new shapefile or GeoPackage).</li>
</ol>

<hr />
<h3>4. Applying Joins to Your Own Data: General Principles &amp; Troubleshooting</h3>

<p>The principles demonstrated in the step-by-step example can be applied to join any tabular data to a GIS shapefile. The key is to identify a reliable common identifier between your datasets and ensure its consistency.</p>

<ul>
	<li>Identify your unique join key.</li>
	<li>Check for exact matches, including case and hidden characters.</li>
	<li>Ensure data types are compatible (e.g., numbers vs. text for join fields).</li>
	<li>Consider one-to-many relationships and how they will join (QGIS only takes the first match).</li>
</ul>

<p>Table joins can be deceptively complex, especially with real-world data. If you encounter issues with unmatched records, unclear join keys, or data inconsistencies, our team is here to help you troubleshoot and refine your join strategy. <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">Schedule a consultation</a> to ensure your data is accurately mapped.</p>