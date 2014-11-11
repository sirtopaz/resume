import Ember from 'ember';

var JobsRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('job');
	}

});

export default JobsRoute;