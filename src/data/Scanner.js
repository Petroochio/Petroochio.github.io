import { span, h3, h1, div, p, img } from '@cycle/dom';

const detailText = `
A Scanner Orderly is a smart drink coaster designed to make ordering at a crowded bar much simpler.
Using a color coded menu embedded into a bar's counter top, the coaster can identify which item
it is placed on top of, and when pressure is applied for a couple of seconds the order is queued
and sent to the server.
`;

const vimeoEmbed = `
<div style="padding:56.25% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/128516073" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
`;

export default [
  h1('.detail-title', 'A Scanner Orderly'),
  h3('.detail-time', 'Physical Computing, RIT | 2014'),
  p('.detail-desc', detailText),
  p('.detail-desc', [span('.detail-subhead', 'Collaborators: '), 'Will Paul, Joe Coppola']),
  div('.detail-media', { props: { innerHTML: vimeoEmbed } }),
  img('.detail-media', { attrs: { src: 'img/scanner/guts_on.jpg' } }),
  img('.detail-media', { attrs: { src: 'img/scanner.jpg' } }),
];
