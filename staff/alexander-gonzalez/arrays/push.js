function push(array, element) {
    let result = []
  for (let i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i]
  }
      result=array.length
    
    return result
  }
 


