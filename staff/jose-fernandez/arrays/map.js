function map(array, callback){
    let result=[]
    for(i=0;i<array.length;i++){
        //arreglar, output = undefined
         result[i]=callback(array[i]);
        // console.log()
        //result.push(callback(array[i]))
        
    }
    return result
}




