---
title: Group 4 [OpenStreetMap]
image: osm-denom.png
date: 2024-08-10
layout: single2
description: Learn how to access crowdsourced GIS data for situations where data is difficult to find.
---

## Objectives
- Understand what OpenStreetMap (OSM) is, and how it can be helpful for finding data
- Learn how to use tools built around the OSM API to extract datasets of your choosing

## 10 minutes to get started

1. Read through the [OpenStreetMap tutorial](https://mapping.share.library.harvard.edu/tutorials/openstreetmap/extractbyfeature/). Be sure to open up the OpenStreetMap features Wiki and observe all of the mappable data layers one can extract.

2. Read this [blog post](https://blog.hubspot.com/blog/tabid/6307/bid/8341/a-marketer-s-guide-to-apis.aspx) on what the definition of an API is.

> OpenStreetMaps contains a massive amount of information. Rather than directly download the whole database, OSM makes data available via an API. That way, one can write queries that download data based on one's exact parameters of interest. For instance, in the tutorial example, we specify that we are looking for only *shopping malls*, and only in *Jakarta*. This helps pare down the data we are downloading.
>
> Normally, when we write **queries** using an API, we have to use some kind of coding language. Because not everyone codes, there are a number of click-and-point tools people have built, which are actually just using the API behind the scenes. The one we showcased (the QGIS plugin) is one of these tools (one we have used at the Map Collection a great deal, and can vouch for!), but you can find lots of others on the web.


## Follow-up resources (next steps)
- Here is a [list of projects using OpenStreetMap data](https://github.com/osmlab/awesome-openstreetmap) 
- Here are some other crowd-contributed mapping data projects:
    - [Geonames](https://www.geonames.org/)
    - [Natural Earth](https://www.naturalearthdata.com/)

## Discussion questions
1. What are some reasons why one might rely on crowd-contributed data for a GIS project?
2. What are some benefits and downsides to using crowd-contributed data?
3. What else did you learn about that you think would be valuable to share with your group?
4. Prepare to present any demos which could help communicate these takeaways.
5. Did you find anything surprising or interesting in the follow-up resources?



--- 

## In class
- Explore the OSM interface, reverse search (click a feature, look at attributes)
- Read the wiki to see all of the features you could extract as GIS data


## Demo and explore more

### Sample data
You can download and explore sample datasets related to this activity from the workshop data homepage, hosted on the Open Science Framework (OSF.io)
> 1. Visit the [workshop data homepage](https://osf.io/exnyg). 

> 2. Click the three vertical dots icon and select `Download`.
![OSF data download page](../media/download.png)

> 3. The folder that downloads to your computer contains sample data from all the workshop activities. It is a zipped or compressed file. In order to use it, you will have to `double-click` it on Mac or `right-click` → `Extract` or `Uncompress` on a PC. 

<div class="alert-success">
<p>4. The sample data for this activity, <strong>Activity 4</strong> is in the folder <code>activity4_crowdsourced</code>. In this folder you will find the following files:
</p>
<ul>
<li><code>places_of_worship_polygons_ma.geojson</code></li>
<li><code>places_of_worship_points_ma.geojson</code></li>
</ul>
</div>



### Follow-along steps
- Install the QuickOSM plugin using the [steps in this guide](https://mapping.share.library.harvard.edu/tutorials/openstreetmap/extractbyfeature/)
- `Vector` → `QuickOSM` → `QuickOSM`
- key = `amenity` ; value = `place_of_worship` ; in = `Massachusetts`
- `Run query`
- The data returns in two formats: point locations and polygons of buildings
- Explore the layers. You could try
    - Right-click the layer in the Layers pane → `Open attribute table` → Sort the fields by value by clicking the column header. Try the `religion` column to show religious affiliation for each place of worship.
    - Try symbolizing the values by right-clicking the layer in the Layers pane → `Properties` → `Symbology` → Changing `Single symbol` to `Categories` → Select a column or `Value` to map → `Classify` → `OK`

