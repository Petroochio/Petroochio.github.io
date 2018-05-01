import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver, section, h1, div } from '@cycle/dom';
import { makeHistoryDriver } from '@cycle/history';
import { not, prop } from 'ramda';
import isolate from '@cycle/isolate';

import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
// Will need a main div section that manages the three things,
// or I just put them all on the same page
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';

const drivers = {
  DOM: makeDOMDriver('#root'),
  History: makeHistoryDriver(),
};

function view(state$) {
  // [navbar, projects, projmodal] gonna need to get position of clicked image for projectmodal
  return state$.map(
    ([navbar, projects, about, footer, details]) => div('#main', [
      section(
        '#landing.hero',
        [
          h1('Peter Gyory'),
          navbar,
        ]
      ),
      div('.section-head', 'WORK'),
      projects,
      div('.section-head', 'ABOUT'),
      about,
      footer,
      details,
    ]) // make this hold the nav
  );
}

function main(sources) {
  const previewStateProxy$ = xs.create(); // why won't this take more than 2?
  const previewInitial$ = xs.merge(xs.of(false), previewStateProxy$);
  const previewInitial2$ = xs.merge(xs.of(false), previewStateProxy$);
  const previewInitial3$ = xs.merge(xs.of(false), previewStateProxy$);
  const navbar = Navbar(sources, previewStateProxy$.map(prop('show')));
  const footer = Footer(sources);
  const about = About(sources, previewInitial3$.map(prop('show')).map(not));
  const details = ProjectDetail(sources, previewInitial$);

  const projects = isolate(Projects)(sources, previewInitial2$.map(prop('show')).map(not));
  const previewState$ = xs.merge(
    xs.of({ show: false, id: 'scanner' }),
    navbar.navClick$.mapTo({ show: false, id: 'scanner' }),
    projects.projectData$.map(id => ({ show: true, id }))
  );
  previewStateProxy$.imitate(previewState$);
  // get that obj spread going, some es next shit
  const children$ = xs.combine(navbar.DOM, projects.DOM, about.DOM.debug(), footer.DOM, details.DOM);

  const sinks = {
    DOM: view(children$),
    History: xs.of('/'), // navbar.navClick$,
  };
  return sinks;
}

run(main, drivers);
