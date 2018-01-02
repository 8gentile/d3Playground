const width = 500;
const height = 500;
const fullAngle = 2 * Math.PI;
const color = d3.interpolateRainbow;

const arc1 = d3
  .arc()
  .innerRadius(32)
  .outerRadius(100)
  .startAngle(-0.32 * Math.PI)
  .endAngle(0.32 * Math.PI);

const arc2 = d3
  .arc()
  .innerRadius(50)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(fullAngle);

const svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "1px solid");

const group1 = svgContainer.append("g");
const group2 = svgContainer.append("g");

group1
  .append("path")
  .classed("odometer", true)
  .attr("d", arc1())
  .attr("fill", color);

group2
  .append("path")
  .attr("d", arc2())
  .attr("fill", "blue");

group1.attr("transform", "translate(" + 200 + "," + 200 + ")");
group2.attr("transform", "translate(" + 200 + "," + 350 + ")");
