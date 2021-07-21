const boxes = [1,2,3,4,5,6,7,8,9,10];
const newBoxes = ['a','b','c','d','e','f','g','h','i','j'];

function logAllPairsOfArray(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i],array[j]);
        }
    }
}

logAllPairsOfArray(newBoxes);

//o(n^2) - Quadratic time
