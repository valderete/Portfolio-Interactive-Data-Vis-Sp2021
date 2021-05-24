const width =300,
  height = 800,
  margin = { top: 20, bottom: 20, left: 20, right: 20 },
  data = [];

// LOAD DATA
d3.csv('../data/ConjuntoStylesFINAL.csv', d3.autoType)
.then(data => {
  console.log("Conjunto data loaded", data);
//});


//function init() {



const size = 600;
const squareSize = 63;

const container = d3.select("#d3-container").style("position", "relative");

// create tooltip
//tooltip = container
  //.append("div")
  //.attr("class","tooltip")
  //.style("visibility","hidden")

//const colorScale = d3.scaleOrdinal(d3.schemePastel2);

// SCALE
const scale = d3.scaleLinear()
  .domain([0,10]) // see notes 
  .range([0,size]);



  //draw();
// }

/**
//DROPDOWN ELEMENT
let state = {
  data: [],
  selectStatus: "ALl Artists", // + YOUR FILTER SELECTION
};

// + UI ELEMENT SETUP
const dropdown = d3.select("#dropdown") // select dropdown from HTML

  // add in dropdown options from the unique values in the data
  dropdown.selectAll("option")
    .data([
      // manually add the first value
      "All Artists",
      // add in all the unique values from the dataset
      ...new Set(state.data.map(d => d.Performer))])
      .join("option")
      .attr("attr", d => d)
      .text(d => d)

  // + SET SELECT ELEMENT'S DEFAULT VALUE (optional)
  dropdown.on("change", event => {
    state.selectStatus = event.target.value
    console.log('New selection!', state)
    draw(); // re-draw the graph based on this new selection
  });
* 
 */


  
// LEGEND
const legend = d3.select("#legend")
  .append("svg")
  .attr('width', width)
  .attr('height', height)

//LEGEND TEXT/DATA
const legendData = ["Polka", "Redova", "Pasodoble", "Huapango", "Ranchera", "Vals", "Bolero", "Schottische"]

//LEGEND SCALE
const legendScale= d3.scaleOrdinal()
  .domain(legendData)
  .range(["#389f51", "#5b327d", "#ffb82c", "#04517d", "#ff546a", "#388cdd", "#be166a", "#e95400"])

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
    .attr("cx", 15)
    .attr("cy", function(d,i){ return 150 + i*40})
    .attr("r", 12)
    .attr("fill", d => legendScale(d))
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)

//LEGEND TEXT/LABELS
    legend.selectAll("labels")
    .data(legendData)
    .enter()
    .append("text")
      //.attr("class", "legend")
      //.attr("x",function(d,i){ return 200 + i*(size/4.5) + (size/500)}) 
      //.attr("y",65)
      .attr("x", 32)
      .attr("y", function(d,i){ return 154 + i*40})
      .text(function(d){ return d})
      //.attr("text-anchor", "bottom")
      .attr("font-size","15") 
      .attr("fill", "white")
      //.style("alignment-baseline", "bottom")

///////////////////////////////////
  
//function draw() {
const waffle = d3.select("#waffle")
  .append("svg")
  .attr('width', width*1.5)
  .attr('height', height*0.9)


waffle.append("g")
  .attr("transform",`translate(${width/2},35)`)
  //.join("g")
  .selectAll("rect")
  .data(data)

  //.join("rect")
  .enter()
  //.append("a")
  .append("rect")
  .attr("class","rect")
  .attr("x",(d,i)=>{ // columns
    const n = i % 3
    return scale(n)
  })
  .attr("y",(d,i)=>{ // rows
    const n = Math.floor(i/3)
    return scale(n)
  })
  .attr("width",squareSize-10)
  .attr("height",squareSize-10)
  .attr("rx", 60)
  .attr("ry", 60)
  .attr("stroke-width",0.5)
  .attr("stroke", "white")
  .attr("fill", d => {
    if (d.Style === "Polka") return "#389f51";
    else if (d.Style === "Redova") return "#5b327d";
    else if (d.Style === "Pasodoble") return "#ffb82c";
    else if (d.Style === "Huapango") return "#04517d";
    else if (d.Style === "Ranchera") return "#ff546a";
    else if (d.Style === "Vals") return "#388cdd";
    else if (d.Style === "Bolero") return "#be166a";
    else return "#e95400"})

  //.join(
    //enter => enter
    //.append('div')
    //.attr('class', 'block'),
    //update => update,
    //exit => exit.remove())

// CREATE TOOLTIP and TRANSITIONS
  .on("click", (event, d) => {
    //d3.select(".img").remove()
    d3.select("#tooltip")
    //.selectAll("div")
    .data(data)
    //.enter()
    //.append("div")
      .attr('class', 'title')
      .html(
        '<b><p style="font-size: 25px; line-height: 40px;">' + d.SongTitle + '</b> </p>' 
        + '<p style="font-size: 25px; line-height: 30px;"> Style: ' + d.Style + '</p> ' 
        + '<p style="color: whitesmoke; font-size: 18px; line-height: 30px;"> Secondary style: ' + d.Style2 + '</p> ' 
        + '<p style="whitesmoke; font-size: 18px; line-height: 30px;"> Performer: ' + d.Performer + '</p> ' 
        + '<p style="font-size: 18px; line-height: 30px;"> Composer: ' + d.Composer + '</p>' 
        + '<a style="font-size: 20px; line-height: 10px;" href=' + d.URL + '> More about this song</a>')
      //.html('<audio id="audio" class="filter-buttons"> <a style="font-size: 25px; text-decoration: none;" href=' + d.URL + '> More about this song </a></audio>')
      .append("div")
      //.attr('class', 'subtitle')
      //.html('<i><b><p style="font-size: 25px; line-height: 26px;">' + d.SongTitle + '</i></b> &nbsp(' + d.Composer + ') ' + '</p>' + '<p style="font-size: 25px; line-height: 26px;">')
      
      .attr('class', 'audio')
      .html('<iframe src=" ' + d.VideoURL + ' " title="YouTube video player" ; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      
      //.append("div")
      //.attr('class', 'button-container')
      //.html('<button id="learn-more-button" class="filter-buttons"><a style="text-decoration: none;" href=' + d.URL + 'target="_new">About the Work</a></button>')
    

      })


})