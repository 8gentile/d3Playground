const data = [
  { name: "Alice", math: 93, science: 84 },
  { name: "Bobby", math: 81, science: 97 },
  { name: "Carol", math: 74, science: 88 },
  { name: "David", math: 64, science: 76 },
  { name: "Emily", math: 80, science: 94 }
];

function render(subject) {
  const bars = d3
    .select("#chart")
    .selectAll("div")
    .data(data, function(d) {
      return d.name;
    });

  const newBars = bars
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("width", 0);

  newBars
    .merge(bars)
    .transition()
    .style("width", function(d) {
      return d[subject] + "px";
    });
}

render("math");
