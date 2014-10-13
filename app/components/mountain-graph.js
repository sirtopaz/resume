import Ember from "ember";

var get      = Ember.get;


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var formatDate = function(dateString) {
  var dt = parseDate(dateString);

  return months[dt.getMonth()] + " " + dt.getFullYear();
};

var startDateLabel = function(dateString) {

  if(!dateString) {
    return "";
  }

  return formatDate(dateString);
};

var endDateLabel = function(dateString) {

  if(!dateString) {
    return "Present";
  }

  return formatDate(dateString);
};

var companyLabel = function(d) {
  return d.get("company") + " (" + startDateLabel(d.get("startDate")) + "-" + endDateLabel(d.get("endDate")) + ")";
};


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


var MountainGraph = Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: ['viewBox'],
  margin: {top: 20, right: 60, bottom: 0, left: 20},

  width: "100%",
  vbWidth:"800",
  vbHeight: "400",

  viewBox: function() {
    return "0 0 " + get(this,'vbWidth') + " " + get(this,'vbHeight');
  }.property('vbWidth', 'vbHeight'),

  w: function(){
    return get(this,'vbWidth') - get(this,'margin.left') - get(this,'margin.right');
  }.property('vbWidth'),

  h: function(){
    return get(this,'vbHeight') - get(this,'margin.top') - get(this,'margin.bottom');
  }.property('vbHeight'),  

  transformG: function(){
    return "translate(" + get(this,'margin.left') + "," + get(this,'margin.top') + ")";
  }.property(),

  transformX: function(){
    return "translate(0,"+ get(this,'h') +")";
  }.property('h'), 

  draw: function(){

    var comp = this;

    //var formatPercent = d3.format(".0%");
    var width = get(this,'w');
    //var height = get(this,'h');
    var data = get(this,'data').toArray();

    var svg = d3.select('#'+get(this,'elementId'));

    var startDate = parseDate(data[0].get("startDate"));

    var x = d3.time.scale()
      .domain([startDate, new Date()])
      .rangeRound([0, width]);



    var pts = function(d) {

      var x1 = x(parseDate(d.get("startDate")));
      var x2 = x(parseDate(d.get("endDate")));
      var x3 = 2*x2 - x1;

      var y2 = comp.get("h");
      var y1 = y2 - (x2-x1);

      return "" + x1+","+y2+" "+x2+","+y1+" "+x3+","+y2;

    };

    svg.select(".jobs").selectAll(".job")
      .data(data)
        .enter().append("polygon")
        .attr("class", "job")
        .attr("points", function(d) { return pts(d); })
        .attr("fill", colors)
        .attr("opacity", ".75")
        .append("desc")
        .text(function(d) {return companyLabel(d); })

        ;



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

    /*
    svg.append("rect")
        .attr("class", "mountain")
        .attr("x", 0)
        .attr("width", 100)
        .attr("y", 0)
        .attr("height", 100)
        .attr("fill", "blue");*/


    /*


    var boxWidth = function(d) { 
      return x(parseDate(d.get("endDate"))) - x(parseDate(d.get("startDate"))); 
    };
    svg.select(".jobs").selectAll(".job")
      .data(data)
        .enter().append("rect")
        .attr("class", "job")
        .attr("x", function(d) { return x(parseDate(d.get("startDate"))); })
        .attr("y", function(d) { return comp.get("h") -  boxWidth(d); })
        .attr("width",  function(d) { return boxWidth(d);})
        .attr("height", function(d) { return boxWidth(d);})
        .attr("fill", colors);

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