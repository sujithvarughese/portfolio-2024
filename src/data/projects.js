import medscopeCoverIMG from "../assets/images/projects/medscope/cover.jpeg"
import medscopeCoverGIF from "../assets/images/projects/medscope/cover.gif"
import medscopeCoverMP4 from "../assets/images/projects/medscope/cover.mp4"
import medscopeHomeIMG from "../assets/images/projects/medscope/screenshot-home.png"
import medscopeProfileIMG from "../assets/images/projects/medscope/screenshot-profile.png"
import medscopeDrugIMG from "../assets/images/projects/medscope/screenshot-drug.png"

import bookstaxCoverIMG from "../assets/images/projects/bookstax/cover.jpeg"
import bookstaxCoverGIF from "../assets/images/projects/bookstax/cover.gif"
import bookstaxCoverMP4 from "../assets/images/projects/bookstax/cover.mp4"
import bookstaxHomeIMG from "../assets/images/projects/bookstax/screenshot-home.png"
import bookstaxLibraryIMG from "../assets/images/projects/bookstax/screenshot-library.png"
import bookstaxDiscoverIMG from "../assets/images/projects/bookstax/screenshot-discover.png"

import simplerFitnessCoverIMG from "../assets/images/projects/simpler-fitness/cover.jpeg"
import simplerFitnessCoverGIF from "../assets/images/projects/simpler-fitness/cover.gif"
import simplerFitnessCoverMP4 from "../assets/images/projects/simpler-fitness/cover.mp4"
import fitnessBrowseIMG from "../assets/images/projects/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/projects/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/projects/simpler-fitness/instructions.png"

import realtyCoverIMG from "../assets/images/projects/realty-solutions/cover.jpeg"
import realtyCoverGIF from "../assets/images/projects/realty-solutions/cover.gif"
import realtyCoverMP4 from "../assets/images/projects/realty-solutions/cover.mp4"
import fmrIMG from "../assets/images/projects/realty-solutions/fmr.png"
import messagesIMG from "../assets/images/projects/realty-solutions/messages.png"
import receiptsIMG from "../assets/images/projects/realty-solutions/receipts.png"
import mobileFinancesIMG from "../assets/images/projects/realty-solutions/mobile-finances.png"
import searchIMG from "../assets/images/projects/realty-solutions/search.png"

import onTheBooksCoverIMG from "../assets/images/projects/on-the-books/cover.jpeg"
import onTheBooksCoverGIF from "../assets/images/projects/on-the-books/cover.gif"
import onTheBooksCoverMP4 from "../assets/images/projects/on-the-books/cover.mp4"
import bookDiscoverIMG from "../assets/images/projects/on-the-books/discover.png"
import notebookIMG from "../assets/images/projects/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/projects/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/projects/on-the-books/search.png"

import blackjackCoverIMG from "../assets/images/projects/blackjack/cover.jpeg"
import blackjackCoverGIF from "../assets/images/projects/blackjack/cover.gif"
import blackjackCoverMP4 from "../assets/images/projects/blackjack/cover.mp4"
import blackjackMobileDoubleIMG from "../assets/images/projects/blackjack/mobile-double.png"
import blackjackPlayerWinIMG from "../assets/images/projects/blackjack/player-win.png"
import blackjackMobileIMG from "../assets/images/projects/blackjack/bj-mobile2.png"
import blackjackDesktopIMG from "../assets/images/projects/blackjack/bj-desktop.png"

import rsDesktop from "../assets/images/projects/realty-solutions/home-desktop.png"
import rsMobile from "../assets/images/projects/realty-solutions/home-mobile.png"
import otbDesktop from "../assets/images/projects/on-the-books/on-the-books-desktop.png"
import otbMobile from "../assets/images/projects/on-the-books/on-the-books-mobile.png"
import bjDesktop from "../assets/images/projects/blackjack/bj-desktop.png"
import bjMobile from "../assets/images/projects/blackjack/bj-mobile.png"

export const projects = [
	{
		title: "MedScope",
		coverImage: medscopeCoverIMG,
		coverVideo: medscopeCoverMP4,
		coverGif: medscopeCoverGIF,
		heading: "Medical assistant that uses AI to give you personalized and accurate treatment options.",
		description: "When I was feeling sick last month, I called the specialist to make an appointment. Boy, was I shocked as the receptionist told me there is a 3 month wait just for a visit. I tried googling my symptoms but filtering for accurate results proved quite difficult, and taking medical advice from a 12-year old resident Reddit doctor didn't sound too appealing.\n\nThis app puts everything in one place. Enter up to five symptoms, along with your age and sex. With the help of AI, you will get several options of reliable treatment, sorted in order of effectiveness. Results include medication details, dosing and usage, and potential risks and side effects. I recently partnered with DrugBank, and their API will further improve accuracy and detail, along with added features such as drug to drug interactions. ",
		captions: [
			"Search through drug list with autocompletion.",
			"Get treatment based on age, sex, and selected list of symptoms.",
			"Google OAuth 2.0 for authentication."
		],
		images: [medscopeHomeIMG, medscopeDrugIMG, medscopeProfileIMG],
		link: '',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase", "HTML", "CSS"],
		featured: true,
	},
	{
		title: "BookStax",
		coverImage: bookstaxCoverIMG,
		coverVideo: bookstaxCoverMP4,
		coverGif: bookstaxCoverGIF,
		heading: "Mobile app to organize and annotate your reading collection while giving recommendations based on best sellers or your interests.",
		description: "A remake of an older app I created called On The Books, but this time using React Native for full mobile functionality.\n\nThe current top reading apps are essentially just online stores to buy e-books. This app is geared toward organization and efficient note-taking, while still having the ability to discover and purchase books through Apple and Amazon.",
		captions: [
			"Integration with New York Times Best Sellers API and OpenLibrary's search API",
			"Nested navigators with several stacks and tabs using react-native-navigation.",
			"Google Firebase to manage and log in users."
		],
		images: [bookstaxHomeIMG, bookstaxLibraryIMG, bookstaxDiscoverIMG],
		link: '',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase", "HTML", "CSS"],
		featured: true,
	},
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		coverVideo: simplerFitnessCoverMP4,
		coverGif: simplerFitnessCoverGIF,
		heading: "Get personal workouts routines, along with detailed instructions and animations based on age, experience level, and available equipment.",
		description: "At the start of the pandemic, I decided to build a home gym to help my parents get in shape. Within months, the equipment began collecting dust. I realized the problem for my parents, like many of us wanting to get in shape, is not that we don't want to work out. Most of us simply have no idea which exercises to do, how to do them safely, and what kind of workout routine to follow.\n\nI created this app as a solution to create personal workout routines based on experience level, time, available equipment, and target body parts if desired.",
		captions: [
			"Custom workouts through OpenAI prompt returns data to back end in JSON.",
			"JSON data used to find workout details from Mongo Database with about 1500 different workouts.",
			"Workouts are efficiently loaded: Front end utilizes infinite-type scrolling which fetches paginated results as user scrolls."
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "NodeJS", "React", "MongoDB", "ChakraUI", "HTML", "CSS"],
		featured: true,
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		coverVideo: blackjackCoverMP4,
		coverGif: blackjackCoverGIF,
		heading: "Learn perfect strategy with live feedback after each move and an ROI tracker to calculate your profitability.",
		description: "Beat Blackjack is designed to teach blackjack strategy while having fun trying to beat the house. Use the optional hint feature at any time to get the correct book play, or choose to get live feedback after your move.",
		captions: [
			"Customizable settings- Choose number of decks, blackjack payouts, your bankroll, number of splits allowed, and more.",
			"Live stat tracker that updates every hand with the amount won or lost and your current return on investment.",
			"Context API for global variables and Reducer for global state management",
		],
		images: [blackjackMobileIMG, blackjackDesktopIMG],
		desktop: bjDesktop,
		mobile: bjMobile,
		link: 'https://beat-blackjack.com',
		github: 'https://github.com/sujithvarughese/beat-blackjack',
		tech: ["JavaScript", "React", "ChakraUI", "HTML", "CSS"],
		featured: false,
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverIMG,
		coverVideo: realtyCoverMP4,
		coverGif: realtyCoverGIF,
		heading: "Management app for owners of rental units to manage finances, communicate with tenants, and get market rental rates.",
		description: "Through my experience in property management, my largest gripe is the lack of an efficient system for managing payments and tenant-owner communication.\n\nI created Realty Solutions where all properties can be organized in one place. View mortgage details, insurance premiums, association fees, just to name a few. Owners can send rent receipts and talk to tenants through the messaging functionality. In the future, I would like to integrate a payment processor such as Stripe, where tenants can directly pay owners and owners can pay all expenses using only this app.",
		captions: [
			"Retrieve mortgage information, then determine monthly payments, view live payoff quotes, and get profits/losses.",
			"User roles for tenants and owners/managers, authorized and authenticated using JSON web tokens securely attached to signed HTTP cookies.",
			"HUD.gov API integration to retrieve rental rates for any location in the US.",
		],
		images : [mobileFinancesIMG, searchIMG, messagesIMG, receiptsIMG, fmrIMG],
		desktop: rsDesktop,
		mobile: rsMobile,
		link: 'https://sgs-properties.com',
		github: 'https://github.com/sujithvarughese/realty-solutions',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components", "HTML", "CSS"],
		featured: true,
	},
	{
		title: "On the Books.",
		coverImage: onTheBooksCoverIMG,
		coverVideo: onTheBooksCoverMP4,
		coverGif: onTheBooksCoverGIF,
		heading: "Original reading application designed to help you find books and take notes.",
		description: "One of the first full-stack web applications I designed and created. This is the original version of the BOOKSTAX app, and performs much of the same functionality. It amazes me seeing my own growth as a developer in less than a year. ",
		captions: [
			"OpenLibrary API integration to search books by genre and get previews and recommendations.",
			"CRUD operations in database using mongoose models while front end state is simultaneously updated and rendered.",
			"Navigation using react router with loader functions and state management with context API and reducer.",
		],
		images: [bookDiscoverIMG, notebookIMG, bookSearchIMG, bookPreviewIMG],
		desktop: otbDesktop,
		mobile: otbMobile,
		link: 'https://onthebooks.sujithvarughese.com',
		github: 'https://github.com/sujithvarughese/on-the-books',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components", "HTML", "CSS"],
		featured: false,
	},

]

