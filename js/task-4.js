// Функція має використовувати ланцюжок виклику методів
// та повертати загальний баланс користувачів(властивість
// balance), стать яких(властивість gender) збігається
// зі значенням параметра gender.

/**calculate total balance by gender
 * 
 * @param {Array} users 
 * @param {string} gender 
 * @returns {Number}
 */
const getTotalBalanceByGender = (users, gender) => users
                                                    .filter(({ gender: userGender }) => userGender === gender)
                                                    .reduce((acc, { balance }) => acc += balance, 0);

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log("--------------------------------------------------");
console.log("Task 4");

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
