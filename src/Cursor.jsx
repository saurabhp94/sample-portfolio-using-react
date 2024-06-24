import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color='156, 99, 101'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input',
          'label[for]',
          'select',
          'textarea',
          'button',
          '[role="button"]',
          '[role="link"]',
          '[role="checkbox"]',
          '[role="radio"]',
          '[role="switch"]',
          '[role="option"]',
          '[role="menuitem"]',
          '[role="tab"]',
          '[role="treeitem"]',
          '[role="gridcell"]',
          '[role="slider"]',
          '[role="scrollbar"]',
          '[role="spinbutton"]',
          '[role="progressbar"]',
          '[role="tooltip"]',
          '[tabindex]',
          '.link',
          '.clickable',
          '.image',
          '.cursor',
          'summary',
          'details',
          'video[controls]',
          'audio[controls]',
          'iframe',
          'object',
          'embed',
          'map area',
          '[onclick]',
          '[onmousedown]',
          '[onmouseup]',
          '[ontouchstart]',
          '[ontouchend]',
          '[switch]',
          {
            target: '.custom',
            options: {
              innerSize: 15,
              outerSize: 15,
              color: '193, 11, 111',
              outerAlpha: 0.2,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
    </div>
  );
}