
//1. Создайте функцию, которая принимает массив в качестве аргумента и возвращает истину или ложь в зависимости от того, является ли среднее всех элементов в массиве целым числом или нет.
//isAvgWhole([1, 3]) ➞ true
//isAvgWhole([1, 2, 3, 4]) ➞ false
//isAvgWhole([1, 5, 6]) ➞ true
//isAvgWhole([1, 1, 1]) ➞ true
//isAvgWhole([9, 2, 2, 5]) ➞ false
         

function isAvgWhole(arr){
    let sum = arr.reduce((sum, current) => sum + current, 0);
    return Number.isInteger(sum / arr.length);
    
}

console.log(isAvgWhole([1, 3])); //4
console.log(isAvgWhole([1, 2, 3, 4])); //10
console.log(isAvgWhole([1, 5, 6])); //12
console.log(isAvgWhole([1, 1, 1])); //3
console.log(isAvgWhole([9, 2, 2, 5])); //18


//2. Дан массив чисел, верните массив, содержащий все четные числа в исходном массиве, который также имеет четные индексы.
//getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
//getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
//getOnlyEvens([1, 2, 3, 4, 5]) ➞ []


function getOnlyEvens(arr){
    let arrResult = [];
    arr.forEach(function(elem, index){
        if (elem % 2 == 0 && index % 2 == 0){
            arrResult.push(elem);
        }
        return arrResult;
    });
    return arrResult;
}


console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));


// DRINKS_HASH_FUNC Project

function HashStorageFunc(){
    let obj = {};

    this.addValue = function(key,value){
        obj[key] = value;
    } 

    this.getValue = function(key){
        return obj[key];
    }

    this.deleteValue = function(key){
        if(obj[key] !== undefined) {
            delete obj[key]
            return true;
        } else {
            return false;
        }
    }

    this.getKeys = function(){
        let arrKeys = [];
        for (let key in obj){
            arrKeys.push(key);
        }
        return arrKeys;
    } 
}

let drinkStorage = new HashStorageFunc();

function inputDrinkData() {
    var nameDrink = prompt("введите название напитка, '' ");
    var isAlc = confirm("он алкогольный?");
    var alc = isAlc ? 'да' : 'нет';
    var structure= prompt("способ приготовления, '' ");
    var result = "напиток: " + nameDrink + " алкогольный: " + alc + " рецепт приготовления: " + structure;
    drinkStorage.addValue(nameDrink, result);
}

function getDrinkData() {
    var nameDrink = prompt("введите название напитка, '' ");
    var result = drinkStorage.getValue(nameDrink);
    if(result !== undefined) {
        alert(result);
    } else {
        alert ("Такой напиток отсутствует"); 
    }
}

function deleteDrinkData() {
    var nameDrink = prompt("введите название напитка, '' ");
    alert(drinkStorage.deleteValue(nameDrink) ? "Напиток удален" : "Такой напиток отсутствует");
}

function drinksList() {
    alert(drinkStorage.getKeys());
}







 
