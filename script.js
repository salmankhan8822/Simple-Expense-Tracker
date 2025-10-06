let expenseName = document.getElementById("expenseName");
let expensePrice = document.getElementById("expensePrice");
let addBtn = document.getElementById("addBtn");
let expenseList = document.getElementById("expenseList");
let totalExpense = document.getElementById("totalExpense");
let totalIncome = document.getElementById("totalIncome");

let total = 0;
let balance = 2000;

addBtn.addEventListener("click", () => {
  let name = expenseName.value.trim();
  let price = Number(expensePrice.value);

  if (name === "" || price <= 0) {
    alert("Please enter a valid expense and amount");
    return;
  }

  if (price > balance) {
    alert("Insufficient balance");
    return;
  }

  // Create new list item
  let li = document.createElement("li");
  li.textContent = `${name} - ${price} PKR `;

  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  // Delete button event
  deleteBtn.addEventListener("click", () => {
    expenseList.removeChild(li);
    total -= price;
    balance += price;
    totalExpense.textContent = total;
    totalIncome.textContent = balance;
  });

  li.appendChild(deleteBtn);
  expenseList.appendChild(li);

  // Update totals
  total += price;
  balance -= price;
  totalExpense.textContent = total;
  totalIncome.textContent = balance;

  // Clear inputs
  expenseName.value = "";
  expensePrice.value = "";
});
