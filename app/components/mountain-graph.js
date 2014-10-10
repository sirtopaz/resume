import Ember from "ember";
//import d3 from "d3";


var parseDate = function(dateString) {
  if(!dateString) {
    return new Date();
  }

  var dt = dateString.split("-");

  var yr = parseInt(dt[0], 10);
  var mon = parseInt(dt[1], 10);
  var day = parseInt(dt[2], 10);

  return new Date(yr, mon-1, day);

};

var colors = d3.scale.category10();

var boxWidth = function(x, d) { 
  return x(parseDate(d.get("endDate"))) - x(parseDate(d.get("startDate"))); 
};


var MountainGraph = Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: 'width height'.w(),
  margin: {top: 20, right: 20, bottom: 20, left: 20},

  w: function(){
    return this.get('width') - this.get('margin.left') - this.get('margin.right');
  }.property('width'),

  h: function(){
    return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
  }.property('height'),  

  transformG: function(){
    return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
  }.property(),

  transformX: function(){
    return "translate(0,"+ this.get('h') +")";
  }.property('h'),   

  draw: function(){

    //var formatPercent = d3.format(".0%");
    var width = this.get('w');
    //var height = this.get('h');
    var data = this.get('data').toArray();

    var svg = d3.select('#'+this.get('elementId'));

    var startDate = parseDate(data[0].get("startDate"));

    var x = d3.time.scale()
      .domain([startDate, new Date()])
      .rangeRound([0, width]);

    /*

    var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5).tickFormat(formatPercent);

    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

    svg.select(".axis.x").call(xAxis);
    svg.select(".axis.y").call(yAxis);
    */

/*    svg.append("rect")
        .attr("class", "mountain")
        .attr("x", 0)
        .attr("width", 100)
        .attr("y", 0)
        .attr("height", 100)
        .attr("fill", "blue");*/

    var comp = this;

    svg.select(".jobs").selectAll(".job")
      .data(data)
        .enter().append("rect")
        .attr("class", "job")
        .attr("x", function(d) { return x(parseDate(d.get("startDate"))); })
        .attr("y", function(d) { return comp.get("h") -  boxWidth(x,d); })
        .attr("width",  function(d) { return boxWidth(x,d);})
        .attr("height", function(d) { return boxWidth(x,d);})
        .attr("fill", colors);

    /*
    svg.select(".rects").selectAll("rect")
      .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); });
    */
  },

  didInsertElement: function(){
    this.draw();
  }
});


export default MountainGraph;