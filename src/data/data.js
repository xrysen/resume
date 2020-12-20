const skills = {
  languages: ["Javascript", "HTML", "SQL", "CSS", "C", "Ruby"],
  frameworks: ["NodeJs", "React", "Express", "jQuery", "Ajax"],
  databases: ["PostgresSQL"],
};

const projects = [
  {
    id: 1,
    title: "Tadoo",
    techStack: ["jQuery", "Node", "Express", "Google Books API", "Yelp Fusion API", "Open Movie Database API"],
    description: 'A “smart” to-do list that takes in a user entry and uses an algorithm to automatically sort the item into one of four categories.'
  },
  {
    id: 2,
    title: "Scheduler",
    techStack: ["React", "Axios", "Classnames", "Storybook"],
    description: "A React based project that creates, edits, deletes and keeps track of student meetings with instructor of their choice."
  },
  {
    id: 3,
    title: "Tweeter",
    techStack: ["jQuery", "Node"],
    description: "A basic Twitter clone using Ajax"
  },
  {
    id: 4,
    title: "TinyApp",
    techStack: ["Express", "Node"],
    description: "A URL shortening service created with RESTful API's"
  }
]

const education = [
  {
    id: 1,
    school: "Lighthouse Labs",
    diploma: "Full Stack Web Development",
    dates: "Oct. 2020 - Jan 2021",
    description: "Topics covered include: HTML, CSS, Javascript, Ruby, React, Rails, SQL, Express, Node, jQuery, Ajax, RESTful API's, Git and Github"
  }
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
      "Backup Bookkeeping and Store Administration",
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