const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.8,
  // margin = { top: 20, bottom: 60, left: 80, right: 40 },
  data = [];

// LOAD DATA
d3.csv('../data/ConjuntoStylesNoAccents.csv', d3.autoType)
.then(data => {
  console.log("Conjunto data loaded", data);
});

// SCALES
// const yScale = d3.scaleLinear()
  // .domain(0, 10)
  // .range([height - margin.bottom, margin.bottom]);

// const xScale = d3.scaleLinear()
  // .domain(0, 10)
  // .range([margin.left, width - margin.right])

// const xAxis = d3.axisBottom(xScale)
// const yAxis = d3.axisLeft(yScale)

// const svg = d3.create("svg")
  // .style("cursor", "default")
  // .attr("viewBox", [0, 0, width, height]);

//function init() {

const viz = d3.create("div").attr("class","viz")

const svg = viz
  .append("svg")
  .attr("width",width)
  .attr("height",height)
  .attr("viewBox",[0,0,width,height])


const size = 600;
const squareSize = 63;

// const authorTooltip = d3.select("body")
  // .append("div")
  // .attr("class","writerTooltip")
  // .style("visibility","hidden")

//const colorScale = d3.scaleOrdinal(d3.schemePastel2);
const container = d3.select("#d3-container").style("position", "relative");


const scale = d3.scaleLinear()
  .domain([0,10])
  .range([0,size]);

  //draw();
// }

// const legend = d3.select("#legend")
// .append("svg")
 // .attr('width', 300)
 // .attr('height', 200)
  // .append('g')
  // .selectAll("div")
  // .enter()
    // .append("g")
    // .attr("fill", d=> colorScale(d.Style))
// legend.selectAll("rect")
 // .data(data)
 // .join("rect")
 // .attr("width", 18)
 // .attr("height", 18)
 // .attr("fill", d=> colorScale(d.Style))
 // .attr("x", d=>d.Style)
 // .attr("y", d=>d.Style)
 // .style("fill", function(d, i) { return color(i)});
// legend.append("text")
  // .attr("x", 25)
  // .attr("y", 13)
  // .text( function(d) { return d.Style});


//function draw() {

const waffle = d3.select("#waffle")
  .append("svg")
  .attr('width', width)
  .attr('height', height)
  
  
waffle.append("g")
  .attr("transform",`translate(${width/2-20},100)`)
  //.join("g")
  .selectAll("rect")
  .data(data)
  //.join("rect")
  .enter()
  .append("a")
  // .attr("xlink:href",d=>d.Style)
  // .attr("target","_blank")
  .append("rect")
  .attr("class","waffle")
  .attr("x",(d,i)=>{
    const n = i % 0
    return scale(n)
  })
  .attr("y",(d,i)=>{
    const n = Math.floor(i/10)
    return scale(n)
  })
  .attr("width",squareSize)
  .attr("height",squareSize)
  .attr("rx", 30).attr("ry", 30)
  .attr("stroke-width",1.5)
  .attr("stroke", "black")
  .attr("fill", d => {
    if (d.Style === "Polka") return "#ffd6e0";
    else if (d.Style === "Redova") return "#fa7921";
    else if (d.Style === "Pasodoble") return "#9bc53d";
    else if (d.Style === "Huapango") return "#5bc0eb";
    else if (d.Style === "Ranchera") return "#fed7af";
    else if (d.Style === "Vals") return "#00ffff";
    else if (d.Style === "Bolero") return "#89065b";
    else return "#fde74c"});
 

 //draw();
//};

 // .on("mousemove",function (event,d){
   // d3.select(this).style("opacity",1).attr("stroke-width",4)
    
   // authorTooltip.transition()
     // .duration(200)
     // .style("visibility","visible")

  // authorTooltip.html("<h1>"+d.SongTitle+"("+d.Style+")"+"</h1><br/>"+d.Performer)
     // .style("transform","translateY(-55%)")  
     // .style("left",(event.x)+10+"px")
     // .style("top",(event.y)-15+"px")
  // })
    // .on("mouseout",function (event,d){
      // d3.select(this).style("opacity",1).attr("stroke-width",2)
      // authorTooltip.transition().style("visibility","hidden")
   // })
