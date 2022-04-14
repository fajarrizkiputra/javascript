// import Dog from "./dog";

// // Ingatlah 2 constant dog1 dan dog2 dibawah ini
// const dog1 = new Dog("Leo", 4, "Chihuahua");
// const dog2 = new Dog("Ben", 2, "Poodle");

// // Ubah code dibawah dan export constant dog1 dan dog2
// export { dog1, dog2 };


// // Buat agar constant dog dapat diakses dari file berikut
// import Dog from "./dog";

// const dog = new Dog("Leo", 4, "Chihuahua");
// // Export constant dog
// export default dog;


// import Dog from "../class/dog";

// const dog1 = new Dog("Leo", 4, "Chihuahua");
// const dog2 = new Dog("Ben", 2, "Poodle");

// export { dog1, dog2 };

// Import readline-sync
import readlineSync from "readline-sync";

import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");

// Tulis ulang dengan menggunakan readlineSync.question
const name = readlineSync.question("Ketik nama Anda: ");

// Tulis ulang dengan menggunakan readlineSync.questionInt
const age = readlineSync.questionInt("Ketik usia Anda: ");

// Tulis ulang dengan menggunakan readlineSync.question
const breed = readlineSync.question("Ketik ras Anda: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };
