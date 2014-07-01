import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ResumeENV.locationType
});

Router.map(function() {
	this.route("jobs", { path: "/jobs" });
});

export default Router;
