import Ember from "ember";


var JobsController = Ember.ArrayController.extend({
	init :function () {
		//debugger;
	},

	actions: {
		toggleMenu : function() {
			this.toggleProperty("showMenu");
		}, 
		returnToIndex : function() {
			this.set("showMenu", false);
			this.transitionToRoute("index");
		}
	},


	sortProperties: ['startDate'],
	sortAscending: false,

	showMenu: false

});

export default JobsController;