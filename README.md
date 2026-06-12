# Week 1: Git & JavaScript Starter Project

Welcome to your first week of learning JavaScript fundamentals and Git version control! This project provides hands-on practice with core JavaScript concepts and collaborative development workflows.

## 🎯 Learning Objectives

By completing this project, you will:

- Understand JavaScript data types, functions, and control structures
- Practice working with arrays, objects, and string manipulation
- Learn asynchronous programming patterns (callbacks, promises, async/await)
- Build a simple CRUD application (Notes App)
- Master Git basics: branching, merging, and conflict resolution
- Develop clean code habits with proper documentation

## 📁 Project Structure

```
week1-git-js-starter/
│
├── README.md                    # You are here!
├── package.json                 # Node.js project configuration
│
├── src/
│   ├── index.js                # Main entry point
│   ├── utils/
│   │   ├── math.js            # Math utility functions
│   │   ├── strings.js         # String manipulation utilities
│   │   └── asyncDemo.js       # Async programming examples
│   │
│   └── miniProject/
│       └── notesApp.js        # Simple notes application (CRUD)
│
└── docs/
    └── merge-conflict-practice.md  # Git merge conflict exercises
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Git
- A code editor (VS Code recommended)

### Setup Instructions

1. **Fork this repository**
   - Click the "Fork" button at the top right of this repository
   - This creates your own copy of the project

2. **Add Tech Lead as a collaborator**
   - Go to your forked repository on GitHub
   - Click on "Settings" → "Collaborators"
   - Click "Add people"
   - Add your Tech Lead's GitHub username
   - This allows them to review your work

3. **Clone your forked repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/week1-git-js-starter.git
   cd week1-git-js-starter
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Run the main application**

   ```bash
   npm start
   ```

## 📚 Exercises

### Part 1: Utility Functions (src/utils/)

#### math.js

Implement basic mathematical operations:

- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division (handle division by zero)
- `power(base, exponent)` - Exponentiation

#### strings.js

Implement string manipulation functions:

- `capitalize(str)` - Capitalize first letter
- `reverse(str)` - Reverse a string
- `isPalindrome(str)` - Check if string is a palindrome
- `wordCount(str)` - Count words in a string

#### asyncDemo.js

Explore asynchronous patterns:

- Complete the callback example
- Implement a promise-based delay function
- Convert callback code to async/await

### Part 2: Mini Project (src/miniProject/)

#### notesApp.js

Build a simple notes application with:

- Add a new note
- View all notes
- Find a note by ID
- Update a note
- Delete a note
- Search notes by keyword

### Part 3: Git Practice (docs/)

Follow the exercises in `merge-conflict-practice.md` to:

- Create and switch branches
- Make conflicting changes
- Resolve merge conflicts
- Practice rebasing

## 💡 Tips

- Read the TODO comments in each file carefully
- Test your functions frequently using `console.log()`
- Commit your changes often with descriptive messages
- Don't hesitate to look up JavaScript documentation (MDN Web Docs)
- Ask questions if you get stuck!

## 🎓 Learning Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Git Documentation](https://git-scm.com/doc)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

## ✅ Completion Checklist

- [✅] All utility functions implemented and working
- [✅] Async examples completed
- [ ] Notes app CRUD operations functional
- [ ] All TODOs resolved
- [ ] Code properly commented
- [ ] Git conflict exercises completed
- [ ] At least 10 meaningful Git commits made

## 🤝 Contributing

This is a learning project, but feel free to:

- Add more utility functions
- Enhance the notes app (e.g., add categories, timestamps)
- Create additional exercises
- Improve documentation

Happy coding! 🚀
