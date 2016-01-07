(function() {

  Array.prototype.contains = function(value) {
  for (i in this) {
    if (this[i] == value) {
      return true;
    }
  }
  return false;
 }
  var InputClosure = function(formatString) {
    var input = {};
    input.formatString = formatString;

    input.getFormatString = function getString() {
      return input;
    }
  }

  var symbolCreationClosure = function() {
      var symbolCreation = {};
      symbolCreation.formatSymbols = {bold: '++', italic: '**', strike: '--', underline: '__', linebreak : '>>'};
      
      symbolCreation.setSymbols = function(bold, italic, strike, underline, linebreak) {

      }

      symbolCreation.getSymbols = function() {
        return this.formatSymbols;
      }
      return symbolCreation;
  }

  var x = symbolCreationClosure();
  console.log(x.getSymbols());


  var SymPosClosure = function(string, key) {
    symPos = {};

    symPos.formatString = string;
    symPos.formatKey = new Array;
    symPos.formatKey = (function() {
      for (value in key) {
        symPos.formatKey.push(value);
        console.log(key);
      }
    })();
    symPos.poss;


    for (i = 0; i < symPos.formatString.length; i++) {
      for (z = 0; i < symPos.formatKey; i++) {
        if (symPos.formatString[i] == symPos.formatKey[z] && symPos.formatString[i+1] == symPos.formatKey[z]){
          symPos.poss.bold = symPos.formatKey[z] == string.bold ? console.log('bold') : symPos.poss.bold;
          symPos.poss.italic = symPos.formatKey[z] == string.italic ? symPos.poss.push([i, i+1]) : symPos.poss.bold;
          symPos.poss.strike = symPos.formatKey[z] == string.strike ? symPos.poss.push([i, i+1]) : symPos.poss.bold;
          symPos.poss.underline = symPos.formatKey[z] == string.underline ? symPos.poss.push([i, i+1]) : symPos.poss.bold;
          symPos.poss.linebreak = symPos.formatKey[z] == string.linebreak ? symPos.poss.push([i, i+1]) : symPos.poss.bold;
        }
      }
    }

    symPos.getPos = function() {
      return symPos.poss;
    }

    return symPos;
  }

  var symbols = symbolCreationClosure();
  var pos = SymPosClosure('++Format++ this __string__!',symbols.getSymbols());
  console.log(pos.getPos());
  console.log(pos.formatKey);
})();
