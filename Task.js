const dataBase = [
  {
    id: 1,
    name: "Ahmed",
    age: 25,
    address: {
      country: "Egypt",
      city: "Cairo",
    },
    fields: [
      "frontend-development",
      "graphic-design",
      "animation",
      "motion-graphic",
      "social-media",
    ],
  },

  {
    id: 2,
    name: "Mohamed",
    age: 30,
    address: {
      country: "Egypt",
      city: "Alex",
    },
    fields: ["advertisement", "marketing", "social-media"],
  },

  {
    id: 3,
    name: "Ali",
    age: null,
    address: {
      country: "Morocco",
      city: null,
    },
    fields: ["marketing", "customer-service", "social-media"],
  },

  {
    id: 4,
    name: "Mahmoud",
    age: 20,
    address: {
      country: "Egypt",
      city: "Cairo",
    },
    fields: null,
  },

  {
    id: 5,
    name: "Hassan",
    age: 35,
    address: {
      country: null,
      city: null,
    },
    fields: ["backend-development", "data-analysis", "marketing"],
  },

  {
    id: 6,
    name: "Khaled",
    age: 40,
    address: {
      country: "Egypt",
      city: "Alex",
    },

    fields: ["frontend-development", "ux-design", "graphic-design"],
  },
];

// ---------------------------- PART 1 ----------------------------

// 1- Create a function that create an array with the "object()" of people with age between (max, min) range ==> ({min, max})

// function ageSelector(minAge, maxAge) {
//   let selectedArray = [];
//   for (let selectedObject of dataBase) {
//     const age = selectedObject.age;
//     if (age >= minAge && age <= maxAge) {
//       selectedArray.push(selectedObject);
//     }
//   }
//   return selectedArray;
// }
// console.log("ageSelector: ", ageSelector(20, 40));

// const aliseAgeSelector = (minAge, maxAge) => {
//   return dataBase
//     .map((item) => item.age >= minAge && item.age <= maxAge && item)
//     .filter((item) => item);
// };
// 2- Create a function that prints the "object" of people with specific (city) ==> (city)

// function citySelector(cityName) {
//   const citySelectedArray = [];
//   for (selectedObj of dataBase) {
//     if (selectedObj.address.city === cityName) {
//       citySelectedArray.push(selectedObj);
//     }
//   }
//   return citySelectedArray;
// }
// console.log(citySelector("Alex"));

// 3- Create a function that prints the "names" of people that lives in (city) and their age in between (ageRange)
// ==> ({max, min}, city)

// function nameIdentefier(maxAge, minAge, cityName) {
//   const names = [];
//   for (let selectedObj of dataBase) {
//     if (
//       selectedObj.age >= minAge &&
//       selectedObj.age <= maxAge &&
//       selectedObj.address.city === cityName
//     ) {
//       names.push(selectedObj);
//     }
//   }
//   return names;
// }

// const names = dataBase.filter(
//   (n) => n.address.city === "Alex" && n.age >= 30 && n.age <= 45
// );

// const getNames = ({ maxAge, minAge }, cityName) =>
//   dataBase
//     .filter(
//       ({ age, address: { city } }) =>
//         city === cityName && age <= maxAge && age >= minAge
//     )
//     .map(({ name }) => name);

// let result = getNames({ maxAge: 40, minAge: 10 }, "Alex");
// console.log("🚀 ~ file: Task.js:140 ~ result:", result);

// 4- Create a function that prints the "names" of people that have (fields) ==> ([field_1, filed_2, ...])

// const getNames = (fieldName) =>
//   dataBase.filter((fields) => fields.fields.includes(fieldName));
// // .map(({ name }) => name);
// let result = getNames("marketing");
// console.log(result);

const getNames = (fieldName) =>
  dataBase
    .filter(({ fields }) => fields.includes(fieldName))
    .map(({ name }) => name);
let result = getNames("marketing");
console.log(result);
// ---------------------------- PART 2 ----------------------------

// 1- Create a function that Edit person's city of living, get person by (name) ==> (name, cityName)

// 2- Create a function that Adds person's field(s), get person by (name) ==> (name, [field_1, field_2, ...])

// ---------------------------- PART 3 ----------------------------

// 1- Create a function that Add a (person) to the dataBase ==> ({name, age, address:{country, city}, fields:[]})

// 2- Create a function that Delete a (person) from the dataBase ==> (id)
