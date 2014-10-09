import Ember from "ember";

//same data a Jobs

var JobsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('job');
	}

});

export default JobsRoute;