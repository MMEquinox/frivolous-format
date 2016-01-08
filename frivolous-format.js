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


  var SymPosClosure = function(string, key) {
    symPos = {};

    symPos.formatString = string;
    symPos.formatKey = new Array;
    (function() {
      for (value in key) {
        symPos.formatKey.push(value);
      }
    })();

    symPos.poss = {
      bold : new Array,
      italic : new Array,
      strike : new Array,
      underline : new Array,
      linebreak : new Array
    };


    for (i = 0; i < symPos.formatString.length; i++) {
      console.log(i);
      for (z = 0; z < symPos.formatKey.length; z++) {
        console.log(z);
        if (symPos.formatString[i] == symPos.formatKey[z] && symPos.formatString[i+1] == symPos.formatKey[z]) {
          console.log('working');
          symPos.poss.bold = symPos.formatKey[z] == string.bold ? symPos.poss.bold.push(i, i+1) : symPos.poss.bold;
          symPos.poss.italic = symPos.formatKey[z] == string.italic ? symPos.poss.italic.push([i, i+1]) : symPos.poss.bold;
          symPos.poss.strike = symPos.formatKey[z] == string.strike ? symPos.poss.strike.push([i, i+1]) : symPos.poss.bold;
          symPos.poss.underline = symPos.formatKey[z] == string.underline ? symPos.underline.push([i, i+1]) : symPos.poss.bold;
          symPos.poss.linebreak = symPos.formatKey[z] == string.linebreak ? symPos.linebreak.push([i, i+1]) : symPos.poss.bold;
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
})();
