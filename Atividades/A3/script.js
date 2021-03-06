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
    numbs = [] //reseta array de valor do input de preço
    modal.classList.remove("active");
  }
}

/*MÁSCARA NO VALOR R$ */

const valor = document.getElementById('valor')
let numbs = []

valor.onkeyup = function () {
  
  //array de valor recebe número digitado, ou sinal de menos
  numbs.push(window.event.keyCode != 229 ? String.fromCharCode(window.event.keyCode) : "-")
  
  //mais variáveis
  let val
  numb = numbs.length
  
  //para cada quantidade de algarismos, duas lógicas de máscaras, para numeros negativos e positivos
  switch(numb) {
  case 1: numbs[0] == "-" ? `${numbs[0]}` : val = `0.0${numbs[0]}`; break;
  case 2:
    numbs[0] == "-" ? 
    val = `${numbs[0]}0.0${numbs[1]}` : 
    val = `0.${numbs[0]}${numbs[1]}`; break;
  case 3:
    numbs[0] == "-" ? 
    val = `${numbs[0]}0.${numbs[1]}${numbs[2]}` : 
    val = `${numbs[0]}.${numbs[1]}${numbs[2]}`; break;
  case 4: 
    numbs[0] == "-" ? 
    val = `${numbs[0]}0${numbs[1]}.${numbs[2]}${numbs[3]}` : 
    val = `${numbs[0]}${numbs[1]}.${numbs[2]}${numbs[3]}`; break;
  case 5: 
    numbs[0] == "-" ? 
    val = `${numbs[0]}${numbs[1]}${numbs[2]}.${numbs[3]}${numbs[4]}` : 
    val = `${numbs[0]}${numbs[1]}${numbs[2]}.${numbs[3]}${numbs[4]}`; break;
    case 6:
    numbs[0] == "-" ? 
    val = `${numbs[0]}${numbs[1]}${numbs[2]}${numbs[3]}.${numbs[4]}${numbs[5]}` : 
    val = `${numbs[0]}${numbs[1]}${numbs[2]}${numbs[3]}.${numbs[4]}${numbs[5]}`;  break;
  }
  
  //input de preço recebe a máscara
  valor.value = val
}
/*Transactions ************/
const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
  },
  set(transactions) {
    localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
  }
}

const Transaction = {
  
  all: Storage.get(),
  
  add(transaction) {
    Transaction.all.push(transaction)
    App.reload()
  },
  
  remove(index) {
    Transaction.all.splice(index, 1)
    App.reload()
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
    tr.innerHTML = DOM.innerHtmlTransaction(transaction, index)
    tr.dataset.index = index
    
    DOM.htmlPlace.appendChild(tr)
  },
  
  innerHtmlTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense"
    const amount = Utils.formatCurrency(transaction.amount)
    
    const html = `
      <td>${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td>${transaction.date}</td>
      <td><a href="#"><img onclick="Transaction.remove(${index})" src="assets/minus.svg" alt="remover transação" width="35" height="25"></a></td>`
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
  
  formatAmount(value) {
    value = Number(value) * 100
    return value
  },
  
  formatDate(date) {
    const splittedDate = date.split("-")
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  },
  
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

const Form = {

  description: document.getElementById("description"),
  amount: document.getElementById("valor"),
  date: document.getElementById("data"),
  
  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value
    }
  },
  
  validateField() {
    const {description, amount, date} = Form.getValues()
    
    if (description.trim() === "" ||
    amount.trim() === "" || date.trim() === "") {
      throw new Error("por favor preencha todos os campos")
    }
  },
  
  formatValues() {
    let {description, amount, date} = Form.getValues()
      
    amount = Utils.formatAmount(amount)
    date = Utils.formatDate(date)
    
    return {
      description, amount, date
    }
  },
  
  clearFields() {
    Form.description.value = ""
    Form.amount.value = ""
    Form.date.value = ""
  },
  
  submit(event) {
    event.preventDefault()
    
    try {
      Form.validateField()
      const transaction = Form.formatValues()
      Transaction.add(transaction)
      Form.clearFields()
      Modal.close()
      
    } catch (error) {
      alert(error.message)
    }
  }
}

const App = {
  init() {
    Transaction.all.forEach((transaction, index) => {
      DOM.addTransaction(transaction, index)
})

    DOM.updateCards()
    
    Storage.set(Transaction.all)
  },
  reload() {
    DOM.clearTransactions()
    App.init()
  }
}

/******************/

App.init()
