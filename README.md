# Portfolio-Spring-2021
This repository contains files for my Exploratory & Narrative Visualization Projects for DATA 73200 (Interactive Data Visualization) 

*Both projects are best explored on a desktop and with audio on*

As an arts admin based in San Antonio, Texas, my work focusses on methods of promoting and preserving regional arts & culture. This translates into my graduate research and projects, wherein I explore themes in regionally and culturally specific music forms that are deeply rooted in my community. My exploratory project surrounds styles of Conjunto music. The central focus of this project is to inform and illustrate some of the different musical styles that fall within the genre of Conjunto music, such as polkas, boleros, paso dobles, vals, etc. My narrative project aims to portray the story of San Antonio’s Westside Sound with a focus on mapping places that contributed and/or continue to contribute to the music, such as venues, record labels, record shops, and more. 

-------------

# Exploring Conjunto Music

https://valderete.github.io/Portfolio-Interactive-Data-Vis-Sp2021/Project1_Exploratory_Vis/final_index.html


# San Antonio's Westside Sound: The Music That Gave Rise to Chicano Soul

https://valderete.github.io/Portfolio-Interactive-Data-Vis-Sp2021/Project2_Narrative_Vis/index.html

-------------

# Reflection 

I began this course with a mix of feelings, mostly ambitious and nervous. Ambitious because I was determined to learn as much as I possibly could through my first ever experience with programming languages. Nervous because I had no background knowledge of programming languages prior to this course. While the course absolutely proved to be challenging -- even more so than I could have imagined -- I built on the prior data visualization and information design skills I have learned in the previous semester to make the most out of learning a new language/tool that would help me bring my data viz ideas to life. 

Early into the semester, I knew I wanted my projects focus areas to meet at the intersection of my work as an arts administrator in San Antonio, Texas and my personal interests. Eventually, I decided on projects that could serve as educational and/or promotional material for topics that I am deeply invested in, on professional and personal level. As I completed the course tutorials, I reflected on how the ideas learned could be applied to my final projects. Admittedly, the reflection and thought process was challenging because I was so consumed by simply trying to understand the concepts of each class and completing the weekly assignment. In April, as the tutorials wrapped up, I pivoted my focus to applying the concept learned throughout the semester to my projects. Below are reflections on my approaches, research and data collection, design choices, next-steps for each project.  

* Exploratory Project: 

While I considered several topics for this project, such as exploring the impact that winter storm Uri had on Texas communities, I ultimately decided to keep the focus within the realms of my work with a community-based nonprofit which aims to preserve and perpetuate traditional Conjunto music. My exploratory project is an exploration of carious music styles within the Conjunto genre. For design, I was inspired by an interactive project I came across on Observable where the author, Urmila, used a waffle chart design with tooltips revealed on hover. Considering this would be my first project with any sort of programming language and technologies, I wanted to the design to remain within the domain of my novice skillset while still allowing for the unique customizations that I envisioned.  

In the ideation phase, I decided on my intended audiences so as to approach the architectural schema and design with this information in mind. My primary audience is students from the organization with which I work, especially new/beginner students. The project aims to serve as a supplemental educational resource for the students as they learn about the various sub-styles within the genre. Although conjunto music is widely celebrated in South Texas and Northern Mexico, the music has recently gained popularity in other areas and continues to draw attention from music enthusiasts in other regions, so as a secondary audience, I hope to engage music professionals and scholars, like ethnomusicologists and folklorists who are interested in learning more about Conjunto music. With the audience in mind, I felt confident in proceeding with my design inspiration – the waffle chart. Specifically, I aimed to emulate the 31 buttons of a 3-row button accordion, the main instrument used in traditional Conjunto music. The waffle chart in D3 is made up of rectangles, so I needed to figure out how to achieve the circle. Luckily, this proved to be simpler than I thought.  I manipulated the borders of the “rect” elements to reache the circle appearance. So, while the buttons in my project appear as circles, they are actually “rect” elements in a waffle chart – something I was very proud of! 

I collected a dataset of 31 songs (for the 31 buttons) and song details to be revealed in my tooltip (more on this below). The dataset creation was manual in that I created the dataset myself through manual collection and organizing. The variables used include the song title, style, artist, embedded video, and more. After binding my data to the waffle chart circles, I saw my project come to life! I applied a Boolean “if, then” function to the circles to color them by style. 

While my idea to emulate the 31 accordion buttons came very close to a reality, I was unfortunately unable to manipulate the x and y position of my “buttons” to achieve the exact position that I was aiming for. I believe this can be achieved by manipulating the xx and y positions of the middle column of rect elements, however I am not sure how to do this without changing the positions of all three columns. This is something I definitely want to revisit and hopefully revise to reach the desired outcome.  

For the legend, I used a D3 scale where my domain was my legend data was the domain and my chosen color palette was the domain. I then appended circles to represent each style and text labels. Since the legend data was simple and minimal, I created the dataset in my code using “const” and defining my data. The color palette, however, was not as simple. While I knew a few aspects of my project would be challenging, I did not think choosing a good color palette would be one of those challenges. After realizing that I needed to choose 8 different colors for each of the music styles, I was faced with the challenge of creating a categorical palette that was clean, avoiding the use of non-complimentary colors, but they had to be easy for users to differentiate -- I could not use a diverging color palette. After much trial and error, I finally settled on manually curated colors that I felt worked well for my projects. 

In the ideation phase, I envisioned a visual to explore and explain details about the music styles referenced in my project, however I struggled to create a visual for this in D3. I attempted a network chart, but I could not refine my code enough to make this work. This is another aspect I hope to improve in this project. Additionally, for further developments of this project I envision this developing into a valuable resource for the students within my organization and anyone interested in Conjunto music. Currently, we are working on an archival and transcription project at my organization which aims to document and digitize Conjunto songs, as much of the history of this music is not very well-documented. I hope to see my exploratory project expand into a database of some sort for the future transcriptions and other documents. 

* Narrative Project:

For my narrative project I considered a few topics, but eventually decided to proceed with a focus on San Antonio’s Westside Sound. This topic is of great personal interest to me, as my family and I have deep roots in San Antonio, with me being a (proud) fifth generation San Antonian. This particular music style represents much more than a sound or genre to the folks who have been here for generations – the Westside Sound represents an era and feeling. The Westside Sound is widely known as or referred to as Chicano Soul. While that claim is correct – as the sound strongly influenced and eventually evolved into Chicano Soul – it leaves out the important roots and history. While Chicano Soul music has been well-documented, the story of the Westside Sound is not as well known. My narrative project aims to overviews the story of San Antonio’s Westside Sound with a focus on the roots, pioneers and prominent places that played a role in the creation and perpetuation of the style as well as the influence of the Westside Sound on Chicano Soul. 

I was quite ambitious in the ideation phase for my narrative project, outlining at least 4 different visualizations in my sketches, but this was not realistic with my skillset and deadlines. I was able to execute one visualization in full and another with some quirks that I want to revise. The main visualization was the mapping of the Westside Sound. This was concerning from the get-go as I struggled most with the geographic tutorial during the semester. Considering my struggles with the geographic features in D3, I decided to utilize a different JavaScript library for the map. After exploring different libraries and tools, Leaflet, by Mapbox, proved to be a good option to execute my map. I did however struggle with binding my data to Leaflet, so I used a very manual approach in my coding for the map by inputting my data for each point within my code. I want to investigate methods of binding data to Leaflet as this manual process is not ideal for larger datasets – luckily my dataset was simple and small. While Leaflet has tooltip and label features, the amount of data that I wanted to include in tooltips was not ideal for a small tooltip box. I eventually found a Leaflet plugin that allowed me to implement a sidebar. The sidebar feature was more suitable for the details I chose to reveal on user click, which included media filed and text. I was very pleased with this plugin and can imagine using it for future projects. For the map legend, I used the same method that I used in my exploratory project since there were only two colors used for this visual. 

For the second visual, I wanted to create a vertical timeline. I opted for D3 on this visual. After brainstorming ways to create the timeline I envisioned, I decided on implementing a traditional x and y axis as used in bar graphs and scatterplots. To achieve the timeline look I envisioned, I manipulated the Y-axis to align it in the center of the X-axis, allowing me to display datapoints (events) to the right and left of the “timeline.” I also adjusted the Y-axis attributes to remove the ticks and tick labels so only the axis line appears. I adjusted the opacity on the X-axis to make it invisible, which allowed me to achieve the vertical timeline look I envisioned. For the timeline events, I drew lines and circle points to the data on the y-Axis and added text as the event titles. The circles, lines, and text have animation on start, but I was unable to edit my code to trigger the animation when the timeline enters the user’s page. So, unfortunately, the animation is not noticeable to users. Lastly, I wrote code for an HTML tooltip to reveal event details, but I was unable to refine my tooltip code enough to make it work. The tooltip on my timeline was the most challenging part of both projects, actually -- I spent a significant amount of time trying to resolve the issue of it not appearing the window. After inspecting the browser console, it appears the tooltip div is appending but does not have a y position. I have yet to determine what I am doing wrong and/or missing in my code to cause this issue.  

While I wanted to include two more visualizations in my project, I did not have enough time to execute those ideas. I hope to revisit the project this summer to at least resolve the tooltip issue as this will enhance the timeline visualization significantly and to add the additional visualizations that I envisioned in my ideation phase. I also hope to add more data to the map and timeline visualizations. The data collection process was very timely, since I was manually collecting and organizing the data myself. 

* Conclusion:

Overall, I am both impressed and surprised with how much JS, D3, HTML, CSS, and GitHub fundamental knowledge I was able to learn in one semester. I had no knowledge of these web technologies prior to this course, so I spent a significant amount of the semester reviewing and practicing the basics of these tools. If I had prior knowledge, I am confident that my projects would have been closer to what I envisioned, but I am still very pleased with the outcome so far and hope to build on the skills learned to refine and enhance my projects. 