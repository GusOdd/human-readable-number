module.exports = function toReadable (number) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const array = number.toString().split('').reverse().map((element) => {
    return words[+element];
  });
  if (array.length === 1) {
    return array[0];
  }
  if (array.length >= 2) {
    switch (array[1] + array[0]) {
      case 'onezero':
        array[1] = 'ten';
        break;
      case 'oneone':
        array[1] = 'eleven';
        array[0] = 'zero';
        break;
      case 'onetwo':
        array[1] = 'twelve';
        array[0] = 'zero';
        break;
      case 'onethree':
        array[1] = 'thirteen';
        array[0] = 'zero';
        break;
      case 'onefive':
        array[1] = 'fifteen';
        array[0] = 'zero';
        break;
      case 'oneeight':
        array[1] = 'eighteen';
        array[0] = 'zero';
        break;
      case `one${array[0]}`:
        array[1] = `${array[0]}teen`;
        array[0] = 'zero';
        break;
      case `two${array[0]}`:
        array[1] = 'twenty';
        break;
      case `three${array[0]}`:
        array[1] = 'thirty';
        break;
      case `four${array[0]}`:
        array[1] = 'forty';
        break;
      case `five${array[0]}`:
        array[1] = 'fifty';
        break;
      case `eight${array[0]}`:
        array[1] = `${array[1]}y`;
        break;
      case `${array[1]}${array[0]}`:
        array[1] = `${array[1]}ty`;
        break;
    }
  }
  if (array.length >= 3) {
    array[2] = `${array[2]} hundred`
  }
  const result = array.filter(element => element.includes('zero') === false);
  return result.reverse().join(' ');  
}
