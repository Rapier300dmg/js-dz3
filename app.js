let firstName = "Нуржигит";
let lastName = "Тажибаев";
let age = 19;
document.getElementById("nameAndAge").textContent = `Меня зовут ${firstName} ${lastName}, и мне ${age} лет`;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`); 

let city = "Актау";
document.getElementById("city").textContent = "Я родом из города " + city;
console.log("Я родом из города " + city);

let password = "12345"; 
let hasAccess = password !== "";  
document.getElementById("passwordCheck").textContent = `Пароль: ${password}, Доступ: ${hasAccess}`;
console.log(`Пароль: ${password}, Доступ: ${hasAccess}`);

let isMember = false;
let isMemberString = isMember.toString();  
document.getElementById("isMember").textContent = `isMember: ${isMemberString}, Тип данных: ${typeof isMemberString}`;
console.log(`isMember: ${isMemberString}, Тип данных: ${typeof isMemberString}`); 

let cartItems = 0;
let isCartEmpty = Boolean(cartItems); 
document.getElementById("cartStatus").textContent = `Корзина пуста: ${isCartEmpty}`;

let averageScore = 89.75695;
averageScore = averageScore.toFixed(1); 
document.getElementById("roundedScore").textContent = `Средний балл (округленный): ${averageScore}`;

let greetingMessage = "      Приветствуем вас в мире программирования!        ";
greetingMessage = greetingMessage.trim(); 
greetingMessage = greetingMessage.toUpperCase(); 
let containsProgramming = greetingMessage.includes("ПРОГРАММИРОВАНИЯ");
document.getElementById("greetingMessageResult").textContent = 
    `Сообщение: ${greetingMessage}, Содержит "ПРОГРАММИРОВАНИЯ": ${containsProgramming}`;
