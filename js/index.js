
// document.getElementById('').onclick = function() {

// };

document.getElementById('task1').onclick = function() {
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    let loc_array = createArray(1, CountNumber);
    showResult(loc_array, '');
};

document.getElementById('task2').onclick = function() {
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    let loc_array = createArray(1, CountNumber);
    let min = getMin(loc_array);
    let max = getMax(loc_array);
    let str_result = ('min: ' + min + ' max: ' + max);
    showResult(loc_array, str_result);
};

document.getElementById('task3').onclick = function() {
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    let loc_array = createArray(CountNumber, CountNumber);
    showResult(loc_array, '');
    console.log(loc_array);
};

document.getElementById('task4').onclick = function() {
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    let loc_array = createArray(CountNumber, CountNumber);
    let min = getMin(loc_array);
    let max = getMax(loc_array);
    let str_result = ('min: ' + min + ' max: ' + max);
    showResult(loc_array, str_result);
};

document.getElementById('task5').onclick = function() {
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    var SearchNumber = parseInt(document.getElementById('search_num_input').value);
    let loc_array = createArray(CountNumber, CountNumber);
    let quantity = searchNumber(loc_array, SearchNumber);
    let str_result = ('Количество вхождений: ' + quantity);
    showResult(loc_array, str_result);
};

document.getElementById('task6').onclick = function() {
    let stringInput = document.getElementById('string_input').value.toLowerCase();
    let searchString = document.getElementById('search_string').value.toLowerCase();
    let loc_array = stringToArray(stringInput);
    let quantity = getQuantString(loc_array, searchString);
    let str_result = ('Количество вхождений: ' + quantity);
    showResult('', str_result);
};

document.getElementById('task7').onclick = function() {
    let stringInput = document.getElementById('string_input').value;
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    let loc_array = stringToArray(stringInput);
    let delResult = getDelResult(loc_array, CountNumber)
    showResult(undefined, delResult);
};

document.getElementById('task8').onclick = function() {
    let stringInput = document.getElementById('string_input').value.toLowerCase();
    let loc_array = stringToArrayOfSymb(stringInput);
    let freqSymb = getFrequentSymb(loc_array);
    let result = ('Самый часто встречающийся символ: "' + freqSymb + '"');
    showResult(undefined, result);
};

document.getElementById('task9').onclick = function() {
    var CountNumber = parseInt(document.getElementById('arr_sz').value);
    let loc_array = createArray(1, CountNumber);
    let bubble = bubbleSort(loc_array);
    let str_result = '';
    showResult(bubble, str_result);
};

document.getElementById('task10').onclick = function() {
    let loc_array = iterations();
    let str_result = '';
    showResult(loc_array, str_result);
};

document.getElementById('task11').onclick = function() {
    var SearchNumber = document.getElementById('search_num_input').value;
    var loc_array = getNumbers();
    var translit = getTranslit(loc_array, SearchNumber);
    showResult(undefined, translit);
};

function createArray(row, col) {
    var arr = [];
    for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
            arr[i][j] = Math.floor(Math.random() * 100);
        };
    };
    return arr;       
};

function getMin(array) {
    let min = 100;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < min) {
            min = array[i][j];
            };
        } 
    }
    return min;
};

function getMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
            max = array[i][j];
            };
        } 
    }
    return max;
};

function showResult (array, string) {
    res = '';
    if (array != undefined) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            res = res + (array[i][j] + ' ');
            };
        res = res + ('\n');  
        }; 
    };      
    document.getElementById('result').value = (res + string);
};

function searchNumber (array, search_num) {
    var q = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == search_num) {
                q++;
            };
        };              
    };
    return q;  
};

// One two four one. Four, five five three

function stringToArray(str) {
    var array = str.split(/[ .:;?!~,'"&|()<>{}\[\]\r\n/\\]+/);
    return array;
};

function getQuantString(array, search_str) {
    var q = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == search_str) {
                q++;
        };
    };              
    return q;
};

function getDelResult(array, number) {
    var q = 0;
    for (let i = 0; i < array.length; i++) {
        q++;
        if (q == number) {
            array[i] = '';
            q = 0;
        };
    };
    var delResult = array.join(' ');
    return delResult; 
};

function getFrequentSymb(array) {
    var copy = '';
    var stat = 0;
    var theOne = '';
    if (array.length == 1) {
        return array[0];
    };
    for (let i = 0; i < array.length; i++) {
        var q = 0;
        copy = array[i];
        for (let j = 0; j < array.length; j++) {
            if (copy == array[j]) {
                q++;
            };
        };
        if (q >= stat) {
            theOne = array[i];
            stat = q;
        };
    };
    if (stat != 1) {
         return theOne;
    }else {
        return 'Не найдено';
    };
};

function stringToArrayOfSymb(str) {
    var array = str.split("");
    return array;
};

function bubbleSort(array) {
    var swapp;
    var tempArray = array[0];
    var n = tempArray.length-1;
    do {
        swapp = false;
            for (let j = 0; j < n; j++) {
                if (tempArray[j] > tempArray[j+1]) {
                var a = tempArray[j+1];
                tempArray[j+1] = tempArray[j];
                tempArray[j] = a;
                swapp = true;
                };
            };    
    n--;
    } while (swapp);
    array[0] = tempArray;
    return array;
};

function iterations() {
    var array = [];
    var count = 1;
    for (let i = 0; i < 10; i++) {
        array[i] = [];
        count = 1;
        for (let j = 0; j < 10; j++) {
            if (i < count) {
                array[i][j] = count;
            } else {
                array[i][j] = count;
                count++;
            };
        };
    };
    array[9][9] = 0; 
    return array;   
};

function getNumbers() {
    var units = {
        
        "1" : "one",
        "2" : "two",
        "3" : "three",
        "4" : "four",
        "5" : "five",
        "6" : "six",
        "7" : "seven",
        "8" : "eight",
        "9" : "nine"
    };


    var decimals = {
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    };
    var teens = {
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "forteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen"
    };
    // var hundreds = {
    //     "100": "сто",
    //     "200": "двести",
    //     "300": "триста",
    //     "400": "четыреста",
    //     "500": "пятьсот",
    //     "600": "шестьсот",
    //     "700": "семьсот",
    //     "800": "восемьсот",
    //     "900": "девятьсот"
    // };

    //var numbers = [units, decimals, teens];

    var numbers = {"units":units, "decimals":decimals, "teens": teens};
    return numbers;
};

function getTranslit(numbers, search_num) {

    var arr_thous = search_num.split("");
    var arr = arr_thous.splice(-3, 3); 
    
    var word = "";

    // Particular case for Zero
    if ((arr.length == 1)&&(arr[0] == 0)) {
        return "zero";
    };
    
    // Getting hundreds in words
    var teen = (arr.length - 2);
    if (arr[teen] == 1) {
        word = procTeens(arr, " ", numbers, word);
        arr = [];
    }; 

    if (arr.length > 2) {
        var arr_hund = arr.splice(-3, 1);};
    getZeros(arr);
    word = inWords(arr, arr_hund, '', numbers, word);
    

    // Getting thousands in words, if any
    if (arr_thous.length != 0) {
        var teen = (arr_thous.length - 2);
        if (arr_thous[teen] == 1) {
            word = procTeens(arr_thous, " thousand ", numbers, word);
            arr_thous = [];
            return word;
        }; 

        
        var arr_thous_hund = [];
        if (arr_thous.length > 2) {
            arr_thous_hund = arr_thous.splice(-3, 1);
        };
        getZeros(arr_thous);
        word_thous = inWords(arr_thous, arr_thous_hund, ' thousand ', numbers, "");
    word = word_thous + word;
    };
    
    return word;
}; 

function getZeros(array) {
    var zeros = "";
    for (let i = (array.length - 1); i >= 0; i--) {
        array[i] = array[i] + zeros;
        zeros += "0";
    };
};

function procTeens(array, thousWord, numbers, word) {
    var teen = (array.length - 2);
    var teenWord = array[teen] + array[teen + 1];
            for (var key in numbers["teens"]) { 
                if (key == teenWord) {
                    word = numbers["teens"][key]+ thousWord + word;
                    break;
                }; 
            };
            
            array[array.length - 1] = "";
            array[array.length - 2] = "";
            for (var key in numbers["units"]) { 
                if (key == array[0]) {
                    word = numbers["units"][key] + " hundred " + word; 
                    break;
                };         
            };
    array = [];
    return word;
}; 
    
function inWords(array, array_hund, thousWord, numbers, word) {
    for (var kit in numbers) {
    loop:
    for (var key in numbers[kit]) { 
        for (let i = (array.length - 1); i >= 0; i--) {
            if (key == array[i]) {
                word = numbers[kit][key] + " " + word; 
                break loop;
            };         
        };
    };
};
    word += thousWord;
    if (array_hund != undefined) {
        for (var key in numbers["units"]) { 
            if (key == array_hund[0]) {
                word = numbers["units"][key] + " hundred " + word; 
                break;
            };         
        };
    };   
    return word;
};
  

