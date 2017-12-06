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

  var group = svgContainer
    .append("g")
    .attr("transform", "translate(" + 375 + "," + 300 + ")");

  var arcs = d3.pie()(data);

  arcs.forEach(function(d, i) {
    let newArc = group.append("path")
      .attr("fill", color(i))
      .attr("cursor", "pointer")

      newArc.transition()
      .duration(2000)
      .attrTween("d", function() {
        var start = { startAngle: 0, endAngle: 0 };
        var interpolate = d3.interpolate(start, d);
        return function(t) {
          return arc(interpolate(t));
        };
      });

      newArc
      .on('mouseover', function(d) {
        debugger
        d3.select(this)
          .transition()
          .delay(200)
          .attrTween("d", function(d) {
            debugger
            let i = d3.interpolate(d.outerRadius, outerRadius);
            return function(t) { 
              d.outerRadius = i(t); 
              return arc(d); 
            };
          });
      });
      // .on('mouseout', arcTween(outerRadius - 20, 150));
  });
}

function arcTween(outerRadius, delay) {
  return 
}

render();
