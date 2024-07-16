let arr = [1,2,3,4,5];
// Delete element
function insertElement(arr,index){
    // arr.splice(index,1);
    // return arr;
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(i===index){
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

newarr =insertElement(arr,3);
console.log(newarr);