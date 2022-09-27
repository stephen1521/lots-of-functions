console.log('sayHi function');
console.log('');
console.log(sayHi('Brad'));
console.log(sayHi('Mike'));
function sayHi(name){
    return 'Hi, ' + name;  
}
console.log('\n');
console.log('bigString function');
console.log('');
console.log(bigString('one', 'seven'));
console.log(bigString('loose', 'moose'));
console.log(bigString('nothing', 'six'));
function bigString(str1, str2){
    if(str1.length > str2.length){
        return str1;
    } else if (str2.length > str1.length){
        return str2;
    } else {
        return "The strings are equal in size, " + str1 + ' ' + str2;
    }
}
console.log('\n');
console.log('bigNumber function');
console.log('');
console.log(bigNumber(2,4));
console.log(bigNumber(9,-4));
console.log(bigNumber(4,4));
function bigNumber(num1, num2){
    if(num1 > num2){
        return num1;
    } else if(num2 > num1){
        return num2;
    } else {
        return 'The numbers are equal.';
    }
}
console.log('\n');
console.log('remainder funtion');
console.log('');
console.log(remainder(7, 3));
console.log(remainder(55, 8));
function remainder(num1, num2) {
    return num1 % num2;
}
console.log('\n');
console.log('fiveMore function');
console.log('');
console.log('Original array: ' + [1,2,3,4,5,6])
console.log('After method call: ' + fiveMore([1,2,3,4,5,6]));
console.log('Original array: ' + [11,42,40,33,35]);
console.log('After method call: ' + fiveMore([11,42,40,33,35]));
function fiveMore(arr){
    for(let i = 0; i < arr.length; i++){
        if((arr[i] % 2) > 0){
            arr[i] += 5;
        }
    }
    return arr;
}
console.log('\n');
console.log('arraySummer function');
console.log('');
console.log(arraySummer([1,2,3,4,5,6]));
console.log(arraySummer([20,25,10,5,15]));
function arraySummer(arr){
    let temp = 0;
    for(let i of arr){
        temp += i;
    }
    return temp;
}
console.log('\n');
console.log('everyDivisible function');
console.log('');
console.log('Example 1');
everyDivisible(7);
console.log('');
console.log('Example 2');
everyDivisible(3);
console.log('');
console.log('Example 3');
everyDivisible(22);
function everyDivisible(num){
    if(num > 10){
        console.log('Too big of a number');
        return;
    }
    let total = 0;
    let i = 1;
    while(total < 100){
        let temp = 0;
        temp = num * i;
        if(temp < 100){
            console.log(temp);
        }
        total = temp;
        i++;
    }

}