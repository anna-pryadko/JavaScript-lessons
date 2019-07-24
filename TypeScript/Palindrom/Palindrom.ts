let arr_word:Array<string> = ["shai", "saas", "fullstack", "madam"];
let arr_yes:Array<string>=[];
let arr_no:Array<string>=[];

getWord(arr_word);

function checkPalindrome(word:string) {
    // var strLen = str.length,
       let wordReverse:string = word.split('').reverse().join(''); 
        //Разбиваем строку 
        // посимвольно  и превращаем ее в массив с помощью split(''), 
        // потом применяем к нему метод reverse() и собираем все символы 
        // в строку с помощью join('')
    if (wordReverse == word) {
        arr_yes.push(word);
    } else {
        arr_no.push(word);
    }
  }

  function getWord(arr_word)
  {
    for (let i:number=0; i < arr_word.length;i++) {
        checkPalindrome(arr_word[i]); 
    }
  }

console.log("Palindroms: "+arr_yes);
console.log("No palindroms: "+arr_no);

