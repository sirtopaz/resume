import DS from "ember-data";

var Skill = DS.Model.extend({
	type: DS.attr('string'),
	name: DS.attr('string'),
	abbr: DS.attr("string"),
	example: DS.attr("string")
});


Skill.reopenClass({
	FIXTURES : [
		{
			id: "1",
			type: "technology",
			name: "HTML5"
		},
		{
			id: "2",
			type: "technology",
			name: "CSS3"
		},
		{
			id: "3",
			type: "technology",
			name: "JavaScript & JSON"
		},
		{
			id: "4",
			type: "technology",
			name: "JQuery & JQuery UI"
		},
		{
			id: "5",
			type: "technology",
			name: "SVG"
		},
		{
			id: "6",
			type: "technology",
			name: "Ember.js"
		},
		{
			id: "7",
			type: "technology",
			name: "D3.js"
		},
		{
			id: "8",
			type: "technology",
			name: "Foundation"
		},
		{
			id: "9",
			type: "technology",
			name: "Handlebars"
		},
		{
			id: "10",
			type: "technology",
			name: "Java"
		},
		{
			id: "11",
			type: "technology",
			name: "JSP & JSTL"
		},
		{
			id: "12",
			type: "technology",
			name: "XML",
			example: "XSD/XSLT/XHTML"
		},
		{
			id: "13",
			type: "technology",
			name: "HQL & SQL"
		},
		{
			id: "14",
			type: "technology",
			name: "Spring Framework/MVC"
		},
		{
			id: "15",
			type: "technology",
			name: "Hibernate ORM"
		},
		{
			id: "16",
			type: "technology",
			name: "Application Servers",
			example: "Apache Tomcat/JBoss"
		},
		{
			id: "17",
			type: "technology",
			name: "Relational Databases",
			example: "MySQL/Oracle"
		},
		{
			id: "18",
			type: "technology",
			name: "Operating Systems",
			example: "Windows/Mac OS X/Linux"
		},
		{
			id: "19",
			type: "technique",
			name: "Data Visualization"
		},
		{
			id: "20",
			type: "technique",
			name: "Visual Graphic Design"
		},
		{
			id: "21",
			type: "technique",
			name: "Information Architecture"
		},
		{
			id: "22",
			type: "technique",
			name: "User Experience Analysis"
		},
		{
			id: "23",
			type: "technique",
			name: "Usability Engineering"
		},
		{
			id: "24",
			type: "technique",
			name: "User-centered Design"
		},
		{
			id: "25",
			type: "technique",
			name: "Rich Internet Application",
			abbr: "RIA"
		},
		{
			id: "26",
			type: "technique",
			name: "Responsive Web Design"
		},
		{
			id: "27",
			type: "technique",
			name: "Cross-browser Design"
		},
		{
			id: "28",
			type: "technique",
			name: "Mobile Web Design"
		},
		{
			id: "29",
			type: "technique",
			name: "Model/View/Controller Architecture",
			abbr: "MVC"
		},
		{
			id: "30",
			type: "technique",
			name: "Web Application Design"
		},
		{
			id: "31",
			type: "technique",
			name: "Single-Page Applications"
		},
		{
			id: "32",
			type: "technique",
			name: "AJAX"
		},
		{
			id: "33",
			type: "technique",
			name: "RESTful APIs"
		},
		{
			id: "34",
			type: "technique",
			name: "Internationalization",
			abbr: "I18N"
		},
		{
			id: "35",
			type: "technique",
			name: "Aspect-oriented Programming",
			abbr: "AOP"
		},
		{
			id: "36",
			type: "technique",
			name: "Object-oriented Design",
			abbr: "OOD"
		},
		{
			id: "37",
			type: "technique",
			name: "Service-oriented Architecture",
			abbr: "SOA"
		},
		{
			id: "38",
			type: "technique",
			name: "Software as a Service",
			abbr: "SaaS"
		},
		{
			id: "39",
			type: "tool",
			name: "Agile Methodologies",
			example: "SCRUM"
		},
		{
			id: "40",
			type: "tool",
			name: "Test Driven Development",
			abbr: "TDD"
		},
		{
			id: "41",
			type: "tool",
			name: "Adobe Creative Suite CC",
			example: "Dreamweaver/Photoshop/Illustrator/InDesign"
		},
		{
			id: "42",
			type: "tool",
			name: "Unified Modeling Language",
			abbr: "UML"
		},
		{
			id: "43",
			type: "tool",
			name: "Balsamiq Mockups"
		},
		{
			id: "44",
			type: "tool",
			name: "Microsoft Office"
		},
		{
			id: "45",
			type: "tool",
			name: "Microsoft Visio"
		},
		{
			id: "46",
			type: "tool",
			name: "Sublime Text"
		},
		{
			id: "47",
			type: "tool",
			name: "Node.js"
		},
		{
			id: "48",
			type: "tool",
			name: "Ember CLI"
		},
		{
			id: "49",
			type: "tool",
			name: "Eclipse IDE for Java EE"
		},
		{
			id: "50",
			type: "tool",
			name: "Microsoft Project"
		},
		{
			id: "51",
			type: "tool",
			name: "MySQL Workbench"
		},
		{
			id: "52",
			type: "tool",
			name: "Bower"
		},
		{
			id: "53",
			type: "tool",
			name: "GitHub"
		},
		{
			id: "54",
			type: "tool",
			name: "Travis CI"
		},
		{
			id: "55",
			type: "tool",
			name: "Subversion",
			abbr: "SVN"
		},
		{
			id: "56",
			type: "tool",
			name: "Rational Clearcase"
		}
	]
});

export default Skill;