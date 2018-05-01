import { span, h3, h1, div, p, img } from '@cycle/dom';

const detailText = `
Mixta is playlist building experience designed to span a whole museum. Modified static display cases
were built to include a touch interface projected on the glass. The touch display provides
additional information on the artifact(s) in the case and allows users to select a song to add to
their playlist. This concept was designed as a pitch for the the Rock and Roll Hall of Fame as
part of RIT's 2016 New Media Team Project.
`;

const vimeoEmbed = `
<div style="padding:56.25% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/166661520" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
`;

export default [
  h1('.detail-title', 'Mixta'),
  h3('.detail-time', 'New Media Team Project, RIT | 2016'),
  p('.detail-desc', detailText),
  div('.detail-media', { props: { innerHTML: vimeoEmbed } }),
  p('.detail-desc',
    [
      span('.detail-subhead', 'Collaborators: '),
      'Anthony Amici, Hailey Thorp, Aaron Miller, Melissa Samworth, Trey Boro, Joseph Horsmann, Tim Davcev, Nathan Christiansen',
    ]
  ),
  img('.detail-media', { attrs: { src: 'img/mixta/imagine_1.jpg' } }),
  img('.detail-media', { attrs: { src: 'img/mixta/mixta.jpg' } }),
];
