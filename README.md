# ⚠️ PROJECT & PORTFOLIO DISCLAIMER

> **IMPORTANT NOTICE:**
>
> - **Educational Project Only**: This repository is a student project created for learning and demonstrating frontend web development concepts.
> - **Client-Side Application**: The Bill Splitter performs all calculations directly in the user's browser and does not require a backend server.
> - **No Personal Data Collection**: The application does not collect, transmit, or store passwords, email addresses, payment information, or other personal details.
> - **No Real Transactions**: This application is a bill calculation and splitting tool. It does not process real payments or financial transactions.
> - **Informational Purpose**: Calculated amounts are provided for convenience and should be verified against the actual restaurant bill.

---

# Bill Splitter - Restaurant Bill Calculator

A clean, responsive, and interactive restaurant bill calculator developed using **HTML5, Tailwind CSS, and Vanilla JavaScript**.

The application allows users to enter a bill amount, select the number of people, choose a tip percentage, add an optional tax/service charge, and calculate the total amount and amount payable by each person.

## 🚀 Features

- **Bill Calculation**: Enter the restaurant bill amount and calculate the final cost.
- **Tip Calculation**: Select from predefined tip percentages or enter a custom tip.
- **Bill Splitting**: Divide the final bill equally among multiple people.
- **Tax / Service Charge**: Add an optional tax or service charge percentage.
- **Calculate Bill Button**: Calculate and display the complete bill breakdown.
- **Indian Currency Support**: Displays amounts in Indian Rupees (₹).
- **Reset Functionality**: Reset all fields to their default values.
- **Responsive Design**: Works on mobile phones, tablets, and desktop computers.
- **No Backend Required**: The application works entirely on the client side.

## 📂 Project Structure

```text
├── index.html       # Main Bill Splitter webpage
├── script.js        # Bill calculation and interactive functionality
└── README.md        # Project documentation
```

## 🧮 Calculation Logic

```text
Tax = Bill Amount × Tax Percentage / 100

Tip = Bill Amount × Tip Percentage / 100

Total Bill = Bill Amount + Tax + Tip

Amount Per Person = Total Bill / Number of People
```

### Example

```text
Bill Amount      = ₹1,200
Tip              = 10%
Number of People = 4
Tax              = 0%

Tip Amount       = ₹120
Total Bill       = ₹1,320
Per Person       = ₹330
```

## 🔒 Security & Privacy

- **No Backend Server**: The application does not communicate with a custom backend.
- **No User Accounts**: No login or registration is required.
- **No Personal Data Storage**: User information is not collected or stored.
- **No Payment Processing**: The application does not process payments.
- **Client-Side Processing**: Calculations are performed directly in the browser.

### External Resource

The project uses:

```text
https://cdn.tailwindcss.com
```

This Tailwind CSS CDN is used for styling the webpage.

## 🛠️ Technologies Used

- **HTML5** — Website structure and semantic elements
- **Tailwind CSS** — Responsive user interface and styling
- **JavaScript** — Calculations, DOM manipulation, and event handling
- **CSS** — Additional custom styling

## 🏃 Getting Started

No installation or build tools are required.

1. Keep `index.html` and `script.js` in the same folder.
2. Open `index.html` in any modern web browser.
3. Enter the bill details.
4. Select the tip and number of people.
5. Click **Calculate Bill**.

## 🌐 GitHub Pages

1. Upload the project files to a GitHub repository.
2. Open **Settings → Pages**.
3. Select the `main` branch and the root folder.
4. Save the settings.
5. Open the GitHub Pages URL generated for the repository.

## 🎓 Academic Purpose

This project demonstrates:

- HTML structure
- Responsive web design
- Tailwind CSS utilities
- JavaScript functions
- DOM manipulation
- Event listeners
- User input handling
- Mathematical calculations
- Interactive UI components

## 🔮 Future Scope

- Item-wise bill splitting
- Different amounts for each person
- Percentage-based individual splitting
- Multiple currency support
- Dark mode
- Bill history
- Printable receipts
- Shareable bill summaries

## 👨‍💻 Project

**Project Name:** Bill Splitter  
**Category:** Frontend Web Development  
**Purpose:** Educational / Academic Project
