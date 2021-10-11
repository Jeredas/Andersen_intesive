const concatStrings = (string, separator) => {
    !separator ? separator = '': separator;
    if(string || string !== null || string === `${string}`) {
        return (secondString) => {
            if(secondString === null){
                return string
            } else {
                console.log(secondString)
            return concatStrings(string + separator + secondString, separator)
            }
        }
    } 
} 
//  console.log(concatStrings('first')('second')('third')())
//  //console.log('firstsecondthird')
//  console.log(concatStrings('first', null)('second')())
//  //console.log('firstsecond'
 //console.log(concatStrings('first', '123')('second')('third')())
//  //console.log('first123second123third'
 console.log((concatStrings('123')('')('')(null)).length)
//  //console.log('some-value'
//  console.log(concatStrings('some-value')(2)())
//  //console.log('some-value'
//  console.log(concatStrings('some-value')('333')(123n)())
//  //console.log('some-val333'

// function addit (a) {
//     return function (b) {
//         b ? addit(a+b) : a
//         if(!b || b)
//     }
// }
// console.log(addit('some-value')('')('')(null)())