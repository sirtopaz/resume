import DS from "ember-data";

var Job = DS.Model.extend({
	company: DS.attr('string'),
	title: DS.attr('string'),
	startDate: DS.attr("string"),
	endDate: DS.attr("string"),
	technologies: DS.attr("string"),
	brief: DS.attr("string"),
	location: DS.attr("string"),
	accomplishments: DS.hasMany('accomplishment', {async: true})

});


Job.reopenClass({
	FIXTURES : [
		{
			"id":1,
			"company":"KPMG Consulting Inc",
			"title":"Senior Consultant",
			"startDate":"1996-03-01",
			"endDate":"2000-04-30",
			"technologies":"HTML, CSS, JavaScript, Java, Servlets, JSP, XML, XSLT, UML, SQL, Dreamweaver, Photoshop, Rational Rose, Tomcat",
			"accomplishments":[1,2],
			"brief":null,
			"location":"Boston MA"
		},

		{
			"id":2,
			"company":"CSG Systems",
			"title":"Lead Software Developer",
			"startDate":"2000-04-01",
			"endDate":"2002-08-31",
			"technologies":"HTML, CSS, JavaScript, Java, JSP, EJB, XML, XSLT, Photoshop, Dreamweaver, Rational Rose, Clearcase",
			"accomplishments":[3,4],
			"brief":null,
			"location":"Cambridge MA"
		},

		{
			"id":3,
			"company":"Arrakis Systems",
			"title":"GUI Engineer",
			"startDate":"2002-08-01",
			"endDate":"2003-02-28",
			"technologies":"HTML, CSS, JavaScript, Java, JSP, JSTL, XML, Photoshop, Ecplise, CVS",
			"accomplishments":[5,6],
			"brief":null,
			"location":"Cambridge MA"
		},

		{
			"id":4,
			"company":"Dictaphone",
			"title":"Principal Software Engineer",
			"startDate":"2003-03-01",
			"endDate":"2005-07-31",
			"technologies":"HTML, CSS, JavaScript, Java, JSP, JSTL, XML, XSLT, Ecplise, Photoshop, Dreamweaver, Visio",
			"accomplishments":[7,8,9],
			"brief":null,
			"location":"Burlington MA"
		},

		{
			"id":5,
			"company":"SAP",
			"title":"Principal Software Engineer",
			"startDate":"2005-07-01",
			"endDate":"2008-07-31",
			"technologies":"HTML, CSS, JavaScript, JSON, Java, XML, XSLT, Visio, Dreamweaver, Photoshop, Ecplise, Clearcase",
			"accomplishments":[10,11,12,13],
			"brief":null,
			"location":"Cambridge MA"
		},

		{
			"id":6,
			"company":"ScanScout Inc.",
			"title":"Front-end Development Manager",
			"startDate":"2008-07-01",
			"endDate":"2009-06-30",
			"technologies":"HTML, CSS, JavaScript, JSON, JQuery, JQuery UI, Java, JSP, JSTL, Spring (MVC), Hibernate, Fusion Charts, Flash (ActionScript), Photoshop, Ecplise, SVN",
			"accomplishments":[14,15,16,17],
			"brief":null,
			"location":"Boston MA"
		},

		{
			"id":7,
			"company":"Redi2 Technologies",
			"title":"Senior Web/UI Engineer",
			"startDate":"2009-07-01",
			"endDate":"2011-05-31",
			"technologies":"HTML, CSS, JavaScript, JSON, JQuery, JQuery UI, Java, JSP, JSTL, Spring Framework (MVC), Hibernate, Dreamweaver, Photoshop, Illustrator, Eclipse, Balsamiq Mockups, Visio, SVN",
			"accomplishments":[18,19,20],
			"brief":null,
			"location":"Boston MA"
		},


		{
			"id":8,
			"company":"Core Security",
			"title":"Development Manager (UI)",
			"startDate":"2011-05-01",
			"endDate":"2013-07-31",
			"technologies":"HTML5, CSS3, JavaScript, SVG, Adobe Flex, Java, AJAX, JSON, JQuery, D3js, Spring Framework (MVC), Hibernate, Eclipse, Dreamweaver, Photoshop, Illustrator, InDesign, Balsamiq Mockups, Visio, SVN",
			"accomplishments":[21,22,23,24],
			"brief":null,
			"location":"Boston MA"
		},



		{
			"id":9,
			"company":"McGraw-Hill Education",
			"title":"Director of Engineering, Analytics",
			"startDate":"2013-08-01",
			"endDate":null,
			"technologies":"HTML5, CSS3, SVG, JavaScript, JSON, SASS, JQuery, EmberJS, D3js, Foundation, Bower, NodeJS, Sublime Text, Photoshop, Illustrator, Dreamweaver, InDesign, Confluence, Jira, Github",
			"accomplishments":[25,26],
			"brief":null,
			"location":"Boston MA"
		}
	]
});

export default Job;

/*

job format

		{
			"id":1,
			"company":"KPMG Consulting Inc",
			"title":"Senior Consultant",
			"startDate":"1996-03-01",
			"endDate":"2000-04-30",
			"technologies":"HTML, CSS, JavaScript, Java, Servlets, JSP, XML, XSLT, UML, SQL, Dreamweaver, Photoshop, Rational Rose, Tomcat",
			"accomplishments":[1,2],
			"brief":null,
			"location":"Boston MA"
		}


*/