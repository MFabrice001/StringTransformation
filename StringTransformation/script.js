function transformString() {
  const inputString = document.getElementById('inputString').value;
  const resultElement = document.getElementById('result');
  const length = inputString.length;

  let transformedString;

  if (length % 15 === 0) {
      // Length is divisible by 15
      transformedString = reverseString(inputString);
      transformedString = asciiTransform(transformedString);
  } else if (length % 5 === 0) {
      // Length is divisible by 5
      transformedString = asciiTransform(inputString);
  } else if (length % 3 === 0) {
      // Length is divisible by 3
      transformedString = reverseString(inputString);
  } else {
      // No transformation rules
      transformedString = inputString;
  }

  resultElement.textContent = transformedString;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function asciiTransform(str) {
  return str.split('').map(char => char.charCodeAt(0)).join(' ');
}
