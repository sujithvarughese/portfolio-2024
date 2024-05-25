import medscopeCoverIMG from "../assets/images/projects/medscope/cover.jpeg"
import medscopeCoverGIF from "../assets/images/projects/medscope/cover.gif"
import medscopeHomeIMG from "../assets/images/projects/medscope/screenshot-home.png"
import medscopeProfileIMG from "../assets/images/projects/medscope/screenshot-profile.png"
import medscopeDrugIMG from "../assets/images/projects/medscope/screenshot-drug.png"

import bookstaxCoverIMG from "../assets/images/projects/bookstax/cover.jpeg"
import bookstaxCoverGIF from "../assets/images/projects/bookstax/cover.gif"
import bookstaxHomeIMG from "../assets/images/projects/bookstax/screenshot-home.png"
import bookstaxLibraryIMG from "../assets/images/projects/bookstax/screenshot-library.png"
import bookstaxDiscoverIMG from "../assets/images/projects/bookstax/screenshot-discover.png"

import simplerFitnessCoverIMG from "../assets/images/projects/simpler-fitness/cover.jpeg"
import simplerFitnessCoverGIF from "../assets/images/projects/simpler-fitness/cover.gif"
import fitnessBrowseIMG from "../assets/images/projects/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/projects/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/projects/simpler-fitness/instructions.png"

import realtyCoverIMG from "../assets/images/projects/realty-solutions/cover.jpeg"
import realtyCoverGIF from "../assets/images/projects/realty-solutions/cover.gif"
import fmrIMG from "../assets/images/projects/realty-solutions/fmr.png"
import messagesIMG from "../assets/images/projects/realty-solutions/messages.png"
import receiptsIMG from "../assets/images/projects/realty-solutions/receipts.png"
import mobileFinancesIMG from "../assets/images/projects/realty-solutions/mobile-finances.png"
import searchIMG from "../assets/images/projects/realty-solutions/search.png"

import onTheBooksCoverIMG from "../assets/images/projects/on-the-books/cover.jpeg"
import onTheBooksCoverGIF from "../assets/images/projects/on-the-books/cover.gif"
import bookDiscoverIMG from "../assets/images/projects/on-the-books/discover.png"
import notebookIMG from "../assets/images/projects/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/projects/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/projects/on-the-books/search.png"

import blackjackCoverIMG from "../assets/images/projects/blackjack/cover.jpeg"
import blackjackCoverGIF from "../assets/images/projects/blackjack/cover.gif"
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
		coverVideo: medscopeCoverGIF,
		heading: "Medical assistant that uses AI to give you personalized and accurate treatment options.",
		description: "When I was feeling sick last month, I called the specialist to make an appointment. Boy, was I shocked as the receptionist told me there is a 3 month wait just to visit the doctor. I tried googling my symptoms, but filtering for accurate results proved more difficult than I thought. I didn’t want to end up taking medical advice from a 12-year old resident Reddit doctor.\n\nThis app puts everything in one place. Enter up to five symptoms, along with your age and sex. With the help of AI, you will get several options of reliable treatment, sorted in order of effectiveness. Results include medication details, dosing and usage, and potential risks and side effects. I recently partnered with DrugBank, and their API will help results become more detailed, along with features such as drug to drug interactions. ",
		captions: [
			"Search through drug list with autocompletion.",
			"Get treatment based on age, sex, and selected list of symptoms.",
			"Google OAuth 2.0 for authentication."
		],
		images: [medscopeHomeIMG, medscopeDrugIMG, medscopeProfileIMG],
		link: 'App currently in Test Flight. Full source code and images are available. Contact me for access to test version.',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase"],
		featured: true,
	},
	{
		title: "BookStax",
		coverImage: bookstaxCoverIMG,
		coverVideo: bookstaxCoverGIF,
		heading: "Mobile app to organize and annotate your reading collection while giving recommendations based on best sellers or your interests.",
		description: "A remake of an older app I created called on the books, but this time using React Native for full mobile functionality.\n\nMany popular reading apps are online stores to buy e-books. This app is designed to organize your reading collection into digital bookshelves and take notes that are easy to find through the digital notebook.  ",
		captions: [
			"Integration with New York Times Best Sellers API.",
			"Nested navigators with several stacks and tabs using react-navigation.",
			"Google Firebase to manage and log in users."
		],
		images: [bookstaxHomeIMG, bookstaxLibraryIMG, bookstaxDiscoverIMG],
		link: 'App currently in Test Flight. Full source code and images are available. Contact me for access to test version.',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "Firebase"],
		featured: true,
	},
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		coverVideo: simplerFitnessCoverGIF,
		heading: "Get personal workouts routines, along with detailed instructions and animations based on age, experience level, and available equipment.",
		description: "At the start of the pandemic, I built a home gym for my parents only to soon have it collecting dust. I realized the problem for my parents, as so many of us wanting to get in shape, is not that they didn’t want to work out, but they had no idea which exercises to do, how to do them safely, and what kind of workout routine to use.\n\nI created this app as a solution to create personal workout routines based on experience level, time, available equipment, and target body parts if desired. Each workout comes with detailed instructions and animations.",
		captions: [
			"Custom workouts through OpenAI prompt returns data in JSON.",
			"JSON data used to find workout details from Mongo Database with about 1500 different workouts.",
			"Workouts are efficiently loaded: Front end utilizes infinite type scrolling which fetches paginated results from back end as user scrolls."
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "NodeJS", "React", "MongoDB", "ChakraUI"],
		featured: true,
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		coverVideo: blackjackCoverGIF,
		heading: "Learn perfect strategy with live feedback after each move and an ROI tracker to calculate your profitability.",
		description: "App designed to teach proper blackjack strategy while having fun trying to beat the house. Before confirming your move, feel free to use the optional hint feature which will tell you the correct book move on each play. You can also choose to get live feedback which tells you if you made the correct play, along with the book play if you didn’t.\n\nConfigure the game to your liking from one to eights decks, number of splits, blackjack bonus payouts and your starting bankroll. ",
		captions: [
			"Customizable settings- Choose number of decks, blackjack payouts, your bankroll, number of splits allowed, and more.",
			"Live stat tracker that updates every hand with the amount won or lost and your current return on investment.",
			"Stuck on the right move? Ask for help at any time during a hand.",
		],
		images: [blackjackMobileIMG, blackjackDesktopIMG, blackjackMobileDoubleIMG, blackjackPlayerWinIMG],
		desktop: bjDesktop,
		mobile: bjMobile,
		link: 'https://beat-blackjack.com',
		github: 'https://github.com/sujithvarughese/beat-blackjack',
		tech: ["JavaScript", "React", "ChakraUI"],
		featured: false,
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverIMG,
		coverVideo: realtyCoverGIF,
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
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components"],
		featured: true,
	},
	{
		title: "On the Books.",
		coverImage: onTheBooksCoverIMG,
		coverVideo: onTheBooksCoverGIF,
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
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components"],
		featured: false,
	},

]

