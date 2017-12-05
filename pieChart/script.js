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

function render() {
  d3.select("g").remove();

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
      .attr("fill", color(i))
      .transition()
      .duration(2000)
      .attrTween("d", function() {
        var start = { startAngle: 0, endAngle: 0 };
        var interpolate = d3.interpolate(start, d);
        return function(t) {
          return arc(interpolate(t));
        };
      });
  });
}

setInterval(render, 3000);
