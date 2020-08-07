const nums=[1,-1,3,-5,6,7,8,-9];
for (let i = 0; i < nums.length; i++) {
    if(nums[i]>5){
        break;
    }
    console.log(i);
}
console.log("continue part");
for (let i = 0; i < nums.length; i++) {
    if(nums[i]<0){
        continue;
    }
    console.log(i);
}