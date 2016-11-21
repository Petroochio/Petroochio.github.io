export default {
  name: 'A Scanner Orderly',
  blurb: 'Interactive bar coaster for ordering drinks and managing orders',
  tags: ['ARDUINO', 'PHYSICAL COMPUTING', 'NODEJS'],
  previewImg: 'img/Scanner.jpg',
  content: [
    {
      header: 'Overview',
      content: [
        {
          type: 'text',
          content: 'A Scanner Orderly was a bar coaster replacement designed to all patrons to order drinks without flagging down a bartender. This was a 4 week project in the spring of 2015 for RIT\'s Physical Computing class.',
        },
        {
          type: 'img',
          src: 'img/scanner/scanner.jpg',
          alt: 'Completed Scanner',
        },
      ]
    },
    {
      header: 'Role : Server Programmer and Construction',
      content: [
        {
          type: 'subtext',
          content: 'Assemble materials and construct project. This involved sewing, soldering, and testing software.',
        },
        {
          type: 'subtext',
          content: 'The server was nodejs and used a Websocket connection to communicate with a web page for managing the orders.',
        },
      ]
    },
    {
      header: 'The Team',
      content: [
        {
          type: 'subtext',
          content: 'Will Paul - Programming Hardware and server',
        },
        {
          type: 'subtext',
          content: 'Joe Coppola - Programming Hardware and Construction',
        },
      ]
    },
    {
      header: 'Inspiration',
      content: [
        {
          type: 'text',
          content: 'For this project we wanted to streamline the experience of ordering a beer at the bar, without adding too much extra technology into the environment. The namesake for this project is inspired by the great science fiction novel A Scanner Darkly, by Phillip K. Dick.',
        },
      ]
    },
    {
      header: 'Technology',
      content: [
        {
          type: 'img',
          src: 'img/scanner/inside.jpg',
          alt: 'Interior view of coaster',
        },
        {
          type: 'subtext',
          content: 'Adafruit Flora : A small arduino board with 8 ports that takes 3.3v of power.',
        },
        {
          type: 'subtext',
          content: 'Adafruit RGB Sensor : A small color sensor we embedded in the bottom of the coaster.',
        },
        {
          type: 'subtext',
          content: 'Adafruit Neopixels : Programmable RGB LEDs we used to communicate the drink status.',
        },
        {
          type: 'subtext',
          content: 'Nodejs : To communicate with the serial port the coaster was connected to and send updated to the web interface we used a Nodejs server.',
        },
      ]
    },
    {
      header: 'Coaster Breakdown',
      content: [
        {
          type: 'text',
          content: 'The coaster itself stole the bulk of the time we spent on this project. It had 4 main parts working in unison.',
        },
        {
          type: 'img',
          src: 'img/scanner/guts_on.jpg',
          alt: 'Interior view of coaster with active LEDs',
        },
        {
          type: 'subtext',
          content: 'The Shell : Thanks to Joe’s 3D printing capabilities we were able to prototype a 3 part translucent case to hold the coaster.',
        },
        {
          type: 'subtext',
          content: 'LEDs : A strip of NeoPixels was placed on the inside layer of the main body of the case to communicate state to the user.',
        },
        {
          type: 'subtext',
          content: 'Pressure Sensor : We custom made a circular pressure sensor from velostat to fit the shape of our coaster.',
        },
        {
          type: 'subtext',
          content: 'RGB Sensor : The sensor for ordering drinks was embedded in the bottom of our coaster, and was the most consistent part of the entire build.',
        },
      ]
    },
    {
      header: 'End Result',
      content: [
        {
          type: 'text',
          content: 'The scanner accomplished most of our intended goals, but it was thoroughly lacking in the polish that can be applied to longer projects. Since we only could use 3.3v many of our sensors were inconsistent, specifically the pressure sensor. To use our coaster you had to apply much more pressure than was intended, about 30lbs of pressure, and no one wants to have a drink that heavy... probably.',
        },
      ]
    },
  ],
}
