// BUDGET CONTROLLER
let budgetController = (function() {
    
    let Expense = function(id, description, value) {
        this.id = id
        this.description = description;
        this.value = value;
    }

    let Income = function(id, description, value) {
        this.id = id
        this.description = description;
        this.value = value;
    }



    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            let newItem, ID;
            
            // Create new ID
            if (data.allItems[type].lenghth > 0){
                ID = data.allItems[type][data.allItems[type].lenghth -1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item base on 'inc' or 'exp' type
            if(type ==='exp'){
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            // Push it into our data structure
            data.allItems[type].push(newItem)

            // Return the new element
            return newItem
        },

        testing:  function() {
            console.log(data)
        }
    }

    
})()











// UI CONTROLLER 
let UIController = (function() {
    
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
    }



    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            let html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;

                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            // Insert the HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        clearFields: function () {
            let fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' +  DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            })

            fieldsArr[0].focus()
        },

        getDOMstrings: function() {
            return DOMstrings
        }
    }
})()














// GLOBAL APP  CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let setupEventListeners = function () {
        let DOM = UICtrl.getDOMstrings()

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {
            // console.log(event)
    
            event.keyCode === 13 ? ctrlAddItem() : null
            
        })
    }
    
    let updateBudget = function () {
        // 1. Calculate the budget
        
        // 2. Return the budget

        // 3. Display the budget on the UI
        
    }
    
    
    let ctrlAddItem = function () {
        let input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput()

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)
            
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)
            
            // 4. Clear the fields
            UICtrl.clearFields()
            
            // 5. Calculate and update budget
            updateBudget()
        }  

        
    }   

    return {
        init: function(){
            console.log('Application has started')
            setupEventListeners()
        }
    }

})(budgetController, UIController)


controller.init()