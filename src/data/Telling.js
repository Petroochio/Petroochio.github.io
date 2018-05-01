import { span, h3, h1, p, img } from '@cycle/dom';

const detailText = `
The Telling Board is a tactile storyboarding tool for children that also allows use to record and
play back accompanying narration for the stories. Along with the board we created 40 non-linear 
story cards that have many connecting elements to allow children to create their own story. The 
target group is children ages 6 - 11 in a home setting.
`;

// const vimeoEmbed = `
// <div style="padding:56.25% 0 0 0;position:relative;">
// <iframe src="https://player.vimeo.com/video/126622835" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// </div>
// <script src="https://player.vimeo.com/api/player.js"></script>
// `;

export default [
  h1('.detail-title', 'The Telling Board'),
  h3('.detail-time', 'ATLAS Independent Study, CU Boulder | 2018'),
  p('.detail-desc', detailText),
  p('.detail-desc', [
    span('.detail-subhead', 'Collaborators: \n'),
    'Denise Powell, Annie Bruns, Cicada Scott',
  ]),
  img('.detail-media', { attrs: { src: 'img/telling/1910.jpg' } }),
  img('.detail-media', { attrs: { src: 'img/telling/1916.jpg' } }),
  img('.detail-media', { attrs: { src: 'img/telling/1918.jpg' } }),
];
