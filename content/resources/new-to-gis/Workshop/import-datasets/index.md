---
title: 4. Import datasets
date: 2023-01-03
tags: ["Introduction-to-GIS-workshop"]
image: gradient2.png
layout: single2
---

To review the difference between raster and vector data, visit the [Introduction](/resources/new-to-gis/workshop/introduction/).

## Raster data

1. If you haven't already, [download and install QGIS](https://mapping.share.library.harvard.edu/tutorials/census-data-primer/download-software/).

2. Open QGIS.

3. Open a `New Empty Project`.

4. In the left-hand `Browser` menu, find the dropdown titled `XYZ tiles`.
![Screenshot of XYZ tiles in the QGIS browser menu interface](media/6.png)

5. Expand the `XYZ tiles` dropown and double-click `OpenStreetMap` to add a basemap to your project. The basemap exists in the background of the project to give us a reference while we are working.

6. In the banner that runs across the top of the QGIS project, find the `Zoom in` button. Select this button. 
![Screenshot of the QGIS interface showing the top banner with the Zoom in button highlighted](media/7.png)

7. Click and hold to drag a square around Europe. You can also scroll in and out on your mouse to Zoom in and out. To pan around the map without zooming, engage the `Pan map` button, which looks like a hand.
![GIF of zooming and panning around the QGIS map document](media/zoompan.gif)

8. In the left-hand browser menu, right-click `XYZ Tiles` and select `New Connection`. 
![Screenshot of New XYZ tile connection menu option in QGIS](media/9.png)
> We are adding the map of Poland nationalities. This map has already been georeferenced. Georeferencing maps like this one allows us to overlay it onto other maps and directly compare maps and data of the same area. The map is currently hosted online as a streaming data layer. We can bring it into our project by specifying in QGIS what the layer URL is.

9. In the XYZ Connection wizard, title the new layer `Poland Nationalities 1919`.

10. Copy and paste the following link into where it asks for a URL: `https://allmaps.xyz/maps/8d5cc5d1fec615d6/{z}/{x}/{y}.png`
![Screenshot of XYZ Connection wizard in QGIS](media/25.png)
> To learn how we georeferenced this [map from our Digital Collections](https://iiif.lib.harvard.edu/manifests/view/ids:445002895), you can follow [this tutorial](https://harvardmapcollection.github.io/tutorials/allmaps/georeference/).  

11. Accept all other defaults. Select `OK`.

12. Make sure the dropdown caret next to `XYZ Tiles` in the browser menu is expanded. To add the Poland Nationalities 1919 map layer to your QGIS project, double-click on `Poland Nationalities 1919`. You should be able to see the old map overlaid on the basemap now. 
> It might take a few moments to render. As you zoom in and pan around, you are querying the map data at different zoom levels. The resolution should improve as it finishes loading.


## Vector data


1. Download [the zipped data from this Google Drive link](https://drive.google.com/file/d/1cKUtwbPIaWjvI_a_zD-Su_fItkA9u5UT/view?usp=sharing).

2. Uncompress the zipped data folder. If you need help unzipping folders, follow [the steps on this website](https://www.sweetwater.com/sweetcare/articles/how-to-zip-and-unzip-files/).

3. In the very top QGIS program menu, select `Layer → Add Layer → Add Vector Layer`. 
![Screenshot of Add Vector Layer menu option in QGIS](media/13.png)

4. In the Data Source Manager, Under `Source`, click the ellipsis next to `Vector dataset(s)`. This will open your computer's files. Navigate to where you downloaded and unzipped the project data. In the `allenstein-region` folder, select the file `allenstein-region.shp`.
![GIF of navigating to find the right shapefile file](media/add-shp.gif)

5. Select `Open`.

6. Select `Add` and `Close`. The `allenstein-region` layer should now appear in your layer list, and on your map.

6. Follow the same prompts to add the Polish cities statistical data. In the Data Source Manager, Under `Source`, click the ellipsis next to `Vector dataset(s)`. This will open your computer's files. Navigate to where you downloaded and unzipped the project data. In the `poland-stats` folder, select the file `poland-stats.shp`.

5. Select `Open`.

6. Select `Add` and `Close`. The `poland-stats` layer should now appear in your layer list, and on your map. Your map document should look something like this. 
![Screenshot of the QGIS document showing all three layers](media/2-5.png)
*All three layers, the georeferenced map, the allenstein region, and the polish cities statistics.*

7. Let's make this data a little easier to work with. Double-click the `allenstein-region` layer in the `Layers Panel`. This will open up the `Layer Properties` for the `allenstein-region` shapefile. 
![GIF of double-clicking the layer in the layer list to open the properties](media/layer-props1.gif)

8. Select the `Symbology` tab from the Layer Properties menu.
![Screenshot of the Symbology layer properties in QGIS](media/2-6.png)

9. We want to change the symbology on the plebiscite region layer so that instead of QGIS symbolizing the region as a solid shape, it is just a border around the region. Select where it says `Simple Fill`.
![GIF of clicking on the Simple Fill button in the Symbology Properties Menu](media/simple-fill.gif)

10. In the `Fill Style` drop-down, change `Solid` to `No Brush`.
![Screenshot of Fill style symbology options in QGIS](media/no-brush.gif)

11. Let's change the border outline, or "Stroke", to a color and width that appears a bit more prominently against the detail of the bold colors on the historic map. Click the colorful bar which appears to the right of the `Stroke Color` option to open the `Select Stroke Color` menu.
![GIF of clicking on the select stroke color menu](media/select-fill-color.gif)

12. We're going to use a light greenish color which will pop against the map background. Paste the color code for this color into where it says `HTML notation`. The value to paste in is `#e0f3db`
![GIF of pasting in the correct color code](media/color-code.gif)
> To learn more about color codes, check out [htmlcolorcodes.com](https://htmlcolorcodes.com/).

13. Increase the `Stroke Width` to `1.0`.
![Screenshot of the Stroke width symbology options in QGIS](media/stroke-width.gif)

14. Select `OK`

15. This works better for us, because now we can see the extent of the plebiscite region, but can also "peer under" the layer to see the details of the historic map. Your map should look something like this.
![Screenshot of map with the allenstein region layer's symbology adjusted](media/2-7.png)

16. Now let's label the Allenstein region. Double-click the `allenstein-region` layer in the `Layers Panel` again, to open up the `Layer Properties`.
![GIF of double-clicking the layer in the layer list to open the properties](media/layer-props2.gif) 

17. Select the `Labels` tab in the `Layer Properties` menu.
![Screenshot of the Label tab in the Layer Properties menu](media/2-8.png)

18. Select the drop-down that says `No Labels`, and change it to `Single Labels`.
![GIF of changing no labels to single labels in the label interface](media/single-labels.gif)

19. Select the `Text` tab, and change the size of the label to `14.0`.
![GIF of changing the text size](media/text-size.gif)

20. Click the color bar next to `Color` and paste `#eee` as the color code into the `HTML notation` field.  
![GIF of changing the text color](media/text-color.gif)

21. Let's add a drop shadow to make the label stand out better against the map background. Select the label tab called `Shadow`, and toggle on `Draw drop shadow`.
![GIF of toggling on the drop shadow](media/drop-shadow.gif)

22. Select `OK`. Your map should now look like this, with the Allenstein region outlined and labeled. 
![Screenshot of the map with the allenstein region labeled](media/2-10.png)

23. The points representing the Polish cities in the `poland-stats` layer are also quite small and difficult to see. Let's make them bigger. Double-click the `poland-stats` layer in the `Layers Panel` to open the `Layer Properties`. 

24. Select the `Symbology` tab.

25. Select where it says `Simple Marker`.
![GIF of selecting simple marker from the Layer Properties symbology tab](media/simple-marker.gif)

25. In the text box next to `Size`, change the marker size to `6.0`.
![GIF of changing the marker size from 2.0 to 6.0 in the QGIS layer properties symbology interface](media/marker-size.gif)

26. Select `OK`. Your map should look something like this.
![Screenshot of the current map state, showing the cities layer with larger points](media/2-11.png)

[Next lesson: 5. Visualize statistics →](/resources/new-to-gis/workshop/visualize-statistics/)

[← Previous lesson: 3. Data overview](/resources/new-to-gis/workshop/data-overview/)