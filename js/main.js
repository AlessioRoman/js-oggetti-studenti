const studente1 = {
  name: "Alessio",
  surname: "Romano",
  age: 20,
  weight: 72,
};

for (let key in studente1) {
  console.log(`${key}: ${studente1[key]}`);
}

const studente2 = {
  name: "Peppe",
  surname: "Brescia",
  age: 22,
  weight: 70,
};

const studente3 = {
  name: "Enzo",
  surname: "Dong",
  age: 26,
  weight: 71,
};

const studentArr = [studente1, studente2, studente3];

// studentArr.forEach((student) => {
//   console.log("------------------------------------");
//   for (let key in student) {
//     console.log(`${key}: ${student[key]}`);
//   }
//   console.log("------------------------------------");
// });

class Student {
  constructor(name, surname, age, weight) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.weight = weight;
  }
}

const studente4 = new Student(
  prompt("Nome: "),
  prompt("Cognome: "),
  prompt("Anni: "),
  prompt("Peso: ")
);
studentArr.push(studente4);

studentArr.forEach((student) => {
  console.log("------------------------------------");
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  console.log("------------------------------------");
});
