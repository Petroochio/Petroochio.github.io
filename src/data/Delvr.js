export default {
  name: 'DelVR',
  blurb: 'DnD dungeon map authoring tool and 3D Web VR dungeon viewer',
  tags: ['THREE JS', 'WEB VR', 'NODEJS'],
  previewImg: 'img/delvr.png',
  projectURL: 'delvr.magic.rit.edu',
  content: [
    {
      header: 'Overview',
      content: [
        {
          type: 'text',
          content: "DelVR is a web VR application for creating and viewing Dungeons and Dragons dungeon maps. It was created in a 15 week Research studio class with 22 students involved. The end result was shown at Imagine RIT 2016.",
        },
        {
          type: 'img',
          src: 'img/delvr/experienceVR.png',
          alt: 'DelVR in action with VR view',
        },
      ]
    },

    {
      header: 'Role : Co-Lead Developer',
      content: [
        {
          type: 'text',
          content: "I shared a role of Lead Developer with Braxton Frederick. We oversaw seven other developers and coordinated development of the web app platform, the dungeon creation tool, and the backend service for accounts and other data. We also set design restrictions and managed deadlines for all implementation goals of the project.",
        },
      ]
    },

    {
      header: 'The Team',
      content: [
        {
          type: 'img',
          src: 'img/delvr/team.jpg',
          alt: 'DelVR Team',
        },
        {
          type: 'subtext',
          content: "Instructor/Client : Andy Phelps",
        },
        {
          type: 'subtext',
          content: "Project Management : Doug Mansell",
        },
        {
          type: 'subtext',
          content: "Assets/Design : DJ Guscott, Courtney Balousek, Sungmin Park, Kristy Younglove",
        },
        {
          type: 'subtext',
          content: "Development : Braxton Frederick, Joe Cappola, James Zolyak, Jarett Way, Frankie di Pietro, Derek Lescarbeau, Emily Suplinskas, Shawn Ribaudo",
        },
      ]
    },

    {
      header: 'Project Motivation',
      content: [
        {
          type: 'text',
          content: "Andy Phelps, as head of the research project, set the goal of creating a better way for Dungeons and Dragons players to visualize their play environment. Usually the game is played on a grid with some illustrations underneath the lines. RIT had also just started a VR lab that same semester, so DelVR served as its first research project.",
        },
        {
          type: 'text',
          content: "Professor Phelps also gave us the requirements to make this work with only web technologies and target the iPhone 6 as our main mobile platform.",
        },
      ]
    },

    {
      header: 'Technology',
      content: [
        {
          type: 'subtext',
          content: "Three.js : Since DelVR needed to be a web app, we relied on Three.js for all of our rendering in the 2D editor and 3D viewer for VR and desktop.",
        },
        {
          type: 'subtext',
          content: "Node.js : Our backend service was developed entirely in Node.js with MongoDB to store our accounts and other data.",
        },
        {
          type: 'subtext',
          content: "Google Cardboard : With the iPhone as our VR target device we relied on the Google Cardboard and similar devices to facilitate the VR. This allowed us to make the entry barrier lower than many VR apps that rely on expensive headsets.",
        },
      ]
    },

    {
      header: 'End Result',
      content: [
        {
          type: 'subtext',
          content: "App Platform : The first thing you see on the DelVR website is the App Platform. This handles account creation and selecting which dungeons to view or edit. Users are also presented with dungeons created by everyone else who uses the app to view here.",
        },
        {
          type: 'subtext',
          content: "2D Editor : The 2D Editor allows users to create dungeons with a drag and drop interface. Users can create rooms, hallways, and props. Screenshots can also be taken of the whole dungeon to be printed out for use in an actual Dungeons and Dragons campaign.",
        },
        {
          type: 'img',
          src: 'img/delvr/dungeonMap.png',
          alt: '2D editor view',
        },
        {
          type: 'subtext',
          content: "3D View : The 3D viewer has a different view for desktop and mobile. In the desktop version, users navigate the dungeon using classic first person shooter controls. The mobile version uses a google cardboard style VR view. Users navigate the dungeon by looking at predetermined nodes that, when looked at, advances the camera towards the node.",
        },
        {
          type: 'img',
          src: 'img/delvr/imagine_1.jpg',
          alt: 'Kids using VR at Imagine RIT',
        },
      ]
    },

  ],
};
