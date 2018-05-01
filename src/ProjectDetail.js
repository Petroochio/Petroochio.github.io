import xs from 'xstream';
import { section } from '@cycle/dom';
import data from './data';

function model(previewData$, hide$) {
  const show$ = xs.merge(xs.of(false), hide$.mapTo(false), previewData$.mapTo(true));
  const viewState$ = xs.combine(
    show$,
    xs.merge(previewData$, xs.of({ show: false, name: 'temp' }))
  );

  return {
    show$,
    viewState$,
  };
}

function view(state$) {
  return state$.map(
    ({ show, id }) => section(
      `.details${show ? '' : '.hidden'}`,
      data[id]
    )
  );
}

function ProjectDetail(sources, previewState$) {
  const vdom$ = view(previewState$);

  return {
    DOM: vdom$,
    // state$: xs.merge(xs.of(false), previewData$.map(prop('show'))),
  };
}

export default ProjectDetail;
