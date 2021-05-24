let svg;
let Tooltip;
// APPLICATION STATE
let state = {
 data: null,
 hover: null
 // + INITIALIZE STATE
};

// LOAD DATA + set data path (adjust as needed for correct representation of values)
d3.csv('../data/timeline_data.csv', d => {
    return{
      Date: new Date(d.Date, 0, 1), // format as date for timescale
      X_position: +d.X_position, // plus sign to format as numeric
      Y_position: +d.Y_position,
      Event: d.Event
    }
  })
.then(data => {
    console.log("timeline data loaded", data);
    


const timeline = d3.select("#timeline") // select timeline element from HTML
   .append("svg")
        .attr('width', width/1.40)
        .attr('height', height*2)
        .style("position", "relative");


// +SCALES
xScale = d3.scaleLinear()
    .domain([-120, 120])
    .range([0, width/1.5]);

// + Y Axis as timeline
yScale = d3.scaleLinear() // d3.scaleTime() 
    // .domain([d3.max(data, d => d.Date), d3.min(data, d => d.Date)]) // [min, max]
    //.domain([new Date(2000, 0, 1), new Date(1940, 0, 1)]) // [Max, Min] for chronological order
    .domain([95, 5])
    .range([height*2 - margin.bottom, margin.bottom]);

;

// + AXES
const xAxis = d3.axisBottom(xScale);
const line = d3.axisLeft(yScale)
    //.tickArguments([30])
    .tickValues([]) // to remove tick labels
    .tickSize(0)
    //.tickSizeOuter(80)
    .tickPadding(0)
    .tickSizeOuter(0);

// CALL yAxis as timeline   
lineGroup = timeline.append("g")
    .attr("class", "line")
    .attr("transform", `translate(${width/3}, ${0})`)  // align in center of svg
    .call(line)
        .attr("color", "#ffde59")
        .attr("stroke-width", 10);

// CALL xAxis
xAxisGroup = timeline.append("g")
    .attr("class", "line")
    .attr("transform", `translate(${0}, ${height - margin.bottom})`)
    .call(xAxis)
        //.attr("color", "red")
        .attr("opacity", 0) // "hide" x-Axis
        //.attr("stroke-width", 5);
 





// + TOOLTIP Container
const Tooltip = timeline.append("div")
    .attr("class", "tooltip")
    //.selectAll("text")
    //.data(data)
    //.enter()
    //.append("text")
    //.style("position", "absolute")
    //.attr("dx", d => xScale(d.X_position))
    //.attr("dy", d => yScale(d.Y_position))
    //.style("visibility", "hidden")
    //.text(d => d.Description)
    //.attr("opacity", 0);
    //.style("top", 0)
    //.style("left", 0)
    .attr("background-color", "blue")
    // .style("padding", "5px")
    .html(
       '<b><p style="font-size: 25px; line-height: 40px;">' + "Event Name" + '</b> </p>' 
       + '<p style="font-size: 25px; line-height: 30px;"> Style: ' + "Event Description" + '</p> ')





// Tooltip FUNCTIONS
const mouseover = function(d) {
    Tooltip
     // .style("opacity", 1)
    d3.select(this)
      .style("stroke", "red")
      .style("stroke-width", 5)
      //.style("opacity", 1)
      .text(d => d.Description)
      // .html("TOOLTIP TEXT: " + d.Description)
        // .attr("dx", function(d) { return xScale(d.X_position); })
        // .attr("dy", d => yScale(d.Y_position))
}



const mouseleave = function(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "none")
      //.style("opacity", 0.8)
  }




        

// DRAW LINES (start at X postion 0 for animation))
const lines = timeline.selectAll("rect")
    .data(data)
    .enter()
    .append("line")
        //.attr("x1", function(d) { return xScale(d.X_position); })
        .attr("x1", xScale(0))
        //.attr("x2", xScale(0))
        .attr("x2", xScale(0))
        .attr("y1",  d => yScale(d.Y_position))// function(d) { return yScale(d.Y_position); })
        .attr("y2",  d => yScale(d.Y_position)) // function(d) { return yScale(d.Y_position); })
        .attr("stroke", "#ffde59")
        .attr("stroke-width", "10")    

// DRAW CIRCLES as EVENTS (start at X postion 0 for animation)
const circles = timeline //.append("g") // not sure if i need to append "g"
    .selectAll("circle")
    .data(data) // , d => d.Event)
    //.join("g")
       // enter => enter.append("g")
    .enter()
    .append("circle")
        //.attr("class", "circle")
        
        //.attr("transform", d => `translate(${xScale(d.X_position)}, ${yScale(d.Date)})`)
        // .attr("cx", d => xScale(d.X_position)) // start dots on the left
        // .attr("cy", d => yScale(d.Date))
        //.attr("cx", function(d) { return xScale(d.X_position); })
        .attr("cx", xScale(0) )
        .attr("cy", d => yScale(d.Y_position)) // function(d) { return yScale(d.Y_position); })
        .attr("r", "95")
        .attr("fill", "#cae165")
 
        //.attr("fill-opacity","0.4")
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave)

 // DRAW LABELS       
const labels = timeline.append("g")
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
        .text(d => d.Event)
        .attr('dx', xScale(0))//positions text towards the left of the center of the circle
        .attr('dy', d => yScale(d.Y_position)) // function(d) { return yScale(d.Y_position); })
        .attr("fill", "##100f0d")
        .style("text-anchor", "middle")
        
        
 // LINE ANIMATION
 timeline.selectAll("line")
    .transition()
    .duration(2000)
    .attr("x1", function(d) { return xScale(d.X_position); })

// CIRCLE ANIMATION
timeline.selectAll("circle")
    .transition()
    .duration(2000)
    .attr("cx", function(d) { return xScale(d.X_position); })

// TEXT ANIMATION
timeline.selectAll("text")
    .transition()
    .duration(2000)
    .attr("dx", function(d) { return xScale(d.X_position); })



/**

// TOOLTIP FUNCTION
circles.on("mouseenter", (event, d)=>{
    state.hover = {
      //position: [function(d) { return xScale(d.X_position); }, d => yScale(d.Y_position)],
      name: d.Event
    }
    //state.hoverPositionR = d.r
  
  draw()
  
  })
  .on("mouseleave", () => {
    state.hover = null
   draw(); // calls the draw function
})
  
  //append text
  draw(); // calls the draw function
},
  
  /**
   * DRAW FUNCTION
   * we call this everytime there is an update to the data/state
* */
    

/**
function draw() {
    // + UPDATE TOOLTIP //working on getting the hover to work
    if (state.hover) {
      Tooltip
      .html(
        `
        <div>Name: ${d.Description}</div>
        `
      )
      .style("font-size","15px")
      .transition()
      .duration(300)
      .style("transform", `translate(${state.hover.position[0]}px,${state.hover.position[1]}px)`)
      }
    Tooltip.classed("visible", state.hover)
    //Tooltip.style("visibility", "visible")
*/
  })