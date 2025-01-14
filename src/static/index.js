import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";
export const LINKS = [
	{
		title: 'About Us',
		link: '/aboutus',
	},
	{
		title: 'Courses',
		link: '/courses',
	},
	{
		title: 'Events',
		link: '/events',
	},
	{
		title: 'Blog',
		link: '/blog',
	},
	{
		title: 'Contacts',
		link: '/contacts',
	},
]

export const ABOUT = [
	'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
	'Vulputate placerat amet pulvinar lorem nisl.',
	'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
	'Etiam duis lobortis in fames ultrices commodo nibh.',
	'Tincidunt sagittis neque sem ac eget.',
	'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
]

export const COURSES = [
	{
		id: 1,
		image: person1,
		profession: {
			sphere: "Marketing",
			title: "The Ultimate Google Ads Training Course",
			color: "#03cea4",
		},
		price: 100, 
		fName: "| by Jerome Bell",
	},
	{
		id: 2,
		image: person2,
		profession: {
			sphere: "Management",
			title: "Product Management Fundamentals", 
			color: "#5a87fc",
		},
		price: 480,
		fName: "| by Marvin McKinney",
	},
	{
		id: 3,
		image: person3,
		profession: {
			sphere: "HR & Recruiting", 
			title: "HR Management and Analytics",
			color: "#f33982", 
		},
		price: 200,
		fName: "| by Leslie Alexander Li",
	},
	{
		id: 4,
		image: person4,
		profession: {
			sphere: "Marketing",
			title: "Brand Management & PR Communications",
			color: "#03cea4",
		},
		price: 530,
		fName: "| by Kristin Watson",
	},
	{
		id: 5,
		image: person5,
		profession: {
			sphere: "Management",
			title: "Business Development Management",
			color: "#5a87fc",
		},
		price: 400,
		fName: "| by Dianne Russell",
	},
	{
		id: 6,
		image: person6,
		profession: {
			sphere: "Design",
			title: "Graphic Design Basic",
			color: "#f03471",
		},
		price: 400,
		fName: "| by Guy Hawkins",
	},
];
