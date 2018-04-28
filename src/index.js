import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver, section, h1, div, a } from '@cycle/dom';
import { not } from 'ramda';
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
  const previewStateProxy$ = xs.create();
  const previewInitial$ = xs.merge(xs.of(false), previewStateProxy$);
  const navbar = Navbar(sources, previewStateProxy$);
  const footer = Footer(sources);
  const details = ProjectDetail(sources, previewInitial$);

  const projects = isolate(Projects)(sources, previewStateProxy$.map(not));
  const previewState$ = xs.merge(
    xs.of(false),
    navbar.navClick$.mapTo(false),
    projects.projectData$.mapTo(true)
  );
  previewStateProxy$.imitate(previewState$);
  // get that obj spread going, some es next shit
  const children$ = xs.combine(navbar.DOM.debug(), projects.DOM.debug(), footer.DOM.debug(), details.DOM.debug());

  const sinks = {
    DOM: view(children$),
  };
  return sinks;
}

run(main, drivers);
