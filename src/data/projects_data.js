import priodo_screenshot from '../assets/images/project_images/priodo_iphone.png'
import yfu_app_prototype from '../assets/images/project_images/yfu_iphone.png'
import dragonlands from '../assets/images/project_images/dragonlands.png'
import viergewinnt_imac from '../assets/images/project_images/viergewinnt_imac.png'

const projects_data = {
		projects: [
			{
				id: 1,
				title: 'Zettel', //Project Title - Add Your Project Title Here
				service: 'Design & Development', // Add Your Service Type Here
				//Project Image - Add Your Project Image Here
				imageSrc: priodo_screenshot,
				//Project URL - Add Your Project Url Here
				url: 'https://zettel.netlify.app/',
				linkToProject: '',
				infoText: "A simple but quite useful shopping list app. I was tired of always writing down the same things before grocery shopping, so I created this app. Add groceries to your 'Zettel' from a predefined list of groceries and check them off in the store. Change the predefined elements in the editmode."
			},
			{
				id: 2,
				title: 'Dragonlands', //Project Title - Add Your Project Title Here
				service: 'UI/UX Design & Development', // Add Your Service Type Here
				//Project Image - Add Your Project Image Here
				imageSrc: dragonlands,
				//Project URL - Add Your Project Url Here
				url: 'http://dragonlands.netlify.app/',
				linkToProject: '',
				infoText: "A collection of different tools for the game Splinterlands. The game Splinterlands offers a public api which can be used to build custom tools like this. The page shows player and card statistics and is under constant development."
			},
			{
				id: 3,
				title: 'Priodo - Priority Todo-List', //Project Title - Add Your Project Title Here
				service: 'UI/UX Design & Fullstack Development', // Add Your Service Type Here
				//Project Image - Add Your Project Image Here
				imageSrc: priodo_screenshot,
				//Project URL - Add Your Project Url Here
				url: 'http://priodo.netlify.com/',
				linkToProject: '',
				infoText: "This is a private project of mine. It is a simple, yet powerful todolist-application which lists your todos by priority and estimated duration. The app saves the todos in the cloud and keeps all devices in sync automatically. It's a work in progress, I am constantly improving usability and code. The frontend is buildt with react.js and the data is stored in firebase."
			},
			{
				id: 4,//DO NOT CHANGE THIS (Please)😅
				title: 'YFU App - Prototype',
				service: 'Prototyping (Clickdummy, Adobe XD)',
				imageSrc: yfu_app_prototype,
				url: 'https://yfu-app-prototype.netlify.com/start',
				linkToProject: '',
				infoText: "YFU Germany uses an app to cumminicate with their exchange students and host families. My task was to improve the usability as well as the design without having to touch the existing backend logic. The result was this high fidelity clickdummy which I created with Adobe XD."
			},
			// {
			// 	id: 5,//DO NOT CHANGE THIS (Please)😅
			// 	title: '"Ticket-Tinder" App - Prototype',
			// 	service: 'Prototyping (Clickdummy - Sketch & Invision)',
			// 	imageSrc: tickettinder,
			// 	url: '',
			// 	linkToProject: '',
			// 	infoText: "A little pitch for a client - it's basically tinder for concerts. The goal was to find out what the user likes and show similar events based on the previously liked events. I created a small clickdummy how the app could look and feel using Sketch and Invision."
			// },
			{
				id: 5,//DO NOT CHANGE THIS (Please)😅
				title: 'Vier Gewinnt Deluxe',
				service: 'Idea & Development (React.js)',
				imageSrc: viergewinnt_imac,
				url: 'https://viergewinntdeluxe.de',
				linkToProject: '',
				infoText: "4 in a row with a strategic twist. It's a little addition to this simple game that makes it much more strategic. The basic idea is to remove all stones in a column once it is filled and add a permanent stone (black border) on the bottom. This stone has the color of the player who had more stones in the column and will not be removed. Once I came up with the idea I realized that I could simply build it with react.js - and here it is. Have fun playing :)"
			},
		]
	}

	export default projects_data;