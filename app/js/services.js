'use strict';

angular.module('harley.services', [])

.factory('Proof', [function(){
	return {
		points: [
			{
				title: "Empathy for everyone",
				desc: "User Experience Design is the result "
			},
			{
				title: "Design Chops",
				desc: "My passion for the web all started with design. I've been working with Photoshop, Illustrator and InDesign for the entirety of my career"
			},
			{
				title: "Technical Wisdom",
				desc: "I quickly got frustrated not being able to build the designs and experiences I was creating, so I taught myself how to."
			},
			{
				title: "The Mind of a Marketer",
				desc: "Having worked in a fast-paced marketing agency, everything I build has conversion in mind"
			},
			{
				title: "Communication Skills",
				desc: "Having worked with clients, and in teams for over 6 years, I'm an excellent communicator, and fluent in agile methodology."
			}
		]
	}
}])

.factory('Employment', [function(){
	return {
		history: [
			{
				company: "Marketing Partners",
				title: "Digital & Print Designer, Front-end Developer",
				when: "April 2013 - present",
				ref: {
					name: "Kristen Holden",
					url: ""
				}
			},
			{
				company: "Incsub",
				title: "Epic Wordsmith (WP tech writing)",
				when: "February 2013 - April 2013",
				ref: {
					name: "James Farmer",
					url: ""
				}
			},
			{
				company: "SitePoint Pty Ltd",
				title: "Product Designer, Front-end Developer",
				when: "October 2011 - February 2013",
				ref: {
					name: "Mark Harbottle",
					url: ""
				}
			},
			{
				company: "Lahznimmo Architects",
				title: "Web Designer & Developer",
				when: "January 2011 - July 2011",
				ref: {
					name: "Annabel Lahz",
					url: ""
				}
			},
			{
				company: "Envato Pty Ltd",
				title: "Book & Magazine Author",
				when: "Semptember 2008 - Semptember 2009",
				ref: {
					name: "Naysan Naquiri",
					url: ""
				}
			},
			{
				company: "WordCamp AU & NZ",
				title: "Presenter",
				when: "2008 & 2009",
				ref: {
					name: "Anthony Cole",
					url: ""
				}
			},
			{
				company: "Wopr Pty Ltd",
				title: "Web Designer",
				when: "September 2008 - December 2008",
				ref: {
					name: "Sam Bauers",
					url: ""
				}
			}
		]
	}
}])

.factory('Education', [function(){
	return {

	}
}])

.factory('Skills', [function(){
	return {
		skills: [
			{}
		]
	}
}])

.factory('Work', [function(){
	return {
		cases: [
			{}
		]
	}
}]);