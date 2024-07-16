// Traversing
let arr = [1,2,3,4,5];
let targetNumber = 6;
let found = false;
for(let i=0;i<arr.length;i++){
    if(arr[i]==targetNumber){
        found=true;
        console.log("Target found at index",i);
        break;
    }
}
if(!found){
    console.log("Target not found");
}