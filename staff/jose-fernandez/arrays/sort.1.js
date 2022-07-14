function sort(array) {
    let result = []
    let arraytrs = []
   
    let n = array.length
    // let a=array[][0]
    if (array == "" || array == '') {

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (array[i][0] > array[j][0]) {
                    let acum = array[i]
                    array[i] = array[j]
                    array[j] = acum
                }
            }

        }
        for (i = 0; i < n; i++) {
            result[i] = array[i]
        }
        return result
    } else {
        
        for (i = 0; i < n; i++) {
            array[i]=arraytrs[""]
        }
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arraytrs[i][0] > arraytrs[j][0]) {
                    let acum = arraytrs[i]
                    arraytrs[i] = arraytrs[j]
                    arraytrs[j] = acum
                }
            }

        }
        for (i = 0; i < n; i++) {
            result[i] = arraytrs[i]
        }
        return result
    }



}

let array1 = ["1", "30", "4", "21", "100000"]
// let array1 = [1, 30, 4, 21, 100000]
// expected output: Array [1, 100000, 21, 30, 4]
const months = ['March', 'Jan', 'Feb', 'Dec'];
// expected output: Array ["Dec", "Feb", "Jan", "March"]

console.log(sort(array1));
// console.log(sort(months));