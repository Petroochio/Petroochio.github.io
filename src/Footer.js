import xs from 'xstream';
import { section, a, div, span, h } from '@cycle/dom';

function view() {
  return xs.of(
    section(
      '.footer',
      [
        span('.copyright', 'copyright © Peter Gyory 2018'),
        div(
          '.footer-link-container',
          [
            a('.footer-link', { attrs: { href: 'https://twitter.com/Petroochio' } }, h('i.fab.fa-twitter')),
            a('.footer-link', { attrs: { href: 'https://github.com/Petroochio' } }, h('i.fab.fa-github')),
            a('.footer-link', { attrs: { href: 'https://www.linkedin.com/in/petergyory/' } }, h('i.fab.fa-linkedin')),
            a('.footer-link', { attrs: { href: 'mailto:ptgyory@gmail.com?subject=Portfolio Mail' } }, h('i.fas.fa-envelope')),
          ]
        ),
      ]
    )
  );
}

function Footer(sources) {
  return {
    DOM: view(),
  };
}

export default Footer;
