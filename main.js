// class Students {
//   name;
//   grade;
//   id;
//   constructor(name, grade, id) {
//     this.name = name;
//     this.grade = grade;
//     this.id = id;
//   }
// }

// const firstStudent = new Students("sol", "seventh", "2222");
// const secondStudent = new Students("moly", "fourth", "3333");

// console.log(firstStudent, secondStudent);

// class Person {
//   firstName;
//   lastName;
//   age;
//   email;

//   constructor(firstName, lastName, age, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }
// }

// const personOne = new Person("solo", "molo", "22", "ggg@dgg.com");
// const personTwo = new Person("dolo", "fee", "14", "eee@dgg.com");
// const personThree = new Person("loo", "dee", "32", "fff@dgg.com");

// for (let key in personOne) {
//   firstDiv.innerHTML += `${personOne[key]}` + "<br>";
//   firstDivTwo.innerHTML += `${personTwo[key]}` + "<br>";
//   firstDivThree.innerHTML += `${personThree[key]}` + "<br>";
// }

// function getInputFromUser() {
//   const personOneInput = new Person(
//     firstNameInputA.value,
//     LastNameInputB.value,
//     ageInputC.value,
//     emailInputD.value
//   );
//   thirdDiv.innerHTML = `${personOneInput.firstName}<br>${personOneInput.lastName}<br>${personOneInput.age}<br>${personOneInput.email}`;
// }

// function getInputFromUserAndPrint() {
//   const personTwoInput = new Person(
//     firstNameInput.value,
//     LastNameInput.value,
//     ageInput.value,
//     emailInput.value
//   );

  tableBody.innerHTML += `<tr>
      <td>${personTwoInput.firstName}</td>
      <td>${personTwoInput.lastName}</td>
      <td>${personTwoInput.age}</td>
      <td>${personTwoInput.email}</td>
    </tr>`;

//   personTwoInput = new Person(
//     (firstNameInput.value = ""),
//     (LastNameInput.value = ""),
//     (ageInput.value = ""),
//     (emailInput.value = "")
//   );
// }

// class Dog {
//   constructor(dogName, typeOfDog, birthDate) {
//     this.dogName = dogName;
//     this.typeOfDog = typeOfDog;
//     this.birthDate = birthDate;
//   }
// }

// let dogOne = new Dog("loni", "pincher", "2011");
// let dogTwo = new Dog("cc", "cdc", "2102");
// let dogThree = new Dog("dsv", "ddd", "2302");
// let dogFour = new Dog("ggcc", "vvcc", "1902");
// let dogFive = new Dog("sscc", "ddcc", "2002");

// let myArray = [dogOne, dogTwo, dogThree, dogFour, dogFive];
// myArray.forEach((item) => {
//   console.log(item);
// });

class Teacher {
  constructor(firstName, lastName, className, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.className = className;
    this.email = email;
  }
}

const array = [];

function teacherList() {
  let teacherOne = new Teacher(
    teachFirstNameInput.value,
    teachLastNameInput.value,
    teachClassInput.value,
    teachEmailInput.value
  );
  if (array.length < 4) {
    array.push(teacherOne);
    console.log(array);

    tbodyTeacher.innerHTML += `<tr><td>${teachFirstNameInput.value}</td>
  <td>${teachLastNameInput.value}</td>
 <td>${teachClassInput.value}</td>
   <td>${teachEmailInput.value}</td></tr>`;

    teachFirstNameInput.value = "";
    teachLastNameInput.value = "";
    teachClassInput.value = "";
    teachEmailInput.value = "";
  }
  return;
}




class Course {
  constructor(name, listOne, listTwo) {
    this.name = name;
    this.lecture = confirm("is there a leacture?");
    this.gradesList = listOne;
    this.studentList = listTwo;
  }
}

function Courses() {
  


let courseOne = new Course("sol", [11,55,88],["ccc","fff","aaa"] );

  courseOne.gradesList.sort((a, b )=> {return b-a})
  courseOne.gradesList.forEach(item => {
    divThree.innerHTML += `${ item}<br>`;
  });

  courseOne.studentList.sort()
  courseOne.studentList.forEach(items => {
    divThree.innerHTML += `${items}<br>`;
    
  });


for (let item in courseOne) {
}
}





