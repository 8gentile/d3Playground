const width = 750;
const height = 600;
const color = d3.scaleOrdinal(d3.schemeCategory10);
const outerRadius = 200;
const innerRadius = 100;

var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "1px solid");

var data = [1, 2, 1, 5, 6, 8, 10];
var arcs = d3.pie()(data);

function render() {
  d3.select("g").remove();

  var arc = d3
    .arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

  var group = svgContainer
    .append("g")
    .attr("transform", "translate(" + 375 + "," + 300 + ")");

  var update = group
    .selectAll("path")
    .data(arcs, function(d) {
      return d.index;
    })
  
  var enter = update.enter()
    .append("path")
}

function arcTween(outerRadius, delay) {
  return function(d) {
    let i = d3.interpolate(d.outerRadius, outerRadius);
    return function(t) {
      d.outerRadius = i(t);
      return arc(d);
    };
  };
}

render();
