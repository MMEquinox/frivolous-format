(function() {

  Array.prototype.contains = function(arr, value) {
  for (i in arr) {
    if (arr[i] == value) {
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


  var SymbolLocationsClosure = function(string, key) {
    symbolLocations = {}

    symbolLocations.formatString = key;
    symbolLocations.positionObj;
    symbolLocations.symArr = [];
    for (value in symbolCreation) {
      symArr.pop(value);
    };

    for (i in formatString) {
      if (symbolLocations.symArr.contains(symbolLocations.symArr, formatString[i]) && symbolLocations.symArr.contains(symbolLocations.symArr, formatString[i+1])) {
        positionObj.bold = formatString[i] == symbolCreation.bold && formatString[i+1] == symbolCreation.bold ? positionObj.bold.push([i, i+1]) : positionObj.bold;
        positionObj.italic = formatString[i] == symbolCreation.italic && formatString[i+1] == symbolCreation.italic ? positionObj.italic.push([i, i+1]) : positionObj.italic;
        positionObj.strike = formatString[i] == symbolCreation.strike && formatString[i+1] == symbolCreation.strike ? positionObj.strike.push([i, i+1]) : positionObj.strike;
        positionObj.underline = formatString[i] == symbolCreation.underline && formatString[i+1] == symbolCreation.underline ? positionObj.underline.push([i, i+1]) : positionObj.underline;
        positionObj.linebreak = formatString[i] == symbolCreation.linebreak && formatString[i+1] == symbolCreation.linebreak ? positionObj.linebreak.push([i, i+1]) : positionObj.linebreak;
        i += 1;
      }
    }


    return {

      setString : function(string) {
        formatString  = string; 
      },

      getPosition : function() {
        return positionObj;
      }

    }
  }




}
