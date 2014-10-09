import Ember from "ember";


//var set = Ember.set;


var MountainsController = Ember.ArrayController.extend({
	init :function () {
		this._super();
		//debugger;
	},

	sortProperties: ['startDate'],
	sortAscending: false

});

export default MountainsController;