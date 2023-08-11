---
title: Places and "spatial"
date: 2023-08-10
image: cover.png
authors: ["Vivan Nha Nguyen"]
description: Investigation of "spatial" tag in Harvard Geospatial Library metadata.
page: single2
---

<style>

.blog-content img{
    max-height:50rem;
}
</style>


## Motivation
One of the most immediate features of a geospatial dataset is the region it covers. That's why early on in this project, a burning question for me was “what region(s) -- cities, states, countries, continents -- does the Harvard Geospatial Library (HGL) have data to describe?” 

## Diving into the metadata
To acquire insights into the library's vast collection of geospatial datasets, totaling over 11,000 to date, I worked with the metadata records for every dataset in the Harvard Geospatial Library, which are available publicly from the [Harvard Library Github](https://github.com/harvard-library/harvard-geodata/). One of my favorite and earliest conversations with a librarian was with HGL's very own Marc McGee, the Geospatial Metadata Librarian, who specializes in the production of FGDC (Federal Geographic Data Committee)-compliant metadata. He noted that there are two main formats of metadata records that the library keeps -- the robust FGDC format and more accessible JSON GeoBlacklight format, which is derived from the former.  

After exploring both formats of metadata, I elected to delve into the JSON GeoBlacklight metadata. Find the .py script to download all metadata fields for the 11,000 datasets as 1 .csv [here](https://github.com/HarvardMapCollection/vn-may-crane-23-docs/blob/main/all-jsons.py). The relevant data field was “dct_spatial_sm”, which describes the spatial/geographical coverage given by a given geospatial dataset. For simplicity, I refer to this field as “spatial”. 

## Exploratory visualizations
Using the metadata as is, I plotted the top 10 places covered in the Harvard collection:
![top 10](media/top_10_n.png)

We see the same Massachusetts, United States, and Boston prevalence in this alternate view, a wordcloud:
![worldcloud](media/wordcloud.png)

Interestingly, China, Germany, and Australia, in that order, stand out as the dominating countries, while Europe, Africa, South America, and North America, in that order, are the prevailing continents. We can rather easily reason about the prevalence of United States, Massachusetts, and Boston, given the location of the Harvard Geospatial Library, but why not Asia? Why Germany? Questions like this can be expertly answered by HGL's Bonnie Burns, the Head of Geospatial Resources and a key decisionmaker in the collection's development. 

## Spatial Levels
After the initial passthrough the metadata, I wanted to dive deeper into the "spatial" field. As shown in the exploratory data visualizations, the metadata records were counting "Boston", "Massachusetts", and "United States" differently so that out of three datasets with those "spatial" descriptions, only one would contribute to the "United States" count. I used Google's geocoder API to flesh out the "spatial" field so that every dataset would have information about the town/city, state, country, and continent if possible. The documentation for this feature engineering can be found [here](https://github.com/HarvardMapCollection/vn-may-crane-23-docs/blob/main/spatial_levels.py).

After completing this breakdown of spatial levels, my updated top 10 bar plot looks like so:

### State

<img src="media/states.png" alt="states" width="800"/>

### Country
<img src="media/countries.png" alt="states" width="800"/>

### Continent
<img src="media/continents.png" alt="states" width="800"/>

<div class="alert-warning">
<h2>Next steps for Vivian</h2>
  <ul>
  <li>Top 15 places?</li>
  <li>Mention Bonnie's caveat about aggregating by place</li>
  <li>Marc's note about limitations of data?</li>
  <li>Breakdown by format?</li>
  <li>Any other feedback you want to incorporate?</li>
  <li>Any other data analysis you want to make it onto this guide... Some of the descriptions work?</li>
  </ul>
</div>