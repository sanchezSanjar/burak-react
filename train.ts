//  MIT TASK - L
/*Shunday function yozing, u string qabul qilsin va string ichidagi 
hamma sozlarni chappasiga yozib va sozlar ketma-ketligini 
buzmasdan stringni qaytarsin. 
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc". */

// function reverseSentence(str: string): string {
//   return str.split(' ').map((word: string) => word.split('').reverse().join('')).join(' ');
// }

// // Test
// console.log(reverseSentence("we like coding!"));  // "ew ekil !gnidoc"

// // MIT TASK - M
/* Shunday function yozing, u raqamlardan tashkil topgan 
array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi
 va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, 
 hosil bolgan objectlarni array ichida qaytarsin. 
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, 
{number: 2, square: 4}, {number: 3, square: 9}].*/

// interface SquareNumber {
//   number: number;
//   square: number;
// }

// function getSquareNumbers(arr: number[]): SquareNumber[] {
//   return arr.map((num: number): SquareNumber => ({ number: num, square: num * num }));
// }

// // Test
// console.log(getSquareNumbers([1, 2, 3]));


// // MIT TASK - N
/* Shunday function yozing, u string qabul qilsin va 
string palindrom yani togri oqilganda ham, orqasidan oqilganda 
ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin. 
MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false.*/

// function palindromCheck(str: string): boolean {
//   const reversed: string = str.split('').reverse().join('');
//   return str === reversed;
// }
// console.log(palindromCheck("dad"));  

/* >>>>> Project Standards <<<<<<<:
  - Logging standards
  - Naming standards:
    function, method, variable => CAMEL  goHome
    class => PASCAL                      MemberService
    folder => KEBAB
    css => SNAKE                         botton_style
  - Error handling

*/ 

/* 
  Traditional API
  Rest API
  GraphQL API
  ...
*/

/*
  Traditional FD   =>   BSSR   =>   EJS 
  Modern FD        =>   SPA    =>   REACT
*/


// // MIT TASK - O
/*Shunday function yozing, u har xil valuelardan iborat 
array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin. 
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45. */

// function sumOfNumbers(arr: unknown[]): number {
//   return arr
//     .filter((item): item is number => typeof item === "number")
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumOfNumbers([10, "10", { son: 10 }, true, 35])); // 45

// // MIT TASK - P
/*Shunday function yozing, u object qabul qilsin
 va arrayni object arrayga otkazib arrayni qaytarsin. 
MASALAN: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]. */

// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 })); // [["a", 10], ["b", 20]]


// // MIT TASK - Q
/*Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, 
ikkinchisi string. Agar string parametr objectni propertysi 
bolsa true bolmasa false qaytarsin. MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") 
return true; hasProperty({name: "BMW", model: "M3"}, "year") return false. */

// function hasProperty(
//   obj: Record<string, unknown>,
//   property: string
// ): boolean {
//   return property in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// // MIT TASK - R
/*Shunday function yozing, u string parametrga ega bolsin. 
String "1+2" holatda pass qilinganda string ichidagi 
sonlar yigindisini number holatda qaytarsin. 
MASALAN: calculate("1+3") return 4. */

// function calculate(str: string): number {
//   const numbers = str.split("+");
//   return Number(numbers[0]) + Number(numbers[1]);
// }

// console.log(calculate("1+3")); // 4

// // MIT TASK - S
/* Shunday function yozing, u numberlardan tashkil topgan 
array qabul qilsin va osha numberlar orasidagi tushib 
qolgan sonni topib uni return qilsin. 
MASALAN: missingNumber([3, 0, 1]) return 2. */

// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((acc, num) => acc + num, 0);
//     return expectedSum - actualSum;
// }

// // Test
// console.log(missingNumber([3, 0, 1])); // 2


// // MIT TASK - T
/* Shunday function yozing, u sonlardan tashkil topgan 
2 ta array qabul qilsin va ikkala arraydagi sonlarni 
tartiblab bir arrayda qaytarsin. 
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]) return [0,3,4,4,6,30,31]. */

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const merged = [...arr1, ...arr2];
//     return merged.sort((a, b) => a - b);
// }

// // Test
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 
// // [0, 3, 4, 4, 6, 30, 31]

// // MIT TASK - U

/* Shunday function yozing, uni number parametri bolsin va 
0 dan berilgan parametrgacha bolgan oraliqdagi faqat 
toq sonlar nechtaligini return qilsin. 
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5. */

// function sumOdds(number: number): number {
//     let count: number = 0;
//     for (let i = 1; i < number; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(sumOdds(9));  // 4  (1, 3, 5, 7)
// console.log(sumOdds(11)); // 5  (1, 3, 5, 7, 9)

// 
// // MIT TASK - V

/*Shunday function yozing, uni string parametri bolsin va stringdagi 
harf va u harf necha marta takrorlangani sonidan tashkil 
topgan object qaytarsin. MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}.
*/


// function countChars(str: string): {[key: string]: number} {
//     const result: {[key: string]: number} = {};
    
//     for (let char of str) {
//         if (result[char]) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         }
//     }
    
//     return result;
// }

// console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }
// console.log(countChars("javascript")); // { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }


// // MIT TASK - W

/* Shunday function yozing, uni array va number parametrlari bolsin.
 Function arrayni numberda berilgan uzunlikda kesib bolaklarga 
 ajratilgan array holatida qaytarsin. MASALAN: 
chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]. */

// function chunkArray(array: number[], size: number): number[][] {
//     const result: number[][] = [];

//     for (let i = 0; i < array.length; i += size) {
//         const chunk = array.slice(i, i + size);
//         result.push(chunk);
//     }

//     return result;
// }

// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3)); 
// // [[1,2,3], [4,5,6], [7,8,9], [10]]





// // MIT TASK - X

/* Shunday function yozing, uni object va 
string parapetrlari bolsin. Function string parametri object 
ichida necha marotaba takrorlanganligini qaytarsin 
(nested object bolsa ham sanasin). MASALAN: 
countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2. */

function countOccurrences(obj: {[key: string]: any}, target: string): number {
    let count = 0;

    for (let key in obj) {
        if (key === target) {
            count++;
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            count += countOccurrences(obj[key], target);
        }
    }

    return count;
}

console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'));