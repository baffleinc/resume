'use strict';

angular.module('harley.services', [])

.factory('Proof', [function(){
	return {
		points: [
			{
				title: "UX Skills to go",
				desc: "Having worked on all sorts of projects, I have a solid understanding of user behaviour, as well as proven design patterns. \
							I apply this to everything I design and build, combining it with killer marketing & conversion tactics. \
							I also sketch & prototype all my interfaces, ensuring function comes before the design layer."
			},
			{
				title: "Design Chops",
				desc: "I have a brain wired for design thinking, problem solving and aesthetics. I have extensive experience with Photoshop, Illustrator and Indesign. I also have a solid understanding of beautiful typography. I take pride in great visual design & attention to detail."
			},
			{
				title: "Technical Wisdom",
				desc: "I have been constantly teaching myself new tricks since I was 14 - when I developed my first website. \
								Since then, I have upskilled to include an enourmous range of languages and frameworks. Angular.js is what I am all about, however I am well equipped with the staples: HTML5, CSS3, Javascript, WordPress, PHP and a myriad of smaller frameworks. \
								I use tools like Git & Grunt to make my life that little bit easier. "
			},
			{
				title: "The Mind of a Marketer",
				desc: "Having worked in a fast-paced marketing agency, everything I build has lead generation & conversion in mind. Landing pages, email campaigns, CRM integration, SEO, and so on. Marketing Partners, my current employer, lives & breathes digital marketing strategy for Australian Startups."
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
				desc: "Marketing Partners manage the digital business & marketing for a select group of innovative and disruptive startups. <br>\
						My current duties here are vast - everything from designing & building clients' websites, to designing any offline material including activation collateral. I even had the opportunity to design wall art for <a href='http://yummoo.com.au' target='_blank'>Yummoo's Flagship store</a>!<br>\
						At Marketing Partners, I have learnt how to build websites that sell and convert, coupled with the best possible user experience. <br>\
						Working here is also giving me extensive brand experience - adhering to existing guidelines, but also working on expanding & augmenting them.</p>",
				ref: [
					{
						name: "Looking for a reference? I still work @ Marketing Partners, that could get awkward!"
					}
				],
				work: [
					{
						title: "health.com.au v3",
						desc: "MVP Currently in development, driven by an iterative process.",
						img: 'new-health-mobile.png'
					},
					{
						title: "Uncomplexicate",
						desc: "A microsite under the health.com.au brand that drives offline marketing campaigns.",
						img: 'uncomplexicate-mobile.png',
						link: 'http://uncomplexicate.com.au'
					},
					{
						title: "health.com.au",
						desc : "health.com.au's flagship website.",
						img: 'health-mobile.png',
						link: 'http://health.com.au'
					},
					{
						title: "OzMattress",
						desc : "I worked on the OzMattress 2014 redesign.",
						img: 'ozmattress-mobile.png',
						link: 'http://ozmattress.com.au'
					},
					{
						title: "EngagementHQ",
						desc : "I designed & build the EngagementHQ 2014 website.",
						img: 'engagement-hq.png',
						link: 'http://staging.engagementhq.com'
					},
					{
						title: "Yummoo",
						desc : "I designed & build yummoo.com.au, as well as did their offline print artworks.",
						img: 'yummoo-mobile.png',
						link: 'http://yummoo.com.au'
					}

				]
			},
			{
				company: "Incsub",
				title: "Copywriting & Tech Journalism",
				when: "February 2013 - April 2013",
				desc: "Incsub love all things WordPress. \
						I was an in-house author for their popular blog, wpmudev.org - educating the masses on how to be better WordPress designers and developers. <br>\
						I also wrote the copy accompanying new plugin releases, as well as theme releases.",
				ref: [
					{
						name: "James Farmer",
						url: "http://www.linkedin.com/profile/view?id=23995"
					},
				], 
				workTitle: 'My work as an "Epic Wordsmith"',
				work: [
					{
						title: 'WPMUDEV articles',
						link: 'http://premium.wpmudev.org/blog/author/harleya/',
						img: 'incsub.png'
	
					}
				]
			},
			{
				company: "SitePoint",
				title: "Product Designer, Front-end Developer",
				when: "October 2011 - February 2013",
				desc: "SitePoint is one of the largest online communities of web professionals. \
						Here, I designed & built a variety of internal products, as well as building and maintaining their network of websites totalling over one million subscribers.",
				ref: [
					{
						name: "Mark Harbottle",
						url: "http://www.linkedin.com/profile/view?id=2372794"
					},
					{
						name: "Jude Aakjaer",
						url: "http://www.linkedin.com/profile/view?id=125732372"
					}
				],

				work: [
					{
						title: "SitePoint Redesign",
						link: 'http://sitepoint.com/',
						desc: 'Merging seven verticals into one.',
						img: 'sitepoint-mobile.png'
					},
					{
						title: 'Internal Products',
						desc: 'Unfortunately not all internal products made it to the press. I worked on a user testing service named earl.io, as well as a content aggreator product named "The Wall".',
						img: 'earl-mobile.png'
					}
				]
			},
			{
				company: "Baffle! inc.",
				title: "Freelance Designer & Developer",
				when: "January 2010 - October 2013",
				desc: "For several years, I worked on a large variety of projects. My best work started around 2010, and below you will find a handful of sites I planned, designed, and built.",
				ref: [
					{
						name: "Available on request"
					}
				],
				workTitle: 'A sample of my freelance work',
				work: [
					{
						title: "Lighting Partners",
						desc: "I worked closely with LPAust to bring their catalogue online, with a clean, modern and responsive website.",
						link: 'http://lpaust.com.au',
						img: 'lpaust-mobile.png'
					},
					{
						title: "Lahznimmo",
						desc: "Lahznimmo Architects is a leading Australian Architecture firm based in Newtown, Sydney. I redesigned & redeveloped their website for desktop & mobile, working closely with the team.",
						link: 'http://lahznimmo.com',
						img: 'lahznimmo-mobile.png'
					},
					{
						title: "Moments of Spur",
						desc: "Moments of Spur was a custom designed fashion blog for Melbourne Blogger Shalini Papas.",
						link: 'http://momentsofspur.com',
						img: 'mos-mobile.png'
					},
					{
						title: "Arcadia Landscape",
						desc: "ArcadiaLA were in need of a serious modernisation. I worked with them to bring their projects online in a gorgeous portfolio.",
						link: 'http://arcadiala.com.au',
						img: 'arcadia-mobile.png'
					}
				]
			},
			{
				company: "Envato",
				title: "Book & Magazine Author",
				when: "September 2008 - September 2009",
				desc: "Envato is a network of sites and services aimed at helping people design & build creative websites. \
						Whilst working for Envato, I wrote over 20 articles about front-end design and WordPress. \
						I also co-authored a WordPress Design book with Envato founder Collis Ta'eed at the tender age of 14!",
				ref: [
					{
						name: "Naysan Naraqi",
						url: "http://www.linkedin.com/profile/view?id=137398368"
					},
				],
				workTitle: "A selection of my publications",
				work: [
					{
						title: 'How to Be a Rockstar WordPress Designer',
						desc : 'At 14, I co-authored the Envato best-seller with Collis Ta\'eed, writing the design & code chapters of the book.',
						img  : 'rockable-wordpress-designer.png',
						link : 'http://code.tutsplus.com/ebooks/rockstar-wordpress-designer'
					},
					{
						title: 'Articles on Tuts+',
						desc: 'I wrote bi-monthly articles for Nettuts - teaching myself to code along the way! Check em out.',
						link: 'http://tutsplus.com/authors/harley-alexander',
						img: 'tutsplus.png'
					}
				]
			},
			{
				company: "WordCamp AU & NZ",
				title: "Speaker & Presenter",
				when: "2008 & 2009",
				desc: "WordCamp is a conference that focuses on everything WordPress. \
						I was a speaker at three WordCamps over the course of 2008 and 2009",
				ref:[
					{
						name: "Anthony Cole",
						url: "http://www.linkedin.com/profile/view?id=114534997"
					}
				] 
			},
			{
				company: "Wopr",
				title: "Web Designer",
				when: "Early days",
				desc: "Wopr were a small, local design & dev shop based in Sydney. \
						I did all the experience and visual design for their clients' websites.",
				ref:[
					{
						name: "Sam Bauers",
						url: "http://www.linkedin.com/profile/view?id=7263767"
					}
				] 
			}
		]
	}
}])

.factory('Education', [function(){
	return {
		education: [
			{
				name: "Various Short Courses",
				location: "Online",
				subtitle: "Codeschool, Railscasts, Egghead.io, Tuts+, etc"
			},
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
				name: "Higher School Certificate",
				location: "International Grammar School",
				subtitle: "Design & Technology, Visual Arts, French, Spanish, English / Accepted for ArtExpress @ AGNSW"
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
			{ name: "Campaigns & Conversions" },
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
			{ name: "Client relations" },
			{ name: "Cooking" },
			{ name: "Coffee Making" }
		]
	}
}])

.factory('Websites', [function(){
	return {
		links: [
			{name: "health.com.au", url: "http://health.com.au"},
			{name: "Uncomplexicate", url: "http://uncomplexicate.com.au"},
			{name: "OzMattress", url: "http://ozmattress.com.au"},
			{name: "Yummoo", url: "http://yummoo.com.au"},
			{name: "Lighting Partners Australia", url: "http://lpaust.com.au"},
			{name: "Lahznimmo Architects", url: "http://lahznimmo.com"},
			{name: "Arcadia Landscape Architects", url: "http://arcadiala.com.au"}
		]
	}
}])

.factory('Links', [function(){
	return {
		links: [
			{name: "How to Be a Rockstar WordPress Designer", url: "https://tutsplus.com/ebook/rockstar-wordpress-designer/"},
			{name: "An interview with me about my book", url: "http://net.tutsplus.com/articles/interviews/an-interview-with-harley-alexander/"},
			{name: "Another interview with me about my photography", url: "http://www.artgallery.nsw.gov.au/channel/clip/218/"},
			{name: "My articles on WPMU.org", url: "http://wpmu.org/author/harleya/"},
			{name: "My articles on Tuts+", url: "http://nettuts.com/author/harley"},
			{name: "A case study on the SitePoint logo", url: "http://www.sitepoint.com/sitepoints-new-logo-and-the-story-behind-it/"},
			{name: "Me @ ArtExpress 2011", url: "http://artexpress.artsunit.nsw.edu.au/2011Photomedia.html"}
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