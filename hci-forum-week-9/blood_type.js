function canGiveBlood (D, R) {
  ROMin = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']
  ROPlus = ['A+', 'B+', 'AB+', 'O+']
  RBMin = ['AB+', 'AB-', 'B+', 'B-']
  RBPlus = ['AB+', 'B+']
  RAMin = ['AB+', 'AB-', 'A+', 'A-']
  RAPlus = ['AB+', 'A+']
  RABMin = ['AB+', 'AB-']
  RABPlus = ['AB+']
  if (((D == 'O-' && ROMin.indexOf(R) !== -1) ||
        (D == 'O+' && ROPlus.indexOf(R) !== -1) ||
        (D == 'B-' && RBMin.indexOf(R) !== -1) ||
        (D == 'B+' && RBPlus.indexOf(R) !== -1) ||
        (D == 'A-' && RAMin.indexOf(R) !== -1) ||
        (D == 'A+' && RAPlus.indexOf(R) !== -1) ||
        (D == 'AB-' && RABMin.indexOf(R) !== -1) ||
        (D == 'AB+' && RABPlus.indexOf(R))) == true) {
    console.log('true')
  } else {
    console.log('false')
  }
}

canGiveBlood('O+', 'A+')
canGiveBlood('A-', 'B-')
canGiveBlood('A-', 'AB+')
canGiveBlood('B+', 'B-')
canGiveBlood('O+', 'O-')
