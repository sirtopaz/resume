import Ember from "ember";

var SkillRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('skill');
	}

});

export default SkillRoute;