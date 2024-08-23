---
title: Group 3 [Turning Spreadsheets into Spatial Data]
image: a-gradient1.png
date: 2024-08-12
layout: single2
---

> 1. Visit the [documentation page](https://data.boston.gov/dataset/311-service-requests/resource/b237f352-49d1-4423-804f-b478e4f24e61) for data about [Boston 311 service requests](https://www.boston.gov/departments/boston-311), to get a sense of what this dataset shows. Observe the data categories in the PDF codebook.

> 2. Now glance at the actual [311 requests dataset](https://data.boston.gov/dataset/311-service-requests/resource/dff4d804-5031-443a-8409-8344efd0e5c8) for 2024 from Analyze Boston. Observe a few records to get a sense of how this table is filled out.

There are two different ways to turn this dataset into spatial data. If you want the data to show up as individual occurrences (each 311 request is one dot on the map), you can use the `latitude` and `longitude` coordinate fields to import the data table to a GIS software, effectively turning it into a `shapefile`, `geojson` or `geopackage`. 

If you want to aggregate the occurrences and represent them as a density count by neighborhood, you can use the `neighborhood` column in the dataset. It's likely you would have to perform some data cleaning first, using data cleaning tools such as Excel, Google Sheets, R, or OpenRefine. You would have to make sure the values in the `Neighborhood` field are standardized, and then use a pivot table to count all the occurrences per neighborhood. Then you would **join the neighborhood counts to a Boston neighborhoods shapefile**. 

> 1. In a web browser, search for "GIS neighborhoods Boston shapefile download". 

![Analyze Boston result for neighborhood boundaries](neighborhoods.png)

> 2. Click [Census 2020 Block Group Neighborhoods Shapefile](https://data.boston.gov/dataset/census-2020-block-group-neighborhoods/resource/ed89fab7-aa21-42ce-874b-1b4971ab50fb) until it appears as a map preview (pictured above).

> 3. In a search engine or chatbot, search "How to do a table join in GIS".

Be ready to teach what you've learned to the group, and open up a discussion about any outstanding questions your team is still pondering.
