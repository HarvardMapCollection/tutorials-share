---
title: Searching for GIS data [checklist]
image: layers.jpeg
date: 2024-08-16
layout: single2
description: Quick reference to approaches for finding, augmenting or creating geospatial data. To be used in tandem with librarian consultations. 
---

*This checklist was designed by GIS Librarians Belle Lipton and Scott Walker (Harvard University), Tara Anthony (Penn State), Jessica Benner (Carnegie Mellon), John Clark (Lafayette College), Meagan Duever (Georgia State), Todd Quinn (University of New Mexico), Chris Thiry (Colorado School of Mines), and Amy Work (UC San Diego).*

## How to use the checklist

Please use this checklist template tp provide GIS reference staff with information about what you have already tried in your GIS data search, and where you are getting stuck. 

## Checklist

☐ When searching for data in web browsers, I have appended terms such as `open data`, `shapefile`, `download`, `libguide`, `clearinghouse`.

☐ I have tried searching within specific sites or domains, especially for data I suspect is published via a government organization, e.g. `site:.gov` or `site:usda.gov`.

☐ I have tried searching at a small geographical resolution, such as the town or city I am interested in, and then scaling up in geography as necessary, perhaps to county or state.

☐ For temporal resolution, I am checking in with my expectations. How current does my data need to be?

☐ I have tried following breadcrumbs from popular data visualization tools, such as PolicyMap, or SocialExplorer. I have previewed  the data in visualizations and blogs ([PolicyMap](https://www.policymap.com/resources/blog), [Social Explorer](https://www.socialexplorer.com/blog/post)), and followed the links back to the source I need.

☐ If I cannot find the data I need in spatial formats, such as `shapefile`, I have considered using tabular (`.xlsx` or `.csv`): 
- Does my data include names of towns, cities, countries, admin codes? I can use a table join to match the geography names with a shapefile. I have searched for the corresponding shapes data I would need, and attempted to [match the files up](https://mapping.share.library.harvard.edu/tutorials/census-data-primer/perform-a-table-join/).

- Does my data include street addresses? I can turn it into a point shapefile using geocoding, leveraging either [university licenses](https://gis.harvard.edu/geocoding), [free desktop software](https://gis.ny.gov/system/files/documents/2022/07/geocoding-in-qgis.pdf), or [programming in R](https://gis.ny.gov/system/files/documents/2022/07/geocoding-in-qgis.pdf). 

- Does my data include columns with x and y coordinates? I can [import it into a GIS software](https://mapping.share.library.harvard.edu/tutorials/qgis/add-spreadsheet/).

☐ If I suspect the data I need does not exist, I can create it myself.
 - I have thought about using historic maps to see if they contain the information I need.
    - Make a [map review and consult](https://outlook.office365.com/book/HarvardMapCollection1@HU.onmicrosoft.com/) with the Harvard Map Collection to view maps.
    - [Georeferenced the digital map files]((https://mapping.share.library.harvard.edu/tutorials/georeferencing/qgis/)) I find in the Harvard Map Collection, so they line up with actual geography.
    - [Create digital shapes data](https://mapping.share.library.harvard.edu/tutorials/qgis/adler/) by tracing the georeferenced maps.

 - I have considered assembling the phenomena I am studying into a table with X,Y coordinates.
 
☐ Checking crowdsourced databases, such as:
 
 - OpenStreetMap, extracting by [common layer types](https://mapping.share.library.harvard.edu/tutorials/openstreetmap/extractbylayer/) or [specific features](https://mapping.share.library.harvard.edu/tutorials/openstreetmap/extractbyfeature/).

- Wikipedia or Wikidata to find coordinate information, obscure political geographies, or references to citations, including maps and geospatial data.

- Geonames to confirm obscure or changing placenames.


