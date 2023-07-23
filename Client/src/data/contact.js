import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox  } from "./assets/asset";
import { Catalog, Circooles, Layers, Sisyphus, icon1,icon2, icon3, icon4, icon5, icon6 } from "./assets";
import {RiBankLine} from 'react-icons/ri';
import {FiLayers} from 'react-icons/fi'
import {BsBank} from 'react-icons/bs'
import {BsPuzzle} from 'react-icons/bs'

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link:     '' ,
  },
  {
    id: "resources",
    title: "Resources",
    link: "Resources",
  },
  {
    id: "find-job",
    title: "Jobs",
    link: "Find-Jobs"
  },
  {
    id: "aboutUs",
    title: "About Us",
    link: "About-Us",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    link: "Contact-Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: icon3,
    title: "Connect with hiring managers",
    content:
      "It doesn’t matter what job position you apply to, you get direct access to hiring managers and have an understanding of what the vacancy requires",
  },
  {
    id: "feature-2",
    icon: icon6,
    title: "Flash Apply",
    content:
      "Apply to multiple positions that fit your resume and get more value from us.",
  },
  {
    id: "feature-3",
    icon: icon1,
    title: "Manage your application",
    content:
      "Measure what matters with our application metrics. You can filter, export, and drilldown on what works and what’s not.",
  },
  {
    id: "feature-4",
    icon: icon4,
    title: "Connect with mentors and peers",
    content:
      "connect to fellow job seekers, seniors and experienced persons in the same role you’re applying and get tips",
  },
  {
    id: "feature-5",
    icon: icon5,
    title: "Explore latest resources",
    content:
      "Go through hundreds on standardized resources made available across tech stacks and  be prepared for anything.",
  },
  {
    id: "feature-6",
    icon: icon2,
    title: "We are one in all",
    content:
      "We’re a large and continually growing community of individuals . Chat to in our friendly forum 24/7 and ask questions when you need.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I’ve been using this platform as my got-to resource center and can’t imagine working without it.",
    name: "Candice Wu",
    title: "Product Manager, Meta",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Resources",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Our services",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const HomeItems = [
  {
    id: "1",
    title: "Layers",
    img: Layers ,
  },
  {
    id: "2",
    title: "Sisyphus",
    img: Sisyphus,
  },
  {
    id: "3",
    title: "Circooles",
    img: Circooles,
  },
  {
    id: "4",
    title: "Catalog",
    img: Catalog,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const AdminNavs = [
  
  {
    id: "2",
    icon: <RiBankLine/>,
    title: "Job Management",
    link: "Job-Management",
    color: 'text-purple-500'
   },
  {
    id: "3",
    icon: <FiLayers/>,
    title: "Resource Management",
    link: "Resources-Management",
    color: "text-tblue",
   },
  {
    id: "4",
    icon: <BsBank/>,
    title: "Event Management",
    link: "Event-Management",
    color: "text-teal-500",
 },
  {
    id: "5",
    icon: <BsPuzzle/>,
    title: "Quizzes and Competition",
    link: "Quizzes",
    color: "text-tblue",
 }
];