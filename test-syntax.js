// 🎨 Test file for demonstrating Soft Blue Theme

/**
 * Function to demonstrate syntax highlighting
 * @param {string} name - user name
 * @param {number} age - user age
 */
function greetUser(name, age) {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    console.log(greeting);
    
    // Age verification condition
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are a minor";
    }
}

// Class for demonstration
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.isActive = true;
    }
    
    // Method to get information
    getInfo() {
        return {
            name: this.name,
            email: this.email,
            status: this.isActive ? 'active' : 'inactive'
        };
    }
    
    // Static method
    static validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// Usage examples
const user1 = new User("Anna", "anna@example.com");
const user2 = new User("Max", "max@test.com");

// Array of users
const users = [user1, user2];

// Using arrow functions and array methods
const activeUsers = users
    .filter(user => user.isActive)
    .map(user => user.getInfo())
    .sort((a, b) => a.name.localeCompare(b.name));

console.log("Active users:", activeUsers);

// Async function
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to load user data");
    }
}

// Destructuring and spread operator
const { name, email } = user1.getInfo();
const newUser = { ...user1.getInfo(), lastLogin: new Date() };

// Numbers and strings
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log(`Sum: ${sum}, Average: ${average.toFixed(2)}`);

// RegExp and special symbols
const phoneRegex = /^\+1\(\d{3}\)\d{3}-\d{4}$/;
const testPhone = "+1(555)123-4567";

if (phoneRegex.test(testPhone)) {
    console.log("✅ Phone number is valid");
} else {
    console.log("❌ Invalid phone number format");
}

// Module export
export { User, greetUser, fetchUserData };
export default User;
