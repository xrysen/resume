const data = {
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

export {
  data,
  projects
}