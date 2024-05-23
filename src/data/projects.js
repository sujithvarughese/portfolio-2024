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
import realtyScreenshots from "../assets/images/projects/realty-solutions/home-combined.png"
import fmrIMG from "../assets/images/projects/realty-solutions/fmr.png"
import messagesIMG from "../assets/images/projects/realty-solutions/messages.png"
import receiptsIMG from "../assets/images/projects/realty-solutions/receipts.png"
import mobileFinancesIMG from "../assets/images/projects/realty-solutions/mobile-finances.png"
import searchIMG from "../assets/images/projects/realty-solutions/search.png"

import onTheBooksCoverIMG from "../assets/images/projects/on-the-books/cover.jpeg"
import onTheBooksCoverGIF from "../assets/images/projects/on-the-books/cover.gif"
import onTheBooksScreenshots from "../assets/images/projects/on-the-books/on-the-books-screenshot.png"
import bookDiscoverIMG from "../assets/images/projects/on-the-books/discover.png"
import notebookIMG from "../assets/images/projects/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/projects/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/projects/on-the-books/search.png"

import blackjackScreenshots from "../assets/images/projects/blackjack/blackjack-screenshots.png"
import blackjackCoverIMG from "../assets/images/projects/blackjack/cover.jpeg"
import blackjackCoverGIF from "../assets/images/projects/blackjack/cover.gif"
import blackjackMobileDoubleIMG from "../assets/images/projects/blackjack/mobile-double.png"
import blackjackPlayerWinIMG from "../assets/images/projects/blackjack/player-win.png"

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
		heading: "Mobile medical assistant integrated with OpenAI to get personalized treatment options for your condition.",
		description: "",
		captions: [
			"Search through drug list with autocompletion.",
			"Get treatment based on age, sex, and selected list of symptoms.",
			"Google OAuth 2.0 for authentication."
		],
		images: [medscopeHomeIMG, medscopeDrugIMG, medscopeProfileIMG],
		image: realtyScreenshots,
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "NodeJS", "Firebase"],
		featured: true,
	},
	{
		title: "BookStax",
		coverImage: bookstaxCoverIMG,
		coverVideo: bookstaxCoverGIF,
		heading: "Mobile app to organize and annotate your reading collection while giving recommendations based on best sellers or your interests.",
		description: "",
		captions: [
			"Integration with New York Times Best Sellers API, along with OpenAI.",
			"Smooth tabbed switching with React Navigation.",
			"Google Firebase to manage and log in users."
		],
		images: [bookstaxHomeIMG, bookstaxLibraryIMG, bookstaxDiscoverIMG],
		image: realtyScreenshots,
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "OpenAI", "React Native", "Expo", "Firebase"],
		featured: true,
	},
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		coverVideo: simplerFitnessCoverGIF,
		heading: "Fitness app that personalizes your workouts using OpenAI by curating routines based on age, experience level, and available equipment.",
		description: "",
		captions: [
			"Browse workouts by target muscles, available equipment, and experience level.",
			"Data fetched from back end in paginated results which are efficiently rendered with infinite scroll.",
			"Create an account to save workouts to your favorites."
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		image: realtyScreenshots,
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
		description: "",
		captions: [
			"Customizable settings- Choose number of decks, blackjack payouts, your bankroll, number of splits allowed, and more.",
			"Live stat tracker that updates every hand with the amount won or lost and your current return on investment.",
			"Stuck on the right move? Ask for help at any time during a hand.",
		],
		images: [blackjackMobileDoubleIMG, blackjackPlayerWinIMG],
		image: blackjackScreenshots,
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
		description: "",
		captions: [
			"Retrieve mortgage information, then determine monthly payments, view live payoff quotes, and get profits/losses.",
			"User roles for tenants and owners/managers, authorized and authenticated using JSON web tokens attached to signed HTTP cookies.",
			"HUD.gov API integration to retrieve rental rates for any location in the US.",
		],
		images : [searchIMG, messagesIMG, mobileFinancesIMG, receiptsIMG, fmrIMG],
		image: realtyScreenshots,
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
		description: "",
		captions: [
			"OpenLibrary API integration to search books by genre and get previews and recommendations.",
			"CRUD operations in database using mongoose models while front end state is simultaneously updated and rendered.",
			"Navigation using react router with loader functions and state management with context API and reducer.",
		],
		images: [bookDiscoverIMG, notebookIMG, bookSearchIMG, bookPreviewIMG],
		image: onTheBooksScreenshots,
		desktop: otbDesktop,
		mobile: otbMobile,
		link: 'https://onthebooks.sujithvarughese.com',
		github: 'https://github.com/sujithvarughese/on-the-books',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "Styled Components"],
		featured: false,
	},

]

