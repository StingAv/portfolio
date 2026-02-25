"use strcit"
const style = `background: lightsalmon`;
const log = console.log;
const dir = console.dir; // выводит все свойства объекта

// const cars = ["lada", "ford", "audi", "bmw", "kia"];

// log("1: ", cars[0]);
// log("2: ", cars[1]);
// log("3: ", cars[2]);
// log("4: ", cars[3]);
// log("5: ", cars[4]);

// for (let i = 0; i <= 5; i++) {
//     log("----> ", i);
// }


// let i = cars.length - 1;

// for(; i <= 5;) {
//     log("----> ", i++);
// }

// for (i; i >= 0; i--) {
//     log(`${i+1} ${cars[i]}`)
// }



// for (let i = 0; i < cars.length; i++ ) {
//     if (cars [i] === "lada") continue;
//     log(`${i+1} ${cars[i]}`);
// }


// const users = [
//         {id: 0, name: "Alex", age: 35, position: "Developer"},
//         {id: 1, name: "Andrey", age: 36, position: "Pudge"},
//         {id: 2, name: "Galiay", age: 37, position: "Arhicade"},
// ];

// for (let x = 0; x < users.length; x++){
//     console.group (`Employee ${x + 1}`);
//     log (`Name: ${users[x].name}`);
//     log (`Age: ${users[x].age}`);
//     log (`Position: ${users[x].position}`);
//     console.groupEnd();
// }

const numbers1 = [1, 2, 3, 4, 5];

// sum = 0;
// for (let i = 0; i < numbers1.length; i++) {
//     // sum = sum + numbers1[i];
//     sum += numbers1[i];
// }

// log(sum);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let h = (-8 / -4);
// log(h);

// log((3 ** 5) + ((-8 / -4)) + (100 % 3))

// let who = 'dragon\'s' + ' mother';
// log(who);


// const eurosCount = 100;
// const euroForDollar = 1.25;
// const dollarsForRubles = 60;

// const oneEurosForDollars = eurosCount * euroForDollar;
// const eurosForRubles = oneEurosForDollars * dollarsForRubles;
// log(oneEurosForDollars);
// log(eurosForRubles);


// const word = 'Na\nharis';
// log(word[7]);

// const numbers = `-0.304`;
// log(parseFloat(numbers));

// const one = 'Naharis'
// const two = 'Mormont'
// const three = 'Sand'

// console.log(one[2] + two[1] + three[3] + two[4] + two[2]);

// const fruitsCount = -2309
// console.log(Math.abs(fruitsCount))

// const number = 923.2238;
// log(Math.ceil(number));

// const text = 'Never forget what you are, for surely the world will not'
// log(`First: ${text[0]}\nLast: ${text[55]}`)

// log(Math.floor(Math.random() * 11));


// let firstName = '  Grigor   \n'
// console.log(firstName.trim())

// const text = 'When you play the game, you win even if you don\'t want to win.';
// log(text.slice(5, 13).replace("you", "someone").length);

// const printMotto = () => {
//   console.log("Winter is coming")
// }
// printMotto();

// const sayHurrayThreeTimes = () => {
//     return `hurray! hurray! hurray!`
// } 
// const hurray = sayHurrayThreeTimes()
// log(hurray)


// const truncate = (text, length) => {
//     return text.slice(0, length) + `...`
// }

// log(truncate(`xyesos`, 2));

// const f = (a = 5, b = 4, c = 6, x) => {
//     return f(a = 1, b = 4, c = 6, x)
// }

// log(a = 1, b = 2, c = 3);


// const getTypeOfSentence = (sentence) => {
//   const lastChar = sentence[sentence.length - 1]
//   if (lastChar === '?') {
//     return 'question'
//   }

//   return 'general'
// }

// log(getTypeOfSentence('Hodor')) // general
// log(getTypeOfSentence('Hodor?')) // question



// const getTypeOfSentence = (sentence) => {
    //   const lastChar = sentence[sentence.length - 1]
    //   let sentenceType
    
    //   if (lastChar === '?') {
        //     sentenceType = 'question'
        //   }
        //   else if (lastChar === '!') {
            //     sentenceType = 'exclamation'
            //   }
            //   else {
                //     sentenceType = 'normal'
                //   }
                
                //   return `Sentence is ${sentenceType}`
                // }
                
                // log(getTypeOfSentence('Who?')) // Sentence is question
// log(getTypeOfSentence('No')) // Sentence is normal
// log(getTypeOfSentence('No!')) // Sentence is exclamation

// const getTypeOfSentence = (sentence) => {
//     let sentenceType;
//     if (sentence.endsWith('?')) {
//         sentenceType = 'Question';
//     }
//     else {
//         sentenceType = 'General';
//     }
//     return `${sentenceType} sentence`;
// }

// log(getTypeOfSentence("General?"));

// const normalizeUrl = (address) => {
//     let addressType
//     if(address.startsWith('https://')) {
//         addressType = address;
//     }
//     else{
//         addressType = 'https://' + address;
//     }
//     return `${addressType}`
// }

// log(normalizeUrl("google.com"))
// log(normalizeUrl("123"))


// const getTypeOfSentence = (sentence) => {
//   const lastChar = sentence.slice(-1)

//   return (lastChar === '?') ? 'question' : 'normal'
// }

// log(getTypeOfSentence('hodor'))
// log(getTypeOfSentence('hodor?'))


// // функция-предикат определяет, является ли число num четным
// const isEven = (num) => {
//   return num % 2 === 0;
// }

// // функция увеличивает полученное число num на 10
// const increaseNum = (num) => {
//   return num + 10;
// }

// const num = 6;

// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;


// const convertText = (str) => {
//   // Проверяем пустую строку
//   if (str === '') {
//     return '';
//   }
  
//   // Проверяем, является ли первая буква заглавной
//   if (str[0] === str[0].toUpperCase()) {
//     return str;
//   } else {
//     return reverse(str);
//   }
// };


// const getNumberExplanation = (number) => {
//     let result;
//     switch(number){
//         case 666:
//            result = ("devil number");
//         break;
//         case 42:
//             result = ("answer for everything");
//         break;
//         case 7:
//             result = ("prime number");
//         break;
//         default:
//            result = ("just a number");
//     }
//     return result;
// };

// log(getNumberExplanation(666));


// const printNumber = (lastNumber) => {
//     let i = 1;
//     while (i <= lastNumber){
//         log(i);
//         i = i + 1;
//     }
//     log('finish!')
// }

// printNumber(5);


// const printNumbers = (initialNumber) => {
//   let i = initialNumber;
  
//   while (i >= 1) {
//     console.log(i);
//     i = i - 1;
//   }
  
//   console.log('finished!');
// };

// (printNumbers(4));

// const sumNumbersFromRange = (start, finish) => {
//   // Технически можно менять start
//   // Но входные аргументы нужно оставлять в исходном значении
//   // Это сделает код проще для анализа
//   let i = start
//   let sum = 0 // Инициализация суммы

//   while (i <= finish) { // Двигаемся до конца диапазона
//     sum = sum + i // Считаем сумму для каждого числа
//     i = i + 1 // Переходим к следующему числу в диапазоне
//   }

//   // Возвращаем получившийся результат
//   return sum
// }

// log(sumNumbersFromRange(1,3));


// const joinNumbersFromRange = (start, end) => {
//   let result = '';
//   let i = start;
  
//   while (i <= end) {
//     result += i;
//     i += 1;
//   }
  
//   return result;
// };

// log(joinNumbersFromRange(5, 10));

// const mySubstr = (str, length) => {
//   let result = '';
//   let i = 0;
  
//   while (i < length) {
//     result += str[i];
//     i += 1;
//   }
  
//   return result;
// };

// const text = 'If I look back I am lost'
// log(mySubstr(text, 3))


// const countChar = (str, char) => {
//     let i = 0;
//     let count = 0;
//     const lowerStr = str.toLowerCase();
//     const lowerChar = char.toLowerCase();
//     while (i < lowerStr.length) {
//         if (lowerStr[i] === lowerChar){
//         count += 1;
//         }
//         i += 1;
//     }
//     return count;
// }

// log(countChar('HexlEt', 'e'));



// const makeItFunny = (str, n) => {
//   let result = '';
  
//   for (let i = 0; i < str.length; i += 1) {
//     // Проверяем, является ли текущий индекс кратным n
//     // (i + 1) потому что индексация с 0, а нам нужен каждый n-ный элемент (1-based)
//     if ((i + 1) % n === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
  
//   return result;
// };


// const reverseString = (str) => {
//   let result = ''
//   for (let i = 0; i < str.length; i += 1) {
//     result = `${str[i]}${result}`
//   }

//   return result
// }

// log(reverseString("zalupa"));


const skills = ["html", "css", "scss", "js", "git", "ts", "css", "react"]

// skills.forEach((value) => log(value));
// skills.forEach((value, index, thisArray) => log(value, index, thisArray));

// const logValues = (value) => log(value);
// skills.forEach(logValues);

// log(skills.indexOf("js"));

// log(skills.indexOf("js", 6));

// log(skills.lastIndexOf("css"));

// const isJs = skills.some((value) => value === "js");

// log(isJs);


const phones = [
    {id: 1, title: "pixel9XL"},
    {id: 2, title: "iphone17"},
    {id: 3, title: "oneplus"},
    {id: 4, title: "samsung25"},
]

// const everyHasTitles = phones.every((phone) => "title" in phone);
// log(everyHasTitles);


// const pixel = phones.find((phone) => phone.title === "pixel9XL");
// log(pixel);

// const pixelIndex = phones.findIndex((phone) => phone.title === "pixel9XL");
// log(pixelIndex);

// const filterSkills = skills.filter((skill) => skill.includes("c"));
// log(filterSkills);

// const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((num) => num % 2 === 0);
// log(evenNumbers);




// const clientsWithHighLevel = clients.filter((hight) => hight.level === 5);
// log(clientsWithHighLevel);

// const newPhones = phones.slice(0, 2);
// log(newPhones);


// log(phones.splice(pixelIndex, 1));
// log(phones);

// log(phones.splice(1, 0, {id: 5, title: "nokia"}));
// log(phones);

// const phone2025 = phones.toSpliced(2, 1, {id: 5, title: "nokia"});
// log(phone2025, phones);




// const clientsNames = clients.map(client => client.name);
// log(clientsNames);

// const clientsNamesAndStatus = clients.map(clientAndStatus => {
//     return{
//         id: clientAndStatus.id,
//         name: clientAndStatus.name,
//         status: clientAndStatus.status
//     }
// }).map(clientAndStatus => {
//     if (clientAndStatus.status === "online") {
//         clientAndStatus.status = "online 🟢"
//     } else {
//         clientAndStatus.status = "offline 🟠"
//     }

//     return clientAndStatus;
// }).filter(c => c.status.startsWith("on"));

// log(clientsNamesAndStatus);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumAllNumbers = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// const sumAllNumbers = numbers.reduce((s, v) => s + v, 0)

// log(sumAllNumbers);

// const books = [
//     {id: 1, title: "Гарри Поттер", price: 59, category: "fantacy"},
//     {id: 2, title: "Чистый код", price: 109, category: "science"},
//     {id: 3, title: "Темная Башня", price: 149, category: "fantacy"},
//     {id: 4, title: "Грокаем алгоритмы", price: 173, category: "science"},
//     {id: 5, title: "Многопоточый JavaScript", price: 79, category: "science"},
// ];

// const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
// log(totalPrice);

// const categoryMap = books.reduce((res, book) => {
//     if (book.category in res) {
//         res[book.category]++;
//     } else{
//         res[book.category] = 1;
//     }
//     return res;
// }, {})

// log(categoryMap);

// const str = "hello";
// log(str.split("").reverse().join(""));


// const task2 = "12345";
// log(task2.split("").reverse().join(""));

// const books = [
//     {id: 1, title: "Гарри Поттер", price: 59, category: "fantasy" },
//     {id: 2, title: "Чистый код", price: 109, category: "science" },
//     {id: 3, title: "Темная Башня", price: 149, category: "fantasy" },
//     {id: 4, title: "Грокаем алгоритмы", price: 173, category: "science" },
//     {id: 5, title: "Многопоточный JavaScript", price: 79, category: "science" },
//     {id: 6, title: "Властелин колец", price: 120, category: "fantasy" },
//     {id: 7, title: "1984", price: 95, category: "fiction" },
//     {id: 8, title: "Анна Каренина", price: 85, category: "romance" },
//     {id: 9, title: "Игра престолов", price: 155, category: "fantasy" },
//     {id: 10, title: "Алхимик", price: 60, category: "philosophy" },
//     {id: 11, title: "Код да Винчи", price: 180, category: "thriller" },
//     {id: 12, title: "451 градус по Фаренгейту", price: 99, category: "fiction" },
//     {id: 13, title: "Мастер и Маргарита", price: 125, category: "fantasy" },
//     {id: 14, title: "Убийство в Восточном экспрессе", price: 110, category: "mystery" },
//     {id: 15, title: "Три товарища", price: 75, category: "romance" },
//     {id: 16, title: "Зелёная миля", price: 130, category: "fiction" },
//     {id: 17, title: "Шерлок Холмс", price: 88, category: "mystery" },
//     {id: 18, title: "Сто лет одиночества", price: 92, category: "fiction" },
//     {id: 19, title: "Остров сокровищ", price: 115, category: "adventure" },
//     {id: 20, title: "Преступление и наказание", price: 140, category: "philosophy" },
//     {id: 21, title: "Пикник на обочине", price: 108, category: "science fiction" },
//     {id: 22, title: "Моби Дик", price: 85, category: "adventure" },
//     {id: 23, title: "Граф Монте-Кристо", price: 123, category: "adventure" },
//     {id: 24, title: "Великий Гэтсби", price: 90, category: "fiction" },
//     {id: 25, title: "Одиннадцать минут", price: 95, category: "romance" },
//     {id: 26, title: "Дракула", price: 115, category: "horror" },
//     {id: 27, title: "Меч королей", price: 130, category: "fantasy" },
//     {id: 28, title: "Дюна", price: 160, category: "science fiction" },
//     {id: 29, title: "Тени прошлого", price: 112, category: "thriller" },
//     {id: 30, title: "Прощай, оружие", price: 100, category: "romance" },
//     {id: 31, title: "Хроники Нарнии", price: 140, category: "fantasy" },
//     {id: 32, title: "Доктор Живаго", price: 110, category: "romance" },
//     {id: 33, title: "Старик и море", price: 93, category: "philosophy" },
//     {id: 34, title: "Тёмная башня", price: 135, category: "fantasy" },
//     {id: 35, title: "Затерянный мир", price: 105, category: "adventure" },
//     {id: 36, title: "Палата №6", price: 88, category: "philosophy" },
//     {id: 37, title: "Путешествие к центру Земли", price: 117, category: "adventure" },
//     {id: 38, title: "Оливер Твист", price: 119, category: "fiction" },
//     {id: 39, title: "Иллиада", price: 150, category: "history" },
//     {id: 40, title: "Одиссея", price: 155, category: "history" },
//     {id: 41, title: "Последний легион", price: 110, category: "history" },
//     {id: 42, title: "Фауна и флора", price: 85, category: "science" },
//     {id: 43, title: "Зов Ктулху", price: 120, category: "horror" },
//     {id: 44, title: "Человек, который смеётся", price: 98, category: "philosophy" },
//     {id: 45, title: "Сага о Форсайтах", price: 113, category: "romance" },
//     {id: 46, title: "Крошка Цахес", price: 108, category: "fantasy" },
//     {id: 47, title: "Ловушка", price: 102, category: "thriller" },
//     {id: 48, title: "Алхимик", price: 78, category: "philosophy" },
//     {id: 49, title: "Триумфальная арка", price: 127, category: "romance" },
//     {id: 50, title: "Код да Винчи", price: 170, category: "thriller" }
// ];

// let categoriesCount = 0;
// let totalPrice = 0;
// const categoryMap = books.reduce((res, book) => {
//     if (book.category in res){
//         res[book.category]++;
//     }else{
//         res[book.category] = 1;
//         categoriesCount++;
//     }
//     totalPrice += book.price;
//     return res;
// }, {});

// log(categoryMap);
// log(categoriesCount);
// log(totalPrice);


// const user = {
//     id: 4,
//     name: "Alena",
//     age: 25,
//     postition: "developer",
//     address: {
//         city: "Ufa",
//         country: "Center"
//     }
// };

// for (const key in user) {
//     log(`New user -> ${key}: ${user[key]}`);
// }

// log(Object.keys(user));

// for (const key of Object.keys(user)){
//     log(`New user -> ${key}: ${user[key]}`);
// }


// const {name, age, ...restProps} = user;
// log(name, age, restProps);

// const newUser = {
//     ...user
// }

// log(newUser);
// log(newUser === user);
// // newUser.name = "Alex";
// // newUser.address.city = "Moscow";
// // delete newUser.address.country;
// // delete newUser.address.city;
// log(newUser, user);

// const obj1 = {a: 10, b: 20};
// const obj2 = {c: 30, d: 40};
// const obj3 = {
//     ...obj1,
//     ...obj2,
//     e: 50,
// };

// log(obj3);

// let x = Object.keys(user);
// // x = Object.values(user);
// // x = Object.values(user.address);
// // x = Object.entries(user);
// // x = Object.hasOwn(user, "role");
// x = Object.freeze(user);
// log(x);



// const car = {
//     year: new Date(2026, 1 , 1),
//     brand: "Audi",
//     color: "Black",
//     model: "RS6",
//     power: 5.5,
//     fast: true,
// }

// log(car);

// const carJSON = JSON.stringify(car);

// log(carJSON);

// // const carObject = JSON.parse(carJSON);
// const carObject = JSON.parse(carJSON, (key, value) => {
//     if (key === "year") {
//         return new Date(value);
//     }
//     return value;
// });

// log(carObject);


// localStorage.setItem("test", 123);
// // localStorage.removeItem("test");
// // localStorage.clear();

// // log(localStorage.length);
// // log(localStorage.key(0));

// const clients = [
//     {id: 1, level: 5, name: "Alexander", status: "online"},
//     {id: 2, level: 5, name: "Anrei", status: "online"},
//     {id: 3, level: 1, name: "Ruslan", status: "offline"},
//     {id: 4, level: 2, name: "Nikita", status: "offline"},
//     {id: 5, level: 3, name: "Akasha", status: "online"},
//     {id: 6, level: 4, name: "Lanayaa", status: "offline"},
//     {id: 7, level: 4, name: "Pudge", status: "online"},
// ];

// localStorage.setItem("clients", JSON.stringify(clients));

// const clientFromStorage = JSON.parse(localStorage.getItem("clients") ?? "{}");

// log(clientFromStorage[0]);


// sessionStorage.setItem("test", 123);

// log(navigator.userAgent);
// log(navigator.userAgentData);
// console.dir(document.head.innerHTML)

// dir(document.documentElement);
// dir(document.head);
// dir(document.body);

// dir(document.children[0].children);
// dir(document.body.children[0]);
// log(document.body.childElementCount);

// for (const child of document.body.children){
//     if (child.tagName !== "SCRIPT"){
//         log(child)
//     }
// }

// const body = document.body;

// dir(body.firstChild);
// dir(body.firstElementChild);


// const p = document.querySelector("p");
// log(p);
// dir(p)

// const allP = document.querySelectorAll("p");
// log(allP);

// const lastText = document.querySelector(".last_text");
// dir(lastText)

// const firstText = document.querySelector("#first-text");
// const firstText = document.getElementById("first-text");
// dir(firstText)

// const wrapper = document.querySelector(".wrapper");
// log(wrapper);

// const allText = document.getElementsByTagName("p");
// log(allText)

// console.dir(document.getElementById("heading"));

// const btn = document.querySelector("#btn");
// const block = document.querySelector("#block");
// const input = document.querySelector("input");
// const text = document.querySelector("p")
// // log(btn);

// // btn.onclick = () => log(123)

// btn.addEventListener("click", () => {
//     log("123");
// })

// block.addEventListener("click", () => {
//     log("321");
// })

// window.addEventListener("resize", () => {
//     log("Размер окна");
// })

// input.addEventListener("input", (e) => {
//     log(e.target.value);
// })

// btn.addEventListener("click", (e) => {
//     log(e.offsetX, e.offsetY);
// })

// text.addEventListener("copy", (e) => {
//     e.preventDefault();
//     alert("sosi");
// })

// window.addEventListener("beforeunload", (e) =>{
//     e.preventDefault();
// })


// const input = document.querySelector("[data-text-field]");
// const addTodoBtn = document.querySelector("[data-add-todo]");
// const container = document.querySelector("[data-todo-container]");
// const todoList = JSON.parse(localStorage.getItem("todos")) || [];

// const saveToLocalStorage = (key = "todos") => {
//     localStorage.setItem(key, JSON.stringify(todoList));
// }

// addTodoBtn.addEventListener("click", () => {
//     if(input.value.trim()) {
//         todoList.push(input.value);
//         input.value = "";
//         saveToLocalStorage();
//         render();
//     }
// })

// const createElement = (TagName, textContent) => {
//         const element = document.createElement(TagName);
//         element.textContent = textContent;
//         return element;
// }

// const render = () => {
//     container.innerHTML = "";
//     todoList.forEach((todo) => {
//         const todoElement = document.createElement("div");
//         todoElement.textContent = todo;
//         container.append(todoElement);
//     });
// };

// render();



// const its = [
// '00307400178149',
// '00307400172154',
// '00307402225751',
// '00307400193832',
// '00307400171011',
// '00307400194964',
// '00307400194305',
// '00308300127749',
// '00307401196319',
// '00307400171861',
// '00307400173289',
// '00307400172244',
// '00307901407989',
// ]

// const testIts = [
//     '00307400178149',
//     '00307400172154',
//     '00307402225751',
//     '00307400193832',
//     '00307400171011',
//     '00307400194305',
//     '00308300127749',
//     '00307401196319',
//     '00307400171861',
//     '00307400173289',
//     '00307400172244',
//     '00307901407989',
//     '00307400194994',
// ]

// const allITS = testIts.every(serial => its.includes(serial));

// log(allITS)


const todoInput = document.querySelector(".data-todo-input");
const todoBtn = document.querySelector(".data-todo-btn");
const todoList = document.querySelector(".data-todo-list");


todoBtn.addEventListener("click", () => {
    addTask()
});

todoInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
})


function addTask(){
    if (todoInput.value.trim() === ""){
        alert('Поле не может быть пустым!');
    } else if
        (todoInput.value.toLowerCase() === "руслан"){
            alert("Это тотальный проёб, друг.");
            setTimeout(() => {
                window.open('https://www.youtube.com/shorts/1379-kOnymc')
            })
    } else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    todoInput.value = "";
    todoInput.focus();
}


todoList.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('data-todo-checker');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
})