function left(arr,rotations)
{
    const RotatedArray = arr.concat();
    for (let i=0;i<rotations;i++)
    {
        const NextNumber = RotatedArray.shift()
        RotatedArray.push(NextNumber)
    }
    return RotatedArray
}

const k=3
const n=[1,2,3,4,5,6,7]

console.log(left(n,k))