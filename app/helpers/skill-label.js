import Ember from "ember";

var skillLabel = Ember.Handlebars.makeBoundHelper(function(skill) {

	var name = skill.get("name");
	var abbr = skill.get("abbr");
	var example = skill.get("example");

	var label = name + (abbr ? " (" + abbr + ")" : "") +(example ? " {" + example +"}" : ""); 

	return new Ember.Handlebars.SafeString('<span class="skill">' + label + '</span>');

}, "name", "abbr", "example");

export default skillLabel;