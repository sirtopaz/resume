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
		}
	},


	sortProperties: ['startDate'],
	sortAscending: false,
	showMenu: false,

	technologyMap: function() {
		var arr = get(this, 'content').toArray();

		var counts = arr
				.reduce(function(terms, job) { return terms.concat(job.technologies.split(", ")); }, [])
				.reduce(function(map,term) { map[term] = (map[term] || 0) + 1; return map; }, {});

		return counts;

	}.property("@each")

});

export default JobsController;