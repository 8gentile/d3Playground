const width = 300;
const height = 200;
const fullAngle = 2 * Math.PI;

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

const background = svgContainer
  .append("rect")
  .attr("x", "0")
  .attr("y", "0")
  .attr("width", width)
  .attr("height", height);

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

const odometerG = svgContainer.append("g");

odometerG
  .append("path")
  .classed("odometer", true)
  .attr("d", odometer())
  .attr("fill", "url(#linear-gradient)");

odometerG.attr("transform", "translate(" + 150 + "," + 150 + ")");

// needle
const needleLen = 100;
const needleRadius = 3;

const centerX = 0;
const centerY = 0;

const topX = centerX - 0;
const topY = centerY - needleLen;

const leftX = centerX - needleRadius;
const leftY = centerY - 0;

const rightX = centerX - -needleRadius;
const rightY = centerY - 0;

const needle = odometerG
  .append("path")
  .attr("d", `M ${leftX} ${leftY} L ${topX} ${topY} L ${rightX} ${rightY}`)
  .attr("fill", "orange");

//text
// make these groups with text/int together
const low = svgContainer
  .append("text")
  .attr("x", "20%")
  .attr("y", "70%")
  .attr("fill", "white")
  .attr("font-family", "sans-serif")
  .text("Low");

const high = svgContainer
  .append("text")
  .attr("x", "67%")
  .attr("y", "70%")
  .attr("fill", "white")
  .attr("font-family", "sans-serif")
  .text("High");
