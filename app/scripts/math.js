var kylesArray = [44, 42, 36, 2]

let numberArray = [5, 3, 2, 9]

function arrayMultipy(ar1, ar2){
  var totals = []
  for (var i = 0; i < ar1.length; i++){
    totals.push(ar1[i] * ar2[i])
  }
  return totals
}

arrayMultipy(kylesArray, numberArray)
