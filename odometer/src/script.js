const width = 300;
const height = 200;
const fullAngle = 2 * Math.PI;
const color = d3.interpolateRainbow;

const odometer = d3
  .arc()
  .innerRadius(32)
  .outerRadius(100)
  .startAngle(-0.32 * Math.PI)
  .endAngle(0.32 * Math.PI);

const svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "1px solid");

const defs = svgContainer.append("defs");

const linearGradient = defs
  .append("linearGradient")
  .attr("id", "linear-gradient")
  .attr("x1", "20%")
  .attr("y1", "60%")
  .attr("x2", "80%")
  .attr("y2", "60%");

linearGradient
  .append("stop")
  .attr("offset", "0%")
  .attr("stop-color", "red");

linearGradient
  .append("stop")
  .attr("offset", "100%")
  .attr("stop-color", "#01c605");

const odometerGroup = svgContainer.append("g");

odometerGroup
  .append("path")
  .classed("odometer", true)
  .attr("d", odometer())
  .attr("fill", "url(#linear-gradient)");

odometerGroup.attr("transform", "translate(" + 150 + "," + 150 + ")");
