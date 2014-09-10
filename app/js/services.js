'use strict';

angular.module('harley.services', [])

.factory('Proof', [function(){
	return {
		points: [
			{
				title: "Empathy for everyone",
				desc: "Having worked on all sorts of projects, I have a solid understanding of how the average user thinks and works, and their needs. I apply this to everything I design and build, combined with killer marketing & conversion tactics."
			},
			{
				title: "Design Chops",
				desc: "In regards to design, I have a brain wired for design thinking, problem solving and aesthetics. In regards to tools, I have worked with Photoshop, Illustrator and Indesign for the entirety of my career. I also have a solid understanding of beautiful typography."
			},
			{
				title: "Technical Wisdom",
				desc: "I very quickly realised at the ripe age of 14, that I needed to learn how to build my web designs in order to understand them better - and make something of them! I've self taught my whole life, constantly upskilling. My strengths are in Front-end javascript (AngularJS, jQuery), HTML & CSS, as well as killer WordPress skills. Check out my full list of skills."
			},
			{
				title: "The Mind of a Marketer",
				desc: "Having worked in a fast-paced marketing agency, everything I build has lead generation & conversion in mind. Landing pages, Email campaigns, CRM integration, SEO & SEM campaigns, and so on. Marketing Partners, my current employer, lives & breathes digital marketing strategy."
			},
			{
				title: "Communication Skills",
				desc: "Having worked directly with clients, teams, stakeholders & directors, my communication skills are second to none. I am good at project management, and thoroughly understand and live agile methodologies / iterative development."
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
				desc: "Marketing Partners manage the digital business & marketing for a select group of innovative and disruptive startups. \
						Whilst working there, I was in charge of all clients' design (both digital and print), as well as their websites, digital products, and marketing campaign collateral. \
						At Marketing Partners, I learnt how to build websites to sell and convert, as well as have the best possible user experience. \
						Working here also gave me extensive brand experience - adhering to existing guidelines, but also working on expanding & augmenting them.",
				ref: {
					name: "Kristen Holden",
					url: "http://www.linkedin.com/profile/view?id=68929789"
				}
			},
			{
				company: "Incsub",
				title: "Copywriting & Tech Journalism",
				when: "February 2013 - April 2013",
				desc: "Incsub love all things WordPress. \
						I was an in-house author for their popular blog, wpmudev.org - and educated the masses on how to be better WordPress designers and developers.",
				ref: {
					name: "James Farmer",
					url: "http://www.linkedin.com/profile/view?id=23995"
				}
			},
			{
				company: "SitePoint",
				title: "Product Designer, Front-end Developer",
				when: "October 2011 - February 2013",
				desc: "SitePoint is one of the largest online communities of web professionals. \
						Here, I designed & built a variety of internal products, as well as building and maintaining their network of websites totalling over one million subscribers.",
				ref: {
					name: "Mark Harbottle",
					url: "http://www.linkedin.com/profile/view?id=2372794"
				}
			},
			{
				company: "Lahznimmo Architects",
				title: "Web Designer & Developer",
				when: "January 2011 - July 2011",
				desc: "Lahznimmo are an award winning architecture firm based in Sydney. \
						I was hired as their in-house online expert, and worked with them to create an education focussed online presence to match their reputation.",
				ref: {
					name: "Annabel Lahz",
					url: "http://www.linkedin.com/profile/view?id=89860373"
				}
			},
			{
				company: "Envato",
				title: "Book & Magazine Author",
				when: "Semptember 2008 - Semptember 2009",
				desc: "Envato is a network of sites and services aimed at helping people be creative. \
						Whilst working for Envato, I wrote over 20 articles about front-end design and WordPress. \
						I also co-authored a WordPress Design book with Envato founder Collis Ta'eed at the tender age of 14!",
				ref: {
					name: "Naysan Naraqi",
					url: "http://www.linkedin.com/profile/view?id=137398368"
				}
			},
			{
				company: "WordCamp AU & NZ",
				title: "Speaker & Presenter",
				when: "2008 & 2009",
				desc: "WordCamp is a conference that focuses on everything WordPress. \
						I was a speaker at three WordCamps over the course of 2008 and 2009 - when I was 14!",
				ref: {
					name: "Anthony Cole",
					url: "http://www.linkedin.com/profile/view?id=114534997"
				}
			},
			{
				company: "Wopr",
				title: "Web Designer",
				when: "September 2008 - December 2008",
				desc: "Wopr were a small, local design & dev shop based in Sydney. \
						I did all the experience and visual design for their clients' websites.",
				ref: {
					name: "Sam Bauers",
					url: "http://www.linkedin.com/profile/view?id=7263767"
				}
			}
		]
	}
}])

.factory('Education', [function(){
	return {
		education: [
			{
				name: "Certificate II in Design Fundamentals",
				location: "Tafe Design Centre, Enmore"
			},
			{
				name: "Intensive Digital Art Workshop Scholarship",
				location: "National Art School Sydney",
				subtitle: "38/40 for final body of work"
			},
			{
				name: "Various Short Courses",
				location: "Online",
				subtitle: "Codeschool, Railscasts, Egghead.io, Tuts+"
			},
			{
				name: "Higher School Certificate",
				location: "International Grammar School",
				subtitle: "Design & Technology, Visual Arts, French, Spanish, English"
			}
		]
	}
}])

.factory('Skills', [function(){
	return {
		skills: [
			{ name: "User Experience Design" },
			{ name: "Information Architecture" },
			{ name: "Design Thinking" },
			{ name: "Working with brands" },
			{ name: "Campaigning & Conversions" },
			{ name: "Prototype sketching & build" },
			{ name: "Photoshop" },
			{ name: "Illustrator" },
			{ name: "Indesign" },
			{ name: "Mobile Web" },
			{ name: "AngularJS" },
			{ name: "jQuery" },
			{ name: "Javascript / CoffeeScript" },
			{ name: "HTML5" },
			{ name: "CSS3 / SCSS" },
			{ name: "WordPress" },
			{ name: "PHP" },
			{ name: "Ruby on Rails" },
			{ name: "Haml" },
			{ name: "Git" },
			{ name: "Grunt" },
			{ name: "Communication Skills" },
			{ name: "Leadership Skills" },
			{ name: "An innovative mind" },
			{ name: "Creativity" },
			{ name: "Attention to detail" },
			{ name: "Customer relations & experience" },
			{ name: "Cooking" },
			{ name: "Coffee Making" },
			{ name: "Lifting" }
		]
	}
}])

.factory('Work', [function(){
	return {
		cases: [
			{
				name: "Uncomplexicate health.com.au Campaign",
				desc: "health.com.au uncomplexicated health insurance. Here's how we told Australians about it."
			},
			{
				name: "health.com.au website redesign",
				desc: "A new financial year called for a new site design, and a new way of looking at things."
			},
			{
				name: "Yummoo Yoghurt business launch",
				desc: "A successful startup franchise, Yummoo needed stacks and stacks of design, and an online presence."
			}
		],
		sites: [
			{
				name: "Health.com.au",
				desc: "Online health insurance and customer service with a heart.",
				url: "http://adviicemrkt.com"
			},
			{
				name: "OzMattress",
				desc: "Australia's best value luxury mattress",
				url: "http://ozmattress.com.au"
			},
			{
				name: "EngagementHQ",
				desc: "Complete community engagement online",
				url: "http://staging.engagementhq.com"
			},
			{
				name: "Lighting Partners Australia",
				desc: "Designer Lighting Wholesaler",
				url: "http://lpaust.com.au"
			},
			{
				name: "SitePoint",
				desc: "One of the largest developer communities online.",
				url: "http://sitepoint.com"
			},
			{
				name: "Add your project",
				url: "#add-project"
			}
		]
	}
}]);