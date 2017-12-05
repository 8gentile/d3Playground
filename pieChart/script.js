var width = 750;
var height = 600;
var color = d3.scaleOrdinal(d3.schemeCategory10);

var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "1px solid");

var data = [1, 2, 1, 5, 6, 8, 10];

var arc = d3
  .arc()
  .outerRadius(200)
  .innerRadius(100);

var group = svgContainer
  .append("g")
  .attr("transform", "translate(" + 375 + "," + 300 + ")");

var arcs = d3.pie()(data);

arcs.forEach(function(d, i) {
  group
    .append("path")
    .attr("d", arc(d))
    .attr("fill", color(i));
});
