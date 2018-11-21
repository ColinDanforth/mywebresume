import guitars from "../../images/guitars.jpg"
import martialArts from '../../images/fightingarts.jpg'
import gameImage from '../../images/GameDesign.png'
import software from '../../images/softwareDesign.webp'

export default [
  {
    pageName: 'software',
    img: software,
    rootText: "I'm a self taught software developer who has been making my living professionally " +
      "in software development. I work for LoyaltyOne and have been working " +
      "towards certs in dev ops technologies within AWS. Click this box to look at my resume.",
    title: 'Web Service Design, Dev ops',
    link: '/software'
  },
  {
    pageName: 'videogame',
    img: gameImage,
    rootText: "I got started in video game design 5 years ago through online learning. This is how I went" +
      "about teaching myself software development. Always in need of solid assets I have also taught myself" +
      " 3D modelling. If you'd like to check out my current projects this is the link for you.",
    title: 'Video Game Design',
    link: '#videogames'
  },
  {
    pageName: 'music' ,
    img: guitars,
    rootText: "I started playing guitar when I was 8. Spent years learning and playing before I branched off" +
      "into Bass as well. Recently I've been teaching myself the drums and starting a band with some colleagues." +
      "I also teach guitar. If that sounds cool to you... click away.",
    title: 'Music and Music Instruction',
    link: '#music'
  },
  {
    pageName: 'martialarts',
    img: martialArts,
    rootText: "Ten years ago I started my martial journey with Wing Chun. I was bored of weight lifting and looking" +
      " for something more interesting. What I found was a new obsession. I started training in multiple forms of martial" +
      " arts and have earned a mastery of many. If you're interested in learning about martial arts or the associations I " +
      "train and teach through then click here.",
    title: 'Martial Studies and Instruction',
    link: '#martialarts'
  }
]
