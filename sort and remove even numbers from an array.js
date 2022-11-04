const array = [31, 12, 5, 8, 1, 4, 12, 18];
const nums = [];

function bubbleSort(array){
  for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i + 1]){
        const result = array[i]
        array[i] = array[i + 1]
        array[i + 1] = result
      }
    }
  }
  
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
      nums.push(array[i])
    } 
  }
  console.log(nums)
}

bubbleSort(array);