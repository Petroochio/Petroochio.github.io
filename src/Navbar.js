import xs from 'xstream';
import { div, a } from '@cycle/dom';
import { any, equals, compose, prop } from 'ramda';

function intent(sources) {
  const linkClick$ = sources.DOM.select('.nav-link').events('click');
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
            a('.nav-link', { attrs: { href: '#work' } }, 'work'),
            a('.nav-link', { attrs: { href: '#about' } }, 'about'),
            // a('#work.nav-link', 'blog'),
            a('.nav-link', { attrs: { href: '../peter_gyory_resume.pdf' } }, 'cv'),
          ]
        )
      )
    );
}

function Navbar(sources, isStuck$) {
  const actions = intent(sources);

  const isStickPoint$ = actions.scroll$
    .map(() => (document.querySelector('.nav-wrapper').getBoundingClientRect().top <= 0))
    .startWith('false');
  const class$ = xs.combine(
    isStickPoint$,
    isStuck$
  )
  .map(any(equals(true)))
  .map(t => (t ? '.nav.is-stuck' : '.nav'))
  .startWith('.nav');

  const vdom$ = view(class$);

  return {
    DOM: vdom$,
    navClick$: actions.linkClick$,
  };
}

export default Navbar;
