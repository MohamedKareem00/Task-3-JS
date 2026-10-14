const library = {
  name: "Frontend Library",
  books: [],

  addBook(title) {
    if (!title || !title.trim()) {
      return "Invalid book title";
    }

    this.books.push(title);
    return this.books.length;
  },

  removeLastBook() {
    if (this.books.length === 0) {
      return "Library is empty";
    }

    return this.books.pop();
  },

  getLastBook() {
    if (this.books.length === 0) {
      return "Library is empty";
    }

    return this.books[this.books.length - 1];
  },

  getSummary() {
    return `${this.name} has ${this.books.length} books.`;
  },
};

console.log(library.addBook("JavaScript Basics")); // 1
console.log(library.addBook("HTML & CSS")); // 2

console.log(library.getLastBook()); // "HTML & CSS"
console.log(library.removeLastBook()); // "HTML & CSS"
console.log(library.getSummary()); // "Frontend Library has 1 books."

console.log("");
console.log("--------------------------------------------------");
console.log("")