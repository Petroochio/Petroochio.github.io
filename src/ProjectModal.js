import xs from 'xstream';
import { a, div, h1, img, li, section, p, ul } from '@cycle/dom';
import { prop } from 'ramda';

function links() {
  return ul(
    '.detail-links',
    [
      li(a({ attrs: { href: 'google.com' } }, 'website')),
      li(a({ attrs: { href: 'github.com' } }, 'github')),
      li(a({ attrs: { href: 'petroochio.github.io' } }, 'other')),
    ]
  );
}

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

function view(state$) {
  return state$.map(
    ([show, { name }]) => section(
      `.modal${show ? '' : '.hidden'}`,
      div(
        '.modal-details',
        [
          h1('.modal-title', name),
          img('.modal-image', { attrs: { src: 'img/interlude.png' } }),
          p('.modal-description', 'Project description Project description Project description Project description Project description Project description Project description Project description Project description Project description Project description'),
          links(),
        ]
      )
    )
  );
}

function ProjectModal(sources, previewData$, hide$) {
  const state = model(previewData$, hide$);
  const vdom$ = view(state.viewState$).debug();

  return {
    DOM: vdom$,
    state$: xs.merge(xs.of(false), previewData$.map(prop('show'))), //viewState$.map(prop('show')),
  };
}

export default ProjectModal;
