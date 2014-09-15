import Ember from "ember";

var set = Ember.set;


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
	showMenu: false

});

export default JobsController;