---
title: How to download poverty rate data by census tract for GIS
date: 2024-07-21
image: cover.png
layout: single2
description: We will download poverty rate data for the United States and filter it to New York City for use with GIS mapping.
---

In order to  map poverty rate per census tract, you must first perform some steps to prepare the data. In this tutorial, we will practice:
* Downloading high-quality data
* Cleaning the data to prepare it for mapping

## Downloading the data

1. Visit [NHGIS.org](https://www.nhgis.org). Create a free academic use account, if you haven't already, and log in.

2. From the [NHGIS.org](https://www.nhgis.org) home screen, choose `START HERE: Get Data` in the middle of the page, or `SELECT DATA` in the navigation bar menu at the top of the page.
![Get data in NHGIS.org](media/get-data.png)

3. Click `TOPICS`.
![topics filter on nhgis.org](media/topics.png)

4. Scroll down and choose `Poverty (Income Relative to Poverty Level)` from the `INCOME` heading. Check off this item using the check-box furthest to the left.
![poverty topic in nhgis.org](media/poverty.png)

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


9. Select the first result, "Ratio of Income to Poverty Level in the Past 12 Months" by clicking the green check-box to the left of the result. You will see the source table reflected in your your `DATA CART: 1 SOURCE TABLE`.
![nhgis select dataset](media/select-poverty.png)

10. From your `DATA CART` choose `CONTINUE` and `CONTINUE` and `SUBMIT` to begin the download. If you are not logged in you will be prompted to do so now.

11. Wait a moment or so for your extract to finish processing, and then download it by selecting `TABLES`.
![nhgis download tables button](media/tables.png)
