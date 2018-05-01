import { span, h3, h1, div, p, img } from '@cycle/dom';

const detailText = `
Interlude is a multiplayer rhythm game designed for large events. Users can connect to the game
using their cellphones by navigating to a webpage and typing in the on screen code. Interlude is 
set run during the moments inbetween acts at a live event where the audience generally sits idle.
This project was displayed at Imagine RIT 2015 where we also promoted VH1's Save the Music campaign.
`;

const vimeoEmbed = `
<div style="padding:56.25% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/126622835" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
`;

export default [
  h1('.detail-title', 'Interlude'),
  h3('.detail-time', 'New Media Team Project, RIT | 2015'),
  p('.detail-desc', detailText),
  div('.detail-media', { props: { innerHTML: vimeoEmbed } }),
  p('.detail-desc',
    [
      span('.detail-subhead', 'Collaborators: '),
      'Janette Heininger, Danny Nguyen, Scott Jones, Joe Lee, Alexa Martinez, Clairee Bernard, Stephen Carlson',
    ]
  ),
  img('.detail-media', { attrs: { src: 'img/interlude/splash.png' } }),
  img('.detail-media', { attrs: { src: 'img/interlude/in_game.png' } }),
  img('.detail-media', { attrs: { src: 'img/interlude/results.png' } }),
  img('.detail-media', { attrs: { src: 'img/interlude/imagine_1.jpg' } }),
];
