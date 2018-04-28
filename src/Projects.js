import xs from 'xstream';
import { a, div, img, section, span } from '@cycle/dom';
import { repeat } from 'ramda';

// Might need to make this a component .___________.
function projectPreview(name, src) {
  return div(
    '.preview',
    a(
      '.preview-link',
      { attrs: { href: '#test' } },
      [
        img('.preview-link-img', { attrs: { src } }),
        span('.preview-link-text', name),
      ]
    )
  );
}

function intent({ DOM }) {
  const previewClick$ = DOM.select('.preview-link').events('click');

  return {
    previewClick$,
  };
}

function model({ previewClick$ }) {
  const projectData$ = xs.merge(xs.of(''), previewClick$).mapTo({ name: 'temp' });

  return {
    projectData$,
  };
}

function view(isVisible$) {
  return isVisible$
  .map(
    visible =>
      section(
        `.projects${visible ? '' : '.hidden'}`,
        [
          projectPreview('A SCANNER ORDERLY', 'img/scanner.jpg'),
          ...repeat(projectPreview('INTERLUDE', 'img/interlude.png'), 5),
        ]
      )
  );
}

function Projects(sources, isVisible$) {
  const actions = intent(sources);
  const state = model(actions);
  const vdom$ = view(xs.of('true'));

  return {
    projectData$: state.projectData$,
    DOM: vdom$,
  };
}

export default Projects;
