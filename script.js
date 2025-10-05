
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
    alert("please enter a vlid expense and amount");
    return;
  }

  if (price > balance) {
    alert("insufficient balance");
    return;
  }

  let li = document.createElement("li");
  li.textContent = `${name} - ${price} PKR`;
  expenseList.appendChild(li);

  total += price;
  totalExpense.textContent = total;

  balance -= price;
  totalIncome.textContent = balance;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    totalExpense.textContent = 0;
    totalIncome.textContent = 2000;
    li.remove();
    return;
  });

  li.appendChild(deleteBtn);

  expenseName.value = "";
  expensePrice.value = "";
});
