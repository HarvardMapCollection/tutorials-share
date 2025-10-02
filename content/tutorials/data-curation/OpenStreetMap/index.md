---
title: Accessing OpenStreetMap Data Guide
date: 2023-01-18
tags: ["data-curation"]
image: subregions.gif

---

<p>OpenStreetMap (OSM) offers a rich and dynamic source of geospatial data, often filling gaps where traditional datasets are unavailable. This guide explores two methods for extracting OSM data, allowing you to choose the approach that best suits your project&#39;s requirements: a general extraction of common features, and a more specific extraction based on feature type.</p>

<p>Before diving into the extraction methods, it&#39;s helpful to understand the nature of OpenStreetMap data. OSM is a collaborative, crowd-contributed project, akin to Wikipedia for maps. This means its data is constantly updated by users worldwide, offering a broad range of information but also requiring a nuanced understanding of its completeness and accuracy.</p>

<div class="callout-box">
<h4>When to Use OpenStreetMap Data</h4>

<p>If you need quick base layers, a general visual sense of a place, or data for areas where official datasets are scarce, OSM is a valuable resource. It&#39;s excellent for obtaining information on roads, rivers, trails, buildings, and other common features.</p>

<p>However, for projects requiring verifiable data sources with robust data collection methodologies, OSM data may not be sufficient on its own due to its crowd-sourced nature. In such cases, it&#39;s crucial to exercise the same healthy skepticism you would with any user-contributed content and consider supplementing with official sources when available.</p>
</div>

<hr />
<h3>Method 1: Extracting Standard Data Layers via GeoFabrik</h3>

<p>This method is ideal when you need a broad set of common map features like waterways, buildings, transport networks, places, and land use data for a particular region. It&#39;s a straightforward approach for obtaining pre-packaged data extracts.</p>

<h4>Understanding GeoFabrik Extracts</h4>

<p><a href="https://download.geofabrik.de/" target="_blank">GeoFabrik</a> is a service that provides daily updated OSM data extracts for various regions around the world. These extracts are convenient because they are pre-processed and ready for use in common GIS software.</p>

<h4>Step-by-Step Guide to Downloading Data from GeoFabrik</h4>

<ol>
	<li>Visit <a href="https://download.geofabrik.de/" target="_blank">GeoFabrik</a>, a tool providing OSM data that is updated daily.

<ul>
    <li><em>Remember, this data is crowd-contributed, so it changes every day.</em></li>
</ul>
</li>
<li>Select the appropriate region. For example, if you&#39;re searching for data for Venice, Italy, you would select &quot;Europe&quot;.</li>
<li>Select the additional sub-region. Following the Venice example, since Venice is in the Northeast of Italy, you would select &quot;Nord-Est&quot;.</li>
</ol>

<div class="callout-box">
<h4>Tip</h4>

<p>When navigating the sub-regions on the GeoFabrik site, you can often see a preview of the geographic extent associated with each selection.</p>
</div>

<ol start="4">
	<li>To use this data in a typical desktop GIS environment such as ArcGIS Pro or QGIS, select the .shp.zip quick link. This will download the data to your computer.
	<p>The data comes downloaded in multiple layers, each representing a different kind of data. For instance, you will find:</p>

<ul>
    <li>waterways</li>
    <li>transport</li>
    <li>places</li>
    <li>land use</li>
    <li>buildings</li>
</ul>

<p>Each of these layers is available as a <a href="https://cartinal.leventhalmap.org/guides/file-formats.html#shapefile" target="_blank">shapefile</a> you can use in GIS software.</p>

<p>Also included in the download is a README file, which links to documentation. In the documentation, you can read the data attributes and understand how to interpret the data.</p>

<p>The documentation is available as a PDF, <a href="https://download.geofabrik.de/osm-data-in-gis-formats-free.pdf" target="_blank">OpenStreetMap Data in Layered GIS Data Format</a>.</p>
</li>
</ol>

<hr />
<h3>Method 2: Specifying Feature Types with QGIS QuickOSM Plugin</h3>

<p>This method is more granular, allowing you to extract data for a specific type of feature within a particular geographic extent. It&#39;s particularly useful when you need to isolate certain elements, such as all shopping malls or bicycle repair shops, and don&#39;t want to sift through broader datasets.</p>

<h4>How OpenStreetMap Data is Created and Tagged</h4>

<p>To effectively extract specific feature types, it&#39;s helpful to understand how data is entered into OSM. Any OSM user can add points, lines, and polygons to represent real-world phenomena. While there are standards for how data should be tagged, qualitative information about each feature is often optional. This means a restaurant might be tagged with a specific cuisine type in one instance, and have a blank or null value for &quot;cuisine&quot; in another.</p>

<p>OSM defines standard ways for entering feature data, but sometimes people enter data incompletely or incorrectly.</p>

<h4>Query Tips for Specific Feature Extraction</h4>

<p>Before using an extraction tool like the QuickOSM QGIS plugin, it&#39;s helpful to research how features are typically tagged in the area you&#39;re interested in.</p>

<p>The first step is to consult the <a href="https://wiki.openstreetmap.org/wiki/Map_features" target="_blank">OpenStreetMap Map Features Wiki</a> and identify how a feature is supposed to be tagged. For instance, if you&#39;re looking for shopping malls, the suggested key-value pair is <strong>shop</strong> and <strong>mall</strong>, respectively.</p>

<p>In practice, however, features can be tagged in various ways. For example, a contributor might tag a building correctly using the <strong>shop</strong> key with the <strong>mall</strong> value, while another might use the <strong>building</strong> tag with <strong>mall</strong> as the value.</p>

<p>Such tagging variations are important to note because queries are constructed by supplying key-value pairs to the extraction tool. If a significant number of your desired features are tagged differently than the OSM standard, you&#39;ll need to account for this when building your query.</p>

<h5>Reverse Search Strategy</h5>

<p>We suggest visiting <a href="https://www.openstreetmap.org/#map=18/-6.22574/106.81122" target="_blank">OpenStreetMap (OSM)</a> first and inspecting the attributes of a selection of your desired features. You can inspect attributes by right-clicking an area on the map, selecting &quot;Query features&quot;, and clicking on the feature you are interested in. Note how the data is structured, and remember it for when you are building your query.</p>

<h4>How to Export Data with QuickOSM</h4>

<ol>
	<li>Download <a href="https://mapping.share.library.harvard.edu/tutorials/software-access/qgis/">QGIS</a> if you haven&#39;t already.</li>
	<li>In the main (top, horizontal) QGIS menu, select &quot;Plugins&quot;, then &quot;Manage and Install Plugins&quot;.</li>
	<li>Search for &quot;QuickOSM&quot; and install the plugin.</li>
	<li>Once installed, the plugin will appear under the &quot;Vector&quot; menu in the main QGIS menu. Select &quot;Vector&quot;, then &quot;QuickOSM&quot;, then &quot;QuickOSM&quot;. The QuickOSM wizard will open.
	<div class="callout-box">
	<p>There are more advanced ways to build queries using this tool, but we are going to stick with the QuickQuery tab, which requires only the key, value, and location.</p>
	</div>
	</li>
	<li>In the QuickQuery tab, input the appropriate key, value, and location for your desired features. For example, to find malls in Jakarta:
	<ul>
		<li>key: shop</li>
		<li>value: mall</li>
		<li>location: Jakarta</li>
	</ul>
	</li>
	<li>Select &quot;Run query&quot;.
	<p>The tool will automatically render all available features as data layers in your QGIS document. For features like malls, you might see both a point and polygon layer.</p>

<p>If your query returns no features, it&#39;s possible that no features of that type have been contributed in the area you are searching. However, it&#39;s also highly likely you may need to construct your query differently. We suggest researching how your desired features have been tagged in OpenStreetMap, as outlined in the reverse search section above, and trying different queries where appropriate.</p>

<div class="callout-box">
<h5>Example Alternate Query</h5>

<p>If the initial query for &quot;shop&quot; and &quot;mall&quot; doesn&#39;t yield results, you might try:</p>

<ul>
    <li>key: building</li>
    <li>value: mall</li>
    <li>location: Jakarta</li>
</ul>
</div>

<p>If a significant number of features have alternate tagging, you can export them separately and then later <a href="https://guides.library.duke.edu/QGIS/Merge" target="_blank">merge the shapefiles</a> together to create one complete layer. For instance, a query using building and mall as key-value pairs for Jakarta returned thirty-three instances of malls.</p>

<p>To save the results as a new data layer, right-click the layer in the layer list and select &quot;Export&quot;. Choose &quot;Save features as&quot; and save the data someplace logical, naming the file and selecting &quot;geoJSON&quot; as the filetype.</p>
</li>
</ol>

