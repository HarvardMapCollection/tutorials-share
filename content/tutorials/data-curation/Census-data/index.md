---
title: How to Download and Prepare Census Data for GIS Analysis
date: 2023-01-18
tags: ["data-curation"]
image: default-gradient.png

---

<p>To effectively map and analyze social, economic, or demographic patterns using Census data in a GIS interface, this tutorial will walk you through the process of downloading and preparing data manually.</p>

<p>This tutorial focuses on manual data preparation using spreadsheet software. While every step in this guide details manual processes, most of these tasks &ndash; including downloading, filtering, and calculating derived variables &ndash; could also be efficiently performed using programming languages like Python or R, especially for larger datasets or automated workflows.</p>

<p>For those interested in programmatic access:</p>

<ul>
	<li>Python: Explore <a href="https://developer.ipums.org/docs/v1/workflows/create_extracts/nhgis_data/" target="_blank">Python API tools</a> for direct access to NHGIS data.</li>
	<li>R: Utilize <a href="https://blog.popdata.org/accessing-nhgis-in-r-primer/" target="_blank">R packages like ipumsr</a> to integrate NHGIS data into your R-based workflows.</li>
</ul>

<p>We will cover:</p>

<ul>
	<li>Downloading high-quality, free data from NHGIS.org.</li>
	<li>Understanding and selecting appropriate geographic units.</li>
	<li>Cleaning and scaling the data using common spreadsheet software.</li>
	<li>Calculating derived variables (like percentages or rates).</li>
	<li>Mastering a methodology you can adapt for various Census variables.</li>
</ul>

<hr />
<h3>1. Downloading High-Quality Data</h3>

<p>Visit <a href="https://www.nhgis.org/" target="_blank">NHGIS.org</a>. Create a free academic use account if you haven&rsquo;t already, and log in.</p>

<p>From the NHGIS.org home screen, choose <code>START HERE: Get Data</code> in the middle of the page, or <code>SELECT DATA</code> in the navigation bar menu at the top.</p>

<p>Click <code>TOPICS</code>. You can browse broad categories (like &quot;Poverty&quot; or &quot;Race, Ethnicity, and Origins&quot;) or use the search bar to find specific variables relevant to your project.</p>

<p>Once you&#39;ve found the variables you need (e.g., specific population counts, income levels), select them using the check-box furthest to the left. Click <code>SUBMIT</code>.</p>

<p>Under <code>YEARS</code>, select the American Community Survey 5-year range or Decennial Census year most applicable to your project.</p>

<p>Under <code>GEOGRAPHIC LEVELS</code>, choose <code>CENSUS TRACT</code>.</p>

<h4>Why are we using census tracts?</h4>

<p>Censuses are collected at the individual level, but results are aggregated to specific units of geography to protect privacy. Census tracts are a popular unit for geospatial analysis because counties (the level above) can be too vague to show spatial specificity, whereas more granular geographies (such as block groups or blocks) can have a higher likelihood for sampling errors. You can learn more about the hierarchical Census geographies on <a href="https://www.census.gov/programs-surveys/geography/guidance/hierarchy.html" target="_blank">census.gov</a>. If you need help determining the best geographic level for your analysis, <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">schedule a consultation with us</a>.</p>

<p>After selecting your variables, years, and geographic levels, your <code>DATA CART</code> will reflect your selections. From your <code>DATA CART</code>, choose <code>CONTINUE</code>, <code>CONTINUE</code>, and <code>SUBMIT</code> to begin the download. If you are not logged in, you will be prompted to do so.</p>

<p>Wait a moment or so for your extract to finish processing, and then download it by selecting <code>TABLES</code>.</p>

<hr />
<h3>2. Preparing Your Data for Mapping</h3>

<p>You will have downloaded rows for every census tract in the entire United States, which is often more data than you need. Reducing your data at the outset will save time and space, especially when importing to visualization software.</p>

<h4>Editing the Scale of the Data (Filtering by State)</h4>

<p>This data cleaning portion of this tutorial is written for three spreadsheet software options: Microsoft Excel, an open (free) desktop spreadsheet tool called LibreOffice, or Google Sheets.</p>

<h5>Microsoft Excel instructions:</h5>

<ul>
	<li>Select the header row (row 1).</li>
	<li>Go to the <code>Data</code> tab on the ribbon and click <code>Filter</code>.</li>
	<li>Click the down arrow next to the column header containing state names (e.g., &#39;STATEA&#39;).</li>
	<li>Uncheck <code>(Select All)</code> and then check the box next to the desired state(s). Click <code>OK</code>.</li>
</ul>

<h5>LibreOffice instructions:</h5>

<ul>
	<li>Select any cell within your data range.</li>
	<li>Go to <code>Data</code> in the top menu and select <code>AutoFilter</code>.</li>
	<li>Click the down arrow next to the column header containing state names.</li>
	<li>Uncheck <code>All</code> and then select the desired state(s). Click <code>OK</code>.</li>
</ul>

<h5>Google Sheets instructions:</h5>

<ul>
	<li>Select any cell within your data range.</li>
	<li>Go to <code>Data</code> in the top menu and select <code>Create a filter</code>.</li>
	<li>Click the <code>filter icon</code> (upside-down triangle) in the column header for state names.</li>
	<li>Click <code>Clear</code> and then select the desired state(s). Click <code>OK</code>.</li>
</ul>

<h4>Scaling Data More Granularly (Filtering by County/City)</h4>

<p>Once you&#39;ve reduced your records to a specific state (e.g., New York State), you can further scale down your data by filtering records by a particular county or a group of counties (e.g., the counties associated with New York City). You will use the same filtering steps as above, applying them to the county-level column in your dataset. If you need assistance with specific filtering strategies, <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">schedule a consultation with us</a>.</p>

<hr />
<h3>3. Calculating Derived Variables: A Step-by-Step Example (Poverty Rate)</h3>

<p>Many valuable Census variables, like percentages or rates, need to be <em>derived</em> from raw population counts. This process is often called normalization in data and GIS analysis. When seeking spatial patterns in mapped and visualized data, understanding ratios (normalized values) is often more useful than looking at raw counts, as counts can be misleading where populations are dense. However, this approach does not apply to all variables; readers should think critically about whether their variable should be represented as a count or a ratio to truly reflect what they intend to show. For assistance in determining the best representation for your data, please <a href="https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank">consult our team at the Harvard Map Collection</a>.</p>

<p>From your downloaded folder, open the codebook. The file should read something like <code>nhgis00xx_ds262_20225_tract_codebook.txt</code>. This codebook details the meaning of each variable.</p>

<p>For Poverty Rate, your goal is to divide the number of people below a certain poverty level by the total population for whom poverty status is determined.</p>

<ul>
	<li><code>AMZME002</code> is the number of people with income under 0.50 of the poverty level.</li>
	<li><code>AMZME003</code> is the number of people with income between 0.50 and 0.99 of the poverty level.</li>
	<li><code>AMZME001</code> is the total population for whom poverty status is determined.</li>
</ul>

<p><strong>Poverty Rate Equation:</strong><br />
<code>Poverty Rate = (AMZME002 + AMZME003) / AMZME001 * 100</code></p>

<p><strong>Steps to create the column:</strong></p>

<ul>
	<li>Create a new column in your spreadsheet software called <code>POVERTY_RATE</code>.</li>
	<li>In the second cell of the new column (e.g., <code>B2</code>), enter the equation (example for Excel/Sheets): <code>= IFERROR((AR2 + AS2)/AQ2 * 100, 0)</code>
	<ul>
		<li><code>IFERROR</code> catches null values in the source Census data. We ask the function to return 0 instead of an error message if the function can&rsquo;t carry out the calculation.</li>
	</ul>
	</li>
	<li>Fill down to complete the column by double-clicking the plus sign on the cell with the formula, or dragging the fill handle.</li>
	<li>Save your file, making sure to choose the <strong>.CSV</strong> format.</li>
</ul>

<hr />
<h3>4. Adapting for Other Census Variables &amp; Calculations</h3>

<p>The methodology demonstrated above is flexible. You can apply the same principles to calculate other derived variables (like percentages of specific populations) from raw Census counts.</p>

<p><strong>To create a derived percentage or rate for <em>your</em> specific variable:</strong></p>

<ol>
	<li><strong>Consult the Codebook:</strong> Open the <code>codebook.txt</code> file from your NHGIS download. Carefully identify:

<ul>
	<li>The variable representing your <strong>total population or denominator</strong> (e.g., <code>AQNGE001</code> for Total Population in the Race data).</li>
	<li>The variables representing the <strong>specific population segment(s) you want to include in your numerator</strong>. (e.g., for &quot;Percent Non-White,&quot; you would sum <code>AQNGE003</code> through <code>AQNGE008</code> and potentially other relevant categories). Pay close attention to any notes about duplicate values or subtotals, as sometimes certain categories are already included in others (e.g., <code>AQNGE009</code> and <code>AQNGE010</code> in Race data are often breakdowns of <code>AQNGE008</code> and should not be double-counted).</li>
</ul>
</li>
<li><strong>Construct Your Equation:</strong> Use the sum of your chosen numerator variables, divide by your total population/denominator, and multiply by 100 to get a percentage.
<ul>
	<li><strong>Example (Percent Non-White):</strong> <code>(AQNGE003 + AQNGE004 + AQNGE005 + AQNGE006 + AQNGE007 + AQNGE008) / AQNGE001 * 100</code></li>
</ul>
</li>
<li><strong>Apply in Spreadsheet Software:</strong> Create a new column and enter your custom formula, then fill down.</li>
<li><strong>Save as CSV:</strong> Always save your final prepared data in a .CSV format for easy import into GIS software.</li>
</ol>

<hr />
<h3>5. Finalizing Your Data for GIS</h3>

<p>You now have a dataset ready for GIS mapping. Use the <strong>GEOID</strong> column (which uniquely identifies each Census tract) to join this data with a Census tract shapefile in your GIS software. The newly computed derived field (e.g., <code>POVERTY_RATE</code> or <code>PCT_NONWHITE</code>) will then power your visualization.</p>

<p>For a step-by-step guide on how to join tabular data in QGIS and create a map, please refer to our tutorial on Performing a Table Join.</p>


