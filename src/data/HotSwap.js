import { span, h3, h1, div, p, img } from '@cycle/dom';

const detailText = `
HOT SWAP: All Hands On Deck is a two player cooperative arcade survival game were players must swap out and trade inputs on their controllers survive the onslaught of approaching enemy ships. Each controller consists of two input slots and corresponds to one side of the ship, port or starboard. There are five actions in the game, each executed with a dedicated physical input: a crank to raise and lower the sails, a wheel for turning the rudder, a hatch for loading the cannons, a wick for firing the cannons, and a flame button for dousing the fire. Each input is a shared resource. Players must consider the physical space around them as they trade parts of their controllers to stay afloat for as long as possible.
`;

const vimeoEmbed = `
<div style="padding:56.25% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/303835908" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
`;

export default [
  h1('.detail-title', 'Hot Swap'),
  h3('.detail-time', 'University of Colorado Boulder | 2018'),
  p('.detail-desc', detailText),
  div('.detail-media', { props: { innerHTML: vimeoEmbed } }),
  p('.detail-desc',
    [
      span('.detail-subhead', 'Collaborator: '),
      'Clement Zheng',
    ]
  ),
  img('.detail-media', { attrs: { src: 'img/hotswap/setup.jpg' } }),
  img('.detail-media', { attrs: { src: 'img/hotswap/gameplay.png' } }),
  img('.detail-media', { attrs: { src: 'img/hotswap/deconstructed.jpg', alt: 'Deconstructed Hot Swap Input' } }),
];
