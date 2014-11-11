import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
	this.resource('jobs', { path: '/jobs' }, function () {
		this.route('summary');
		this.route('job', {path: '/:job_id'});
		this.route('skills');
		this.route('education');
	});
	this.route('mountains', { path: '/mountains' });
});

export default Router;
