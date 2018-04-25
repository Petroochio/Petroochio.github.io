import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver, section, h1, div, a } from '@cycle/dom';
import isolate from '@cycle/isolate';

import Navbar from './Navbar';
// Will need a main div section that manages the three things,
// or I just put them all on the same page
import Projects from './Projects';
import ProjectModal from './ProjectModal';

const drivers = {
  DOM: makeDOMDriver('#root'),
};

function view(state$) {
  // [navbar, projects, projmodal] gonna need to get position of clicked image for projectmodal
  return state$.map(
    ([navbar, projects]) => div('#main', [
      section(
        '#landing.hero',
        [
          h1('Peter Gyory'),
          navbar,
        ]
      ),
      projects,
    ]) // make this hold the nav
  );
}

function main(sources) {
  const navbar = Navbar(sources);

  const previewDataProxy$ = xs.create();
  const modal = ProjectModal(sources, previewDataProxy$, xs.empty());

  const projects = isolate(Projects)(sources, modal.state$);
  previewDataProxy$.imitate(projects.previewData$);
  // get that obj spread going, some es next shit
  const children$ = xs.combine(navbar.DOM, projects.DOM, modal.DOM);

  const sinks = {
    DOM: view(children$),
  };
  return sinks;
}

run(main, drivers);
