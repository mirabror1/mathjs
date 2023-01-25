function pow(n, y) {
    return n ** 1 / y
  }
  
  function sqrt(n, y) {
    return n ** (1 / y)
  }
  
  function abs(n){
    if(n > 0){
      return n * (-1)
    }
    else{
      return n
    }
  }
  
  function floor(n) {
    if(n% 1 >= 0.5){
      return n.toFixed(0) - 1
    }
    else{
      n.toFixed(0)
    }
  }
  
  function ceil(n) {
    if(n% 1 >= 0.5){
      return n.toFixed(0)
    }
    else{
      +n.toFixed(0) + 1
    }
  }
  
  function round(n) {
    return n.toFixed(0)
  }