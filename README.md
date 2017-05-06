# Surviving Titanic - A Visual Exploration

*Gist :: *  https://bl.ocks.org/Louis-Tian/raw/b1cc4365a0897d30e3c17aad744ed363/15ef7a0f7954a370f1a056d1aa519e13ec1b1b01/


*GitHub ::* https://github.com/Louis-Tian/Titanic_Visualisation

## SUMMARY
This is a simple data visualization demo powered by `d3.js` using the Titanic passenger data obtained
from [Kaggle](https://www.kaggle.com/c/titanic)


## Design
The tragedy of Titanic is a well know story. It has a strong and natural story line. This visualization is
designed around this story line. My goal is to create a visualization that feels like watching a movie.

Each passenger is encoded by a small circle.

The gender of each passenger encoded by the color hue as well as the horizontal position. Males are
organized at the left hand side of the entire scene and Female on the right.    

The age of the passenger is also encoded by the horizontal position from left to right in ascending order.

Whether a passenger survived tragedy is encoded in by the vertical position as well as the opacity.

This visualization make heavy use of the animation. It has 4 separate stages (scene),
each one is connected from the previous one using animation. The animated is used to enhance the
visual encoding and gives each scene a very strong focus.

I complemented the visualization with animated text scripts to make the entire page more appealing.

## Feedback
1. My fiancée

She dislike the y-axis mostly due to aesthetic reason. She think the meaning is obvious and self explanatory.

__2. My Mom __

My Mom get a little confused one the animation where dots represent deceased transition from above to below the x-axis. She didn't get it straight away and I have to explain it to her.

__3. CtrlAltDel from Discuss Forum __

> I'm fascinated and impressed by this visualization. The intro through the age distribution is very effective at framing the disaster. Here are some recommendations to enhance the explanatory nature of the visualization:

> * The histogram of ages is very informative. The final statement regarding number of surviving passengers and that they are women and children is not supported by the next and final phase of the visualization. My recommendation would be to label or otherwise encode the plots by gender, to add a scale to the bottom plots (so the viewer can see the counts), and to put a marker to show the cutoff for "children." Please also indicate which part of the panel (upper or lower) is survived and which is perished. This should be mostly obvious to the viewer but being explicit will avoid any confusion.
* Another and potentially more effective approach would be to add panels showing survival rates (rates vs. counts) by age group and gender.
* encodings: Please add a legend for color encodings. Most people will understand the color scheme for gender but it's best to be clear.
I hope this is helpful. i'm looking forward to seeing the next iteration.

## Improvements
* Given the feedbacks, I have made some significant changes. I removed the y-axis, as I do the visualization more visually appealing without it. And I do believe that for most people the meaning of the vertical axis is obvious.
* A lot of icons are added to serve as the purpose of 'legend', and to explain the meaning of each animation more. An beating heart icon is added to the particular animation where my mom get a little confused.
* In light of CtrlAltDel's comments, additional final animation is added to clearly separate out the 'children', 'women' and 'men' group, directly supporting the final comments made.

## Previous iteration
|version| link|
|-|-|
|v1 (first submission): | https://bl.ocks.org/Louis-Tian/raw/d198911987ee0f3ece848f19cf3dc1da/7a14c95fa29a0529d35407399a18acf3abb54f48 |
| v0: | https://bl.ocks.org/Louis-Tian/raw/051feb6dccb43f06709a6aa35ca4671d/b0e99572e6370d0e800d488beac7ba2563fbb75c|

## Resource
This visualization is inspired by
* https://www.behance.net/gallery/26632637/Surviving-Passengers-of-Titanic-data-visualization
* http://www.sarahspijkers.com/portfolio.html
