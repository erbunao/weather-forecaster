const StringUtils = {
  capitalize: (string = '') => {
    return [...string].map((char, index) => {
      return index ? char : char.toUpperCase();
    }).join('');
  },
}

export default StringUtils;
