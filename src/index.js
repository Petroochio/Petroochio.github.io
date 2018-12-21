import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver, section, h1, div } from '@cycle/dom';
import { makeHashHistoryDriver } from '@cycle/history';
import { not, contains, prop, tail } from 'ramda';
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
  history: makeHashHistoryDriver(),
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

const projectPaths = ['/telling', '/interlude', '/hotswap', '/mixta'];
function isProjectPath({ pathname }) {
  return contains(pathname, projectPaths);
}

function main(sources) {
  const show$ = sources.history.map(isProjectPath);
  const pathname$ = sources.history
    .map(({ pathname }) => (pathname === '/' ? '' : tail(pathname))).debug('path');

  const navbar = Navbar(sources, show$);
  const footer = Footer(sources);
  const about = About(sources, show$.map(not));
  const details = ProjectDetail(sources, pathname$);

  const projects = isolate(Projects)(sources, show$.map(not));

  const path$ = xs.merge(
    xs.of('/'),
    navbar.navClick$.mapTo('/'),
    projects.projectData$
  );

  // get that obj spread going, some es next shit
  const children$ = xs.combine(navbar.DOM, projects.DOM, about.DOM, footer.DOM, details.DOM);

  const sinks = {
    DOM: view(children$),
    history: path$, // xs.of('/'), // navbar.navClick$,
  };
  return sinks;
}

run(main, drivers);
