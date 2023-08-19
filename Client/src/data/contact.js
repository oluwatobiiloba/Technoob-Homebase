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
    title: "Supportive Learning Environment",
    content:
      "Join our  welcoming community where questions are encouraged, and you can learn without judgments.",
  },
  {
    id: "feature-2",
    icon: icon6,
    title: "Mentorship and Networking",
    content:
      "Join our community so you can connect with experienced mentors and like-minded newbies to guide and support you.",
  },
  {
    id: "feature-3",
    icon: icon1,
    title: "Learning Resources",
    content:
      "Access a wealth of resources and articles to kickstart your tech journey.",
  },
  {
    id: "feature-4",
    icon: icon4,
    title: "Career Development",
    content:
      "Explore a plethora of tech-related job opportunities, and excel in your tech career with us.",
  },
  {
    id: "feature-5",
    icon: icon5,
    title: "Collaboration",
    content:
      "Participate in engaging classes and workshops to expand your tech knowledge and skills. ",
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