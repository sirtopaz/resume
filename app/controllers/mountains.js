import Ember from "ember";

//var set = Ember.set;
var get = Ember.get;


var MountainsController = Ember.ArrayController.extend({
	init :function () {
		this._super();
		//debugger;
	},

	itemController:"jobitem",
	sortProperties: ['startDate'],
	sortAscending: false,

	technologyMap: function() {
		var arr = get(this, 'content').toArray();

		var counts = arr
				.reduce(function(terms, job) { return terms.concat(job.technologies.split(", ")); }, [])
				.reduce(function(map,term) { map[term] = (map[term] || 0) + 1; return map; }, {});

		return counts;

	}.property("@each")

});

export default MountainsController;