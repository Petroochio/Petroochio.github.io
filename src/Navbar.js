import xs from 'xstream';
import { div, a } from '@cycle/dom';

function view(state$) {
  return state$
  .map(c =>
    div('.nav-wrapper',
      div(
        c,
        [
          a('work'),
          a('about'),
          a('blog'),
          a('cv'),
        ]
      )
    )
  );
}

function Navbar(sources) {
  const class$ = xs.merge(
    sources.DOM.select('#main').events('mousewheel'),
    sources.DOM.select('#main').events('DOMMouseScroll')
  )
  // this is a hack
  .map(() => document.querySelector('.nav-wrapper').getBoundingClientRect().top)
  .map(t => (t > 0 ? '.nav' : '.nav.is-stuck'))
  .startWith('.nav');

  const vdom$ = view(class$);
  return {
    DOM: vdom$,
  };
}

export default Navbar;
