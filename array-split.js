let nums=[3,4,5,8,7,9,32];
const subPart=nums.slice(2,5);
console.log(subPart);
console.log(nums);

const removed=nums.splice(3,3);
console.log(removed);
console.log(nums);
const together=removed.join(" ami=");
console.log(together);
