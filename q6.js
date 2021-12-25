function decompressString(string) {
    //write code here
    out = "";
    for(var i = 0; i < string.length; i = i + 1) {
    if (string[i] > '0' && string[i] <= '9') {
    var x = string[i - 1];
      for (var j = 0; j < string[i]; j = j + 1) {
      out = out + string[i - 1];
      }
    }
    }
    console.log(out);
  }