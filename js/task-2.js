// Функція має повертати масив усіх користувачів із масиву users,
// у яких є друг з іменем friendName.Друзі кожного користувача
// зберігаються у властивості friends.Якщо користувачів, у яких
// є такий других немає, то функція має повернути порожній масив.

/**filtered array with users by their frined's name
 * 
 * @param {Array} users 
 * @param {string} friendName 
 * @returns {Array}
 */
const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));

const allUsers = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"]
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"]
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"]
    }
];


console.log("--------------------------------------------------");
console.log("Task 2");
console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []