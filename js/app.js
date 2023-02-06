// //1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin

// let fullName = "Elyane Mehiyeva Ehtiram";
// let letter = fullName.split("");
// console.log(letter);


// ----------------------------------------------------------------------------------------------------------------------------


// 2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

// let fullNameArray = ['E', 'l', 'y', 'a', 'n', 'ə', ' ', 'M', 'ə', 'h', 'i', 'y', 'e', 'v', 'a', ' ', 'E', 'h', 't', 'i', 'r', 'a', 'm'];

// let firstSpaceIndex = fullNameArray.indexOf(" ");
// let secondSpaceIndex = fullNameArray.indexOf(" ", firstSpaceIndex + 1);

// let surnameArray = fullNameArray.splice(firstSpaceIndex + 1, secondSpaceIndex - firstSpaceIndex);

// for (let index = surnameArray.length - 1; index >= 0; index--) {
//     fullNameArray.unshift(surnameArray[index])
// }

// console.log(fullNameArray);


// ----------------------------------------------------------------------------------------------------------------------------


// //3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin

// let fullNameString = fullNameArray.join("");
// console.log(fullNameString);


// ----------------------------------------------------------------------------------------------------------------------------


// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// 4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// 1-ci usul

// let count_of_five = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         count_of_five++
//     }
// }
// console.log(count_of_five);

// 2ci usul

// let count_of_5 = arr.filter(element=>element==5).length;

// console.log(count_of_5);

// ----------------------------------------------------------------------------------------------------------------------------


//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// let sum_of_arr = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum_of_arr+=arr[i]
// }
// console.log(sum_of_arr);


// ----------------------------------------------------------------------------------------------------------------------------


//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// function count(search, array) {
//     return array.filter(element => element == search).length
// }

// let new_array = arr.filter(element => count(element, arr) > 1).sort();
// console.log(new_array);

// ----------------------------------------------------------------------------------------------------------------------------


//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

// let max_number = Math.max(...arr);
// function count(search, array) {
//     return array.filter(element => element == search).length
// };
// console.log(count(max_number, arr));


// ----------------------------------------------------------------------------------------------------------------------------


//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

// let random_number = Math.floor(Math.random()*10);

// if(arr.find(element=>element==random_number)==undefined){
//     console.log(random_number + " Arrayda yoxdur");
// }else{
//     console.log(random_number + " Arrayda var");
// }


// ----------------------------------------------------------------------------------------------------------------------------


//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin

// let name = "Elyane";

// let number = name.length;

// if (arr.find(element => element == number) == undefined) {
//     console.log(number + " Arrayda yoxdur");
// } else {
//     console.log(number + " Arrayda var");
// }


// ----------------------------------------------------------------------------------------------------------------------------


//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// let number = arr.find(element=>element%3==2);
// console.log(arr.indexOf(number));


// ----------------------------------------------------------------------------------------------------------------------------


//11) arraydaki en boyuk reqemin ilk indexini tapin

// let max_number = Math.max(...arr);
// console.log(arr.indexOf(max_number));


// ----------------------------------------------------------------------------------------------------------------------------


//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let indeksler = [];
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]==4){
//         indeksler.push(index)
//     }
// }
// console.log(indeksler);


// ----------------------------------------------------------------------------------------------------------------------------



//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let min_index_five = arr.indexOf(5)
// let max_index_five = arr.lastIndexOf(5)
// console.log(min_index_five);
// console.log(max_index_five);


// ----------------------------------------------------------------------------------------------------------------------------



//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin 

// let new_arr = arr.filter(element => element > 2);

// let first_array_length = arr.length;
// let second_array_length = new_arr.length;

// console.log(first_array_length - second_array_length);



// ----------------------------------------------------------------------------------------------------------------------------



//15) 7 reqeminin indexleri cemini tap

//  1 ci usul
// let sum = 0
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == 7) {
//         sum+=index 
//         console.log(index)
//     }
// }
// console.log("Indeksler Cemi : "+sum);

// 2 ci usul

// let indeksler = [] // 19 29 31
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == 7) {
//         indeksler.push(index)
//     }
// }

// let total = 0
// for (let index = 0; index < indeksler.length; index++) {
//     total+=indeksler[index]
// }

// console.log(indeksler)
// console.log(total)


// ----------------------------------------------------------------------------------------------------------------------------


// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]

// ----------------------------------------------------------------------------------------------------------------------------


// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// 1-ci usul
// let new_array = arr2.filter(element=>element.name[0].toLowerCase()=="t")
// console.log(new_array)

// 2-ci usul
// let new_list = []
// for (const element of arr2) {
//     if (element.name[0] == "t") {
//         new_list.push(element)
//     }
// }
// console.log(new_list)


// ----------------------------------------------------------------------------------------------------------------------------


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// let new_arr_len = arr2.filter(element=>(element.name[0]=="t" && element.name[element.name.length - 1]=="t")).length;

// console.log(new_arr_len);


// ----------------------------------------------------------------------------------------------------------------------------


// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let new_arr = arr2.filter(element=>element.name[0]=="t" && element.name[element.name.length-1]=="t");
// let total = 0;

// for (const element of new_arr) {
//     total+=element.key;
// }
// console.log(total);


// ----------------------------------------------------------------------------------------------------------------------------


// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini  "SuperDev" sozu ile evezleyin.

// for (let index = 0; index < arr2.length; index++) {
//     let element = arr2[index]
//     let element_name = element.name
//     let last_letter = element_name[element_name.length-1]
//     if(last_letter == "e"){
//         element.name = "SuperDev"
//     }
// }

// console.log(arr2);


// ----------------------------------------------------------------------------------------------------------------------------


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// let max_number = 0
// let max_element = null

// for (let index = 0; index < arr2.length; index++) {
//     let element = arr2[index]
//     let element_length = element.name.length
//     if (element_length > max_number) {
//         max_number = element_length
//         max_element = element
//     }
// }
// console.log(max_number);
// console.log(max_element.key);


// ----------------------------------------------------------------------------------------------------------------------------


// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// let max_name_length = 0;
// let max_index = 0;

// for (let index = 0; index < arr2.length; index++) {
//     let element = arr2[index]
//     let element_name = element.name
//     if (max_name_length < element_name.length) {
//         max_name_length = element_name.length
//         max_index = index
//     }
// }

// console.log(max_index**2);


// ----------------------------------------------------------------------------------------------------------------------------


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// let new_array = arr2.filter(element=>element.name.length == 4);
// console.log(new_array)


// ----------------------------------------------------------------------------------------------------------------------------



// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// let max_key = 0;
// let max_name = null;
// for (let index = 0; index < arr2.length; index++) {
//     let element = arr2[index]
//     let element_key = element.key 
//     if(element_key > max_key){
//         max_key = element_key
//         max_name = element.name
//     }    
// }
// console.log(max_key);
// console.log(max_name);



// ----------------------------------------------------------------------------------------------------------------------------



// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// for (let index = 0; index < arr2.length; index++) {
//     let element_name = arr2[index].name
//     let count_of_l = CountOfLetter(element_name,"L")
//     if(count_of_l==2){
//         console.log(index);
//     }
// }

// function CountOfLetter(word,searching_letter){
//     searching_letter = searching_letter.toLowerCase();
//     word = word.toLowerCase();
//     let count_of_letter = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i]==searching_letter){
//             count_of_letter++
//         }
//     }
//     return count_of_letter;
// }



// ----------------------------------------------------------------------------------------------------------------------------



// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


// for (let index = 0; index < arr2.length; index++) {
//     let element_name = arr2[index].name;
//     let element_key = arr2[index].key;
//     let count_of_t = CountOfLetters(element_name, "t");
//     if (count_of_t == 2) {
//         console.log(element_key);
//     }
// }

// function CountOfLetters(word, searching_letter) {
//     searching_letter = searching_letter.toLowerCase();
//     word = word.toLowerCase();
//     let count_of_letter = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == searching_letter) {
//             count_of_letter++
//         }
//     }
//     return count_of_letter;
// }



// ----------------------------------------------------------------------------------------------------------------------------



// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
// arr2-de key-lere gore en boyukden kiciye dogru elementleri yazdirin


// let keys = [];
// for (let i = 0; i < arr2.length; i++) {
//     let element = arr2[i]
//     keys.push(element.key)
// }
// keys = keys.sort((a, b) => b-a);
// let new_arr = [];
// for (let index = 0; index < keys.length; index++) {
//     let key = keys[index]
//     for (let j = 0; j < arr2.length; j++) {
//         let element = arr2[j]
//         if(element.key == key){
//             new_arr.push(element)
//         }
//     }
// }
// console.log(new_arr);


// ----------------------------------------------------------------------------------------------------------------------------



// 27 Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

// let examPoint = 40;
// let startPoint = 17;

// switch (true) {
//     case startPoint + examPoint > 100:
//         console.log("Max bal 100 ola biler!");
//         break;
//     case (startPoint < 17 || startPoint + examPoint < 51):
//         console.log("F");
//         break;
//     case (startPoint + examPoint > 90):
//         console.log("A")
//         break;
//     case (startPoint + examPoint > 80):
//         console.log("B")
//         break;
//     case (startPoint + examPoint > 70):
//         console.log("C")
//         break;
//     case (startPoint + examPoint > 60):
//         console.log("D")
//         break;
//     default:
//         console.log("E")
//         break;
// }



// ----------------------------------------------------------------------------------------------------------------------------
