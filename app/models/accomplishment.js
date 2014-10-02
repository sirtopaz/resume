import DS from "ember-data";

var Accomplishment = DS.Model.extend({
	description: DS.attr('string'),
	job: DS.belongsTo('job', {async: true})
});


Accomplishment.reopenClass({
	FIXTURES : [
		{

			"id":1,
			"job":1,
			"description":"Designed and implemented web applications for over a dozen Fortune 500 clients in varying industries including: e-commerce, insurance, banking, health care, and financial services"
		},
		{

			"id":2,
			"job":1,
			"description":"Participated in all aspects of production including: requirements gathering, visual design, prototyping, coding, testing, release and support"
		},
		{

			"id":3,
			"job":2,
			"description":"Designed and implemented several highly configurable enterprise web applications that supported Customer Service Representatives (CSRs) in the cellular, cable and energy industries using the Arbor/BP billing system"
		},
		{

			"id":4,
			"job":2,
			"description":"Lead design and development teams through multiple iterations of visual, architectural, software and user experience designs for multiple releases and client deployments of iCare, cCare and WebCare products"
		},
		{
			"id":5,
			"job":3,
			"description":"Updated and enhanced \"Morgan Online\": the financial industry's best of breed portfolio management and advice web application"
		},
		{
			"id":6,
			"job":3,
			"description":"Visually designed and prototyped features of the \"ClearView\" application including a personalization and branding framework, third-party system integrations and other business components"
		},
		{
			"id":7,
			"job":4,
			"description":"Designed and implemented several versions of a web application to extract and verify relevant medical information from electronic medical records called \"Natural Language Patient Record\" (NLPR) for the Clinical Language Unit"
		},
		{
			"id":8,
			"job":4,
			"description":"Organized and lead usability studies, user reviews and beta trials that successfully collected valuable user feedback to improve the NLPR application"
		},
		{
			"id":9,
			"job":4,
			"description":"Created UI guidelines to standardize user experience, interactions, page layouts and visual design ensuring consistency across all product features and components"
		},
		{
			"id":10,
			"job":5,
			"description":"Designed and implemented enhancements to the RIA framework through multiple revisions of the Supplier Relationship Management (SRM) product \"Frictionless SRM\" (renamed \"SAP E-Sourcing\")"
		},
		{
			"id":11,
			"job":5,
			"description":"Designed and implemented common application components for embedded real-time chat, charting, complex page layouts, data organization, and rendering (HTML, PDF)"
		},
		{
			"id":12,
			"job":5,
			"description":"Conducted usability studies and collaborated with graphic designers to design functional and visual enhancements to UI framework"
		},
		{
			"id":13,
			"job":5,
			"description":"Managed a multi-national and cross-country team of developers, designers and consultants for product improvements and standards compliance including security, usability, internationalization (I18N), and accessibility"
		},
		{
			"id":14,
			"job":6,
			"description":"Designed and implemented a reporting and product configuration web-portal that supported embedded contextual video advertisement"
		},
		{
			"id":15,
			"job":6,
			"description":"Developed a reusable, scalable and extendible RIA framework architecture to enhance the portal’s functionality featuring an embedded movie player for testing ad campaigns, dynamic charts on reports, AJAX image and movie clip upload, and visual themes"
		},
		{
			"id":16,
			"job":6,
			"description":"Managed a team of developers and a graphic designer responsible for all areas of the portal and visual components of the ad presentation framework"
		},
		{
			"id":17,
			"job":6,
			"description":"Collaborated with product managers, designers, development managers and software engineers to create innovative ad campaigns and support new ad presentations (e.g. interactive gaming pre-roll, and mini-site post-roll for movie trailers)"
		},
		{
			"id":18,
			"job":7,
			"description":"Designed and implemented a web-based managed account fee calculation application from the ground up with a small team of engineers"
		},
		{
			"id":19,
			"job":7,
			"description":"Solely architected the configurable Rich Internet Application (RIA) framework which featuring complex page layouts, user interaction components (e.g. preview trees, edit grids, AJAX pagination, and AJAX user input validation). This framework allows \"non-web\" developers to quickly create robust consistent UIs that meet business and usability needs"
		},
		{
			"id":20,
			"job":7,
			"description":"Managed requirements, user reviews, visual designs and development of all product features with a user interface component"
		},
		{
			"id":21,
			"job":8,
			"description":"Designed user experiences, work flows, information architecture, object models, page layouts, presentation frameworks and functional requirements"
		},
		{
			"id":22,
			"job":8,
			"description":"Designed and implemented interactive network topology and security data visualization web application with custom icons"
		},
		{
			"id":23,
			"job":8,
			"description":"Facilitated usability analysis leading to a full look and feel update for demo, marketing and sales"
		},
		{
			"id":24,
			"job":8,
			"description":"Managed a team of remote and local developers and designers through all aspects of enterprise software design, implementation and release"
		},
		{
			"id":25,
			"job":9,
			"description":"Designed, architected and developed interactive data visualization applications facilitating learning and teaching using modern software frameworks"
		},
		{
			"id":26,
			"job":9,
			"description":"Lead a team of engineers to create innovative education software in collaboration with data scientists focusing on bringing data visualizing and predictive analytic tools to instructors, students, and administrators"
		}
	]
});


/*
{
	"id":1,
	"job":1,
	"description":null
}
*/


export default Accomplishment;		
		


