export default {
  name: 'Interlude',
  blurb: 'Multiplayer Rhythm game targeted music festivals and raising money for charity',
  tags: ['NODEJS', 'WEBSOCKETS', 'MULTIPLAYER'],
  previewImg: 'img/Interlude.png',
  content: [
    {
      header: 'Overview',
      content: [
        {
          type: 'text',
          content: 'Interlude was a rhythm game designed for use at concerts and festivals. It was a semester long capstone project for the RIT New Media Interactive Development and Design majors. The assignment was a collaboration with adobe to create and experience utilizing two or more screens. An exhibit in the 2015 Imagine RIT festival created throughout the 2015 spring semester.',
        },
        {
          type: 'img',
          src: 'img/interlude/splash.png',
          alt: 'Interlude splash screen',
        },
      ]
    },
    {
      header: 'Role: Front End and Server Developer',
      content: [
        {
          type: 'text',
          content: 'I was in charge of programming a majority of the main game view, and creating the node.js server to send updates to the various displays.',
        },
      ]
    },
    {
      header: 'The Team',
      content: [
        {
          type: 'img',
          src: 'img/interlude/team.jpg',
          alt: 'Interlude team outing at Trata',
        },
        {
          type: 'subtext',
          content: 'Janette : Team Lead and Manager',
        },
        {
          type: 'subtext',
          content: 'Danny : Development Lead',
        },
        {
          type: 'subtext',
          content: 'Joe : Asset Design',
        },
        {
          type: 'subtext',
          content: 'Alexa : Lead Design and Animator',
        },
        {
          type: 'subtext',
          content: 'Scott : Audio Development',
        },
        {
          type: 'subtext',
          content: 'Stephen : Asset Design',
        },
        {
          type: 'subtext',
          content: 'Claire : Support',
        },
      ]
    },
    {
      header: 'Inspiration',
      content: [
        {
          type: 'text',
          content: 'The prompt for this project from Adobe was to create an experience utilizing two screens. Rochesters Famous Jazz Festival in the spring served as great inspiration for us since we knew there would be a lot of down time throughout the day. We wanted to create a way to engage with music when there were gaps in performances. We also decided to use this experience to Raise Awareness about VH1s Save the Music Campaign.',
        },
      ]
    },
    {
      header: 'Decisions',
      content: [
        {
          type: 'subtext',
          content: 'Node.js : We chose Node.js for the server since most of our experience was in JavaScript, so if any of the developers had an issue any one of use could step up to replace them.',
        },
        {
          type: 'subtext',
          content: 'iPads : Since we could not guarantee that everyone at the festival could connect to RITs wifi, we decided to get on loan from the school five demo iPads to use. We chose five because the maximum amount of players our game could support.',
        },
        {
          type: 'subtext',
          content: 'HTML 5 Canvas : Since the largest overlap in our skills was with web tech, we decided to use the Canvas API for our game rendering.',
        },
        {
          type: 'img',
          src: 'img/interlude/in_game.png',
          alt: 'Gameplay from imagine',
        },
      ]
    },
    {
      header: 'End Result',
      content: [
        {
          type: 'text',
          content: 'We displayed Interlude at Imagine RIT 2015 and it was a great success. We had over 1000 visitors play our game and it ran with no outages for the whole eight hour festival. Unfortunately we weren\'t able to raise money for VH1\'s Save the Music due to restrictions from RIT, but we had plenty of messages related to the charity. The following year I even met some return visitors who had remembered Interlude fondly.',
        },
        {
          type: 'img',
          src: 'img/interlude/imagine_1.jpg',
          alt: 'Imagine setup',
        },
        {
          type: 'link',
          href: 'http://interlude.rocks',
          text: 'Interlude Project Page',
        }
      ]
    },
  ],
}
