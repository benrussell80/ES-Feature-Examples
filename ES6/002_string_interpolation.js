// String Interpolation
// Similar to f-strings in Python
// Defined using back-ticks

const myName = 'Ben';
let myMood = 'happy';

console.log(
  `${myName}'s mood is ${myMood}`
);
  
// Back-ticks can also create a multi-line string
let background = 'red';
let color = 'white';
let margin = '0px';
let padding = '0px';
let className = 'supercool-thing';
let content = 'Wow!'

console.log(
`<div style="background: ${background}; color: ${color}; margin: ${margin}; padding: ${padding};">
  <span class="${className}">
    ${content}
  </span>
</div>`
);
