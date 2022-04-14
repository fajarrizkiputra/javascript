// Pindahkan pendefinisian class Animal ke animal.js dan hapus code dibawah

// Pindahkan pendefinisian class Dog ke dog.js dan hapus code dibawah

// Code dibawah jangan diganggu karena bukan bagian dari class Animal ataupun Dog
// const dog = new Dog("Leo", 4, "Chihuahua");
// dog.info();

// memisahkan file
// Import class Dog dibawah baris ini
// import Dog from "./dog";

// const dog = new Dog("Leo", 4, "Chihuahua");
// dog.info();


// Hapus code dibawah



// Hapus code diatas

// Import constant dog
// import dog from "./dogData";

// dog.info();


// Tulis ulang code dibawah and import constant dog1 dan dog2
// import { dog1, dog2 } from "./dogData";

// // Salin code di jendela instruksi dan tulis ulang constant dog1 dan dog2 agar dapat dicetak
// console.log("---------");
// dog1.info();
// console.log("---------");
// dog2.info();

// Ubah jalur relatif "./dogData"
import { dog1, dog2 } from "./data/dogData";

console.log("---------");
dog1.info();
console.log("---------");
dog2.info();
