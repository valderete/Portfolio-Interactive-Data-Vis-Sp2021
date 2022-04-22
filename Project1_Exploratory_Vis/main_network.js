
// LOAD DATA
d3.csv('../data/ConjuntoStyles_Networkdata.csv', d3.autoType)
.then(data => {
  console.log("Conjunto Network data loaded", data);
//});


// STRATIFY csv data
let stratify = d3.stratify()
.id(function(d) { return d.Genre; })
.parentId(function(d) { return d.Style; });
(data);

// const container = d3.select("#d3-container").style("position", "relative");



// CREATE ROOT HIERARCHY NODE
tree = data => {
  const root = d3.hierarchy(data);
  root.dx = 10;
  root.dy = width / (root.height + 1);
  return d3.tree().nodeSize([root.dx, root.dy])(root);
}

//chart = {
  const root = tree(data);

  let x0 = Infinity;
  let x1 = -x0;
  root.each(d => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  const Network = d3.select("#NetworkChart")
    .append("svg")
    .attr('width', width/3)
    .attr('height', height/2)

  Network.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      .attr("transform", `translate(${root.dy / 3},${root.dx - x0})`)
      //.attr("transform",`translate(${root/2}, ${root.dx - x0})`)
      ;
    
  const link = Network.append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
  .selectAll("path")
    .data(root.links())
    .join("path")
      .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x));
  
    const node = Network.append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
      .selectAll("g")
      .data(root.descendants())
      .join("g")
        .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
        .attr("fill", d => d.Style ? "#555" : "#999")
        .attr("r", 2.5);

    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.Style ? -6 : 6)
        .attr("text-anchor", d => d.Style ? "end" : "start")
        .text(d => d.Genre)
      .clone(true).lower()
        .attr("stroke", "white");
  
  return Network.node();




// create tooltip
//tooltip = container
  //.append("div")
  //.attr("class","tooltip")
  //.style("visibility","hidden")

//const colorScale = d3.scaleOrdinal(d3.schemePastel2);

// SCALE
//const scale = d3.scaleLinear()
  //.domain([0,10]) // see notes 
  //.range([0,size]);

})