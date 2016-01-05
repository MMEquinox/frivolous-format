Array.prototype.contains = function(arr, value) {
	for (i in arr) {
  	if (arr[i] == value) {
    	return true;
    }
  }
  return false;
 }
class _Config {

	constructor(stringToFormat, bolds, italics, strikes, underlines, linebreaks) {
  	this._stringToFormat = stringToFormat;
    this._symbols = {bold : bolds, italic: italics, strike: strikes, underline: underlines, linebreak : linebreaks};
  }

  this.boldPos = [];
  this.italicPos = [];
  this.strikePos = [];
  this.underlinePos = [];
  this.linebreakPos = [];
  
}

class stringPrep extends Config {

	_stringExtraction() {
  	for (var i = 0; i < this.stringToFormat; i++) {
    	if (this._value.contains(this.stringToFormat[i]) && this._value.contains(this.stringToFormat[i+1] && this.key == undefined) {
    		this.key = this.stringToFormat[i] == this._symbols.bold && this.stringToFormat[i + 1] == this._symbols.bold ? this._symbols.bold : undefined;
        this.key = this.stringToFormat[i] == this._symbols.italic && this.stringToFormat[i + 1] == this._symbols.italic ? this._symbols.italic : undefined;
        this.key = this.stringToFormat[i] == this._symbols.strike && this.stringToFormat[i + 1] == this._symbols.strike ? this._symbols.strike : undefined;
        this.key = this.stringToFormat[i] == this._symbols.underline && this.stringToFormat[i + 1] == this._symbols.underline ? this._symbols.underline : undefined;
        this.key = this.stringToFormat[i] == this._symbols.linebreak && this.stringToFormat[i + 1] == this._symbols.linebreak ? this._symbols.linebreak : undefined;
        if (this.key != undefined) {
          switch (this.key) {
            case this._symbols.bold:
              this.boldPos.push([i, i + 1]);
            case this._symbols.italic:
              this.italicPos.push([i, i + 1]);
            case this._symbols.strike:
              this.strikePos.push([i, i + 1]);
            case this._symbols.underline:
              this.underlinePos.push([i, i + 1]);
            case this._symbols.linebreak:
              this.linebreakPos.push([i, i + 1]);
          }
          i += 1;
        }
      }
    }
  }
  
  
  this._value = Object.values(this._symbols)
	this.key;
}

class bold {}
class italic {}
class strike {}
class underline {}
class lineBreak {}
