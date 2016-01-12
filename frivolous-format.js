(function() {


  var key = function(string, obj) {
  		data = {}
     	data.defaultKey = {bold: '+', italic: '*', strike: '-', linebreak : '>'}; //add new keyname : symbol
     	data.key;
     	data.string = string;

     	if (obj != undefined) {
     		data.key = Object.assign({}, data.defaultKey, obj);
     	} else {
     		data.key = data.defaultKey;
     	}

     	return data;
     }

  var keyCounter = function(data) {
    keyCount = {};
                    
   	keyCount.bold = 0; //additional keys must be added
   	keyCount.italic = 0;
   	keyCount.strike = 0;
   	keyCount.linebreak = 0;

   	for (i = 0; i < data.string.length; i++) {
   		keyCount.bold = data.string[i] == data.key['bold'] && data.string[i + 1] == data.key['bold'] ? keyCount.bold + 1 : keyCount.bold * 1; //additional keys must be added. 
   		keyCount.italic = data.string[i] == data.key['italic'] && data.string[i + 1] == data.key['italic'] ? keyCount.italic + 1 : keyCount.italic * 1;
   		keyCount.strike = data.string[i] == data.key['strike'] && data.string[i + 1] == data.key['strike'] ? keyCount.strike + 1 : keyCount.strike * 1;
   		keyCount.linebreak = data.string[i] == data.key['linebreak'] && data.string[i + 1] == data.key['linebreak'] ? keyCount.linebreak + 1 : keyCount.linebreak * 1;
   	}

   	return keyCount;


  }

  var keyReplacement = function(data, keyCount) {
    for (i = 0; i < data.string.length; i++) {
    	if (keyCount.bold % 2 == 0 && keyCount.bold != 0) { //additional if else must be added for each key
    		data.string = data.string.replace('++', '<strong>');
    		keyCount.bold = keyCount.bold - 1;
   	 } else {
   	 		data.string = data.string.replace('++', '</strong>')
   	 		keyCount.bold -= 1;
   	 }
    	if (keyCount.italic % 2 == 0 && keyCount.italic != 0) {
    		data.string = data.string.replace('**', '<em>');
    		keyCount.italic -= 1;
   	 } else {
   	 		data.string = data.string.replace('**', '</em>');
   	 		keyCount.italic -=1;
   	 }
    	if (keyCount.strike % 2 == 0 && keyCount.strike != 0) {
    		data.string = data.string.replace('--', '<s>');
    		keyCount.strike -= 1;
   	 } else {
   	 		data.string = data.string.replace('--', '</s>')
   	 		keyCount.strike -= 1;
   	 }
   	 data.string = data.string.replace('>>', '<br>');

  }
 return data.string;
}

})();
