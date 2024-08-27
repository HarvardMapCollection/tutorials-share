---
title: Mapping the Russian Language
date: 2023-01-13
tags: ["news"]
image: lee.png
authors: ["Harvard Map Collection", "Paige Lee"]
description: Quote, 'Don’t be afraid of going outside of your comfort zone or doing something no one else has done before!' In this article, Paige Lee shares how she sourced and wrangled data for her D3.js mapping project, and tips for other students getting started.
---

We met undergraduate Paige Lee while working with her general education class about how borders are constructed. In the class, students were asked to complete a project, choosing from a variety of format options, including making a map. The Harvard Map Collection supported students by advising on searching for data, using mapping software, and scoping out project ideas.

In this interview, we look at Paige’s custom-coded interactive mapping visualization, and learn more about her thought process and workflow.

## The project

<iframe width="100%" height="700" src="https://eelegiap.github.io/russophonemap/index.html" title="Paige's project" ></iframe>
<figcaption class="append">Paige's project. Hover for interactivity.</figcaption>


## The interview

<span style="font-family:lorabold;color:#5f0217;">BELLE LIPTON:</span> Paige, could you tell us a little bit about why the topic of Russian language in post-Soviet countries was interesting to you? 

<span style="font-family:lorabold;color:#5f0217;">PAIGE LEE:</span>  Hey Belle! I wanted to learn more about the geographic distribution of Russian speakers because of my thesis work which involves contemporary Russian poetry and the war in Ukraine. Language is so important to understanding the cultural dynamics around the war, especially since Vladimir Putin uses Russian language speakers in Eastern Ukraine as one of his justifications for invading Ukraine. It’s my guess that this map will look quite different in a generation, since more and more Ukrainians are beginning to adopt Ukrainian as their primary language at home and work instead of Russian, very understandably considering the circumstances. My map project includes more than just Ukraine because I wanted to see how this dynamic might have similarities in other regions in the post-Soviet sphere. For example, my friend from Georgia recently told me about how he isn’t teaching Russian to his young children even though it’s a common second language, since he doesn’t want them to be susceptible to Russian-language propaganda. It made me wonder — we really should be paying more attention to where and how the Russian language is used! This project shows the “where” of it. 

<span style="font-family:lorabold;color:#5f0217;">BELLE:</span>  What were the factors influencing why you chose to make a map, rather than some of the other options, such as a podcast, or essay?

<span style="font-family:lorabold;color:#5f0217;">PAIGE:</span>  I’m doing a joint concentration between Computer Science and Slavic Languages and Literatures, and I love data visualization! I wanted to challenge myself to try a new way (for me) of visually representing data. When you’re trying to communicate a geographic distribution of data over so many small regions, a map is the best tool since the spatial relations between the data points really shine. I’ve also never had the opportunity to make a map as a final project. Typically, classes ask for essays or presentations, but the opportunity to make a map seemed like the option with the most creative potential since there are so many design choices that go into making a map. That being said, I love podcasts and would love to make one in the future.

<span style="font-family:lorabold;color:#5f0217;">BELLE:</span>  One of the reasons your project stood out to me was that it is custom-created, meaning you coded the website yourself, rather than use some of the online templates that exist. Why did you choose this?

<span style="font-family:lorabold;color:#5f0217;">PAIGE:</span>  Custom map-making definitely has its pros and cons. On one hand, the map templates built into systems such as ArcGIS are carefully designed by people who are knowledgeable about cartography and visualization standards, but on the other hand, map templates limit your creative potential to a pre-existing set of options. I have made other custom (non-map) visualizations in the past for projects which I had no chance of finding a template for, like [this visualization](https://visualizingrussian.fas.harvard.edu/word-formation) of the frequency of Russian words based on word type and word root. Engaging with visualization design from the ground-up has been a great way for me to think through what makes a visualization work, and why. 

<span style="font-family:lorabold;color:#5f0217;">BELLE:</span>  Could you walk us through your workflow? How did you manage the data, and what software did you use for each step?

<span style="font-family:lorabold;color:#5f0217;">PAIGE:</span>  Sure, so after thinking of the initial idea, I met with you at the Map Collection to start looking for data sources. It turned out that there wasn’t a central source to find information about the geography of native languages on the scale I was looking for, so we had to search for data on a country-by-country basis. Scouring the citation pages of Wikipedia articles on “Russian language in ‘X’ country” was where I found the sources of most of the data, which was stored in spreadsheets and PDFs of national census data. This opened my eyes to the fact that this kind of map didn’t exist yet since the dataset wasn’t readily available. I compiled the census data into an Excel spreadsheet which I merged in QGIS with the Admin 0 and Admin 1 spatial data which I downloaded from [naturalearthdata.com](https://www.naturalearthdata.com/). Afterwards, I exported the merged data from QGIS to geojson files which were compatible with D3.js, my favorite visualization library for JavaScript. I set up a basic webpage using HTML, CSS, JavaScript, and D3.js for the final product. The webpage gave me the freedom to add custom labels, custom zooming capabilities, and the freedom to design the map in the context of the webpage!

<span style="font-family:lorabold;color:#5f0217;">BELLE:</span>  Is there anything you wish you had known beforehand? Any words to the wise for others hoping to undertake a similar project, either topic-wise, or related to the software you chose?

<span style="font-family:lorabold;color:#5f0217;">PAIGE:</span>  I would say, don’t be afraid of going outside of your comfort zone or doing something no one else has done before! Something I wish I had known beforehand was that this kind of dataset didn’t really exist already on the internet. Nonetheless, it was a rewarding experience to compile a new dataset from primary sources, some of them written only in Russian, which I am learning as a second language. A tip: some of the old census data was only accessible through Wayback Machine links I found in Wikipedia citation sections. And definitely talk to the Map Collection librarians, since they can share access to amazing geospatial datasets with you. Although they couldn’t find my exact data, they were very helpful for walking me through the steps of making this kind of map, and were unphased by my lack of cartographic experience. I would love to do something like that again and incorporate more maps into my visualization repertoire. 