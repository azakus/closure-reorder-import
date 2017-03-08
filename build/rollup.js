(function () {
'use strict';

window['BEFOREA'] = true;

var foo = {
  settings: {
    inUse: Boolean(document.documentElement['attachShadow'])
  }
};

if (foo.settings.inUse) {
  window['E'] = true;
}
window['A'] = true;

window['B'] = true;

window['E'] = false;

window['C'] = true;

window['D'] = true;

['A', 'B', 'C', 'D', 'E'].forEach((letter) => {
  console.log(`${letter}: ${window[letter]}`);
});

}());
