chArr=new Array();function change(n){if(chArr.length==0){chArr.push(n);return false;}else{if(chArr.pop()==n){chArr.push(n);return false;}else{return true;}}}
