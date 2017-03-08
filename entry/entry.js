import '../modules/b/b'
import '../modules/b/a'
import '../important'
import '../modules/a/b'
import '../modules/a/a'

['A', 'B', 'C', 'D', 'E'].forEach((letter) => {
  console.log(`${letter}: ${window[letter]}`);
});