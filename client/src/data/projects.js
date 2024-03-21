import simplerFitnessCoverIMG from "../assets/images/simpler-fitness/cover.jpeg"
import fitnessBrowseIMG from "../assets/images/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/simpler-fitness/instructions.png"

import realtyCoverIMG from "../assets/images/realty-solutions/cover.jpeg"
import realtyScreenshots from "../assets/images/realty-solutions/home-combined.png"
import fmrIMG from "../assets/images/realty-solutions/fmr.png"
import messagesIMG from "../assets/images/realty-solutions/messages.png"
import receiptsIMG from "../assets/images/realty-solutions/receipts.png"
import mobileFinancesIMG from "../assets/images/realty-solutions/mobile-finances.png"
import searchIMG from "../assets/images/realty-solutions/search.png"

import onTheBooksCoverIMG from "../assets/images/on-the-books/cover.jpeg"
import onTheBooksScreenshots from "../assets/images/on-the-books/on-the-books-screenshot.png"
import bookDiscoverIMG from "../assets/images/on-the-books/discover.png"
import notebookIMG from "../assets/images/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/on-the-books/search.png"

import blackjackScreenshots from "../assets/images/blackjack/blackjack-screenshots.png"
import blackjackCoverIMG from "../assets/images/blackjack/cover.jpeg"
import blackjackMobileDoubleIMG from "../assets/images/blackjack/mobile-double.png"
import blackjackPlayerWinIMG from "../assets/images/blackjack/player-win.png"

import rsDesktop from "../assets/images/realty-solutions/home-desktop.png"
import rsMobile from "../assets/images/realty-solutions/home-mobile.png"
import otbDesktop from "../assets/images/on-the-books/on-the-books-desktop.png"
import otbMobile from "../assets/images/on-the-books/on-the-books-mobile.png"
import bjDesktop from "../assets/images/blackjack/bj-desktop.png"
import bjMobile from "../assets/images/blackjack/bj-mobile2.png"

export const projects = [
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		heading: "Fitness app makes getting in shape simple by filtering workouts to your criteria and displaying detailed animated images.",
		captions: [
			"Browse workouts by target muscles, available equipment, and experience level.",
			"Data fetched from back end in paginated results which are efficiently rendered with infinite scroll.",
			"Create an account to save workouts to your favorites."
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		image: realtyScreenshots,
		link: 'https://simpler-fitness.com',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["JavaScript", "NodeJS", "React", "MongoDB", "OpenAI"],
		featured: true,
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		heading: "Learn perfect strategy and beat the house with live feedback after each move, and an ROI tracker to calculate how profitable you can be.",
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
		tech: ["JavaScript", "React"],
		featured: false,
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverIMG,
		heading: "Full-stack property management app for owners of rental units to manage finances and communicate with tenants.",
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
		tech: ["JavaScript", "NodeJS", "React", "MongoDB"],
		featured: true,
	},
	{
		title: "On the Books.",
		coverImage: onTheBooksCoverIMG,
		heading: "Personal library application designed to help you find books and take notes.",
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
		tech: ["JavaScript", "NodeJS", "React", "MongoDB"],
		featured: false,
	},

]

