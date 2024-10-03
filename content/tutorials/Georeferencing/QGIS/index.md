---
title: Georeference in QGIS
date: 2023-01-20
tags: ["tutorials","georeferencing", "qgis"]
image: default-gradient.png
layout: single2
description: How to georeference maps in QGIS
---

1. [Download QGIS](https://harvardmapcollection.github.io/tutorials/qgis/download/), if you haven't already.

2. [Add a basemap](https://harvardmapcollection.github.io/tutorials/qgis/add-a-basemap/) `Browser → XYZ Tiles → Open Street Map`.

3. Set the project coordinate reference system to WGS 84. At all times in the bottom right of the QGIS document, EPSG should read 4326. 

<div class="alert-info">
<h2>
Optional context on coordinate reference systems</h2>
  Every <strong>dataset</strong> and every <strong>QGIS project</strong> each has a coordinate reference system (CRS). Coordinate reference systems allow the GIS software to know where on the world to place the dataset, how to line it up spatially. There are a number of different mathematical models that each define different ways of flattening a round globe onto a flat surface like a computer monitor, or a piece of paper (a map!) Cartographers or GIScientists will typically select one model, or CRS, over another, depending on the project. They make this selection based on the goals of the project, which features they want to highlight, deemphasize, or preserve. You can get started with coordinate reference systems in chapters 10-13 in the <a href="https://openpress.usask.ca/introgeomatics/chapter/measuring-and-modeling-earth/">Open Geomatics Textbook</a>.
  <br>
  <br>
 There are some cases where picking a specific CRS is necessary -- for instance if you want the map to <em>look</em> a certain way, or need your geographic features defined in meters or feet for calculating distance. Many times, however, picking a specific CRS is not imperative to the project, and in those cases, we recommend defaulting to Mercator. If you have worked with us before, you know we encourage questioning default settings, so to do your due diligence, you can read more about <a href="https://source.opennews.org/articles/choosing-right-map-projection/">Mercator's pros and cons</a>. For georeferencing, we've found it works well to start off in EPSG:4326, because it decreases the likelihood for errors down the road, especially if you want to someday bring your project to the web. 
   <br>
  <br>
For this tutorial, an important fact to know about QGIS is the program will adopt as its project CRS the same CRS as the <em>first dataset added to the project.</em> Since we brought the OpenStreetMap basemap into our project as a reference layer, and since the OpenStreetMap basemap has a CRS of <em>Web</em> Mercator (EPSG code 3857), we must now change the project CRS back to regular Mercator (4326), to avoid those web problems down the road. To complete this, follow these steps:
<br>
<br>
<h2>Steps to change the project CRS</h2>
<ol>
<li>In the bottom right-hand section of the screen where the project CRS is displayed as EPSG: 3857, click EPSG 3857 to open the Project Properties - CRS Wizard.</li>
<li>In the search bar, type in 4326. Under Coordinate Reference System, WGS 84 4326 should now be an options you can select.</li>
<li>Select or highlight WGS 84 EPSG:4326.</li>
<li>Select Okay.</li>
<li>In the bottom right-hand corner of QGIS, the project CRS should now read EPSG:4326.</li>
</ol>
</div>


4. Open `Raster → Georeferencer`. 
<div class="alert-info">
  The Georeferencing plugin comes automatically installed with recent versions of QGIS. If you do not see it, it is because it has not been enabled. To enable: navigate to Plugins → Manage & Install Plugins → Installed and make sure the box next to Georeferencer GDAL is checked.
  <br>
  <br>
  Update: As of version 3.28, the georeferencer plugin is <strong>found under the `Layer` menu.</strong>
</div>


5. Open the image you wish to georeference in the georeferencer, by clicking the blue checkered `Open Raster` icon in the menu banner.
![Screenshot of open raster icon](media/2.png)


6. After you have added an image to the GDAL Georeferencer, click the `Add Point` button in the menu banner.
![Screenshot of add point icon](media/3.png)


7. Choose a spot on the historical map for which you think you can find a corresponding modern location. Street intersections are a good place to start, if they still exist!

8. Choose to add the corresponding location `From Map Canvas`.

9. Find the location on the modern map.

10. Click `OK` on the Enter Map Coordinates dialog box. In the GDAL Georeferencer, the map will not automatically snap to the correct location. Preview is not available until a few points have been added.

11. Add two more control points, so that there are three total, attempting to spread the gcps on opposite corners of the map.

12. When there are three points, click the green `Start Georeferencing` button.
![Screenshot of start georeferencing icon](media/5.png)


13. The transformation settings will open. Select the following options:
> Transformation type: **Polynomial 1** <br>
Resampling method: **Cubic** <br>
Target SRS: **EPSG: 4326 - WGS 84** <br>
Output Raster: **Save somewhere you will remember with a unique ID** <br>
Compression: **LZW** <br>
Use 0 for transparency when needed: **Checked** <br>
Save GCP points: **Checked** <br>
Load in QGIS when done: **Checked** <br>
**Everything else unchecked** <br>

14. Click the green `Start Georeferencing` button again. A progress bar will appear.

15. The new file will be added to the QGIS document. Look at it closely to make sure everything is lining up properly.

16. To make adjustments to the georeferencing, add more control points, or delete points that are incorrect, return to the GDAL Georeferencer window:
<div class="alert-info">
  Use the GCP table to view error for gcps. Delete incorrect points by highlighting the row and right-clicking.
When new points are added or changes are made, click the green Start Georeferencing arrow again to update the geoTIFF. The updated image will be added to the map document.
</div>


17. Make sure that the file exported has the correct name and saved properly to where you are organizing your data.

18. When the final image file has been georeferenced in a satisfactory manner and exported, navigate to the folder where it's saved. Open the .txt file in a text editor to ensure that the points are saving correctly.
<div class="alert-info">
Saving control points ensures that your georeferencing efforts are backed up. 
If, for some reason, they did not export correctly, it is possible to export them by navigating back into the GDAL Georeferencer window and selecting File → Save GCP points as ...</div>


19. The best way to check for image quality is to open the new geoTIFF in a photo editing software, preferably [Photoshop](https://harvard.service-now.com/ithelp?id=kb_article&sys_id=9f3244d3dba304d430ed1dca489619e0). 
<div class="alert-warning">Some source image files have bit depths that are incompatible with georeferencing, and sometimes transformation settings can cause loss. Inspecting in Photoshop is a good way to check quality.</div>


20. To start georeferencing another map, in the QGIS georeferencer, select `File → Reset Georeferencer`. Repeat this process starting at step 5.



<div class="alert-success">
<h2>Give your feedback to improve our tutorials</h2>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe79XP92_ydLrD47-c2rts93a_vlAEYvbg7qqRdl0HxZ8E97Q/viewform?usp=sf_link" width="640" height="422" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>