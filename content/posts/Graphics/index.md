---
title: How graphics journalists approach digital mapping
date: 2021-08-16
tags: ["news"]
image: 3.png
---

<p class="callout">Skills to create beautiful and engaging maps can be strengthened in a semester, says Bloomberg graphics journalist.</p>

The type of narrative, map-based digital projects we see in the news, like the [recent CityLab project documenting racist urban infrastructure in St. Paul, Minnesota](https://www.bloomberg.com/graphics/2021-urban-highways-infrastructure-racism/?cmpid=BBD072821_CITYLAB&utm_medium=email&utm_source=newsletter&utm_term=210728&utm_campaign=citylabdaily) require many research and technical skills to pull off.

The Harvard Map Collection asked Bloomberg graphics journalist, [Rachael Dottle](https://rachaeldottle.com/) about her methodology in scoping, researching, and creating maps for this story. 

Rachael helps us peek under the hood to learn how the maps in the piece were created, and talks about how she thinks students can start to build their storytelling skills using digital map making.

### About Rachael

Rachael Dottle studied urban studies, architecture and sociology at Barnard College. There, she learned mapping by taking GIS courses. She attended Columbia University for a Data Science masters afterwards, focusing on spatial statistics. She worked for the transit system in New York City for a bit, before seguing into journalism. Prior to working at Bloomberg, she was a graphics journalist at *FiveThirtyEight Politics*. 

### Project scoping

We were interested in how Rachael initially thinks of ideas for stories, and then hones them into something achievable. Especially working with tight deadlines, how can you move smoothly from brainstorming to executing a mapping project?

For the recent CityLab piece, Rachael started framing her project by thinking about political significance and data availability.


<span style="font-family:lorabold;color:#5f0217;">DOTTLE:</span> "I knew right off the bat that [NHGIS]([nhgis.org](http://nhgis.org/)), the program at the University of Minnesota, has all that historical census data available as shapefiles, so I thought, alright, I'm going to start with the 1950 data. Starting at the census tract level, I can deep-dive into data for some of the cities I *know* had highways built through black neighborhoods. I started my project with what I knew about cities with highways constructed, and what I knew about what data is available.

{{< figure src="media//7.png" alt="Photograph of a highway overpass">}}
<figcaption class="append">Archival photograph used in the project. Photographer: William Russell. Tulane University Special Collections.</figcaption>


"I knew there were certain cities we wanted to focus on, from a narrative perspective. Miami was of interest, because there are ongoing highway construction projects. New Orleans was in the news, from Biden's mention of it, and from previous CityLab stories. CityLab also had covered St. Paul, and I knew there was discussion in the State Senate and House about money being approved for the land bridge. Those were the newsworthy angles, and I went in looking at data for those."

### To map or not to map?


<span style="font-family:lorabold;color:#5f0217;">HARVARD MAP COLLECTION:</span> When you are deciding if you need to use or create maps for a story, what informs that process?

<span style="font-family:lorabold;color:#5f0217;">DOTTLE:</span> "I often start my process by making maps. If anything can be mapped, if there is *any* geographic component to a dataset, I'm going to put it on a map to look at it. 

If the spatial relationships aren't immediately obvious once I put data on a map, I might take it away from the map and put it in R Studio, to explore the data in other ways. If I *do* see something right away spatially, I will keep exploring on the map. 


The other reason I may use a map, even if there aren't immediately intriguing spatial patterns is if the geography is a part of the story in some way. For instance, if it's a climate story and there's something to do with rain, even if the patterns don't make sense to me, I might still use a map, because people will recognize geography and might be able to place themselves. 


I wouldn't use a map if the geography is confusing to readers. For instance, some of the cities we used aren't immediately recognizable at the neighborhood level. If you're not a resident of St. Paul, a zoomed-in map of the "Rondo neighborhood" might not help you. If you can't include a locator map in those cases, you might not want to go the map route."


### Selecting tools

<span style="font-family:lorabold;color:#5f0217;">HARVARD MAP COLLECTION:</span> What advice would you give students setting out on their first digital mapping project?


<span style="font-family:lorabold;color:#5f0217;">DOTTLE:</span> "A project like this takes a lot of different skills that I picked up in various places. I never learned Illustrator in my GIS courses, which I now see as essential to my work.


Mapping software allows you to perform many uniquely spatial functions, like georeferencing a map, digitizing the layers, or performing the dot density analysis, but if you don't have the ability to represent your data with the degree of control you’d like to, you won't get your point across. All of that work, and people won't spend very long looking at your map. I find the degree of control in standard mapping software limiting. 

Illustrator is complicated, difficult to learn quickly, and sometimes imperfect. In this project, I could barely open the dot density files in Illustrator, because the file sizes were so large. 

But there are simple things that you *can* learn. Opening the map. Learning to look at the layers. Selecting certain elements. Changing colors and deleting stuff you don't want. It's all stuff that I *think* you can learn in a semester. But you have to be given the opportunity to learn it. I don't think GIS classes often have that incorporated.


Starting out, if you don't have very much time and want to get something done, pick one method to focus on. "I'm going to represent a historical map, and I'm going to digitize two pieces about it." You don't want to do too much if it's your first GIS project. Don't go adding census data, because you won't have time to visualize it. 


You should also make sure you are really understanding data literacy principles.
Really understanding data is not always included in GIS courses. You learn all these clicking tools and you're looking at all this data, but you don't quite understand what you should be focusing on in the data versus what is just distracting."


## The project

[What it Looks Like to Reconnect Black Communities Torn Apart by Highways](https://www.bloomberg.com/graphics/2021-urban-highways-infrastructure-racism/?cmpid=BBD072821_CITYLAB&utm_medium=email&utm_source=newsletter&utm_term=210728&utm_campaign=citylabdaily), Rachael Dottle, Laura Bliss and Pablo Robles, *Bloomberg CityLab*, July 28, 2021.

<iframe width="100%" height="550" src="https://www.bloomberg.com/graphics/2021-urban-highways-infrastructure-racism/?cmpid=BBD072821_CITYLAB&utm_medium=email&utm_source=newsletter&utm_term=210728&utm_campaign=citylabdaily" title="What it Looks Like to Reconnect Black Communities Torn Apart by Highways"></iframe>

## How does it all work?


<div style="width:auto;background-color:#F3F3F3;padding-left:1rem;padding-right:1rem;padding-top:.1rem;padding-bottom:.5rem;">
<h3>Timeframe</h3>

~ 3 months

<h3>Tools used</h3>

- QGIS 

- Photoshop

- Illustrator

- [ai2html]([http://ai2html.org/](http://ai2html.org/))

<h3>Technical steps</h3>

1. Gather data during research
2. Preview and clean data in QGIS
2. Style photos and maps in Photoshop
2. Bring everything into Illustrator
4. Style maps and create page layouts in Illustrator
5. Run `ai2html` script on Illustrator files 
6. Bring generated website code into an HTML page
7. Add CSS for styling and JavaScript for scrolling 
</div>

### The Maps

<div style="width:auto;background-color:#F3F3F3;padding-left:1rem;padding-right:1rem;padding-top:.1rem;padding-bottom:.5rem;">

### Dot Density 

{{< figure src="media//2.png" alt="Screen capture from one of the project data layers hosted as a vector tile service." alt="Screen capture from the article of one of the dot density maps, showing population in St. Paul represented with one dot for every 20 people">}}

- Dot density maps can be a nice way to show multiple attributes alongside one another.
- In this case all three race designations, as coded in the 1950s as "black," "white," and "other" are shown at the same time, each dot representing twenty people.
- Contrast against [choropleth mapping](https://www.axismaps.com/guide/choropleth) for population.
- Rachael used the QGIS Research Tool, [Random Points Inside Polygons](https://freegistutorial.com/how-to-create-random-points-inside-polygon-on-qgis/) to create these maps.

</div>
<br>

<div style="width:auto;background-color:#F3F3F3;padding-left:1rem;padding-right:1rem;padding-top:.1rem;padding-bottom:.5rem;">

### Perspective 

{{< figure src="media//9.png" alt="Screen capture from one of the project data layers hosted as a vector tile service." alt="Screen capture from one of the maps in the article showing digitized historic building data which has been given a fake perspective in Photoshop to make it look 3D.">}}

- These perspective maps are not using 3D data; it is an effect created in Photoshop.
- The 3D-looking building data was derived by tracing building outlines from historic maps in QGIS.

</div>

<br>

<div style="width:auto;background-color:#F3F3F3;padding-left:1rem;padding-right:1rem;padding-top:.1rem;padding-bottom:.5rem;">


### Animated transition

{{< figure src="media//1.gif" alt="Screen capture from one of the project data layers hosted as a vector tile service." alt="Gif showing transition from one map showing highway to the same area earlier in time, displayed by aerial imagery showing all the houses the highway cut through">}}

- Two images are positioned atop one another in a web page. The transition is controlled with CSS and JavaScript.
- The map edge effect, which evokes memories of the paste-ons you can find in real [Sanborn atlases](https://www.wikiwand.com/en/Sanborn_maps), was achieved using a drop-shadow and the Photoshop eraser tool. 
- Maps like these are archived in the [Harvard Map Collection](https://curiosity.lib.harvard.edu/scanned-maps/catalog?search_field=all_fields). You can look at them in person, or use them in your digital project by contacting maps@harvard.edu.

</div>

