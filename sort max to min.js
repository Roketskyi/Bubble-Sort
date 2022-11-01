const array = [63, 2, 15, 8, 3, -56, 1, -2];

function bubbleSort(array){
  for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] < array[i + 1]){
        const result = array[i]
        array[i] = array[i + 1]
        array[i + 1] = result
      }
    }
  }
  console.log(array)
}

bubbleSort(array);