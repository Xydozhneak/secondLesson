firstSting=prompt('Enter your 1st string');
secondSting=prompt('Enter your 2nd string');
thirdSting=prompt('Enter your 3rd string');
allStrings=`${firstSting} ${secondSting} ${thirdSting}`;
console.log(allStrings);
alert(allStrings);
value='12345';
reValue=`${value[value.length-1]} ${value[value.length-2]} ${value[value.length-3] } ${value[value.length-4]} ${value[value.length-5]}`;
console.log(value,reValue);