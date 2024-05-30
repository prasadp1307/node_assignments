function addExpense() {
    var expenseAmount = document.getElementById("expenseAmount").value;
    var expenseDescription = document.getElementById("expenseDescription").value;
    var category = document.getElementById("category").value;

    var expense = {
        amount: expenseAmount,
        description: expenseDescription,
        category: category
    };

    // Retrieve existing expenses from local storage
    var expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);

    // Save expenses to local storage
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Update expense list on the screen
    updateExpenseList();
}

function updateExpenseList() {
    var expenseList = document.getElementById("expenseList");
    var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Clear existing content
    expenseList.innerHTML = "";

    // Populate expense list
    expenses.forEach(function(expense, index) {
        var listItem = document.createElement("div");
        listItem.innerHTML = `
            <p>Amount: ${expense.amount}</p>
            <p>Description: ${expense.description}</p>
            <p>Category: ${expense.category}</p>
            <button onclick="editExpense(${index})">Edit</button>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(listItem);
    });
}

function deleteExpense(index) {
    var expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updateExpenseList();
}

function editExpense(index) {
    var expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    var expense = expenses[index];
    document.getElementById("expenseAmount").value = expense.amount;
    document.getElementById("expenseDescription").value = expense.description;
    document.getElementById("category").value = expense.category;

    // Delete the old entry
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Update the expense list
    updateExpenseList();
}

// Initial update of expense list when the page loads
updateExpenseList();