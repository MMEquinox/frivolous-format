(function() {

  Array.prototype.contains = function(value) {
  for (i in this) {
    if (this[i] == value) {
      return true;
    }
  }
  return false;
 }
  var InputModule = function(formatString) {
    var input = {};
    input.formatString = formatString;

    input.getFormatString = function getString() {
      return input;
    }
  }

  var symbolCreationModule = function() {
      var symbolCreation = {};
      symbolCreation.formatSymbols = {bold: '+', italic: '*', strike: '-', underline: '_', linebreak : '>'};
      
      symbolCreation.setSymbols = function(bold, italic, strike, underline, linebreak) {

      }

      symbolCreation.getSymbols = function() {
        return this.formatSymbols;
      }
      return symbolCreation;
  }


  var SymPosModule = function(string, key) {
    symPos = {};

    symPos.formatString = string;
    symPos.formatKey = new Array;
    (function() {
      for (name in key) {
        symPos.formatKey.push(key[name]);
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
      for (z = 0; z < symPos.formatKey.length; z++) {
        if (symPos.formatString[i] == symPos.formatKey[z] && symPos.formatString[i+1] == symPos.formatKey[z]) {
          if (symPos.formatKey[z] == key.bold) {
            symPos.poss.bold.push([i, i + 1]);
          } else if (symPos.formatKey[z] == key.italic) {
            symPos.poss.italic.push([i, i + 1]);
          }
          else if (symPos.formatKey[z] == key.strike) {
            symPos.poss.strike.push([i, i + 1]);
          } 
          else if (symPos.formatKey[z] == key.underline) {
            symPos.poss.underline.push([i, i + 1]);
          } 
          else if (symPos.formatKey[z] == key.linebreak) {
            symPos.poss.linebreak.push([i, i + 1]);
          } 
        }
      }
    }

    symPos.getPos = function() {
      return symPos.poss;
    }

    return symPos;
  }

  var symbols = symbolCreationModule();
  var pos = SymPosModule('++Format++ this __string__!',symbols.getSymbols());
  console.log(pos.getPos());
})();
