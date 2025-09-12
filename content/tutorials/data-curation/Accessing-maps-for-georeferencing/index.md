---
title: Accessing Maps for Georeferencing
date: 2025-09-12
tags: ["data-curation"]
image: filing.png

---

<p>This guide will walk you through finding georeferenced historic maps from the Harvard Map Collection and understanding the difference between raster and vector data.</p>

<hr />
<h3>Finding a historical map to use</h3>

<p>Depending on your project topic, it may be useful to be able to compare information from historic maps against the modern layers you are working with.</p>

<p>Many map library special collections allow you to download versions of their maps in formats that are already spatial data, and will be compatible with GIS mapping.</p>

<h4>How does it work?</h4>

<h5>Paper maps!</h5>

<p>In the Harvard Map Collection, there are thousands of drawers of flat filing cabinets that contain hundreds of thousands of maps.</p>

<p><img alt="Flat filing cabinets" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/filing.png" /></p>

<p>Here is one of these drawers open to find a folder full of maps of Cambridge, MA. Pictured here is a map from 1865 in one of the Harvard Map Collection&#39;s flat filing cabinet drawers.</p>

<p><img alt="map in drawer" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/map.jpg" /></p>

<h5>Library catalog</h5>

<p>If you visit the Harvard Library catalog, <a href="https://hollis.harvard.edu/primo-explore/search?query=any,contains,map%20cambridge&amp;tab=books&amp;search_scope=default_scope&amp;vid=HVD2&amp;facet=library,include,map&amp;lang=en_US&amp;offset=0">HOLLIS</a>, you can:</p>

<ul>
	<li>Change the initial search drop-down from <code>Catalog &amp; Articles</code> to <code>Library Catalog</code> to show only items held by the library, and exclude journal articles.</li>
	<li>Scroll down to the <code>Location</code> filter on the right, and filter by <code>Harvard Map Collection</code></li>
</ul>

<p>You&#39;ll notice that some of the maps from the Harvard Map Collection have been scanned and added to the catalog record, so that you can view the map in high-resolution online from a link in the catalog that says <code>ONLINE ACCESS</code>.</p>

<p><img alt="map listings in HOLLIS" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/hollis2.png" /></p>

<p>On the other hand, many of the maps in the Harvard Map Collection do not have online access links, and they are listed in the catalog as records only; the records are there simply to let you know you can request to come see these items if you visit the map collection.</p>

<p>If you find a map in the HOLLIS catalog that does <em>not</em> have online access, from the HOLLIS catalog record, you can request this item. Then, you can <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/">make an appointment</a> with the Harvard Map Collection to come see the map. If you think it would work for your project, you can request a scanned copy, and use that image file to perform <a href="https://mapping.share.library.harvard.edu/tutorials/georeferencing/qgis/">georeferencing</a>.</p>

<p><img alt="Process of georeferencing" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/georef.gif" /></p>

<p>This process will result in a file in <code>.TIF</code> or <code>.geoTIFF</code> format that you can layer along with your other map layers.</p>

<p><img alt="Georeferenced map" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/map3.png" /></p>

<p>You can obtain <code>.TIF</code>, <code>.JPEG</code>, or <code>.PNG</code> images of maps anywhere to georeference. Archival map collections are a great source, because:</p>

<ul>
	<li>Special map collections have a lot of maps</li>
	<li>Special map collections scan and preserve maps with a high degree of image resolution, which results in clear and legible versions of the maps once they become a GIS layers</li>
	<li>Sourcing maps from special collections will ensure you are able to cite your map data</li>
</ul>

<p>Once the Harvard Map Collection has scanned a map (for a patron request, for an exhibition, etc.), we add that image to the HOLLIS catalog record. Here is an example of the map of Cambridge&#39;s HOLLIS record, denoting <code>ONLINE ACCESS</code>.</p>

<p><img alt="map in HOLLIS" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/hollis.png" /></p>

<p>And here is an embedded version of the online access viewer. Note how you can zoom in and pan around with a high degree of image resolution.</p>

<div class="iframe-container"><iframe frameborder="0" height="700" sandbox="allow-scripts allow-same-origin" src="https://iiif.lib.harvard.edu/manifests/view/ids:2568928" title="Map of the city of Cambridge for 1865" width="100%"></iframe></div>

<figcaption class="append"><a href="https://curiosity.lib.harvard.edu/scanned-maps/catalog/44-990094789400203941">Map of the city of Cambridge for 1865, Harvard Map Collection.</a></figcaption>

<p>If a map has already been scanned and is available to view from HOLLIS, you can georeference the map following this <a href="https://mapping.share.library.harvard.edu/tutorials/georeferencing/allmaps/">step-by-step tutorial</a>.</p>

<h5>Harvard Geospatial Library</h5>

<p>In addition to a catalog of our map holdings, the Harvard Map Collection also maintains an <a href="https://hgl.harvard.edu/">online repository for spatial data</a>. This includes point, line, and polygon data such as the census and infrastructure data we have been working with so far. It also includes, however, pre-georeferenced versions of many of the maps in our archival special collections.</p>

<p>Before you decide to georeference a map on your own, you may want to check to see if we already have one that could work for your project!</p>

<h3>Search for georeferenced maps</h3>

<ol>
	<li>Visit the Harvard Geospatial Library (HGL), <a href="https://hgl.harvard.edu/">https://hgl.harvard.edu/</a>.</li>
	<li>Type in a search term and click <code>Search</code>.</li>
	<li>Under the <code>Institution</code> filter, choose <code>Harvard</code>. Under <code>Data Type</code> choose <code>Raster</code>. <em>There are currently only raster options available for this search term, but the data type filter allows you to differentiate between results of scanned maps (raster) and modern GIS data (points, lines, and polygons).</em></li>
</ol>

<h3>What is the difference between vector and raster data?</h3>

<p>One common data type in GIS is called vector data, which abstracts features of the world into point, line, and polygon representations of geography, each of which has a tabular correlate with attribute feature information. This could mean census tracts (polygons) with tabular &quot;attribute&quot; information about census populations. Or, locations of unique addresses (points) with information about something that happened there.</p>

<h4>Vector data</h4>

<p><img alt="vector points lines polygons" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1.jpeg" /></p>

<p>File formats for vector can be:</p>

<ul>
	<li>shapefiles (<code>.shp</code>)</li>
	<li>geojsons (<code>.geoJSON</code>)</li>
	<li>geopackage (<code>.gpkg</code>)</li>
</ul>

<h4>Raster is formatted differently</h4>

<p>Raster data is structured completely differently. We use images containing grids of pixels. Each pixel represents some unit of measurement on the earth and will often have a value.</p>

<p><img alt="Raster grid" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/pixelgrid.png" /></p>

<p>Raster imagery is often collected by satellite.</p>

<p>A common example of raster data are digital elevation models (DEMs). Each pixel in the grid has a value about how high or low the surface of the earth is.</p>

<p><img alt="DEM" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/image10.png" /></p>

<p>These values can be used to symbolize elevation or perform different kinds of terrain analysis.</p>

<p><img alt="land cover" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/esri-land-use-cover-2020-map.jpg" /></p>

<p>Another popular type of raster data is land use data. Each pixel has a categorical value which indicates what type of land use any given area pertains to.</p>

<details open=""><summary><span style="font-size:16px;">What do <strong>vector</strong> and <strong>raster</strong> data have in common?</span></summary>

<p>They are both spatial data! Even though these different types of GIS data are structured differently, they share that they are both encoded with location metadata, which lets GIS software place them in relationship with real geography.</p>
</details>

<p><img alt="map pixellated" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/pixellated.png" /></p>

<p>Georeferenced maps are raster data, because they are images organized as grids of pixels. In the case of georeferenced maps, however, the value represented by each pixel is usually just the RGB color code to tell the program which colors to display the map as.</p>

<h5>Raster formats</h5>

<ul>
	<li>The file format for a georeferenced map is typically a <code>.geoTIFF</code>.</li>
</ul>

<div class="callout-box">
<h3>Georeferencing</h3>

<p>Georeferencing historic maps is somewhat more of an art than a science, and the tools can be sensitive. Budget time for troubleshooting. You can use the <a href="https://guides.library.harvard.edu/c.php?g=1477394&amp;p=11028769">georeferencing tutorial </a>to get started.</p>
</div>

<h3>Next steps</h3>

<p>If you&#39;ve successfully georeferenced a map, and would like to learn how to extract data for analysis, check out our tutorial, <a href="https://guides.library.harvard.edu/c.php?g=1477394&amp;p=11039032">Vectorizing from Historic Maps Tutorial</a>.</p>

<hr />
<div class="callout-box">
<h3>Give your feedback to improve our tutorials</h3>
<iframe frameborder="0" height="422" marginheight="0" marginwidth="0" sandbox="allow-scripts allow-same-origin" src="https://harvard.az1.qualtrics.com/jfe/form/SV_4OdXbDAe7c7fFzM" style="display: block; margin: 0 auto; min-height: 600px; overflow: hidden;" width="100%"></iframe></div>
