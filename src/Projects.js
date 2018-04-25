import xs from 'xstream';
import { a, div, img, section, span } from '@cycle/dom';
import { repeat, not } from 'ramda';

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
  const previewData$ = xs.merge(xs.of(''), previewClick$).mapTo({ name: 'temp' });

  return {
    previewData$,
  };
}

function view(visible$) {
  return visible$.map(not).map(
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

function Projects(sources, visible$) {
  const actions = intent(sources);
  const state = model(actions);
  const vdom$ = view(visible$);

  return {
    previewData$: state.previewData$,
    DOM: vdom$,
  };
}

export default Projects;
