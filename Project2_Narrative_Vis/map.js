/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth,
  height = window.innerHeight,
  margin = { top: 20, bottom: 20, left: 60, right: 60 };

// LOAD DATA
d3.csv('../data/Westside_Sound_map.csv', d3.autoType)
.then(data => {
  console.log("map data loaded", data);



// LEGEND
const legend = d3.select("#legend")
  .append("svg")
    .attr('width', width)
    .attr('height', height*0.1)

//LEGEND TEXT/DATA
const legendData = ["In business", "No longer in business"]


//LEGEND SCALE
const legendScale= d3.scaleOrdinal()
  .domain(legendData)
  .range(["#cae165", "#ffde59"])

legend.append("g")
  //.attr("transform",`translate(${width/1.75-400},40)`)
  .selectAll("circle")
  .data(legendData)
  .enter()
  .append("circle")
    //.attr("class", "legend")
    //.attr("cx",function(d,i){ return -195 + i*(size/4.5) + (size/500)}) 
    //.attr("cy",(d,i)=>{
     // const n = Math.floor(i/20)
      //return scale(n)
    //})
    .attr("cy", height*0.08)
    .attr("cx", function(d,i){ return width*0.44 + i*200})
    .attr("r", 8)
    .attr("fill", d => legendScale(d))
    .attr("fill-opacity", "0.8")
    .attr("stroke", d => legendScale(d))
    .attr("stroke-width", 4)
    

//LEGEND TEXT/LABELS
    legend.selectAll("labels")
    .data(legendData)
    .enter()
    .append("text")
      //.attr("class", "legend")
      //.attr("x",function(d,i){ return 200 + i*(size/4.5) + (size/500)}) 
      //.attr("y",65)
      .attr("y", height*0.085)
      .attr("x", function(d,i){ return width*0.447 + i*200})
      .text(function(d){ return d})
      //.attr("text-anchor", "bottom")
      .attr("font-size","18") 
      .attr("fill", "#f3ecda")
      //.style("alignment-baseline", "bottom")


// INITIALIZE MAP AND SET VIEW //
  const mymap = L.map('mapid').setView([29.424349, -98.491142], 12); // San Antonio LAT LONG

  // ADD MAP LAYER //
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/dark-v10',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidmFsZGVyZXRlMTEiLCJhIjoiY2tvZ3RlNWxlMHNqNzJvanhjNWNlbTk4ZyJ9.wk0G9FlRHpoay94HausCsw'
  }).addTo(mymap);





 // + SIDEBAR //
const sidebar = L.control.sidebar('sidebar', {
  position: 'left',

});

sidebar.getContainer()

mymap.addControl(sidebar);

// Show sidebar
sidebar.show();


setTimeout(function () {
  sidebar.show();
}, 500);






const circle1 = 
  L.circle([29.42654, -98.51071], {
    color: '#ffde59',
    fillColor: '#ffde59',
    fillOpacity: 0.8,
    radius: 120
   
  })
  .bindTooltip("Patio Andaluz", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
  .addTo(mymap)
  .on('click', function () {
    sidebar.show()
       sidebar.setContent('<p> <a href="https://vimeo.com/320530192" target="_blank"> <img src="https://i.vimeocdn.com/video/762979111.webp?mw=900&mh=506"></a></p> <p style="font-size: 30px; line-height: 30px;"> Patio Andaluz </p> <p> Venue (closed) </p> <p> In the 1960s The Royal Jesters rented used the building as a venue, rehearsal hall, and office. </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://vimeo.com/320530192 > More info here</a></p> <p> <a href="https://www.sacurrent.com/sanantonio/a-romantic-visitation-of-patio-andaluz/Content?oid=2507097" target="_blank"> <img src="https://media1.fdncms.com/sacurrent/imager/u/original/2507094/music-patio-andaluz-2.gif"></a></p>')
      });
    


const circle2 = 
  L.circle([29.415749,-98.498759], {
    color: '#ffde59',
    fillColor: '#ffde59',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("GCP (Guerra Company Production)", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> GCP (Guerra Company Production) </p> <p> Label (closed) </p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://frontera.library.ucla.edu/songs?f[0]=field_record_label_t:7625 > More info here</a></p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p> <a href="https://www.discogs.com/label/656708-Guerra-Company-Productions" target="_blank"> <img src="https://img.discogs.com/5hOqec8WBspQHTorM8ZsZqeA_dE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/L-656708-1496823710-4534.jpeg.jpg"></a></p> <p style="font-size: 30px; line-height: 30px;"> GCP (Guerra Company Production) </p> <p> Label (closed) </p> <p> American record and production company founded by Manny Guerra and Rudy R. Guerra in San Antonio, Texas. Also printed as "Guerra Company Production".</p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://frontera.library.ucla.edu/songs?f[0]=field_record_label_t:7625 target="_blank"> More info here</a></p>')
  });


const circle3 = 
  L.circle([29.425351,-98.497821], {
    color: '#ffde59',
    fillColor: '#ffde59',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Rio Records", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> Rio Records </p> <p> Label (closed) </p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://frontera.library.ucla.edu/blog/2015/06/label-history-rio-records > More info here</a></p> <p> <img src="https://digital.utsa.edu/digital/api/singleitem/image/p9020coll4/73/default.jpg?highlightTerms="> </p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> Rio Records </p> <p> Label (closed) </p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://frontera.library.ucla.edu/blog/2015/06/label-history-rio-records > More info here</a></p> <p> <img src="https://digital.utsa.edu/digital/api/singleitem/image/p9020coll4/73/default.jpg?highlightTerms="> </p>')
  });


const circle4 = 
  L.circle([29.4590675,-98.5572148], {
    color: '#cae165',
    fillColor: '#cae165',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Janie's Record Shop", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> Janie’s Record Shop </p> <p> Record Shop (in operation) </p>1012 Bandera Road, San Antonio, TX 78228 <p>  </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.facebook.com/janiesrecordshop4/ > More info here</a></p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> Janie’s Record Shop </p> <p> Record Shop (in operation) </p>1012 Bandera Road, San Antonio, TX 78228 <p>  </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.facebook.com/janiesrecordshop4/ > More info here</a></p>')
  });


 const circle5 =  
  L.circle([29.427422,-98.5710127], {
    color: '#cae165',
    fillColor: '#cae165',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Del Bravo Record Shop", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> Del Bravo Record Shop </p> <p> Record Shop (in operation) </p> <p> 554 Enrique M. Barrera Pkwy, San Antonio, TX 78237 </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://delbravorecordshop.com/ > More info here</a></p> <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/12417695_144745759232979_8310528691583576567_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=f8TRozhzaQoAX_wRsgt&_nc_ht=scontent-dfw5-2.xx&oh=8b5527d10e799061433f4bcacc7f903c&oe=60C8D8E5"> </p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> Del Bravo Record Shop </p> <p> Record Shop (in operation) </p> <p> 554 Enrique M. Barrera Pkwy, San Antonio, TX 78237 </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://delbravorecordshop.com/ > More info here</a></p> <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/12417695_144745759232979_8310528691583576567_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=f8TRozhzaQoAX_wRsgt&_nc_ht=scontent-dfw5-2.xx&oh=8b5527d10e799061433f4bcacc7f903c&oe=60C8D8E5"> </p>')
  });


const circle6 =    
  L.circle([29.4266567,-98.5088824], {
    color: '#cae165',
    fillColor: '#cae165',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("La Música de San Anto", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> La Música de la San Anto </p> <p> Mural (in operation) </p> <p> 1303 West Commerce Street, San Antonio, TX 78207 </p> <p> A mural by David Blancas as tribute to the lives and music of San Antonio-based musicians. </p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://www.sananto.org/37---la-musica-de-san-anto.html > More info here</a></p> <p> <img src="http://www.sananto.org/uploads/1/4/5/0/14508672/mural_orig.jpg"> </p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p> <a href="http://www.sananto.org/37---la-musica-de-san-anto.html" target="_blank"> <img src="http://www.sananto.org/uploads/1/4/5/0/14508672/mural_orig.jpg"></a></p> <p style="font-size: 30px; line-height: 30px;"> La Música de San Anto </p> <p> Mural (in operation) </p> <p> 1303 West Commerce Street, San Antonio, TX 78207 </p> <p> "A mural by David Blancas as tribute to the lives and music of San Antonio-based musicians. San Anto Cultural Arts founder Manny Castillo always wanted to have murals on West Commerce Street and Guadalupe Street, the gateways to the Westside. La Musica de San Anto is the first of these gateway murals. Designed to show San Anto musicians from different decades in the same jam session, the mural also includes playbills and references to classic San Antonio music venues. Castillo passed away suddenly while this mural was still in process so the artists painted him into the center of the mural, commemorating Manny as both a passionate punk-rock musician and a Westside community leader."</p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://www.sananto.org/37---la-musica-de-san-anto.html target="_blank"> More info here</a> </p>')
  });


const circle7 = 
  L.circle([29.4513367,-98.4859586], {
    color: '#cae165',
    fillColor: '#cae165',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("The Squeezebox", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> The Squeezebox </p> <p> Bar & Venue (in operation) </p> <p> 2806 North Saint Marys St., San Antonio, TX 78212 </p> <p> The dive bar has been dubbed, “The Sounds & Soul of San Anto on the St. Mary’s Strip.” </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://southsidesanantonio.com/aaron-pena-the-man-behind-the-squeezebox/ > More info here</a></p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> The Squeezebox </p> <p> Bar & Venue (in operation) </p> <p> 2806 North Saint Marys St., San Antonio, TX 78212 </p> <p> The dive bar has been dubbed, “The Sounds & Soul of San Anto on the St. Mary’s Strip.” </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://southsidesanantonio.com/aaron-pena-the-man-behind-the-squeezebox/ > More info here</a></p>')
  });


const circle8 =     
  L.circle([29.4496857,-98.5269638], {
    color: '#cae165',
    fillColor: '#cae165',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("The Lighthouse Lounge", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> The Lighthouse Lounge </p> <p> Bar & Venue (in operation) </p> <p> 1016 Cincinnati Avenue, San Antonio, TX 78201 </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.facebook.com/thelighthouselounge/ > More info here</a></p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> The Lighthouse Lounge </p> <p> Bar & Venue (in operation) </p> <p> 1016 Cincinnati Avenue, San Antonio, TX 78201 </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.facebook.com/thelighthouselounge/ > More info here</a></p>')
  });

const circle9 = 
  L.circle([29.4264092, -98.4933815], {
    color: '#ffde59',
    fillColor: '#ffde59',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Tiffany Lounge", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> Tiffany Lounge </p> <p> Nightclub (closed) </p> <p> Popular downtown nightclub which welcomed integrated audiences and bands. </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.texasmonthly.com/articles/musical-marginalia/ > More info here</a></p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> Tiffany Lounge </p> <p> Nightclub (closed) </p> <p> Popular downtown nightclub which welcomed integrated audiences and bands. </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.texasmonthly.com/articles/musical-marginalia/ > More info here</a></p>')
  });


const circle10 = 
  L.circle([29.411939,-98.470284], {
    color: '#ffde59',
    fillColor: '#ffde59',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Keyhole Club", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    // .bindPopup('<p style="font-size: 20px; line-height: 30px;"> Keyhole Club </p> <p> Nightclub (closed) </p> <p> Popular Eastside nightclub and venue. "In 1946, a newspaper article touted Don’s Keyhole as the finest nightspot for entertainment featuring one of the best floor shows in San Antonio." </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://sanantonioreport.org/eastside-story-don-albert-dominique-keyhole-club/ > More info here</a></p>')
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p style="font-size: 30px; line-height: 30px;"> Keyhole Club </p> <p> Nightclub (closed) </p> <p> Popular Eastside nightclub and venue. "In 1946, a newspaper article touted Don’s Keyhole as the finest nightspot for entertainment featuring one of the best floor shows in San Antonio." </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://sanantonioreport.org/eastside-story-don-albert-dominique-keyhole-club/ > More info here</a></p>')
  });
  

  const circle11 = 
  L.circle([29.430651, -98.4887624], {
    color: '#cae165',
    fillColor: '#cae165',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Municipal Auditorium", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p> <a href="https://texashistory.unt.edu/ark:/67531/metapth674128/" target="_blank"> <img src="https://texashistory.unt.edu/ark:/67531/metapth674128/m1/1/med_res/"> </a> </p> <p style="font-size: 30px; line-height: 30px;"> Municipal Auditorium </p> <p> 100 Auditorium Cir, San Antonio, TX 78205 </p> <p> Theatre (in operation) </p> <p> Built in 1926, the world-class music venue is now known as the Tobin Center for the Perfomring Arts and has hosted a range of entertainment shows. </p> <p style="font-size: 12px; line-height: 8px:"> <a href="https://www.sacurrent.com/sanantonio/numero-group-reissues-classic-west-side-sounds-from-the-royal-jesters/Content?oid=2447219" target="_blank"> <img src="https://media1.fdncms.com/sacurrent/imager/u/original/2447212/localmusic1-3-460a60bb37429611.jpg"> </a> The Royal Jesters rehearsing at the Municipal Auditorium </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.tobincenter.org/about-us/ > More info here</a></p>')
  });


  const circle12 = 
  L.circle([29.4673176, -98.5427275], {
    color: '#ffde59',
    fillColor: '#ffde59',
    fillOpacity: 0.8,
    radius: 120
  })
  .bindTooltip("Teen Canteen", {
    permanent: true,
    direction: 'top',
    opacity: 0.55
})
    .addTo(mymap)
    .on('click', function () {
      sidebar.show()
        sidebar.setContent('<p> <a href="https://thewittliffkeystone.com/2019/01/16/teen-canteen-letters-shed-light-on-60s-youth-culture/" target="_blank"> <img src="https://wittliffcollections.files.wordpress.com/2019/01/sam-kinsey-teen-canteen-flyer.jpg"></a></p> <p style="font-size: 30px; line-height: 30px;"> Teen Canteen </p> <p> Dance Club (closed) </p> <p> "Sam Kinsey’s fabled Teen Canteen, a teen dance club which operated from 1961 to 1977 at various locales in San Antonio, wasn’t only an important rock venue of the era – the Sir Douglas Quintet, Mike Nesmith (pre-Monkees), Mike Post, Gene Thomas, Bubble Puppy, the Moving Sidewalks, ZZ Top and dozens of legendary teenage garage bands played there — it was a godsend for parents."</p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://thewittliffkeystone.com/2019/01/16/teen-canteen-letters-shed-light-on-60s-youth-culture/ target="_blank"> More info here</a> </p>')
    });


    const circle13 = 
    L.circle([29.44923, -98.511043], {
      color: '#cae165',
      fillColor: '#cae165',
      fillOpacity: 0.8,
      radius: 120
    })
    .bindTooltip("Friends of Sound Records", {
      permanent: true,
      direction: 'top',
      opacity: 0.55
  })
      .addTo(mymap)
      .on('click', function () {
        sidebar.show()
          sidebar.setContent('<p> <a href="https://media1.fdncms.com/sacurrent/imager/u/original/23205428/record_store_day.jpg" target="_blank"> <img src="https://media1.fdncms.com/sacurrent/imager/u/original/23205428/record_store_day.jpg"></a></p> <p style="font-size: 30px; line-height: 30px;"> Friends of Sound Records </p> <p> Record Shop (in operation) </p> <p> With a unique offering of mostly used records available in-person and online, Friends of Sound is a local record store specializing in "rare 45s, Chicano Sweet Soul Ballads, regional Tejano and Conjunto music, Cumbias etc." </p> <p> <a href="https://www.mysanantonio.com/sa-inc/article/Friends-of-Sound-records-still-spinning-with-16013403.php#photo-20722442" target="_blank"> <img src="https://s.hdnux.com/photos/01/17/03/14/20722442/7/ratio3x2_1200.jpg"></a></p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.facebook.com/friendsofsoundrecords/ target="_blank"> More info here</a> </p>')
      });


      const circle14 = 
      L.circle([29.42265568386103, -98.38246372748621], {
        color: '#ffde59',
        fillColor: '#ffde59',
        fillOpacity: 0.8,
        radius: 120
      })
      .bindTooltip("Eastwood Country Club", {
        permanent: true,
        direction: 'top',
        opacity: 0.55
    })
        .addTo(mymap)
        .on('click', function () {
          sidebar.show()
            sidebar.setContent('<p> <a href="http://www.eastwood-country-club.com/" target="_blank"> <img src="https://static.wixstatic.com/media/e886a8_8029f0b2dd8f4bb2b32c36ecb0a87371.jpg/v1/fill/w_512,h_512,al_c,q_80/e886a8_8029f0b2dd8f4bb2b32c36ecb0a87371.webp"></a></p> <p style="font-size: 30px; line-height: 30px;"> Eastwood Country Club </p> <p> Nightclub / Venue (closed) </p> <p> Opened in 1954, the Eastwood Country Club welcomed patrons of all races during a time of social unrest, uniting folks in the name of music, with many popular, well-known musical acts. The club, which hosted big-name acts such as Etta James, Nat "King" Cole, Ike & Tina Turner, and many more, was a great source of inspiration for young San Antonio musicians such as Spot Barnett, who later went on to make significant contributions to the Westside Sound as a saxophonist. </p> <p> <a href="http://www.eastwood-country-club.com/" target="_blank"> <img src="https://static.wixstatic.com/media/e886a8_e592375170664ebb9b32cdccbc216dfd.png/v1/fill/w_175,h_232,al_c,lg_1,q_85/e886a8_e592375170664ebb9b32cdccbc216dfd.webp"></a></p> <p> <a style="font-size: 15px; line-height: 10px;" href= http://www.eastwood-country-club.com/ target="_blank"> More info here</a> </p>')
        });



        const circle15 = 
        L.circle([29.3566066,-98.5049901], {
          color: '#cae165',
          fillColor: '#cae165',
          fillOpacity: 0.8,
          radius: 120
        })
        .bindTooltip("Flipside Records", {
          permanent: true,
          direction: 'top',
          opacity: 0.55
      })
          .addTo(mymap)
          .on('click', function () {
            sidebar.show()
              sidebar.setContent('<p> <a href="https://www.facebook.com/flipsiderecordparlor/photos/a.483490058337084/930227436996675" target="_blank"> <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10887292_930227436996675_7086811452352533769_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=lUPeo3VLJLQAX_xtldP&_nc_ht=scontent-dfw5-2.xx&oh=8424ce67476f39e2298b1431cdb8fc90&oe=60CF370E"></a></p> <p style="font-size: 30px; line-height: 30px;"> Flipside Records </p> <p> Record shop (in business) </p> <p> 840 SW Military Dr, San Antonio, TX 78221 </p> <p> Local record shop located in the southside. Flipside carries vinyl records, CDs, music merchandise, DVDs, and concert tickets. </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.facebook.com/flipsiderecordparlor/?ref=page_internal target="_blank"> More info here</a> </p>')
          });


        const circle16 = 
        L.circle([29.4132869,-98.4996958], {
          color: '#cae165',
          fillColor: '#cae165',
          fillOpacity: 0.8,
          radius: 120
        })
        .bindTooltip("Southtown Vinyl", {
          permanent: true,
          direction: 'top',
          opacity: 0.55
      })
          .addTo(mymap)
          .on('click', function () {
            sidebar.show()
              sidebar.setContent('<p> <a href="https://sanantonioreport.org/san-antonios-record-stores-spin-sales-from-the-resurgence-of-vinyl/bonniearbittier_southtown_vinyl_record_records_player_music_shop_12-20-2017-3/" target="_blank"> <img src="https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2017/12/BonnieArbittier_southtown_vinyl_record_records_player_music_shop_12-20-2017-3.jpg?fit=2048%2C1365&ssl=1"></a></p> <p style="font-size: 30px; line-height: 30px;"> Southtown Vinyl </p> <p> Record Shop (in business) </p> <p> 1010 S Flores St #120, San Antonio, TX 78204 </p> <p> Opened in 2016 and operating in just south of downtown San antonio, Southtown Vinyl specializes in vinyls of many genres. The shop is especially popular amongst local DJs, as they carry turntables, speakers, and other audio equipment. </p> <p> <a href="https://southtownvinyl.com/UPC/349223002614" target="_blank"> <img src="https://aentcdn.azureedge.net/graphics/items/sdimages/b/500/6/3/3/7/3737336.jpg"></a></p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://southtownvinyl.com/?ns=1 target="_blank"> More info here</a> </p>')
          });


        const circle17 =
        L.circle([29.4663749,-98.5017005], {
          color: '#ffde59',
          fillColor: '#ffde59',
          fillOpacity: 0.8,
          radius: 120
        })
        .bindTooltip("Jeff Smith’s Texas Sound Studios", {
          permanent: true,
          direction: 'top',
          opacity: 0.55
      })
          .addTo(mymap)
          .on('click', function () {
            sidebar.show()
              sidebar.setContent('<p> <a href="https://www.discogs.com/Collision-Purity-I-Gotta-Know/release/12539924" target="_blank"> <img src="https://img.discogs.com/8h0qcUptcGbZtrcsOO3XCH4vGkw=/fit-in/600x617/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12539924-1591204035-5532.jpeg.jpg"></a></p> <p style="font-size: 30px; line-height: 30px;"> Jeff Smith’s Texas Sound Studios </p> <p> Recording studio (closed) </p> <p> "With only one or two exceptions, everything on Harlem [records], Hour, and related labels was recorded at Jeff Smith’s Texas Sound Studios, located on Hildebrand Avenue on the city’s North Side. Anyone who has spent more than five minutes collecting Texas labels is familiar with the “TSS” designation, etched into the run-off grooves of countless singles from the late 1950s until the early 1970s." (Source: Discogs) </p> <p> <a style="font-size: 15px; line-height: 10px;" href= https://www.discogs.com/label/851565-Texas-Sound-Studios target="_blank"> More info here</a> </p>')
          });


})




