1. Array Methods
   Q1. What does each method do?

- push(): Adds one or more elements to the end of an array.
- pop(): Removes the last element from an array.
- shift(): Removes the first element from an array.
- unshift(): Adds one or more elements to the beginning of an array.
  push بتضيف في الآخر، وpop بتحذف من الآخر، وshift بتحذف من الأول، وunshift بتضيف في الأول.

Q2. What does each method return?
Method Return value
push() The new array length
pop() The removed element
shift() The removed first element
unshift() The new array length

Q3. What does pop() return when the array is empty?
Answer: It returns undefined.

const numbers = [];
console.log(numbers.pop()); // undefined

2. const and Modifying Values
   Q4. Can you change an array’s elements or an object’s properties when it is declared with const?
   Answer: Yes. You can modify the contents of an array or object declared with const, but you cannot reassign the variable to a different array or object.

const numbers = [1, 2, 3];
numbers.push(4); // Allowed

const user = { name: "Ali" };
user.name = "Mona"; // Allowed

Q5. How is modifying a value different from reassigning the variable?
Answer:

- Modifying: Changes the contents of the existing array or object.
- Reassigning: Makes the variable refer to a different value.

const numbers = [1, 2, 3];

numbers[0] = 10; // Allowed
numbers = [4, 5, 6]; // TypeError

const بتمنع تغيير ارتباط المتغير بقيمة جديدة، لكنها مش بتمنع تعديل محتويات الـ array أو خصائص الـ object.

3. Function Declaration vs. Function Expression

Q6. What is the difference?
Answer:

- Function Declaration: Defines a function using the function keyword and a function name.
- Function Expression: Stores a function in a variable, often declared with const.
  // Function Declaration
  function sayHello() {
  return "Hello";
  }

// Function Expression
const sayGoodbye = function () {
return "Goodbye";
};

Q7. Can you call each one before the line where it is defined? Explain using examples with const for the function expression.
Answer: A function declaration can be called before its definition because of hoisting. A function expression assigned to const cannot be called before its initialization.
sayHello(); // Works

function sayHello() {
console.log("Hello");
}

sayGoodbye(); // ReferenceError

const sayGoodbye = function () {
console.log("Goodbye");
};

الـ Function Declaration بتكون متاحة قبل سطر تعريفها بسبب الـ hoisting. أما المتغير المعرّف بـ const فلا يمكن استخدامه قبل تهيئته.

4. Arrow Functions
   Q8. What is the difference between an implicit return and an explicit return?
   Answer:

- Implicit return: Returns an expression automatically without writing return. This works with concise arrow-function bodies.
- Explicit return: Uses the return keyword inside a function body.
  // Implicit return
  const add = (a, b) => a + b;

// Explicit return
const multiply = (a, b) => {
return a \* b;
};

الاتنين بيرجعوا نتيجة؛ الفرق إن الأولى بترجع تلقائيًا، والتانية لازم تكتب فيها return.
Q9. How do you return an object using an arrow function?
Answer: Wrap the object literal in parentheses to return it implicitly.
const createUser = (name) => ({ name: name });

Why? Without the parentheses, {} is interpreted as the function body rather than an object literal.
const createUser = (name) => {
return { name: name };
};

الطريقتين صح: الأولى مختصرة، والتانية بتستخدم return بشكل صريح. 5. Parameters, Arguments, and Return Values
Q10. What is the difference between a parameter and an argument?
Answer:

- Parameter: A variable listed in the function definition.
- Argument: The actual value passed to the function when it is called.
  function greet(name) { // name is a parameter
  return "Hello " + name;
  }

greet("Ali"); // "Ali" is an argument

Q11. What does a function return when it has no return statement?
Answer: It returns undefined.
function sayHello() {
console.log("Hello");
}

console.log(sayHello()); // Hello, then undefined

الدالة بتطبع Hello، لكن بما إنها معندهاش return، فالقيمة اللي بترجعها هي undefined.
Q12. Does console.log() return the value it displays?
Answer: No. console.log() displays a value in the console and returns undefined.
const result = console.log("Hello");

console.log(result); // undefined

console.log() وظيفتها عرض البيانات، مش إرجاعها. لو محتاج ترجع قيمة من دالة، استخدم return.
push() وunshift() بيرجعوا طول الـ array الجديد.
pop() وshift() بيرجعوا العنصر المحذوف، وpop() على array فاضية بيرجع undefined.
const تمنع إعادة إسناد المتغير، مش تعديل محتويات الـ array أو الـ object.
Function Declaration ممكن تستدعيها قبل تعريفها، لكن Function Expression باستخدام const لا.
Arrow function ممكن تعمل implicit أو explicit return.
parameter هو الاسم في تعريف الدالة، وargument هي القيمة اللي بتمررها عند الاستدعاء.
الدالة بدون return، وconsole.log()، بيرجعوا undefined.
