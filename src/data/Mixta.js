export default {
  name: 'Mixta',
  blurb: 'Museum exhibit enhancment for more interactive exhibits and playlist generation',
  tags: ['LEAP MOTION', 'SPOTIFY', 'RFID'],
  previewImg: 'img/Mixta.png',
  projectURL: 'mixta.rocks',
  content: [
    {
      header: 'Overview',
      content: [
        {
          type: 'text',
          content: 'During my senior spring semester I participated in New Media Team Project for a second time to help create an experience for the Rock and Roll Hall of Fame. Our team of nine created Mixta, an enhancement to existing exhibits that would help guide patrons and make a take home playlist on Spotify with them.',
        },
        {
          type: 'text',
          content: 'At the end of the semester, the project was presented at the Imagine RIT festival.',
        },
        {
          type: 'img',
          src: 'img/mixta/poster-2.png',
          alt: 'Mixta Event Poster',
        },
      ]
    },

    {
      header: 'Role: Lead Developer',
      content: [
        {
          type: 'text',
          content: 'Due to the variety of technologies used in this project I needed to fill many different developer roles.',
        },
        {
          type: 'subtext',
          content: 'Server Dev : I implemented a node server with a rest API that communicated with spotify and the display cases.',
        },
        {
          type: 'subtext',
          content: 'Front End Dev : I used a Leap Motion to create an interface for the display cases and setup front end compile steps.',
        },
        {
          type: 'subtext',
          content: 'Host : Every member of the team is required to participate in the presentation at Imagine RIT.',
        },
      ]
    },

    {
      header: 'Team Members',
      content: [
        {
          type: 'subtext',
          content: 'Anthony Amici : Team Lead and Animator',
        },
        {
          type: 'subtext',
          content: 'Melissa Samworth : Design Lead',
        },
        {
          type: 'subtext',
          content: 'Hailey Thorp : Design and Construction',
        },
        {
          type: 'subtext',
          content: 'Nathan Christiansen : Construction',
        },
        {
          type: 'subtext',
          content: 'Tim Davcev : Design and Print',
        },
        {
          type: 'subtext',
          content: 'Aaron Miller : Front End Dev and Construction',
        },
        {
          type: 'subtext',
          content: 'Trey Borro : Front End Dev',
        },
        {
          type: 'subtext',
          content: 'Joseph Horsmann : Web Dev',
        },
      ]
    },

    {
      header: 'The Problem',
      content: [
        {
          type: 'text',
          content: 'Visitors at the Rock and Roll Hall of Fame lack a way to establish connections between static artifacts and the music they represent.',
        },
        {
          type: 'img',
          src: 'img/mixta/animation.png',
          alt: 'Mixta problem animation',
        },
      ]
    },

    {
      header: 'Solution',
      content: [
        {
          type: 'text',
          content: 'Mixta\'s proposition was a three component entire museum spanning experience.',
        },
        {
          type: 'subtext',
          content: 'Enhanced Display Cases : The core component of Mixta is the altered display cases for static exhibit items. These would present data about artists in a more enticing way.',
        },
        {
          type: 'img',
          src: 'img/mixta/imagine_2.jpg',
          alt: 'Mixta problem animation',
        },
        {
          type: 'subtext',
          content: 'Mixtape RFID Totem : Users of Mixta would carry a cassette tape with them throughout the museum that they would use to interface with exhibits and track their progress.',
        },
        {
          type: 'subtext',
          content: 'Playlist and Suggestions : User data would be sent from each exhibit to a server where it would create a Spotify playlist reflecting their visit and provide them with suggestions for other exhibits to visit.',
        },
      ]
    },

    {
      header: 'Imagine RIT',
      content: [
        {
          type: 'text',
          content: 'For the Imagine RIT prototype we made a prototype of our proposed solution, and presented it to over 400 visitors.',
        },
        {
          type: 'img',
          src: 'img/mixta/imagine_1.jpg',
          alt: 'Mixta problem animation',
        },
        {
          type: 'subtext',
          content: 'Display Cases : The prototype cases both contained guitars donated by Hailey. They had RFID readers mounted on the front to scan Mixtapes and plexiglass with a frosted section to use as the interface area.',
        },
        {
          type: 'subtext',
          content: 'Mixtapes : We gathered 15 old cassette tapes, gutted the inside, and inserted an RFID card to serve as the totems for our prototype. With the Mixtapes we handed out cards with a four letter code unique to each user.',
        },
        {
          type: 'subtext',
          content: 'Server : To manage user interactions we subscribed to Heroku for a Nodejs server. The users could make a playlist from songs available at the exhibit, scan it with their Mixtapes, and the server would send it to Spotify for retrieval when they entered their code.',
        },
      ]
    },

    {
      header: 'End Result',
      content: [
        {
          type: 'text',
          content: 'The Imagine RIT presentation went fairly well. We had over 400 playlists created and only 5 RFID Mixtapes remaining at the end. There were a few important things I picked up from this project though.',
        },
        {
          type: 'link',
          href: 'http://mixta.rocks',
          text: 'Mixta Project Page',
        },
        {
          type: 'subtext',
          content: 'Test Your Tech Early : The Leap Motion was not consistent, and if we had tested our cases at the earliest point, we could have possibly avoided this roadblock.',
        },
        {
          type: 'subtext',
          content: 'Plan to Part with Your Handouts : Visitors walked off with 10 of our Mixtapes, even though we were policing their return. If we were dangerously close to not being able to run our exhibit, luckily we only allowed five to be in circulation at a time.',
        },
        {
          type: 'subtext',
          content: 'Identify the Setting : Always design your experience for the venue it will actually be presented at. We designed Mixta for the Rock and Roll Hall of Fame, but the actual venue was Imagine RIT, which did not fit our theme as well.',
        },
      ]
    },
  ],
}
