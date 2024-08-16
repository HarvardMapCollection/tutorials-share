---
title: Finding GIS Data Checklist
image: gis.png
date: 2024-08-16
layout: single2
description: Skimmable list of the approaches in this guidebook for finding GIS data. 
---

*This checklist was designed by GIS Librarians Belle Lipton and Scott Walker (Harvard University), Tara Anthony (Penn State), Jessica Benner (Carnegie Mellon), John Clark (Lafayette College), Meagan Duever (Georgia State), Todd Quinn (University of New Mexico), Chris Thiry (Colorado School of Mines), and Amy Work (UC San Diego).*

## How to use the checklist

Please use this checklist template tp provide GIS reference staff with information about what you have already tried in your GIS data search, and where you are getting stuck. 

## Checklist

[  ] When searching for data in web browsers, I have appended terms such as `open data`, `shapefile`, `download`, `libguide`, `clearinghouse`.

[  ] I have tried searching within specific sites or domains, especially for data I suspect is published via a government organization, e.g. `site:.gov` or `site:usda.gov`.

[  ] I have tried searching at a small geographical resolution, such as the town or city I am interested in, and then scaling up in geography as necessary, perhaps to county or state.

[ ] For temporal resolution, I am checking in with my expectations. How current does my data need to be?

[ ] I have tried following breadcrumbs from popular data visualization tools, such as PolicyMap, or SocialExplorer. I have previewed  the data in visualizations and blogs ([PolicyMap](https://www.policymap.com/resources/blog), [Social Explorer](https://www.socialexplorer.com/blog/post)), and followed the links back to the source I need.

[ ] If I cannot find the data I need in spatial formats, such as `shapefile`, I have considered using tabular (`.xlsx` or `.csv`): 
- If my data includes the names of towns, cities, countries, admin codes, considered using a table join, to match the geography names with a shapefile. I have searched for the corresponding shapes data I would need, and attempted to [match the files up](https://mapping.share.library.harvard.edu/tutorials/census-data-primer/perform-a-table-join/).

- If my data includes street addresses, turning it into point data using geocoding, leveraging either [university licenses](https://gis.harvard.edu/geocoding), [free desktop software](https://gis.ny.gov/system/files/documents/2022/07/geocoding-in-qgis.pdf), or [programming in R](https://gis.ny.gov/system/files/documents/2022/07/geocoding-in-qgis.pdf). Where am I getting stuck?

- If my data includes coordinates, trying to [import it into a GIS software](https://mapping.share.library.harvard.edu/tutorials/qgis/add-spreadsheet/).

[ ] If I suspect the data I need does not exist, I have tried creating it myself by:
 - [Georeferencing historical maps](https://mapping.share.library.harvard.edu/tutorials/georeferencing/qgis/) and using them to [create digital vector data](https://mapping.share.library.harvard.edu/tutorials/qgis/adler/)

 - Creating a table with columns for X, and Y coordinates
 
[ ] Checking crowdsourced databases, such as:
 
 - OpenStreetMap, extracting by [common layer types](https://mapping.share.library.harvard.edu/tutorials/openstreetmap/extractbylayer/) or [specific features](https://mapping.share.library.harvard.edu/tutorials/openstreetmap/extractbyfeature/)

- Wikipedia or Wikidata to find coordinate information, obscure political geographies, or references to citations, including maps and geospatial data

- Geonames to confirm obscure or changing placenames


