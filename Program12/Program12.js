//const arr = [5,121,123,1331,1234,'lil','did','dash']
const arr=[5]
const Palindrome = pl=>
{
    const str = String(pl);
    let i=0
    let j=str.length-1
    while(i<j)
    {
        if(str[i]==str[j])
        {
            i++
            j--
        }
        else
        {
            return false
        }
    } return true
}

const findPalindrome=arr=>
{
    return arr.filter(pl => Palindrome(pl))
}
console.log(findPalindrome(arr))