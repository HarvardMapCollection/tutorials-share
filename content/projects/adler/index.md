---
title: Vectorizing Historic Maps for Spatial Analysis
date: 2025-09-12
tags: ["applied-projects", "news"]
image: cover.png
layout: single2
description: This guide demonstrates a method for transforming old maps into new, analyzable digital map data. It shows how an undergraduate used this process to study changes in Harvard's campus over time, particularly land development and ownership. The guide highlights the use of the Harvard Map Collection's resources and expertise in facilitating student research.
---

<h3>Generating Geospatial Data from Historic Maps: A Step-by-Step Guide</h3>

<p>This project illustrates a core methodology supported by the Harvard Map Collection: transforming static historic maps into analyzable geospatial data. Through our partnership with Joyce Chaplin&#39;s &#39;Re-Wilding Harvard&#39; course, this initiative empowered students to investigate the evolving histories and changing natures of open space within Harvard&#39;s campus and its surroundings, showcasing the library&#39;s critical role in digital scholarship.</p>

<p>Hannah Adler &#39;25, a student from the course, undertook an ambitious project focusing on the Charles River region of Harvard&#39;s campus, particularly the area near Memorial Drive in Cambridge.</p>

<blockquote>&quot;I was interested in the Harvard Square adjacent area near the river, because today we think of the river walkways and Memorial Drive, especially when it&rsquo;s closed as a really valuable open space. I also had seen an image in HOLLIS that conveys a certain set of aesthetic ideals with how people were imagining the riverside could be.</blockquote>

<div class="iframe-container"><iframe height="700" sandbox="allow-scripts allow-same-origin" src="https://iiif.lib.harvard.edu/manifests/view/ids:3043928$1i" title="New Boston and Charles River Basin, 1880" width="100%"></iframe></div>

<figcaption><a href="https://iiif.lib.harvard.edu/manifests/view/ids:3043928$1i" target="_blank">New Boston and Charles River Basin, 1880</a></figcaption>

<p>Drawing on her foundational GIS coursework, Adler sought expert guidance from the Harvard Map Collection to incorporate advanced spatial analysis techniques into her historical inquiry. Through consultation, she aimed to investigate key questions such as:</p>

<ol>
	<li>What did the development process look like in this area? How rapidly did this region change?</li>
	<li>What was Harvard&#39;s role in developing this area?</li>
</ol>

<p>Hannah partnered with GIS Librarian Belle Lipton in a collaborative consultation to model and refine the spatial data approaches essential for addressing these questions.</p>

<h3>Finding Map Sources</h3>

<p>As part of this collaborative process, GIS Librarian Belle Lipton recommended <a href="https://www.atlascope.org/" target="_blank">Atlascope</a>, a powerful online tool which includes fire insurance maps held by the Harvard Map Collection, which integrates over 100 historical atlases of Boston and Cambridge. Atlascope serves as a dynamic GIS viewer, enabling researchers to seamlessly compare temporal layers as live geospatial data. This resource was instrumental in revealing the precise historical changes Adler sought to investigate, providing direct access to GIS layers for her project.</p>

<div class="iframe-container"><iframe height="700" sandbox="allow-scripts allow-same-origin" src="https://atlascope.org/#/view:share$mode:swipe-x$center:-71.11890,42.36865$zoom:16.58$base:massgis-2023-orthos$overlay:ark:/76611/al88ruzla" title="Hannah" width="100%"></iframe></div>

<figcaption><em>Toggle between 1873, 1903, 1916, and 1930 to see changes in the urban landscape.</em></figcaption>

<h3>Vectorizing: Transforming Historic Maps into Analyzable Data</h3>

<p>Following the identification of key temporal snapshots (1873, 1903, 1916, and 1930) and the acquisition of their corresponding GIS layers via Atlascope, the next step involved transforming these historical map images into structured, analyzable polygon data. This meticulous process, known as vectorization, entailed digitally tracing the boundaries of individual land parcels and annotating them with relevant attributes, thereby enabling the quantitative measurement of spatial and temporal changes. This transformation turns visual information into queryable data, unlocking new research insights.</p>

<h3>Attribute Information: Adding Meaning to Spatial Features</h3>

<p><img alt="vector polygons" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1873-1.png" /></p>

<p><em><span style="color:#cd782e;">Orange</span> indicates parcels that are undeveloped in 1873, meaning they have <span style="color:#cd782e;">no structures</span> on them. <span style="color:#8c5fed;">Purple</span> are developed parcels, or parcels <span style="color:#8c5fed;">with structures</span> on them.</em></p>

<p>Upon generating the foundational shape data for each parcel, Adler enriched the GIS table by adding new columns, or attributes, capturing specific variables derived from the historical maps for analysis:</p>

<ul>
	<li><strong>Development Status:</strong> A binary value indicating whether a parcel had a structure (<code>true</code>) or was undeveloped (<code>false</code>) in 1873.</li>
	<li><strong>Land Ownership:</strong> The name of the landowner in 1873, extracted directly from the historical maps.</li>
</ul>

<p><img alt="vector polygons yellow" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1873-2.png" /></p>

<p><em>The maps <span style="background-color:#FFFF00;">highlighted in yellow</span> indicate parcels <span style="background-color:#FFFF00;">owned by Harvard</span> in 1873.</em></p>

<p>Adler rigorously repeated this vectorization and attribute encoding process for each selected temporal snapshot, building an historical geospatial dataset suitable for longitudinal analysis and comparison.</p>

<h4>1873</h4>

<table>
	<thead>
		<tr>
			<th>Development</th>
			<th>Harvard-ownership</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><img alt="Vectorized parcels" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1873-1.png" /></td>
			<td><img alt="Vectorized parcels with Harvard highlighted" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1873-2.png" /></td>
		</tr>
	</tbody>
</table>

<h4>1903</h4>

<table>
	<thead>
		<tr>
			<th>Development</th>
			<th>Harvard-ownership</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><img alt="Vectorized parcels" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1903-dev.png" /></td>
			<td><img alt="Vectorized parcels with Harvard highlighted" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1903-h.png" /></td>
		</tr>
	</tbody>
</table>

<h4>1916</h4>

<table>
	<thead>
		<tr>
			<th>Development</th>
			<th>Harvard-ownership</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><img alt="Vectorized parcels" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1916-dev.png" /></td>
			<td><img alt="Vectorized parcels with Harvard highlighted" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1916-h.png" /></td>
		</tr>
	</tbody>
</table>

<h4>1930</h4>

<table>
	<thead>
		<tr>
			<th>Development</th>
			<th>Harvard-ownership</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><img alt="Vectorized parcels" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1930-d.png" /></td>
			<td><img alt="Vectorized parcels with Harvard highlighted" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/1930-h.png" /></td>
		</tr>
	</tbody>
</table>

<h3>Area Analysis</h3>

<p>Leveraging the quantitative power of GIS, Adler then performed precise area calculations to determine the square meterage of each parcel type. Because these vectorized shapes correspond to real-world locations and are properly projected into standard coordinate reference systems, GIS tools accurately report the true ground area they represent, enabling quantitative analysis from historical sources.</p>

<p>Adler used the coordinate reference system <code>Massachusetts State Plane</code> or <code>EPSG: 26986</code>, which is the same coordinate reference system Massachusetts uses to store GIS data in <a href="https://www.mass.gov/info-details/learn-about-massgis-data" target="_blank">MassGIS</a>, the state&#39;s open geodata portal. This generates area calculations in the unit of <code>square meters</code>.</p>

<p>Adler exported the area calculations to tabular formats (<code>.csv</code>), so she could analyze them further using other software, such as <code>R</code>. Her findings are presented in the following table.</p>

<p><img alt="table" loading="lazy" src="https://d2jv02qf7xgjwx.cloudfront.net/accounts/289282/images/table.png" /></p>

<p>While the total area developed (parcels with structures on them) increases only a small amount between 1873 and 1930, the area owned by Harvard increases dramatically during this period. Adler reported that there were many other variables included in the historic atlases one could choose to encode and then apply this same methodology to, whereby one calculates area based on a subsetted attribute filter of the traced parcels.</p>

<p>The complete project data, curated and structured for reuse, is publicly available for download through the <a href="https://hgl.harvard.edu/catalog/harvard-rtl-rewilding-charles-river-land-ownership" target="_blank">Harvard Geospatial Library (HGL)</a>, contributing to a community of shared, analyzable datasets and methodologies for geospatial humanities scholarship.</p>

<ol>
	<li>Select <code>https://doi.org/10.17605/OSF.IO/C9GV3</code>.</li>
	<li><code>Files</code> across the top menu bar.</li>
	<li><code>Download this folder</code>.</li>
</ol>

<p>To follow these steps on your own, use our&nbsp;<a href="https://guides.library.harvard.edu/c.php?g=1477394&amp;p=11039032" target="_blank">QGIS: Vectorizing from Historic Maps Tutorial</a>.</p>

