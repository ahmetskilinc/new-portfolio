import { Url } from "next/dist/shared/lib/router/router";

export type Project = {
	img: string;
	title: string;
	description: string;
	github?: Url;
	link?: Url;
};

const projectsData: Project[] = [
	{
		img: "sniplondon",
		title: "SNIP LONDON",
		description:
			"My first commercial project for a barber shop - build with NextJS, TailwindCSS, DaisyUI and PayloadCMS for the backend.",
		link: "https://sniplondon.com/",
		github: "https://github.com/ahmetskilinc/sniplondon",
	},
	{
		img: "moviesdb",
		title: "MoviesDB",
		description:
			"This simple movie database was built using Next, TailwindCSS, Typescript and the TMDB API. I build it as my first Nextjs project using an API. Not yet complete but available to view.",
		link: "https://movies.ahmetk.dev/",
		github: "https://github.com/ahmetskilinc/moviesdb",
	},
	{
		img: "rescutrak",
		title: "RescuTrak",
		description:
			"This was a project I built using React, Redux, Firebase and MaterialI-UI. I built it as my first big React project in order to learn React and Redux. It is a Vet/Rescue service patient tracking database.",
		link: "https://rescutrak.ahmetk.dev/",
	},
	{
		img: "ispecs",
		title: "iSpecs",
		description:
			"A database to see the specifications of current and past Apple devices. Written in React, Redux, Firebase and Material-UI.",
		link: "https://ispecs.app/",
	},
	// {
	// 	img: "frello",
	// 	title: "Frello",
	// 	description: "A simple Kanban board I created using react and some other Javascript libraries. It is still in progress.",
	// },
	// {
	// 	img: "markdownapp",
	// 	title: "M⬇ Editor",
	// 	description: "A simple markdown editor that allows you to download your work as .md or .html files. It is still in progress.",
	// },
	// {
	// 	img: "calendar",
	// 	title: "Calendar App",
	// 	description:
	// 		"A simple calendar app to learn Firebase with vanilla Javascript. It uses Firebase Auth and Firebase Firestore in order to authenticate and serve the correct calendar to the user. It also uses FullCalendar.io",
	// 	// link: "https://calendar.ahmet.wtf/",
	// },
	// {
	// 	img: "colours",
	// 	title: "Colours",
	// 	description: "Simple Javascript app that gives you a random colour hex value and the name of the colour.",
	// 	// link: "https://colours.ahmetk.dev/",
	// },
	// {
	// 	img: "covid19app",
	// 	title: "Covid-19 Tracker",
	// 	description:
	// 		"A Covid-19 tracker app made using React and Material-UI. I made this app to learn how to use API calls in React using the disease.sh API.",
	// 	link: "https://covid19.ahmetk.dev/",
	// },
];

export default projectsData;
