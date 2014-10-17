import Ember from "ember";

//var set = Ember.set;
//var get = Ember.get;


var SkillsController = Ember.ArrayController.extend({
	init :function () {
		this._super();
		//debugger;
	},

	technologies : function() {
		return this.filterBy("type", "technology");
	}.property("@each"),

	tools : function() {
		return this.filterBy("type", "tool");
	}.property("@each"),

	techniques : function() {
		return this.filterBy("type", "technique");
	}.property("@each")


});

export default SkillsController;