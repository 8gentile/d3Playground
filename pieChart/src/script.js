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

function render() {
  d3.select("g").remove();

  var arc = d3
    .arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

  var annulusG = svgContainer
    .append("g")
    .attr("transform", "translate(" + 375 + "," + 300 + ")");

  var arcs = d3.pie()(data);

  var slice = annulusG
    .selectAll("path")
    .data(arcs)
    .enter()
    .append("path")
    .attr("fill", (d, i) => color(i))
    .attr("cursor", "pointer")
    .on("mouseover", function(d) {
      return d3.select(this).classed("highlight", true);
    })
    .on("mouseleave", function(d) {
      return d3.select(this).classed("highlight", false);
    })
    .transition()
    .duration(2000)
    .attrTween("d", function(d, i) {
      var start = { startAngle: 0, endAngle: 0 };
      var interpolate = d3.interpolate(start, d);
      return function(t) {
        return arc(interpolate(t));
      };
    });
}

render();
