const data = [
  { name: 'Alice', math: 93, science: 84 },
  { name: 'Bobby', math: 81, science: 97 },
  { name: 'Carol', math: 74, science: 88 },
  { name: 'David', math: 64, science: 76 },
  { name: 'Emily', math: 80, science: 94 }
]

// specify chart dimensions
const width = 600
const height = 400

// create a scale to map scores to widths
const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, width])

// create a scale to calculate bar height
const yScale = d3.scaleBand()
  .domain(data.map(function(d) { return d.name }))
  .range([0, height])

// this is just a condensed version of render()
// from the previous example at http://bit.ly/2t2RJ0S
// the commented lines are the only substantive changes
function render(subject) {
  const bars = d3.select('#chart')
    .selectAll('div')
    .data(data, function(d) {
      return d.name
    })
  
  bars.enter()
    .append('div')
      .attr('class', 'bar')
      .style('width', 0)
      .style('height', function(d) {
        // use the height calculated by the band scale
        return yScale.bandwidth() + 'px'
      })
    .merge(bars)
      .transition()
      .style('width', function(d) {
        // pass the score through the linear scale function
        return xScale(d[subject]) + 'px'
      })
}

render('math')

const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('position', 'absolute')
  .style('top', 0)
  .style('left', 0)

svg.append('g').call(d3.axisBottom(xScale))
svg.append('g').call(d3.axisLeft(yScale))