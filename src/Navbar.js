import xs from 'xstream';
import { div, a } from '@cycle/dom';

function intent(sources) {
  const linkClick$ = sources.DOM.select('.nav-link');
  const scroll$ = xs.merge(
    sources.DOM.select('#main').events('mousewheel'),
    sources.DOM.select('#main').events('DOMMouseScroll')
  );

  return {
    linkClick$,
    scroll$,
  };
}

function view(state$) {
  return state$
    .map(c =>
      div('.nav-wrapper',
        div(
          c,
          [
            a('#work.nav-link', 'work'),
            a('#work.nav-link', 'about'),
            // a('#work.nav-link', 'blog'),
            a('#work.nav-link', 'cv'),
          ]
        )
      )
    );
}

function Navbar(sources, isStuck$) {
  const actions = intent(sources);
  const class$ = xs.merge(
    actions.scroll$.map(() => document.querySelector('.nav-wrapper').getBoundingClientRect().top),
    isStuck$
  )
  .map(t => (t > 0 ? '.nav' : '.nav.is-stuck'))
  // this is a hack

  .startWith('.nav');

  const vdom$ = view(class$);

  return {
    DOM: vdom$,
    navClick$: actions.linkClick$,
  };
}

export default Navbar;
