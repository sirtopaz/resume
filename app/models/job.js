import DS from "ember-data";

var Job = DS.Model.extend({
	company: DS.attr('string'),
	title: DS.attr('string'),
	startDate: DS.attr("date"),
	endDate: DS.attr("date")
});


Job.reopenClass({
	FIXTURES : [
		{id:1, company:"KPMG Consulting Inc", title:"Senior Consultant", startDate:"1996-03-01", endDate:"2000-04-30"},
		{id:2, company:"CSG Systems", title:"Lead Software Developer", startDate:"2000-04-01", endDate:"2002-08-31"},
		{id:3, company:"Arrakis Systems", title:"GUI Engineer", startDate:"2002-08-01", endDate:"2003-02-28"}
	]
});

export default Job;