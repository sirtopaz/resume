import Ember from "ember";

var computed = Ember.computed;
var alias    = computed.alias;
var get      = Ember.get;


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var parseDate = function(dateString) {
	var dt = dateString.split("-");

	var yr = parseInt(dt[0], 10);
	var mon = parseInt(dt[1], 10);
	var day = parseInt(dt[2], 10);

	return new Date(yr, mon-1, day);

};

var JobController = Ember.Controller.extend({
	init :function () {
		this._super();
		//debugger;
	},

	startDate : alias("model.startDate"),
	endDate: alias("model.endDate"),
	title: alias("model.title"),
	company: alias("model.company"),
	technologies: alias("model.technologies"),
	location: alias("model.location"),
	accomplishments: alias("model.accomplishments"),



	startDateLabel : computed("startDate", function(){
		var dt = get(this, "startDate");

		if(!dt) {
			return "";
		}

		var stDate = parseDate(dt);

		return months[stDate.getMonth()] + " " + stDate.getFullYear();

	}),

	endDateLabel : computed("endDate", function(){
		var dt = get(this, "endDate");

		if(!dt) {
			return "Present";
		}

		var stDate = parseDate(dt);

		return months[stDate.getMonth()] + " " + stDate.getFullYear();

	})



});

export default JobController;