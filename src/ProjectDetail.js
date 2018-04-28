import xs from 'xstream';
import { a, span, h3, h1, div, img, li, section, p, ul } from '@cycle/dom';
import { prop } from 'ramda';

function model(previewData$, hide$) {
  const show$ = xs.merge(xs.of(false), hide$.mapTo(false), previewData$.mapTo(true));
  const viewState$ = xs.combine(
    show$,
    xs.merge(previewData$, xs.of({ show: false, name: 'temp' }))
  );

  return {
    show$,
    viewState$,
  };
}

const detailText = `
A Scanner Orderly is a smart drink coaster designed to make ordering at a crowded bar much simpler.
Using a color coded menu embedded into a bar's counter top, the coaster can identify which item
it is placed on top of, and when pressure is applied for a couple of seconds the order is queued
and sent to the server.
`;

const vimeoEmbed = `
<div style="padding:56.25% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/126622835" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
`;

function view(state$) {
  return state$.map(
    show => section(
      `.details${show ? '' : '.hidden'}`,
      [
        h1('.detail-title', 'A Scanner Orderly'),
        h3('.detail-time', 'Physical Computing, RIT | 2014'),
        p('.detail-desc', detailText),
        div('.detail-media', { props: { innerHTML: vimeoEmbed } }),
        p('.detail-desc', [span('.detail-subhead', 'Collaborators: '), 'Will Paul, Joe Coppola']),
      ]
    )
  );
}

function ProjectDetail(sources, previewState$) {
  const vdom$ = view(previewState$);

  return {
    DOM: vdom$,
    // state$: xs.merge(xs.of(false), previewData$.map(prop('show'))),
  };
}

export default ProjectDetail;
