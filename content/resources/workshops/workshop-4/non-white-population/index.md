---
title: How to download percent non-white population data by census tract for GIS
date: 2024-07-20
tags: ["census", "felt"]
image: cover.png
layout: single2
description: We will download non-white population data for the United States and filter it to New York City for use with GIS mapping.
---

In order to  map non-white population per census tract, you must first perform some steps to prepare the data. In this tutorial, we will practice:
* Downloading high-quality data
* Cleaning the data to prepare it for mapping

## Downloading the data

You can achieve these steps using a number of software environments, including R and Python. In this tutorial we will download the data manually from NHGIS.org, and show how to clean the data using 3 different spreadsheet tools: Excel, LibreOffice, and Google Sheets.


1. Visit [NHGIS.org](https://www.nhgis.org). Create a free academic use account, if you haven't already, and log in.

2. From the [NHGIS.org](https://www.nhgis.org) home screen, choose `START HERE: Get Data` in the middle of the page, or `SELECT DATA` in the navigation bar menu at the top of the page.
![Get data in NHGIS.org](media/get-data.png)

3. Click `TOPICS`.
![topics filter on nhgis.org](media/topics.png)

4. Scroll down and choose `Race` from the `RACE, ETHNICITY, AND ORIGINS` tab. Check off this item using the check-box furthest to the left.
![poverty topic in nhgis.org](media/race.png)

5. Click `SUBMIT`.

7. Under `YEARS` select whichever American Community Survey 5-year range is most applicable to your project. 
![nhgis years tab](media/acs-years.png)

8. Under `GEOGRAPHIC LEVELS` choose `CENSUS TRACT`
![nhgis geography filter](media/geographic-levels.png)

<div class="alert-info">
  <h3>Why are we using census tracts?</h3>
  <p>Censuses are collected at the individual level. When you fill out a census form, you fill it out for yourself, or for your household. Survey results for each household are generally not released to the public, as a way of protecting people's privacy. Instead, individual results are <strong>aggregated</strong> to specific units of geography. These units have been pre-drawn by the United States Census Bureau. You can learn more about the hierarchical census geographies on <a href="https://www.census.gov/programs-surveys/geography/guidance/hierarchy.html">census.gov</a>.</p>
  <p>Census tracts are a popular unit for geospatial analysis, because counties, the level above, can be too vague to show spatial specificity, whereas more granual geographies, such as block groups or blocks can have a higher likelihood for sampling errors.</p>


</div>

9. In the `SELECT DATA` table, click the table heading `POPULARITY`. This will sort the resulting datasets from most to least commonly downloaded.
![toggle by popularity in nhgis.org](media/select-popularity.png)


10. Select the first result, "Race" by clicking the green check-box to the left of the result. You will see the source table reflected in your your `DATA CART: 1 SOURCE TABLE`.
![nhgis select dataset](media/select-race.png)

11. From your `DATA CART` choose `CONTINUE` and `CONTINUE` and `SUBMIT` to begin the download. If you are not logged in you will be prompted to do so now.

12. Wait a moment or so for your extract to finish processing, and then download it by selecting `TABLES`.
![nhgis download tables button](media/tables.png)

## Preparing the data for mapping

### Editing the scale of the data

We have downloaded rows for every census tract in the entire United States. This is not ideal because we are planning to upload this data to visualization software. Reducing our data at the outset will save us time and space.

The data cleaning portion of this tutorial is written for three spreadsheet software options: Microsoft Excel, an open (free) desktop spredsheet tool called [LibreOffice](https://www.libreoffice.org/download/download-libreoffice/), or Google Sheets.

<details>
<summary> Excel instructions </summary>


1. Open the `.CSV` in Microsoft Excel. If you are prompted to remove leading zeroes, choose `Don't Convert`.

2. Highlight the column titled `STATE`.
![highlighting a row in excel](media/state-excel.png)

3. From the menu ribbon choose `Sort and Filter`.

4. Choose `Filter`. Click the drop-down arrow at the top of the column titled `STATE`.
![dropdown arrow excel](media/arrow-excel.png)

5. Uncheck `Select All`.

6. Check off `New York` and close the filter window by clicking the small red x in the upper left-hand corner.

7. `CTRL + A` on a Windows, `Command + A` on a Mac, or from the menu `Edit` → `Select All` to highlight all the records. 

8. Copy the records. `CTRL + C`; `Command + C`; `Edit`→ `Copy`.

9. Open a new sheet `File` → `New`.

10. Paste the records into the new sheet. Save this sheet with your other datasets as `new-york-percent-nonwhite.csv`

<div class="alert-danger">
  <h4>Do not use .XLSX</h4>
  <p></p>Make sure to always save your spreadsheet data for mapping in .CSV format. .CSV is an open-data format, and has a higher likelihood of being interoperable with most GIS software.</p>
</div>

</details>


<details>
<summary>LibreOffice instructions</summary>


1. Open the dataset in LibreOffice.

2. Click the `AutoFilter` button in the menu ribbon.
![autofilter in libreoffice](media/autofilter.png)

3. This will add drop-down arrows to the tops of the column headers. Choose the drop-down arrow next to the column titled `STATE`.

4. Uncheck `All`. Scroll down and check off `New York`.

5. `CTRL + A` on a Windows, `Command + A` on a Mac, or from the menu `Edit` then `Select All` to highlight all the records. 

6. Copy the records. `CTRL + C`; `Command + C`; `Edit`, `Copy`.

7. Open a new sheet `File` → `New` → `Spreadsheet`.

8. Paste the records into the new sheet. Save this sheet with your other datasets as `new-york-percent-nonwhite.csv`


</details>


<details>
<summary>Google Sheets instructions</summary>

1. Type `sheets.new` into a browser to open a new Google sheet.

2. Choose `File`→ `Open`→ `Upload`→ `Browse` to bring in the census data `.csv`.

3. For the `STATE` column, click or hover over the column header until a drop-down arrow appears.
![google sheets columns](media/column.png)

4. Click the drop-down arrow to open a column menu.

5. Choose `Create a Filter`.

6. Now, next to the header name for the column, there will be a button with three horizontal lines. 
![field filter button in google sheets](media/field-filter-gs.png)

7. Click the button next to the header name with the horizontal lines to open a filtering wizard.

8. Under `Filter by Values`, next to `Select All`, click the text that says `Clear`.

9. Scroll down to where it says `New York` and click `New York`. Select `OK`.


</details>

<div class="alert-info">
  <h3>Scaling data more granularly by using the table</h3>
  <p>We have reduced our records to only represent census tracts in New York State. If we wanted to further scale down our data, we could filter the records by a particular county. For instance, we could include only the counties associated with New York City.</p>
</div>


### Creating a mappable percent column

1. Open the NHGIS codebook. The file should read something like `nhgis00xx_ds262_20225_tract_codebook.txt`.

![nhgis codebook](media/race-codebook.png)

2. Observe that the variables are structured as follows:

- `AQNGE001`: Total population
- `AQNGE002`: White alone
- `AQNGE003` to `AQNGE008`: Various categories of nonwhite populations

*`AQNGE009` and `AQNGE010` are explanations of how `AQNGE008` breaks down further; we will not include these last two categories in our sum, because they are duplicate values.*

To create a mappable column which is a *percent* nonwhite, we have to sum all of the counts for each nonwhite category, and divide by the total population.

<div class="alert-success">
<h4>Percent Nonwhite Equation</h4>
Percent Nonwhite= Sum of categories AQNGE003 to AQNGE010 / AQNGE001 x 100
</div>


1. Create a new column called `PCT_NONWHITE`.

2. In the second cell of the new column, enter the equation 
<br>
`= IFERROR((AS2+AT2+AU2+AV2+AW2+AX2+AY2+AZ2)/ AQ2* 100, 0)`
<br>
*'IFERROR' catches null values in the source census data. We ask the function to return 0 instead of an error message if the function can't carry out.*

3. Fill down to complete the column by double-clicking the plus sign on the cell with the formula.

3. `File` → `Save`. Make sure to save as a `.CSV`.


You now have a dataset you can use to map percent nonwhite. Use the `GEOID` column to join this data with a census tract shapefile, and use the newly computed `PCT_NONWHITE` field to power the visualization.

Follow the next tutorial in [the workshop](https://mapping.share.library.harvard.edu/resources/workshops/workshop-4/) to learn how to create a map from this data.
