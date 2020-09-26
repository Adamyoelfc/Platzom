"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = platzom;

function platzom(str) {
  var translation = str; //si la palabra termina en "ar",  se le quitan esos caracteres....

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  } //si la paabra inicia con z se le añade "pe" al final


  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  } //si la palabra traducida tiene mas de 10 letras se debe partir a l mitad con un guion


  var length = translation.length;

  if (length >= 10) {
    var firstHlaf = translation.slice(0, Math.round(length / 2));
    var secondHlaf = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHlaf, "-").concat(secondHlaf);
  } //si la palabra oroginal es un palindromo, ninguna regla anteror cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas


  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var _char = str.charAt(i);

      translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}