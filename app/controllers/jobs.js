import Ember from "ember";

var set = Ember.set;
var get = Ember.get;


var JobsController = Ember.ArrayController.extend({
	init :function () {
		this._super();
		//debugger;
	},

	actions: {
		showSection : function(section) {
			set(this, "section", section);

			if("job" === section) {

				this.transitionToRoute('jobs.job', get(this, "arrangedContent.firstObject.id"));
				return;
			}

			this.transitionToRoute('jobs.' + section);
		}
	},


	sortProperties: ['startDate'],
	sortAscending: false,
	showMenu: false,

	section : "summary",

	showSummary: function() {
		return get(this, "section") === "summary";
	}.property("section"),

	showExperience: function() {
		return get(this, "section") === "job";
	}.property("section"),
	showSkills: function() {
		return get(this, "section") === "skills";
	}.property("section"),
	showEducation: function() {
		return get(this, "section") === "education";
	}.property("section")

});

export default JobsController;