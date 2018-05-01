import { section, div, h1, img, p } from '@cycle/dom';

const bioText1 = `
Peter is a coder, designer, researcher, and Master’s Student 
at the ATLAS Institute in the University of Colorado Boulder. 
His focus is on creating tangible interfaces for games and experiences, 
ever inspired by the DDR dance pads and light gun games of arcades.
`;

const bioText2 = `
Games have been an important part of Peter’s life since he used to play them 
with his siblings as a child. In undergrad he studied Game Design and 
Development at the Rochester Institute of Technology. Now he is fascinated 
with the way we control games and how different controllers can reshape the 
experience entirely.
`;

const bioText3 = `
Peter is a coder, designer, researcher, and Master’s Student 
at the ATLAS Institute in the University of Colorado Boulder. 
His focus is on creating tangible interfaces for games and experiences, 
ever inspired by the DDR dance pads and light gun games of arcades.
`;

function view(isVisible$) {
  return isVisible$
  .map(
    visible =>
      section(
        `#about.bio${visible ? '' : '.hidden'}`,
        [
          div('.bio-col-1', [
            // h1('.bio-heading', 'About Peter'),
            img('.bio-img', { attrs: { src: './img/face-forever.jpg' } }),
          ]),
          div('.bio-col-2', [
            p('.bio-text', bioText1),
            p('.bio-text', bioText2),
            // p('.bio-text', bioText3),
          ]),
        ]
      )
  );
}

function About(sources, isVisible$) {
  const vdom$ = view(isVisible$);

  return {
    DOM: vdom$,
  };
}

export default About;
