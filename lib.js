(function() {

  Array.prototype.contains = function(arr, value) {
  for (i in arr) {
    if (arr[i] == value) {
      return true;
    }
  }
  return false;
 }
  var input = (function() {
    //getElementById... 
    var string = '++testing++';

    return string;
  })();

  var symbolCreation = (function() {
      var defaultSymbols = {bold: '++', italic: '**', strike: '--', underline: '__', linebreak : '>>'};
      var symbols = defaultSymbols;

      return symbols;
  })();


  var symbolLocations = (function() {
    var formatString = '++testing++';
    var positionObj;
    var symArr = [];
    for (value in symbolCreation) {
      symArr.pop(value);
    };

    if (formatString != undefined) {
      for (i in formatString) {
        if (symArr.contains(symArr, formatString[i]) && symArr.contains(symArr, formatString[i+1])) {
          positionObj.bold = formatString[i] == symbolCreation.bold && formatString[i+1] == symbolCreation.bold ? positionObj.bold.push([i, i+1]) : positionObj.bold;
          positionObj.italic = formatString[i] == symbolCreation.italic && formatString[i+1] == symbolCreation.italic ? positionObj.italic.push([i, i+1]) : positionObj.italic;
          positionObj.strike = formatString[i] == symbolCreation.strike && formatString[i+1] == symbolCreation.strike ? positionObj.strike.push([i, i+1]) : positionObj.strike;
          positionObj.underline = formatString[i] == symbolCreation.underline && formatString[i+1] == symbolCreation.underline ? positionObj.underline.push([i, i+1]) : positionObj.underline;
          positionObj.linebreak = formatString[i] == symbolCreation.linebreak && formatString[i+1] == symbolCreation.linebreak ? positionObj.linebreak.push([i, i+1]) : positionObj.linebreak;
          i += 1;
        }
      }
    } else {
      console.log('fuck');
    }


    return {

      setString : function(string) {
        formatString  = string; 
      },

      getPosition : function() {
        return positionObj;
      }

    }
  })();
  console.log(symbolLocations.getPositon());
  var symbolReplacement;



})();
