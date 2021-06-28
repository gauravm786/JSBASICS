let Rearrange = (arr, n) => {
    for (let i = 0; i < n - 1; i++) {
        if (i % 2 == 0 && arr[i] > arr[i + 1]) {
           
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
        if (i % 2 != 0 && arr[i] < arr[i + 1]) {
          
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

let printArray = (arr, size) => {
    ans = '';
    for (let i = 0; i < size; i++) {
        ans += arr[i] + " ";
    }
    console.log(ans);
}

let arr = [5, 3, 9, 1, 44, 6];
let n = arr.length;

console.log("Before Rearranging: ");

printArray(arr, n);
Rearrange(arr, n);
console.log("After Rearranging: ");
printArray(arr, n);

