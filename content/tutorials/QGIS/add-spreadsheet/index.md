---
title: Add a spreadsheet .XLSX or .CSV to a QGIS Project
date: 2023-01-18
tags: ["qgis", "file-formats"]
image: add-csv.png
layout: single2
---

This tutorial will cover how to add tabular data to a QGIS project.

1. If your spreadsheet is saved in `.XLSX` format, export it as a `.CSV` before bringing it into QGIS. QGIS **will not** be able to read `.XLSX`.

<div class="alert-success">
  To ensure interoperability, it's best to err on the side of encoding data in open data formats, such as .csv, .geoJSON or geopackage.
  </div>

2. Once you have spreadsheet data saved in `.CSV` format, open [QGIS](https://mapping.share.library.harvard.edu/tutorials/census-data-primer/download-software/).

3. In the main QGIS menu (banner across the top of the computer screen), select `Layer → Add Layer → Add delimited text layer`.
![Screenshot of the add delimited text wizard in QGIS](media/1.png)

4. Under `File name` select the ellipses dots icon to navigate to the `.csv` you wish to import.

5. Pay attention to `Record and Field options`. You can start by accepting the defaults, but depending on the way your data is structured, you may want to make use of some of these settings.

6. If your table...

| ...has coordinates | ...does not have coordinates |
| --- | --- |
| QGIS will be able to display the rows as points. Select `Point coordinates` and define which field in the spreadsheet is `X` (longitude), and which is `Y` (latitude).| Later on you'll [perform a join](/tutorials/census-data-primer/perform-a-table-join/). For now under `Geometry definition` select `No Geometry (attribute only table)`. |


7. Select `Add`.

8. Select `Close`.

<div class="alert-danger">
<h2>Add button not highlighted?</h2>
<p>If the "Add" button is greyed out, it is probably a sign that you have not selected a coordinate reference system. Maybe it says something like "invalid projection".</p>
<img alt="add projection wizard" src="media/invalid-proj.png">
<p>If you are unsure which projection to use, you can start with WGS 84. Open the dialog box by clicking where it says "invalid projection", and search for the WGS 84 code, "4326". Set this as the coordinate reference system, and then the "Add" button should re-appear.</p>
<p>You can also <a href="https://mapping.share.library.harvard.edu/tutorials/qgis/change-crs/">Learn more about working with coordinate reference systems in QGIS</a>.</p>
</div>

<div class="alert-warning">
<h2>Example data</h2>
 <p>Please find an <a href="https://drive.google.com/file/d/1dBbqzEm3vq7zANaTiqquekefiCJIWkqd/view?usp=sharing" target="_blank" download>example spreadsheet</a> saved as a .csv with the latitude and longitude formatted correctly so that it should import as points in QGIS. </p>
 <p>You can also <a href="https://mapping.share.library.harvard.edu/resources/workshops/workshop-4/working-with-locations/">practice working with location data</a>, and start to visualize it in a shareable web map.</p>
</div>




<div class="alert-success">
<h2>Give your feedback to improve our tutorials</h2>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIFB5VI2ijy9pIPByQB0Ci4K49vu_2htzeW9Y71B-b3Ps_gQ/viewform?embedded=true" width="640" height="422" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>


