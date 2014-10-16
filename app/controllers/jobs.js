import Ember from "ember";

var set = Ember.set;
var get = Ember.get;


var JobsController = Ember.ArrayController.extend({
	init :function () {
		this._super();
		//debugger;
	},

	actions: {
		toggleMenu : function() {
			this.toggleProperty("showMenu");
		}, 
		returnToIndex : function() {
			set(this, "showMenu", false);
			this.transitionToRoute("index");
		},

		showSummarySection : function() {
			this.setProperties({
			  showSummary: true,
			  showExperience: false,
			  showSkills: false,
			  showEducation: false
			});
		},

		showExperienceSection : function() {
			this.setProperties({
			  showSummary: false,
			  showExperience: true,
			  showSkills: false,
			  showEducation: false
			});
		},

		showSkillsSection : function() {
			this.setProperties({
			  showSummary: false,
			  showExperience: false,
			  showSkills: true,
			  showEducation: false
			});
		},

		showEducationSection : function() {
			this.setProperties({
			  showSummary: false,
			  showExperience: false,
			  showSkills: false,
			  showEducation: true
			});
		}
	},


	sortProperties: ['startDate'],
	sortAscending: false,
	showMenu: false,

	showSummary: true,
	showExperience: false,
	showSkills: false,
	showEducation: false,

	technologyMap: function() {
		var arr = get(this, 'content').toArray();

		var counts = arr
				.reduce(function(terms, job) { return terms.concat(job.technologies.split(", ")); }, [])
				.reduce(function(map,term) { map[term] = (map[term] || 0) + 1; return map; }, {});

		return counts;

	}.property("@each")

});

export default JobsController;