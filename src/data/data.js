const skills = {
  languages: ["Javascript", "HTML", "SQL", "CSS", "C", "Python", "Ruby"],
  frameworks: ["NodeJs", "React", "React-native", "Express", "jQuery", "Django", "Ajax"],
  databases: ["PostgresSQL"],
};

const projects = [
  {
    id: 1,
    title: "D&D Character Creator",
    techStack: ["React", "Django"],
    description: "In development: A web app that let's a user generate a printable character sheet for D&D5e after selecting various options."
  },
  {
    id: 2,
    title: "AC Pixel Editor",
    techStack: ["HTML5", "CSS", "Javascript", "jQuery"],
    description: "An in-browser pixel editor aimed to be 100% compatible with Animal Crossing New Horizons style editor",
    link: "https://github.com/xrysen/pixel-editor"
  },
  {
    id: 3,
    title: "Tetris.js",
    techStack: ["HTML5", "CSS", "Javascript"],
    description: "A simple Tetris clone for the browser",
    link: "https://github.com/xrysen/tetris.js"
  },
  {
    id: 4,
    title: "Matchr",
    techStack: ["Typescript", "React", "Node", "Express", "Yelp Fusion API", "SQL"],
    description: "An app that helps two users decide where to eat. Each client is given a choice of restaurants, based on a category, where they can then choose yes or no. Once a match is found, both clients are notified.",
    link: "https://github.com/xrysen/matcher"
  },
  {
    id: 5,
    title: "Matchr - Mobile",
    techStack: ["React-native", "Node", "Express", "SQL", "Yelp Fusion API"],
    description: "The mobile version of Matchr, using React-native",
    link: "https://github.com/xrysen/matchr-mobile"
  },
  {
    id: 6,
    title: "Tadoo",
    techStack: ["jQuery", "Node", "Express", "SQL", "Google Books API", "Yelp Fusion API", "Open Movie Database API"],
    description: 'A “smart” to-do list that takes in a user entry and uses an algorithm to automatically sort the item into one of four categories.',
    link: 'https://github.com/xrysen/smart-to-do-list'
  },
]

const education = [
  {
    id: 1,
    school: "Lighthouse Labs",
    diploma: "Full Stack Web Development",
    dates: "Oct. 2020 - Jan 2021",
    summary: "An intensive 12-week Bootcamp where we learned to develop web applications from the ground up.",
    description: "Topics covered include: HTML, CSS, Javascript, Ruby, React, Rails, SQL, Express, Node, jQuery, Ajax, RESTful API's, Git and Github"
  },

]

const experience = [
  {
    id: 1,
    company: "Real Canadian Superstore",
    title: "HABA Department Manager",
    dates: "Oct. 2011 - Sept. 2020",
    location: "Duncan, BC",
    description: [
      "Assess profit and loss in order to increase sales and decrease financial loss",
      "Ordering, merchandising, providing customer service",
      "Leadership, Hiring, employee coaching and development",
      "Power Equipment Trainer for Highstacker and Powerjack",
      "Bookkeeping and Store Administration",
      "Adhere to company standards and ensure that company policies and procedures are followed"
    ],
  }
]

export {
  skills,
  projects,
  education,
  experience
}