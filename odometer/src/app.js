function drawLinks(links) {
  // scale to generate radians (just for lower-half of circle)
  var radians = d3.scale.linear().range([Math.PI / 2, 3 * Math.PI / 2]);

  // path generator for arcs (uses polar coordinates)
  var arc = d3.svg.line
    .radial()
    .interpolate("linear")
    .tension(0)
    .angle(function(d) {
      return radians(d);
    });

  // add links
  d3
    .select("#plot")
    .selectAll(".link")
    .data(links)
    .enter()
    .insert("path")
    .attr("fill", "none")
    .attr("stroke-width", function(d) {
      return d.value;
    })
    .attr("stroke", function(d) {
      return d.fill;
    })
    .attr("transform", function(d, i) {
      // arc will always be drawn around (0, 0)
      // shift so (0, 0) will be between source and target
      var xshift = d.source.x + (d.target.x - d.source.x) / 2;
      var yshift = yfixed;
      return "translate(" + xshift + ", " + yshift + ")";
    })
    .attr("d", function(d, i) {
      // get x distance between source and target
      var xdist = Math.abs(d.source.x - d.target.x);

      // set arc radius based on x distance
      arc.radius(xdist / 2);

      // want to generate 1/3 as many points per pixel in x direction
      var points = d3.range(0, Math.ceil(xdist));

      // set radian scale domain
      //radians.domain([0, points.length - 1]); //orient arcs at bottom
      radians.domain([0, d.torb * points.length - 1]); //orient arcs according to torb property

      // return path for arc
      return arc(points);
    });
}
