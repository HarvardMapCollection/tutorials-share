---
title: Off the Beaten Path? 
date: 2024-07-01
tags: ["news", "applied-projects"]
image: a-gradient12.png
authors: ["Luisa Shida"]


---

<video width="100%"  controls>
  <source src="media/Off the beaten path.mp4" type="video/mp4">
</video>


When I first arrived in Boston three years ago, only a few weeks away from starting college in the heart of Cambridge, I wanted to take in as much of the city as I could. Armed with a TripAdvisor list of "The 10 Best Things to Do in Boston" and a confusing MBTA map I found at the airport, I set off to the city's tourists hotspots, historical landmarks, and buzzing restaurants. As one often does, I walked the Freedom Trail, shopped at Newbury Street, ate at a nice Back Bay restaurant, and bought an overpriced Red Sox cap at the Commons. By the time I checked everything off my list and felt comfortable taking the T without a map, I thought I knew what I had to know about the city. Needless to say, I was wrong.

<div class="alert-success">
<h4>1960 map of Boston</h4>
  <img src="media/boston-1960.png">
  <p><em>Magnification of Boston on a 1960 <a href="https://curiosity.lib.harvard.edu/scanned-maps/catalog/44-990026787590203941">tourist map from the Harvard Map Collection</a></em></p>
</div>


Only after starting college did I realize the influence of my first few adventures on my general perspective of Boston. On my rare escapes from the Harvard bubble with friends, I would suggest visiting the places I had already been to in my days as a tourist, while my local friends would insist on showing me the parts of Boston I had not yet seen. They brought me to amazing places in Chinatown, Roxbury, Brighton, Jamaica Plain, and more, away from the masses of tourists downtown. That is when I acknowledged that my days as a tourist were extremely limited, and yet so strongly shaped my understanding of the city.

<iframe width="700" height="400" src="https://data.boston.gov/dataset/census-2020-block-group-neighborhoods/resource/ed89fab7-aa21-42ce-874b-1b4971ab50fb/view/11386420-7510-4245-ad77-2c40c073df74" frameBorder="0"></iframe>

*[Official GIS neighborhoods dataset](https://data.boston.gov/dataset/census-2020-block-group-neighborhoods/resource/ed89fab7-aa21-42ce-874b-1b4971ab50fb) for Boston. Click on a neighborhood to reveal its name!*

And when thinking of tourism, one ought to think about maps. They are often the very first spatial visualization travelers will have of their destination even before arrival – thus not only setting the tone for the trip, but also being a key feature in helping visitors decide where to go under their time, physical and financial constraints.

However, in the same way I could not experience the entirety of a place's history or culture in the span of a few days before college, maps cannot encompass the entirety of the place itself. Therefore, through the spots and activities they choose to highlight to their audiences, travel maps can narrate different stories about a place. Inspired by these reflections, this project aims to analyze how travel maps have shaped narratives about Boston over time, highlighting a [1960 travel map](https://curiosity.lib.harvard.edu/scanned-maps/catalog/44-990026787590203941) and the [2024 Boston Duck tours map](https://bostonducktours.com/wp-content/uploads/2022/04/2022-Map-for-Website.png). This project will be carried out using Geographic Information Systems (GIS) methods, given that they allow for a more nuanced analysis when using, comparing, and interpreting physical and digital maps. 

## Methods

Given that both maps of interest were available only in image form, they were made of pixels instead of spatially-aligned GIS data that could be directly used for the analysis. Therefore, both map images had to be ***georeferenced,*** a process which attributes real coordinates to the images’ pixels. In simple terms, georeferencing allows for an overlay of the map image onto its real-world location, bending the image as needed to conform to the coordinate system.

Once the maps images were aligned with real locations, we could create structured data by *vectorizing* the maps. Vectorization allows us to turn map features into lines, polygons, or points— data which can then be analyzed using GIS software. While any map feature can be vectorized, I chose to focus on the tourist attractions and activities endorsed on each travel map. Once the vectorization was complete, I could start to ask questions of the map data.

Both the georeferencing and vectorization steps were carried out using QGIS.

## Our maps

### Historic Massachusetts Travel Map, 1960

When looking at [Boston maps](https://curiosity.lib.harvard.edu/scanned-maps/catalog?f%5Bplace-of-origin_ssim%5D%5B%5D=Boston&utm_source=library.harvard) in the Harvard Map Collection, the *Historic Massachusetts Travel Map* published by the state's Department of Commerce and Development in 1960 immediately caught my eye. Its beautiful marginalia and intricate in-map designs evoked in me exactly what it intended to: a desire to visit the entirety of Massachusetts and see all it had to offer. Its busy design and focus on the general location of historic attractions rather than more detailed geographic information made it feel almost like a list of things to do "to help you feel at home in the Bay State" in visual, mapped form.

<iframe width="100%" height="700" src="https://iiif.lib.harvard.edu/manifests/view/ids:5860230$1i" title="Historic Massachusetts, a travel map to help you feel at home in the Bay State ; World of fun and relaxation Massachusetts, the historic vacationland" ></iframe>
<figcaption class="append">Zoom in to explore <a href="https://curiosity.lib.harvard.edu/scanned-maps/catalog/44-990026787590203941">Historic Massachusetts, a travel map to help you feel at home in the Bay State ; World of fun and relaxation Massachusetts, the historic vacationland, 1960
</a></figcaption>


Despite its beauty, the information contained in the 1960 Travel Map had to be narrowed down to the Boston area and transformed into GIS data. Therefore, following its georeferencing and vectorization steps, we arrive at the map below. In yellow, are the attractions and buildings in the region that the map suggests tourists engage with. Interestingly, the places it highlights as significant historical landmarks – and thus, relevant tourist attractions - are almost exclusively older buildings that either somehow relate to the American Revolution or to the establishment of Boston itself.

<div class="alert-success">
<h4>Vectorized data from the 1960 travel map</h4>
  <img src="media/1. Travel Map 1.png">
  <p><em>Vectorized attractions from the 1960 Tourism map from the Harvard Map Collection.</em></p>
</div>


This is interesting given that it puts forth a notion of History centered around the conflicts that marked the early political formation of the United States. Notions of demographic change and settlement, climatic events or environmental modifications (such as changing shorelines), or even other older buildings in the area (such as Fenway Park, built in 1912) are thus not taken as "historical" in this map.

### Boston Duck Tours Map

![https://hackmd.io/_uploads/ByknrlPU0.png](https://hackmd.io/_uploads/ByknrlPU0.png)
*Map from [bostonducktours.com](https://bostonducktours.com/)*

Turning to our second map of interest, the 2024 Boston Duck Tours map, we are looking at one of the most popular tourist activities in the city. The Duck tours [started in 1994](https://www.bostonducktours.com/about/company-history/), and are famous for their use of World War II-style "duck" boats that allow for travel both on the ground and water. 

Given their popularity, the Boston duck tours have a strong influence on the itinerary of many Boston tourists. While it covers a larger amount of attractions in the Boston area than the 1960 Travel Map, its design is quite similar in including small graphics of significant attractions at their respective locations in the map, catching the reader's eye.

<div class="alert-success">
<h4>Vectorized data from the 1960 travel map</h4>
  <img src="media/2. Duck Tours Map.png">
  <p><em>Vectorized attractions from the duck tour map from bostonducktours.com.</em></p>
</div>


Interestingly, while not represented in the map, the Duck Tours points of interest are categorized as entertainment, shopping and dining, landmarks, historical, or religious sites. In the interactive map below, you can explore the different categories that make up the Duck Tours route. Click the vectors in the map to see each attraction's category and type.

<iframe width="100%" height="450" frameborder="0" title="Felt Map" src="https://felt.com/embed/map/Interactive-Map-Ownership-copy-S3x3MdtART2GsHDA12hARB?loc=42.3548%2C-71.08506%2C13.49z&legend=1&logo=1&link=1" referrerpolicy="strict-origin-when-cross-origin"></iframe>

*Interactive map showing the different categories of attractions. Vectorizing features from map images and turning them into data with attributes such as attraction category allows us to explore this data in new ways.*

It is noticeable that, in comparison to the 1960s Travel Map, the Duck Tours map has a bigger focus on sports and less American History-centric locations, such as TD Garden, the Sports Museum, the Holocaust Monument, and the Boston Women's Memorial Park.

### Neighborhood Distribution

While the 1960 Travel Map actively labels its attractions "historical" and the Duck Tours navigate between different categories, some sites are present in both, as shown in the map below. This map was created using Felt, a browser GIS tool's *intersect* feature, which took vectors that were present in both the 1960 Travel Map and 2024 Duck Tours layers and highlighted them in green to demonstrate overlaying features.


<div class="alert-success">
<h4>GIS Intersect Tool</h4>
  <img src="media/3. Intersections.png">
  <p><em>Now that the features from the maps have been structured into GIS data, GIS software allows us to automatically identify all features that spatially intersect across both layers. Green polygons on this map show attractions that show up on both maps.</em></p>
</div>


The map below allows for a more detailed spatial analysis of the distribution of attractions around the Boston area. It was created using the Felt *extract* tool, highlighting the different Boston neighborhoods which contained at least one attraction from either map. Thus, jointly analyzing where the Travel Map and Duck Tours attractions are located, they are mostly concentrated in Beacon Hill, Back Bay, Downtown, the West End, and the North End. Two 1960 Travel Map locations are in Fenway – the Museum of Fine Arts and the Isabella Gardner Museum.

<div class="alert-success">
<h4>GIS Extract Tool</h4>
  <img src="media/4. Neighborhoods.png">
  <p><em>In blue, the Boston neighborhoods that have at least one attraction present in either of the maps. Notice that areas such as Chinatown are not contemplated by the attractions.</em></p>
</div>

This means that entire Boston neighborhoods - including big areas such as Chinatown, South Boston and Kenmore - are excluded from the itineraries proposed in the two maps. The spatial visualization created through GIS analyses thus poses a question: is there any relationship between the demographic constitution of Boston neighborhoods and whether they are represented in the map's attractions? This question similarly can only be answered through GIS methods, overlaying the maps’ attractions onto demographic information for different Boston regions.

### A demographic-geographic analysis

By layering the vectorized attractions from each map onto the demographic percentage of the non-white population in different census tracts, we can look for any potential relationships between racial demographics in an area and the presence of cartographer-endorsed attractions.

![demographic map and locations from 1960](media/5.%20Non-white%201960s.png)
*Attractions appearing on 1960 map, overlaid against 2010 nonwhite populations by census tract.* 

The 1960 Travel Map locations are mostly concentrated in the center and northern parts of Boston, which are correspondently smaller in non-white population percentages. Although the Travel Map does include locations in more neighborhoods than the Duck tours, none of the regions they are located in surpass a 0.4 percentage of non-white individuals. No attractions are present in the regions with the highest non-white percentages in the city, including Chinatown and the South End (whose rates can go up to 0.94).

![demographic map and locations from duck tours](media/6.%20Non-white%20Duck.png)

While the Duck Tours map encompasses more locations than the 1960 Travel Map, it also does not include places in areas above a 0.4 non-white percentage rate. Still, it includes places in certain areas of Downtown Crossing, Downtown, Back Bay, and Beacon Hill that have a relatively higher non-white percentage rate than their neighboring areas. These include the Park Street Church, Granary Burying Ground, and the Christian Science Plaza, all located in tracts of a non-white percentage of individuals above 0.35. As is the case with the 1960 travel map, the GIS data also shows that the areas with highest non-white rates are not represented by the selected attractions, by relating numerical data (the non-white rates) to the vector information of the attractions.

## Further questions

The analysis of the relationships between the non-white population percentage in Boston census tracts and the presence of tourist attractions supported by the maps raises many questions.

When it comes to the 1960 travel map, one is led to wonder whether the current demographic distribution of the non-white population in Boston could have a connection to what would be considered "historical" or worthy of being seen by and showcased to tourists, thus influencing other's ideas of what Boston would be like.

Regarding the 2024 Duck Tours Map, one can question why certain spots in primarily non-white populated areas (such as Chinatown) are not contemplated in the tours, even if the tours themselves do make an effort to include attractions that are relevant to movements beyond the American Revolution.

Overall, this analysis gives way to a deeper questioning on the importance of geographic information not only for tourists visiting a new place, but also to the development of new routes. When visiting Boston – or any other place, for that matter –, it is important to question oneself not only what you are seeing, but what you are not.

## Future routes

With the data from each map, as well as demographic information for different census tracts in Boston, it is possible to explore the many other relationships implicit in the maps, looking at factors such as whether an attraction's ownership is private or public, whether it is religious or secular, how it relates to different conceptions of history (American History? Civil Rights? Women's Rights?), and much more. While this project chose to focus specifically on a demographic-geographic perspective of Boston tourism trends, the data that was created for this analysis includes information on all these other factors. Therefore, you are invited to further interact with this data by exploring the interactive maps below, accessing the data files on from the Harvard Map Collection's [Open Science Framework page for researcher-created GIS data](https://osf.io/9jg2u/), or even heading off to the Harvard Map Collection Map Room ([or website](https://library.harvard.edu/libraries/harvard-map-collection)!) to develop a project of your own, bringing physical and digital information together through GIS methods. After all, this is precisely what GIS allows us to do: *stray off the beaten path and interact with data in a deeper, more meaningful way.*

<iframe width="100%" height="488" frameborder="0" title="Felt Map" src="https://felt.com/embed/map/Final-map-u9C2GAbqMQrG2WHEIvlMJrD?loc=42.35718%2C-71.07506%2C14.61z&legend=1&cooperativeGestures=1&link=1&geolocation=0&zoomControls=1&scaleBar=1" referrerpolicy="strict-origin-when-cross-origin"></iframe>


>[Luisa Shida](https://history.fas.harvard.edu/people/luisa-shida)'s project was funded by a 2024 [May Crane fellowship](https://library.harvard.edu/may-crane-fellowships), which was geared towards supporting undergraduate research exploring information embedded in historic maps and archives.



