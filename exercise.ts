// soal no.1
// menggunakan for Loop
const _number : number =9;
    for (let i = 1; i <= 10; i++){
        console.log(`${_number} x ${i} = ${_number * i}`);
    }


// soal no .2
// Ternary
// const str : string = "palindrom";
// let _nama : string = "madam";

// if (typeof _nama){
//     console.log(`${_nama}`);
// } if else {
//     console.log(`${_nama} Bukan ${str}`);
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

// Soal no.6
// .toUpperCase
const menyapa: string = "hello world";
const capitalized: string = menyapa
    .split(" ")  // ["hello", "world"]
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))  // => (arrow fungtion atau fungsi anonim)
    .join(" ");
    console.log(capitalized);


// Soal no.7
const num1: number = 42;
const num2: number = 27;
if (num1 >= num2) {
    console.log(num1);
} else {
    console.log(num2);
}


// Soal no.8

// Soal no.9

// Soal no.10

// Soal no.11
let merubahString : string = "Satu apel sehari menjauhkan kita dari dokter"
    .replace(/a/g, "*");
    console.log(merubahString);