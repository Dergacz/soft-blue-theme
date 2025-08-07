// 🎨 Тестовый файл для демонстрации темы Soft Blue Theme

/**
 * Функция для демонстрации подсветки синтаксиса
 * @param {string} name - имя пользователя
 * @param {number} age - возраст пользователя
 */
function greetUser(name, age) {
    const greeting = `Привет, ${name}! Тебе ${age} лет.`;
    console.log(greeting);
    
    // Условие для проверки возраста
    if (age >= 18) {
        return "Вы совершеннолетний";
    } else {
        return "Вы несовершеннолетний";
    }
}

// Класс для демонстрации
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.isActive = true;
    }
    
    // Метод для получения информации
    getInfo() {
        return {
            name: this.name,
            email: this.email,
            status: this.isActive ? 'active' : 'inactive'
        };
    }
    
    // Статический метод
    static validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// Примеры использования
const user1 = new User("Анна", "anna@example.com");
const user2 = new User("Максим", "maxim@test.ru");

// Массив пользователей
const users = [user1, user2];

// Использование стрелочных функций и методов массива
const activeUsers = users
    .filter(user => user.isActive)
    .map(user => user.getInfo())
    .sort((a, b) => a.name.localeCompare(b.name));

console.log("Активные пользователи:", activeUsers);

// Асинхронная функция
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw new Error("Не удалось загрузить данные пользователя");
    }
}

// Деструктуризация и spread оператор
const { name, email } = user1.getInfo();
const newUser = { ...user1.getInfo(), lastLogin: new Date() };

// Числа и строки
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log(`Сумма: ${sum}, Среднее: ${average.toFixed(2)}`);

// RegExp и специальные символы
const phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
const testPhone = "+7(999)123-45-67";

if (phoneRegex.test(testPhone)) {
    console.log("✅ Номер телефона корректен");
} else {
    console.log("❌ Неверный формат номера");
}

// Экспорт модуля
export { User, greetUser, fetchUserData };
export default User;
