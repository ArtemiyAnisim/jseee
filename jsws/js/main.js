// Задачи js 1 уровень

// 1.1
//1

//let number = -5;

//if (number < 0) {
//    console.log("Число отрицательное");
//} else {
//    console.log("Число положительное или равно нулю");
//}


//2

//let str = "Hello, world!";
//console.log("Длина строки:", str.length);


//3

//let str = "Hello";
//let lastChar = str[str.length - 1];
//console.log("Последний символ строки:", lastChar);


//4

//let number = 10;

//if (number % 2 === 0) {
//    console.log("Число четное");
//} else {
//    console.log("Число нечетное");
//}


//5

//let word1 = "apple";
//let word2 = "apricot";

//if (word1[0] === word2[0]) {
//    console.log("Первые буквы слов совпадают");
//} else {
//    console.log("Первые буквы слов не совпадают");
//}


//6
 
//let word = "молоко";
//let lastChar = word[word.length - 1];
//if (lastChar === "ь") {
//    console.log("Последняя буква:", word[word.length - 2]);
//} else {
//    console.log("Последняя буква:", lastChar);
//}

//1.2

//1

//let number = 12345;
//let firstDigit = parseInt(number.toString()[0]);
//console.log("Первая цифра числа:", firstDigit);


//2

//let number = 12345;
//let lastDigit = parseInt(number.toString().slice(-1));
//console.log("Последняя цифра числа:", lastDigit);


//3

//let number = 12345;
//let firstDigit = parseInt(number.toString()[0]);
//let lastDigit = parseInt(number.toString().slice(-1));
//let sum = firstDigit + lastDigit;
//console.log("Сумма первой и последней цифры числа:", sum);


//4

//let number = 12345;
//let digitsCount = number.toString().length;
//console.log("Количество цифр в числе:", digitsCount);


//5

//let number1 = 12345;
//let number2 = 19876;

//let firstDigit1 = parseInt(number1.toString()[0]);
//let firstDigit2 = parseInt(number2.toString()[0]);

//if (firstDigit1 === firstDigit2) {
//    console.log("Первые цифры чисел совпадают");
//} else {
//    console.log("Первые цифры чисел не совпадают");
//}

//1.3

//1

//let str = "Hello";
//if (str.length > 1) {
//    let preLastChar = str[str.length - 2];
//    console.log("Предпоследний символ строки:", preLastChar);
//} else {
//    console.log("В строке только один символ");
//}


//2

//let num1 = 10;
//let num2 = 5;

//if (num1 % num2 === 0) {
//    console.log("Первое число делится на второе без остатка");
//} else {
//    console.log("Первое число не делится на второе без остатка");
//}

//1.4

//1

//for (let i = 1; i <= 100; i++) {
//	console.log(i);
//}


//2

//for (let i = -100; i <= 0; i++) {
//	console.log(i);
//}


//3

//for (let i = 100; i >= 1; i--) {
//	console.log(i);
//}


//4

//for (let i = 2; i <= 100; i += 2) {
//	console.log(i);
//}


//5

//for (let i = 1; i <= 100; i++) {
//	if (i % 3 === 0) {
//		 console.log(i);
//	}
//}


//1.5

//1

//let sum = 0;
//for (let i = 1; i <= 100; i++) {
//    sum += i;
//}
//console.log("Сумма всех целых чисел от 1 до 100:", sum);


//2

//let sum = 0;
//for (let i = 2; i <= 100; i += 2) {
//    sum += i;
//}
//console.log("Сумма всех целых четных чисел от 1 до 100:", sum);


//3

//let sum = 0;
//for (let i = 1; i <= 100; i += 2) {
//    sum += i;
//}
//console.log("Сумма всех целых нечетных чисел от 1 до 100:", sum);


//4

//let num1 = 10;
//let num2 = 3;
//let remainder = num1 % num2;
//console.log("Остаток от деления первого числа на второе:", remainder);


//5

//let str = "Hello";
//for (let i = str.length - 1; i >= 0; i--) {
//    console.log(str[i]);
//}

//1.6

//1

//let numbers = [1, 2, 3, 4, 5];
//let sumOfSquares = 0;
//for (let i = 0; i < numbers.length; i++) {
//    sumOfSquares += numbers[i] * numbers[i];
//}
//console.log("Сумма квадратов элементов массива:", sumOfSquares);


//2

//let numbers = [1, 4, 9, 16, 25];
//let sumOfSquareRoots = 0;
//for (let i = 0; i < numbers.length; i++) {
//    sumOfSquareRoots += Math.sqrt(numbers[i]);
//}
//console.log("Сумма квадратных корней элементов массива:", sumOfSquareRoots);


//3

//let numbers = [-1, 2, -3, 4, -5];
//let sumOfPositiveNumbers = 0;
//for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] > 0) {
//        sumOfPositiveNumbers += numbers[i];
//    }
//}
//console.log("Сумма положительных элементов массива:", sumOfPositiveNumbers);


//4

//let numbers = [-1, 2, 5, 10, 15];
//let sumInRange = 0;
//for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] > 0 && numbers[i] < 10) {
//        sumInRange += numbers[i];
//    }
//}
//console.log("Сумма элементов массива, больших нуля и меньших десяти:", sumInRange);

//1.7

//1

//let str = 'abcde';
//let lettersArray = str.split('');
//console.log("Массив букв строки:", lettersArray);


//2

//let number = 12345;
//let digitsArray = Array.from(String(number), Number);
//console.log("Массив цифр числа:", digitsArray);


//3

//let number = 12345;
//let reversedNumber = parseInt(String(number).split('').reverse().join(''));
//console.log("Перевернутое число:", reversedNumber);


//4

//let number = 12345;
//let sumOfDigits = 0;
//while (number > 0) {
//    sumOfDigits += number % 10;
//    number = Math.floor(number / 10);
//}
//console.log("Сумма цифр числа:", sumOfDigits);

//1.8

//1

//let array = [];
//for (let i = 1; i <= 10; i++) {
//    array.push(i);
//}
//console.log("Массив целых чисел от 1 до 10:", array);


//2

//let array = [];
//for (let i = 2; i <= 100; i += 2) {
//    array.push(i);
//}
//console.log("Массив четных чисел от 1 до 100:", array);


//3

//let fractions = [1.456, 2.125, 3.32, 4.1, 5.34];
//let roundedFractions = fractions.map(num => Math.round(num * 10) / 10);
//console.log("Округленные дроби:", roundedFractions);

//1.9

//1

//let strings = ["http://example.com", "https://google.com", "ftp://example.org", "http://stackoverflow.com"];
//let filteredStrings = strings.filter(str => str.startsWith("http://"));
//console.log("Строки, начинающиеся на http://:", filteredStrings);


//2

//let strings = ["index.html", "about.html", "script.js", "style.css"];
//let filteredStrings = strings.filter(str => str.endsWith(".html"));
//console.log("Строки, заканчивающиеся на .html:", filteredStrings);


//3

//let numbers = [10, 20, 30, 40, 50];
//let increasedNumbers = numbers.map(num => num * 1.1);
//console.log("Числа, увеличенные на 10 процентов:", increasedNumbers);

//1.10

//1

//let array = [];
//for (let i = 0; i < 10; i++) {
//    array.push(Math.floor(Math.random() * 100) + 1);
//}
//console.log("Массив случайных чисел от 1 до 100:", array);


//2

//let number = 12345;
//let strNumber = String(number);
//for (let i = strNumber.length - 1; i >= 0; i--) {
//    console.log(strNumber[i]);
//}


//3

//let array = [1, 2, 3, 4, 5, 6];
//for (let i = 0; i < array.length; i += 2) {
//    console.log([array[i], array[i + 1]]);
//}


//4

//let arr1 = [1, 2, 3];
//let arr2 = [4, 5, 6];
//let mergedArray = arr1.concat(arr2);
//console.log("Объединенный массив:", mergedArray);

//2.1

//1

//let str = "105038";
//let firstZeroPosition = str.indexOf("0");
//console.log("Позиция первого нуля в строке:", firstZeroPosition);


//2

//for (let i = 100; i <= 999; i++) {
//	let firstDigit = Math.floor(i / 100);
//	let secondDigit = Math.floor((i % 100) / 10);
//	if (firstDigit + secondDigit === 5) {
//		 console.log(i);
//	}
//}


//3

//let array = [1, 2, 3, 4, 5, 6];
//let valueToRemove = 3;
//let filteredArray = array.filter(item => item !== valueToRemove);
//console.log("Массив после удаления элементов со значением", valueToRemove + ":", filteredArray);


//4

//let array = [1, 2, 3, 4, 5, 6];
//let sum = 0;
//for (let i = 0; i < array.length / 2; i++) {
//    sum += array[i];
//}
//console.log("Сумма первой половины элементов массива:", sum);

//2.2

//1

//let str = "105038";
//let firstZeroPosition = str.indexOf("0");
//console.log("Позиция первого нуля в строке:", firstZeroPosition);
 

//2

//for (let i = 100; i <= 999; i++) {
//	let firstDigit = Math.floor(i / 100);
//	let secondDigit = Math.floor((i % 100) / 10);
//	if (firstDigit + secondDigit === 5) {
//		 console.log(i);
//	}
//}


//3

//let array = [1, 2, 3, 4, 5, 6];
//let valueToRemove = 3;
//let filteredArray = array.filter(item => item !== valueToRemove);
//console.log("Массив после удаления элементов со значением", valueToRemove + ":", filteredArray);


//4

//let array = [1, 2, 3, 4, 5, 6];
//let sum = 0;
//for (let i = 0; i < array.length / 2; i++) {
//    sum += array[i];
//}
//console.log("Сумма первой половины элементов массива:", sum);
