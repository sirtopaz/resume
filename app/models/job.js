import DS from "ember-data";

var Job = DS.Model.extend({
	company: DS.attr('string'),
	title: DS.attr('string'),
	startDate: DS.attr("string"),
	endDate: DS.attr("string")
});


Job.reopenClass({
	FIXTURES : [
		{id:1, company:"KPMG Consulting Inc", title:"Senior Consultant", startDate:"1996-03-01", endDate:"2000-04-30"},
		{id:2, company:"CSG Systems", title:"Lead Software Developer", startDate:"2000-04-01", endDate:"2002-08-31"},
		{id:3, company:"Arrakis Systems", title:"GUI Engineer", startDate:"2002-08-01", endDate:"2003-02-28"},
		{id:4, company:"Dictaphone", title:"Principal Software Engineer", startDate:"2003-03-01", endDate:"2005-07-31"},
		{id:5, company:"SAP", title:"Principal Software Engineer", startDate:"2005-07-01", endDate:"2008-07-31"},
		{id:6, company:"ScanScout Inc.", title:"Front-end Development Manager", startDate:"2008-07-01", endDate:"2009-06-30"},
		{id:7, company:"Redi2 Technologies", title:"Senior Web/UI Engineer", startDate:"2009-07-01", endDate:"2011-05-31"},
		{id:8, company:"Core Security", title:"Development Manager (UI)", startDate:"2011-05-01", endDate:"2013-07-31"},
		{id:9, company:"McGraw-Hill Education", title:"Director of Engineering, Analytics", startDate:"2013-08-01", endDate:null}
	]
});

export default Job;