/////////////////////////////////////////////////////////////////////////////////////////
// VẼ HÌNH THOI
//TỰ CODE
function _diamond(n) {
    // n = parseInt(document.getElementById('1-ve-hinh-thoi').value);
    let str = "";
    let ndiv2 = (n - (n % 2)) / 2;
    //check value input
    if(n != ''){
        if (n > 1 && n%2==1){
            //FIRT LINE
            for (let i = 1; i <= ndiv2; i++) {
                let k = 0;
                for (let j = 1; j <= ndiv2 - (i - 1); j++) {
                    str += "-";
                }
                while (k != 2 * i - 1) {
                    str += "*";
                    ++k;
                }
                str += "\n";
            }
        
            //MIDLE
            for (let z = 1; z <= n; z++) {
                str += "*";
            }
            str += "\n";
        
            //THREE LINE
            for (let i = ndiv2 + 2; i <= n; i++) {
                let k = 0;
                let check = n - 2 * i + 2 * (ndiv2 + 1);
                for (let j = 1; j < i - ndiv2; j++) {
                    str += "-";
                }
                while (k != check) {
                    str += "*";
                    ++k;
                }
                str += "\n";
            }
        }
        if (n == 1) {
            return document.getElementById('result').innerHTML=str;
        }
        return document.getElementById('result').innerText=str;

    } else (alert('Yêu cầu nhập vào số'));
}

//CODE NHÀ NGƯỜI TA
function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
  }
//CODE NHÀ NGƯỜI TA
  function diamond(n){
    if( n%2==0 || n<1 ) return null
    var x=0, add, diam = line(x,n);
    while( (x+=2) < n ){
      add = line(x/2,n-x);
      diam = add+diam+add;
    }
    return diam;
  }//z.
//CODE NHÀ NGƯỜI TA
  function repeat(str,x){return Array(x+1).join(str); }
//CODE NHÀ NGƯỜI TA
  function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }


/////////////////////////////////////////////////////////////////////////////////////////
// VẼ HÌNH THÁP
// TỰ CODE
function _towerBuilder(n) {
    let arr = [];
    
    for (i=1; i <= n ; i++){
      let  k = 0; 
      let   str = '';
      
      for (j=1; j <= n - i; j++){
        str += ' '
      }
       while (k < (2 * i - 1)) {
        str += "*";
        ++k;
        }
      
      for (z=1; z <= n - i; z++){
        str += ' ';
      }
      arr.push(str);
    }
    console.log(arr);
    document.getElementById('result').innerText= arr;
    return arr;
  }
  //CODE NHÀ NGƯỜI TA
  function towerBuilder(n) {
      return Array.from({length: n}, function(v, k) {
          const spaces = ' '.repeat(n - k - 1);
          return spaces + '*'.repeat(k + k + 1) + spaces;
        });
    }
    
    //CODE NHÀ NGƯỜI TA
  function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

