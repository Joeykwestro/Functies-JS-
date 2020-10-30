var fibonaccireeks = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonaccireeks(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 document.write(fibonaccireeks(20));