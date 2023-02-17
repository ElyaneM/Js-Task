// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

let SET = 'SET_DATA';
let GET = 'GET_DATA';
let DELETE = 'DELETE_DATA';

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// //  1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin


// function Query(TYPE) {
//     switch (TYPE) {
//         case SET:
//             console.log(SET)
//             break;
//         case GET:
//             console.log(GET);
//             break;
//         case DELETE:
//             console.log(DELETE);
//             break;
//         default:
//             throw new Error(`# Choose the correct type! TYPE=${TYPE}`)
//     }
// }

// let TYPES = ["CRUD", SET, GET, DELETE, "UPDATE_DATA"]

// TYPES.forEach(TYPE => {
//     try {
//         Query(TYPE)
//     } catch (error) {
//         // console.log(error.message)
//         console.warn(error.message)
//     }
// });


// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// //  1.2  2ci merhelede functiondan kenarda array yaradin ve 
// //         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// //  1.3 Case -  'DELETE'  olarsa arraydan 1 item silin 
// //     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
// //     ve sonda arrayi consola cixardin.

// //  1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// // Task 1-2 & 1-3 & 1-4
// let DATABASE = []
// function Query(TYPE) {
//     switch (TYPE) {
//         case SET:
//             const random_number = Math.floor(Math.random() * 10)
//             DATABASE.push(random_number)
//             break;
//         case DELETE:
//             if (DATABASE.length == 0) {
//                 throw new Error("Silinecek data tapılmadı.")
//             } else {
//                 DATABASE.pop()
//                 console.group("TYPE=DELETE")
//                 console.log(DATABASE)
//                 console.groupEnd()
//             }
//             break;
//         case GET:
//             console.group("TYPE=GET")
//             console.log(DATABASE)
//             console.groupEnd()
//             break;
//         default:
//             console.log("# Wrong choice!")
//             break;
//     }
// }

// // Task 1-2 ni calisdirmaq ucun
// Query(SET)
// Query(GET)
// Query(SET)


// // Task 1-3 u calisdirmaq ucun
// Query(SET)
// Query(SET)
// Query(SET)
// Query(DELETE)
// Query(SET)
// Query(DELETE)

// // Task 1-4 calisdirmaq ucun
// Query(SET)
// Query(SET)
// Query(SET)
// Query(GET)
// Query(DELETE)
// Query(GET)



// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin  
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.



// mL.forEach(m => {
//     switch (m) {
//         case "January":
//             console.log(`${m} - 31 days`);
//             break;
//         case "February":
//             console.log(`${m} - 28-29 days`);
//             break;
//         case "March":
//             console.log(`${m} - 31 days`);
//             break;
//         case "April":
//             console.log(`${m} - 30 days`);
//             break;
//         case "May":
//             console.log(`${m} - 31 days`);
//             break;
//         case "June":
//             console.log(`${m} - 30 days`);
//             break;
//         case "July":
//             console.log(`${m} - 31 days`);
//             break;
//         case "August":
//             console.log(`${m} - 31 days`);
//             break;
//         case "September":
//             console.log(`${m} - 30 days`);
//             break;
//         case "October":
//             console.log(`${m} - 31 days`);
//             break;
//         case "November":
//             console.log(`${m} - 30 days`);
//             break;
//         case "December":
//             console.log(`${m} - 31 days`);
//             break;

//         default:
//             console.warn("# Warn");
//             break;
//     }
// })



// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let now_date = new Date()

// let month_index = now_date.getMonth()
// let year = now_date.getFullYear()
// let month = mL[month_index]

// const result = `${month} - ${new Date(year, month_index + 1, 0).getDate()}`;
// console.log(result)




// ------------------------------------------------------------------------------------------------------------------------------------------------------------




// // 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// //  QEYD case - ayin ozu olmalidir.

// let today = new Date()
// let m = today.getMonth() + 1

// switch (true) {
//     case m > 6:
//         console.log("Ikinci Yarisi")
//         break;
//     case m <= 6:
//         console.log("Birinci Yarisi")
//         break;
//     default:
//         console.warn("# Warn");
//         break;
// }




// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// //  5) 4 cu taski heftenin gunleri ile yoxlayin

// let week = new Date().getDay() + 1
// switch (true) { 
//     case week > 3:
//         console.log("Ikinci Yarisi")
//         break;
//     case week <= 3:
//         console.log("Birinci Yarisi")
//         break;
//     default:
//         console.log("# Warn!")
//         break;
// }




// ------------------------------------------------------------------------------------------------------------------------------------------------------------



//  6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun


// =================================================================================================



// // 1-ci usul
// //  Umumi Bazar Gunlerinin Sayi (Baslangic Tarixden Son Tarixedek)
// let count_of_sundays = 0 

// // Indiki Zamana Qeder Bazar Gunlerinin Sayi !Qeyd Indiki Zaman Baslangic Ve Son Tarixin Arasinda olmalidir
// let count_of_sundays_still_now = 1 

// let start_2023 = new Date(2023, 1, 1)
// let end_2023 = new Date(2023, 2, 1)
// let now = new Date()


// while (end_2023 > start_2023) {
//     if (start_2023.getDay() == 0) {
//         count_of_sundays++
//         if (now > start_2023) {
//             count_of_sundays_still_now++
//         }
//     }
//     start_2023.setDate(start_2023.getDate() + 1)
// }

// console.log(count_of_sundays)
// console.log(count_of_sundays_still_now)

// =================================================================================================


// 2- ci usul

// let start = new Date(2023, 1, 1)
// let now = new Date().getDate()
// let count_of_week = 1
// for (let i = 1; i <= now; i++) {
//     if (i % 7 == 0) {
//         count_of_week++
//     }
// }
// console.log(count_of_week,'heftedeyik')




// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin 
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5


// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'], 
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//     ['August'], 
//     ['September'],
//     ['October'],
//     ['November'], 
//     ['December']
// ];


// let new_array = []
// for (let i = 0; i < mL.length; i++) {
//     new_array.push([mL[i]])
// }
// mL = new_array
// console.log(mL);




// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'], 
//     ['May','June','July','August'], 
//     ['September' , 'October', 'November', 'December']
// ];


// let new_array = []
// let group = []
// for (let i = 0; i < mL.length; i++) {
//     group.push(mL[i])
//     if (group.length == 4) {
//         new_array.push(group)
//         group = []
//     }
// }
// if (group.length != 0) {
//     new_array.push(group)
// }
// mL = new_array
// console.log(mL);




// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// //  Almali oldugunuz
// // let mL = [
// //     ['January','February',['March','April']], 
// //     ['May','June',['July','August']], 
// //     ['September' , ['October', 'November', 'December']]
// // ];

// let new_array = []
// let group = []
// let element_count = 0
// for (const element of mL) {
//   group.push(element)
//   element_count++
//   if(group.length == 4 && new_array.length<2){
//     let last_elements = [group.pop(),group.pop()].reverse()
//     group.push(last_elements)
//   } else if(group.length == 4 && new_array.length ==2){
//     let last_elements = [group.pop(),group.pop(),group.pop()].reverse()
//     group.push(last_elements)
//   }

//   if(element_count == 4){
//     new_array.push(group)
//     group = []
//     element_count = 0
//   }

// }
// mL = new_array
// console.log(mL)




// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// //  Almali oldugunuz
// // let mL = [
// //     ['January','February',['March',['April']]], 
// //     ['May','June',['July',['August']]], 
// //     ['September' , ['October', 'November', ['December']]]
// // ];

// let new_array = []
// let group = []
// let element_count = 0
// for (const element of mL) {
//   group.push(element)
//   element_count++
//   if(group.length == 4 && new_array.length<2){
//     let last_elements = [[group.pop()],group.pop()].reverse()
//     group.push(last_elements)
//   } else if(group.length == 4 && new_array.length ==2){
//     let last_elements = [[group.pop()],group.pop(),group.pop()].reverse()
//     group.push(last_elements)
//   }

//   if(element_count == 4){
//     new_array.push(group)
//     group = []
//     element_count = 0
//   }

// }
// mL = new_array
// console.log(JSON.stringify(mL))




// ------------------------------------------------------------------------------------------------------------------------------------------------------------




// // 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// //  Almali oldugunuz
// // let mL = [
// //     ['January','February',['March','April']], 
// //     ['September' , ['October', 'November', 'December']]
// //     ['May','June',['July','August']], 
// // ];
// let new_array = []
// let group = []
// let element_count = 0
// for (const element of mL) {
//   group.push(element)
//   element_count++
//   if(group.length == 4 && new_array.length%2==0){
//     let last_elements = [group.pop(),group.pop()].reverse()
//     group.push(last_elements)
//   } else if(group.length == 4 && new_array.length%2==1){
//     let last_elements = [group.pop(),group.pop(),group.pop()].reverse()
//     group.push(last_elements)
//   }

//   if(element_count == 4){
//     new_array.push(group)
//     group = []
//     element_count = 0
//   }

// }
// mL = new_array
// console.log(mL)





// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Elyane Mehiyeva'

// // let result = [
// //     ['E' , 'M']
// //     ['L' , 'E']
// //     ['Y' , 'H']
// //     ['A' , 'I']
// //     ['N' , 'Y']
// //     ['E' , 'E']
// //     ['X' , 'V']
// //     ['X' , 'A']
// // ]
// let [myname,mysurname] = fullName.toUpperCase().split(" ")

// if(myname.length != mysurname.length){
//     while(myname.length < mysurname.length){
//         myname+= "X"
//     } 
//     while(myname.length > mysurname.length){
//         mysurname+= "X"
//     }
// }

// let result = []
// for (let i = 0; i < myname.length; i++) {
//     result.push([myname[i],mysurname[i]])
// }

// console.log(result)




// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de 
// //daxil olmaqla tersine cevirin
// // gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let text = 'Ey babeK kebaB ye!'
// let result = ''
// for (let i = text.length-1; i >=0; i--) {
//     result+=text[i]
// }
// console.log(result)



// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// // 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

// let total = 0
// for (const element of arr) {
//     if(element%5==0 && element%7==0){
//         total+=element
//     }
// }
// console.log(total)




// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// // 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi 
// //tapin (biraz cetindir tapmasaniz biryerde baxarg)
// let new_arr = []

// for (const element of arr) {
//     if(Math.floor(element/100)>0 && Math.floor(element/100) <=9 && element%2==0){
//         new_arr.push(element)
//     }
// }
// console.log(new_arr) // [ 234, 342, 140 ]

// let min_number = new_arr[0]
// let max_number = new_arr[0]
// for (const element of new_arr) {
//     if(element<min_number){
//         min_number = element
//     }
//     if(element>max_number){
//         max_number = element
//     }
// }
// console.log(min_number)
// console.log(max_number)



// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// // 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 
// // 3 e bolune bilen en kicik reqemi tapin
// let new_arr = []
// for (const element of arr) {
//     if(element%3==0 && element>3){
//         new_arr.push(element)
//     }
// }

// let min_number = new_arr[0]
// for (const element of new_arr) {
//     if(element<min_number){
//         min_number = element
//     }
// }

// console.log(min_number)




// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// // 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3:2,
//     key4:4,
//     key5:53,
//     key7:7,
//     key8:8,
//     key9:91,
// }

// for (const key in obj) {
//    if(key[key.length - 1] == obj[key]){
//     console.log("Key :"+key, "\tValue : "+ obj[key])
//    }
// }



// ------------------------------------------------------------------------------------------------------------------------------------------------------------


