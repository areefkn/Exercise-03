// soal no.1
// menggunakan for Loop
const _number : number =9;
    for (let i = 1; i <= 10; i++){
        console.log(`${_number} x ${i} = ${_number * i}`);
    }


// soal no .2
// function palindrome(str: string){
//     console.log(str.split("").reverse().join(""));
//     return str.split("").reverse().join("") === str ? "palindrome"
// }



// Soal no.3
const cm: number = 100000; // Panjang dalam cm
const km: number = cm / 100000;
    console.log(`${cm} cm = ${km} km`);



// Soal no.4
const amount: number = 1000; // Angka yang ingin diformat
const formatted: string = amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
});
    console.log(formatted);


// Soal no.5
function removeFirstOccured( str1: string, search: string){
    return str1.replace(search, "");
}
console.log(removeFirstOccured("Hello world", "ell"));


// Soal no.6
// .toUpperCase
const menyapa: string = "hello world";
const capitalized: string = menyapa
    .split(" ")  // ["hello", "world"]
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))  // => (arrow fungtion atau fungsi anonim)
    .join(" ");
    console.log(capitalized);
// use function
function capitalizeFirstChar(str : string){
    let split: string[] = str.split(" ");
    console.log(split); 
    split.map((str, idx ) => split[idx] = str[0].toUpperCase() + split[idx].slice(1))
    return split.join(" ");
}
    console.log(capitalizeFirstChar("hello world"))


// Soal no.7
function swapCapital(str: string){
    let res: string = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            res += str[i].toUpperCase();
        } else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}
    console.log(swapCapital(" tHe Quick BRown FoX"));

    // use function
    

    // Soal no.8
    // ternary
    const num1: number = 42;
    const num2: number = 27;
    if (num1 >= num2) {
        console.log(`${num1} lebih besar`);
    } else {
        console.log(`${num2} lebih besar`);
    }

// Soal no.9
// function sort(num1: number, num2: number, num3: number){
//     if (num1 < num2 && num1 < num3){
//         if(num2 < num3){
//             return[num1, num2, num3]
//         } else {
//             return [num1, num3, num2]
//         }
//     } else if ()
// };

// Soal no.10
function typeData(input: any){
    if (typeof input === "string"){
        return 1;
    } else if (typeof input === "number"){
        return 2;
    } else{
        return 3;
    }
}
console.log(typeData(null));
console.log(typeof null);


// Soal no.11
let merubahString : string = "Satu apel sehari menjauhkan kita dari dokter"
    .replace(/a/g, "*");
    console.log(merubahString);


function changeA( str: string){
    let res: string = "";
    for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() === "a") {
            res += "*";
        } else {
            res += str[i];
        }
        console.log(res);
    }
    return res;
}
console.log(changeA("SAtu apel sehari menjauhkan kita dAri dokter"))