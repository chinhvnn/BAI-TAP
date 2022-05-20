/////////////////////////////////////////////////////////////////////////////////////////
// Anagram - đảo chữ
//TỰ CODE
function _anagram(a, b) {
    value1 = a.split('').sort();
    value2 = b.split('').sort();
    
    if (value1.toString() == value2.toString()){
        return document.getElementById('anagram-KQ').innerText= 'OK';
    } else return document.getElementById('anagram-KQ').innerText= 'Not OK';

}


//CODE CON NHÀ NGƯỜI TA
String.prototype.sort = function() {
    return this.split("").sort().join("");
  };
  
  function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
  }

//CODE CON NHÀ NGƯỜI TA
  function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word == v.split('').sort().join('');});
  }

//CODE CON NHÀ NGƯỜI TA
  function anagrams(word, words) {
    return words.filter(function (e) {
        return e.split('').sort().join('') === word.split('').sort().join('');
    })
}

/////////////////////////////////////////////////////////////////////////////////////////
// CHECK NGUYÊN ÂM
//TỰ CODE
function _vowels(s){
  let count = [];
  let d = 0;
  for (let i = 0; i < s.length; i++) {
      if (
        s[i] === "u" ||
        s[i] === "e" ||
        s[i] === "o" ||
        s[i] === "a" ||
        s[i] === "i"  )
      {
        d = d + 1;
        continue;
      }
      count.push(d);
      d = 0;
    }
    console.log(s);
    console.log(count);
   return document.getElementById('vowels-RS').innerText = count.sort()[count.length-1];
  }

  //CODE CON NHÀ NGƯỜI TA
  const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);
  //CODE CON NHÀ NGƯỜI TA
  function solve2 (s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
   }

/////////////////////////////////////////////////////////////////////////////////////////
////// DI CHUYỂN KÝ TỰ
///////////////////////////////////TỰ CODE///////////////////////////////////////////////
   function _pigIt(str){
    return document.getElementById('pigIt-RS').innerText  = str.split(" ").map( (dg) => (new RegExp('[a-z]','gi').test(dg)) ? (dg.slice(1) + dg.charAt(0) + 'ay'):dg).join(' ');
    
  }
  //CODE CON NHÀ NGƯỜI TA
  function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }
  //CODE CON NHÀ NGƯỜI TA
  function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }

/////////////////////////////////////////////////////////////////////////////////////////
////// CAMEL CASE METHOD
///////////////////////////////////TỰ CODE///////////////////////////////////////////////
  String.prototype.camelCase=function(){
    return this.split(" ").map( (dg) => dg.charAt(0).toUpperCase() + dg.slice(1)).join('');
  }

  // String.prototype.camelCase = function () {
  //   return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  // }

  // String.prototype.camelCase=function(){
  //   const capitalize = (word) => {
  //     return word.slice(0,1).toUpperCase() + word.slice(1)
  //   }
    
  //   return this
  //     .split(' ')
  //     .map(capitalize)
  //     .join('')
  // }