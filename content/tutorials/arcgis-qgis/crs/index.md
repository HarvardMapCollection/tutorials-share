---
title: Manage Coordinate Reference Systems (CRS) Tutorial in QGIS
date: 2023-01-18
tags: ["qgis-hub"]
image: 2.jpeg
layout: single2
description: Explains the fundamental concepts of map projections and Coordinate Reference Systems and quick tips for troubleshooting common CRS issues.
---

This tutorial will guide you through a straightforward, practical method to ensure all your datasets share the same coordinate reference system (CRS), allowing you to begin mapping effectively.

### Understanding Coordinate Reference Systems

"Map projections attempt to represent the Earth's surface, or a portion of it, on a flat piece of paper or a computer screen. In simpler terms, map projections transform the Earth from its spherical (3D) shape to a planar (2D) one.

A Coordinate Reference System (CRS) then defines how the two-dimensional, projected map in your GIS relates to real-world locations. The choice of map projection and CRS depends on the regional extent of your work area, the type of analysis you plan to perform, and often the availability of data." - _[QGIS documentation](https://docs.qgis.org/3.16/en/docs/gentle_gis_introduction/coordinate_reference_systems.html)_

* * *

### Why Consistent Coordinate Reference Systems Matter

Every mapmaker has likely encountered the frustration of data layers not aligning on a map, or data appearing unexpectedly in the middle of an ocean. This issue is almost always due to data being in an incorrect CRS.

Numerous resources are available on [how to choose a map projection](http://www.geo.hunter.cuny.edu/~jochen/gtech201/lectures/lec6concepts/map%20coordinate%20systems/how%20to%20choose%20a%20projection.htm#:~:text=When%20you%20choose%20a%20projection,area%E2%80%94to%20achieve%20that%20purpose.).

This tutorial will guide you through a straightforward, practical method to ensure all your datasets share the same CRS, allowing you to begin mapping effectively.

* * *

### How to Change a Dataset's CRS

When you add a dataset to QGIS, the project's CRS often defaults to that of the first layer. This tutorial assumes you have a dataset with an existing CRS, and you wish to change it, or align it with a common CRS like WGS 84.

*   In the bottom-right corner of the QGIS window, click the button displaying the current project's `EPSG: numerical code`.
*   A window will appear, prompting you to select the CRS for the entire project. Choose `WGS 84 EPSG: 4326`. If you can't find it in the list, use the `Filter` box to search.
*   Click `OK`.

_You might observe a change in how your data looks when the project CRS is altered. If cartography is your primary focus, select a reference system that aligns with your mapping location. If you are unsure or want to ensure compatibility with web mapping applications, `WGS 84 EPSG: 4326` is a reliable default._

*   Changing the project CRS is different from changing the CRS of the data layer itself. Every GIS dataset has its own CRS. To check a dataset's CRS, right-click the data layer in the layer list and select `Properties`.
*   From the menu, choose `Source`.

*   Within the layer's source properties, you will see its current CRS (e.g., `EPSG: original_code original_name`). To change it, under `Set source coordinate reference system` you can use the dropdown for recent choices, or click the globe icon to open the CRS search interface. Select your desired CRS, such as `WGS 84 EPSG: 4326`.
*   Click `OK`.
*   It's possible that changing the data source CRS will shift the data's location out of view within your project frame. To recenter your data on the map, right-click the layer in the layer list and choose `Zoom to Layer`.
*   A good practice when making data changes in GIS desktop software is to assume these changes are temporary until you export the data as a new dataset. To save this dataset with its new source CRS, right-click the data layer in the layer list and select `Export` → `Save Features As`.
*   Ensure you are saving with the correct CRS and to a memorable folder. Click `OK`.
*   If you were encountering problems with analysis or errors suspected to be due to inconsistent CRSs across layers, try rerunning the tools with this newly exported dataset.

