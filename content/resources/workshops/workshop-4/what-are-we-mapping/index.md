---
title: What are we mapping?
date: 2024-07-22
image: cover.png
layout: single2
description: Background on the project
---
## Background
In 2023, the Harvard Map Collection partnered with with Tara Menon's English class, City Fictions. In this course, students consider experiences of a place from many perspectives (written, lived, mapped, etc.). The mapping assignment prompts students to create two maps of the same place, which each tell a different story.

Libby Wu had a stand-out project. She was looking at the intersection of fitness recreation with demographics and access by public transportation.


<iframe width="100%" height="450" frameborder="0" title="Felt Map" src="https://felt.com/embed/map/NYC-Basketball-Courts-copy-cokki9BgFSJuaJMiC765bZD?loc=40.72138%2C-74.00292%2C13.14z&legend=0&logo=1&link=1" referrerpolicy="strict-origin-when-cross-origin"></iframe>

In her first map, she obtained the location of basketball courts from New York City open data, and updated the dataset with notable historic locations. She then overlaid this data with a demographic map of poverty rate, as well as subway lines.


<iframe width="100%" height="450" frameborder="0" title="Felt Map" src="https://felt.com/embed/map/NYC-Workout-Classes-W6K2khdPSmWiu8Eem9CDCjC?loc=40.71912%2C-73.99632%2C13.3z&legend=0&logo=1&link=1" referrerpolicy="strict-origin-when-cross-origin"></iframe>

In Libby's second map, she collected locations for fitness courses such as cycling, pilates, yoga, boxing, etc. from fitness apps she uses and compared that against demographic data for non-white populations. She also continues to overlay transit access.

Each of these maps on its own tell stories, but in conversation start a dialogue that is relevant to topics the class discussed and read about related to experiences of place.

## Concepts 🤝 data
Libby's maps work because, **even before opening any mapping tool**, she had already workshopped ideas for what she wanted to say or explore with her maps, and spent time refining those ideas with searches for available data. 

We find that spending time developing an idea or concept for a mapping project is an effective approach to having a good result. Part of that process, however, does require scoping the project idea against data availability. The purpose of this workshop is to practice using some commonly requested GIS datasets, to get a sense of what is possible.

## What will we map in this workshop?

### Demographic data
We are going to practice downloading the census datasets Libby uses, show where to obtain this type of data, and what is required to be able to work with these datasets for mapping.

### Fitness locations
We are going to look at the coordinate data Libby created showing the locations of courts and fitness classes to understand how location data is structured, so that you could create datasets of your own.

### Subway stops
We will practice searching for spatial data "in the wild" in NYC's open data portal, and we'll take Libby's project a step further by practicing basic spatial analysis using walking buffers around the train stops to explore transit access.

### Historic maps
We will learn how to compare a historic map against all of these modern data layers. This will help us practice spatial humanities methods, as well as spell out the difference between **vector** (e.g. point locations, census tracts, subway lines) vs **raster** (image pixels) GIS data.

## Data housekeeping

The workshop data for this course is available from the [Harvard_Map_Collection_Workshop_Data](https://osf.io/nuwqs/files/osfstorage) folder. You can download the whole folder to your computer. The pace of in-person workshops varies group-by-group. Some folks want to spend lots of time really understanding each step, some folks want to fly and move ahead quickly. Both preferences are normal! For that reason, on the day of the workshop, we will try to establish a median pace. This means if you want to take more time on any given step than the tempo we have found as a group, the steps are all available to return to later. 

To facilicate being able to keep up with the group as we move along in person, we have organized the data so that there are slices of data representing the beginning and end of each step. The instructor and online tutorial steps will cue you with instructions for which dataset to refer to at any given point in the workshop.