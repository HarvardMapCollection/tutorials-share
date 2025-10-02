---
title: Georeference in QGIS
date: 2023-01-20
tags: ["qgis-hub"]
image: default-gradient.png
description: How to georeference maps in QGIS
---

<p>This tutorial provides step-by-step instructions for aligning historical maps with modern geographic locations in QGIS, a process known as georeferencing.</p>

<ol>
	<li><a href="https://mapping.share.library.harvard.edu/tutorials/software-access/qgis/" target="_blank">Download QGIS</a>, if you haven&#39;t already.</li>
	<li><a href="&lt;span style='background-color: yellow;'&gt;https://guides.library.harvard.edu/c.php?g=1477394&amp;p=11028749&lt;/span&gt;">Add a basemap</a><a href="https://mapping.share.library.harvard.edu/tutorials/qgis-hub/basemap/" target="_blank"> </a><code>Browser &rarr; XYZ Tiles &rarr; Open Street Map</code>.</li>
	<li>Set the project coordinate reference system to WGS 84. At all times in the bottom right of the QGIS document, EPSG should read 4326.</li>
</ol>

<h3>Adjusting Your Project CRS Following Basemap Import</h3>

<p>Every <strong>dataset</strong> and every <strong>QGIS project</strong> each has a coordinate reference system (CRS). Coordinate reference systems allow the GIS software to know where on the world to place the dataset, how to line it up spatially. There are a number of different mathematical models that each define different ways of flattening a round globe onto a flat surface like a computer monitor, or a piece of paper (a map!) Cartographers or GIScientists will typically select one model, or CRS, over another, depending on the project. They make this selection based on the goals of the project, which features they want to highlight, deemphasize, or preserve. You can get started with coordinate reference systems in chapters 10-13 in the <a href="https://openpress.usask.ca/introgeomatics/chapter/measuring-and-modeling-earth/">Open Geomatics Textbook</a>.</p>

<p>There are some cases where picking a specific CRS is necessary -- for instance if you want the map to <em>look</em> a certain way, or need your geographic features defined in meters or feet for calculating distance. Many times, however, picking a specific CRS is not imperative to the project, and in those cases, we recommend defaulting to Mercator. If you have worked with us before, you know we encourage questioning default settings, so to do your due diligence, you can read more about <a href="https://source.opennews.org/articles/choosing-right-map-projection/">Mercator&#39;s pros and cons</a>. For georeferencing, we&#39;ve found it works well to start off in EPSG:4326, because it decreases the likelihood for errors down the road, especially if you want to someday bring your project to the web.</p>

<p>For this tutorial, an important fact to know about QGIS is the program will adopt as its project CRS the same CRS as the <em>first dataset added to the project.</em> Since we brought the OpenStreetMap basemap into our project as a reference layer, and since the OpenStreetMap basemap has a CRS of <em>Web</em> Mercator (EPSG code 3857), we must now change the project CRS back to regular Mercator (4326), to avoid those web problems down the road. To complete this, follow these steps:</p>


<ol>
	<li>In the bottom right-hand section of the screen where the project CRS is displayed as EPSG: 3857, click EPSG 3857 to open the Project Properties - CRS Wizard.</li>
	<li>In the search bar, type in 4326. Under Coordinate Reference System, WGS 84 4326 should now be an options you can select.</li>
	<li>Select or highlight WGS 84 EPSG:4326.</li>
	<li>Select Okay.</li>
	<li>In the bottom right-hand corner of QGIS, the project CRS should now read EPSG:4326.</li>
</ol>

<h3>Begin georeferencing</h3>

<ol start="6">
	<li>Open <code>Raster &rarr; Georeferencer</code>.

<div class="callout-box">The Georeferencing plugin comes automatically installed with recent versions of QGIS. If you do not see it, it is because it has not been enabled. To enable: navigate to Plugins &rarr; Manage &amp; Install Plugins &rarr; Installed and make sure the box next to Georeferencer GDAL is checked.<br />
Update: As of version 3.28, the georeferencer plugin is <strong>found under the <code>Layer</code> menu.</strong></div>
</li>
<li>Open the image you wish to georeference in the georeferencer, by clicking the blue checkered <code>Open Raster</code> icon in the menu banner. <img alt="Screenshot of open raster icon" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/2.png" /></li>
<li>After you have added an image to the GDAL Georeferencer, click the <code>Add Point</code> button in the menu banner. <img alt="Screenshot of add point icon" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/3.png" /></li>
<li>Choose a spot on the historical map for which you think you can find a corresponding modern location. Street intersections are a good place to start, if they still exist!</li>
<li>Choose to add the corresponding location <code>From Map Canvas</code>.</li>
<li>Find the location on the modern map.</li>
<li>Click <code>OK</code> on the Enter Map Coordinates dialog box. In the GDAL Georeferencer, the map will not automatically snap to the correct location. Preview is not available until a few points have been added.</li>
<li>Add two more control points, so that there are three total, attempting to spread the gcps on opposite corners of the map.</li>
<li>When there are three points, click the green <code>Start Georeferencing</code> button. <img alt="Screenshot of start georeferencing icon" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/5.png" /></li>
<li>The transformation settings will open. Select the following options:
<blockquote>
<p>Transformation type: <strong>Polynomial 1</strong><br />
Resampling method: <strong>Cubic</strong><br />
Target SRS: <strong>EPSG: 4326 - WGS 84</strong><br />
Output Raster: <strong>Save somewhere you will remember with a unique ID</strong><br />
Compression: <strong>LZW</strong><br />
Use 0 for transparency when needed: <strong>Checked</strong><br />
Save GCP points: <strong>Checked</strong><br />
Load in QGIS when done: <strong>Checked</strong><br />
<strong>Everything else unchecked</strong></p>
</blockquote>
</li>
<li>Click the green <code>Start Georeferencing</code> button again. A progress bar will appear.</li>
<li>The new file will be added to the QGIS document. Look at it closely to make sure everything is lining up properly.</li>
<li>To make adjustments to the georeferencing, add more control points, or delete points that are incorrect, return to the GDAL Georeferencer window:
<div class="callout-box">Use the GCP table to view error for gcps. Delete incorrect points by highlighting the row and right-clicking. When new points are added or changes are made, click the green Start Georeferencing arrow again to update the geoTIFF. The updated image will be added to the map document.</div>
</li>
<li>Make sure that the file exported has the correct name and saved properly to where you are organizing your data.</li>
<li>When the final image file has been georeferenced in a satisfactory manner and exported, navigate to the folder where it&#39;s saved. Open the .txt file in a text editor to ensure that the points are saving correctly.
<div class="callout-box">Saving control points ensures that your georeferencing efforts are backed up. If, for some reason, they did not export correctly, it is possible to export them by navigating back into the GDAL Georeferencer window and selecting File &rarr; Save GCP points as ...</div>
</li>
<li>The best way to check for image quality is to open the new geoTIFF in a photo editing software, preferably <a href="https://harvard.service-now.com/ithelp?id=kb_article&amp;sys_id=9f3244d3dba304d430ed1dca489619e0">Photoshop</a>.
<div class="callout-box">Some source image files have bit depths that are incompatible with georeferencing, and sometimes transformation settings can cause loss. Inspecting in Photoshop is a good way to check quality.</div>
</li>
<li>To start georeferencing another map, in the QGIS georeferencer, select <code>File &rarr; Reset Georeferencer</code>. Repeat this process starting at step 5.</li>
</ol>

