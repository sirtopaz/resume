import Ember from 'ember';

var get      = Ember.get;


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function (dateString) {
  var dt = parseDate(dateString);

  return months[dt.getMonth()] + ' ' + dt.getFullYear();
};

var startDateLabel = function (dateString) {

  if (!dateString) {
    return '';
  }

  return formatDate(dateString);
};

var endDateLabel =  function (dateString) {

  if (!dateString) {
    return 'Present';
  }

  return formatDate(dateString);
};

var companyLabel =  function (d) {
  return d.get('company') + ' (' + startDateLabel(d.get('startDate')) + '-' + endDateLabel(d.get('endDate')) + ')';
};


var parseDate =  function (dateString) {
  if (!dateString) {
    return new Date();
  }

  var dt = dateString.split('-');

  var yr = parseInt(dt[0], 10);
  var mon = parseInt(dt[1], 10);
  var day = parseInt(dt[2], 10);

  return new Date(yr, mon-1, day);

};


var countRange =   function (counts) {

    var range = counts.reduce( function (rng, value) {
        var ct = get(value, 'count');

        if (ct > rng[1]) {
          rng[1] = ct;
        }

        if (ct < rng[0]) {
          rng[0] = ct;
        }

        return rng;
      }, [99, 0]); //max is # greater job count
    
    return range;

  };


var colors = d3.scale.category10();


var MountainGraph = Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: ['viewBox'],
  margin: {top: 20, right: 60, bottom: 0, left: 20},

  width: '100%',
  vbWidth: '800',
  vbHeight: '400',

  viewBox:  function () {
    return '0 0 ' + get(this, 'vbWidth') + ' ' + get(this, 'vbHeight');
  }.property('vbWidth', 'vbHeight'),

  w:  function () {
    return get(this, 'vbWidth') - get(this, 'margin.left') - get(this, 'margin.right');
  }.property('vbWidth'),

  h:  function () {
    return get(this, 'vbHeight') - get(this, 'margin.top') - get(this, 'margin.bottom');
  }.property('vbHeight'),  

  transformG:  function () {
    return 'translate(' + get(this, 'margin.left') + ', ' + get(this, 'margin.top') + ')';
  }.property(),

  transformX:  function () {
    return 'translate(0, '+ get(this, 'h') +')';
  }.property('h'), 

  drawMountains:  function () {
    var width = get(this, 'w');
    var height = get(this, 'h');
    var data = get(this, 'data').toArray();

    var svg = d3.select('#'+get(this, 'elementId'));

    var startDate = parseDate(data[0].get('startDate'));

    var x = d3.time.scale()
      .domain([startDate, new Date()])
      .rangeRound([0, width]);


    var pts =  function (d) {

      var x1 = x(parseDate(get(d, 'startDate')));
      var x2 = x(parseDate(get(d, 'endDate')));
      var x3 = 2*x2 - x1;

      var y2 = height;
      var y1 = y2 - (x2-x1);

      return '' + x1+','+y2+' '+x2+','+y1+' '+x3+','+y2;

    };

    svg.select('.jobs').selectAll('.job')
      .data(data)
        .enter().append('polyline')
        .attr('class', 'job')
        .attr('points',  function (d) { return pts(d); })
        .attr('style',  function (d) { return 'stroke: #EFEFEF; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; fill-opacity:.8; fill:'+colors(d); })
        .append('desc')
        .text( function (d) {return companyLabel(d); })

        ;
  },

  drawClouds : function () {
    var wordCounts = get(this, 'wordCounts');

    if (! wordCounts) {
      return;
    }

    var width = get(this, 'w');
    var rng = countRange(wordCounts);
    var sizeScale = d3.scale.linear().domain(rng).range([0.5, 4.0]);
    var y = d3.scale.linear().domain(rng).rangeRound([0, 80]);
    var colorRange = [/*'#f7fbff', '#deebf7', '#c6dbef', '#9ecae1',*/'#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'].reverse();

    //var colorRange = ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'].reverse();

    var fillScale = d3.scale.ordinal().domain(rng).range(colorRange);
    var svg = d3.select('#'+get(this, 'elementId'));

    var clouds = svg.select('.clouds').selectAll('.cloud').data(wordCounts);

    clouds
      .enter().append('text')
      .attr('class', 'cloud')
      .attr('y', function (d) {return y(d.count) + Math.floor(Math.random() * 101);})
      .attr('x', function () {return Math.floor(Math.random() * (width +1) );})
      .attr('style',  function (d) { return 'fill:'+ fillScale(d.count)+';font-size:' + sizeScale(d.count) + 'rem'; })
      .text(function (d) { return d.key;})
      ;

      clouds.attr('x',1000).transition().duration(6000).delay(function () {return Math.floor(Math.random() * 1001);}).ease('linear').attr('x',  function () {return Math.floor(Math.random() * (width +1) );});
  },

  didInsertElement: function () {
    this.drawMountains();
    this.drawClouds();
  }
});


export default MountainGraph;