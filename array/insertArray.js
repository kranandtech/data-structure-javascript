let arr = [1,2,3,4,5];
// insert element
function insertElement(arr,index,element){
    // arr.splice(index,0,element);
    // return arr;
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(i===index){
            newArr.push(element);
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

newarr =insertElement(arr,2,10);
console.log(newarr);