import Ember from "ember";

var JobRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('job', params.job_id);
	}

});

export default JobRoute;