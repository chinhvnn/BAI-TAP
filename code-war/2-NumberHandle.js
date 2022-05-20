/////////////////////////////////////////////////////////////////////////////////////////
// narcissistic number - số tự mãn
// TỰ CODE
function _narcissistic(value) {
    let check = false;
    sum=0;
    for (let i = 0; i < value.length; i++) {
        sum+= Math.pow(value[i], value.length);
        console.log(Math.pow(value[i], value.length));
    }
    str = sum;
    if (sum == value)  check=true;else check = false;
    
    return document.getElementById('narcissistic-KQ').innerText= value + (check?' la so tu man':' KHONG phai la soo tu man');
}

//COODE CON NGUOI TA
function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }

  function narcissistic(value) {
    return value.toString()
                .split('')
                .map( (x,i,arr) => x ** arr.length)
                .reduce( (a,b)=> +a + +b) 
                 === value
  }

///////////////////////////////////////////////////////////////
// building which will be a pile of n cubes - tìm số tầng hình khối cube từ 1 số m
//TỰ CODE
function _cubicPow(m) {
  let sum = 0;
  let n = 1;
  while (m>0 && m > sum){
  sum += Math.pow(n,3);
  if(sum == m){
    return document.getElementById('cubic-pow-KQ').innerText= 'check OK n='+n;
  }
  ++n;
  }
  return document.getElementById('cubic-pow-KQ').innerText= 'check FAIL';;

}

//COODE CON NHÀ NGƯỜI TA
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

///////////////////////////////////////////////////////////////////////
// DIGITAL ROOT - 942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
// TỰ CODE
function _digital_root(n) {
  let rs = n;
  while (rs > 9){
  let sum =0;
  rs.toString().split('').map((a) => {sum += parseInt(a); return sum;} );
  rs = sum;
  }
  return document.getElementById('digital-root-KQ').innerText= 'RS = '+rs;
}

//COODE CON NHÀ NGƯỜI TA
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

//COODE CON NHÀ NGƯỜI TA
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}