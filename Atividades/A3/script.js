/* MODAL *************/

// variável
var modal = document.getElementById("modal");

// função
const Modal = {
  open() {
    /*add active class in modal*/
    modal.classList.add("active");
  },
  close() {
    /*remove active class in modal*/
    modal.classList.remove("active");
  }
}

/*Transactions ************/
const transactions =[{
  id: 1,
  description: 'BATATA',
  amount: -50000,
  date: '23/01/2021'
},
{
  id: 2,
  description: 'Luzia',
  amount: -10000,
  date: '23/06/2020'
},
{
  id: 3,
  description: 'Luziodo',
  amount: 50000,
  date: '23/11/2022'
}]
const Transaction = {
  all: transactions,
  add(transaction) {
    Transaction.all.push(transaction)
  },
  incomes() {
    /*count the incomes/entradas*/
    let income = 0
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    })
    return income
  },
  expenses() {
    /*count the expenses/saídas*/
    let expense = 0
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    })
    return expense
  },
  total() {
    /*incomes - expenses*/
    return Transaction.incomes() + Transaction.expenses()
  }
}
const DOM = {
  htmlPlace: document.querySelector('#tbody'),
  
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHtmlTransaction(transaction)
    DOM.htmlPlace.appendChild(tr)
  },
  
  innerHtmlTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense"
    const amount = Utils.formatCurrency(transaction.amount)
    
    const html = `
      <td>${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td>${transaction.date}</td>
      <td><a href="#"><img src="assets/minus.svg" alt="remover transação" width="35" height="25"></a></td>`
    return html
  },
  
  updateCards() {
    document.getElementById("incomeCard").innerHTML = Utils.formatCurrency(Transaction.incomes())
    document.getElementById("expenseCard").innerHTML = Utils.formatCurrency(Transaction.expenses())
    document.getElementById("totalCard").innerHTML = Utils.formatCurrency(Transaction.total())
  },
  
  clearTransactions() {
    DOM.htmlPlace.innerHTML = ""
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""
    value = String(value).replace(/\D/g, "")
    value = Number(value) / 100
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    return (signal + value)
  }
}

/******************/

Transaction.all.forEach((transaction) => {
  DOM.addTransaction(transaction)
})

DOM.updateCards()
