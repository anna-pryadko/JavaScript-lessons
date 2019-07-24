var arr_word = ["shai", "saas", "fullstack", "madam"];
var arr_yes = [];
var arr_no = [];
getWord(arr_word);
function checkPalindrome(word) {
    // var strLen = str.length,
    var wordReverse = word.split('').reverse().join('');
    //Разбиваем строку 
    // посимвольно  и превращаем ее в массив с помощью split(''), 
    // потом применяем к нему метод reverse() и собираем все символы 
    // в строку с помощью join('')
    if (wordReverse == word) {
        arr_yes.push(word);
    }
    else {
        arr_no.push(word);
    }
}
function getWord(arr_word) {
    for (var i = 0; i < arr_word.length; i++) {
        checkPalindrome(arr_word[i]);
    }
}
console.log("Palindroms: " + arr_yes);
console.log("No palindroms: " + arr_no);
