import xs from 'xstream';
import { a, div, img, section, span } from '@cycle/dom';
import { compose, repeat, prop } from 'ramda';

// Might need to make this a component .___________.
function projectPreview(id, name, src) {
  return div(
    '.preview',
    a(
      `#${id}.preview-link`,
      { attrs: { href: `#${id}` } }, // include router here?
      [
        img('.preview-link-img', { attrs: { src } }),
        span('.preview-link-text', name),
      ]
    )
  );
}

function intent({ DOM }) {
  const previewClick$ = DOM.select('.preview-link').events('click')
    .map(e => {
      window.scrollTo(0, 0);
      return e;
    });

  return {
    previewClick$,
  };
}

function model({ previewClick$ }) {
  const projectData$ = previewClick$.map(compose(prop('id'), prop('currentTarget')));

  return {
    projectData$,
  };
}

function view(isVisible$) {
  return isVisible$
  .map(
    visible =>
      section(
        `#work.projects${visible ? '' : '.hidden'}`,
        [
          projectPreview('telling', 'THE TELLING BOARD', 'img/telling.jpg'),
          projectPreview('hotswap', 'HOT SWAP', 'img/hotswap.jpg'),
          projectPreview('interlude', 'INTERLUDE', 'img/interlude.png'),
          projectPreview('mixta', 'MIXTA', 'img/mixta.jpg'),
        ]
      )
  );
}

function Projects(sources, isVisible$) {
  const actions = intent(sources);
  const state = model(actions);
  const vdom$ = view(isVisible$);

  return {
    projectData$: state.projectData$,
    DOM: vdom$,
  };
}

export default Projects;
