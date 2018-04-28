import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver, section, h1, div, a } from '@cycle/dom';
import isolate from '@cycle/isolate';

import Navbar from './Navbar';
import Footer from './Footer';
// Will need a main div section that manages the three things,
// or I just put them all on the same page
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';

const drivers = {
  DOM: makeDOMDriver('#root'),
};

function view(state$) {
  // [navbar, projects, projmodal] gonna need to get position of clicked image for projectmodal
  return state$.map(
    ([navbar, projects, footer, details]) => div('#main', [
      section(
        '#landing.hero',
        [
          h1('Peter Gyory'),
          navbar,
        ]
      ),
      projects,
      footer,
      details,
    ]) // make this hold the nav
  );
}

function main(sources) {
  const navbar = Navbar(sources);
  const footer = Footer(sources);

  const previewStateProxy$ = xs.create();
  const details = ProjectDetail(sources, previewStateProxy$, xs.empty());

  const projects = isolate(Projects)(sources, previewStateProxy$);
  const previewState$ = xs.merge(
    navbar.navClick$,
    projects.projectData$.mapTo(true)
  );
  previewStateProxy$.imitate(previewState$);
  // get that obj spread going, some es next shit
  const children$ = xs.combine(navbar.DOM, projects.DOM, footer.DOM, details.DOM);

  const sinks = {
    DOM: view(children$),
  };
  return sinks;
}

run(main, drivers);
