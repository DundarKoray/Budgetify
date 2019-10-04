// BUDGET CONTROLLER
let budgetController = (function() {
    // Some code

    
})()

// UI CONTROLLER 
let UIController = (function() {
    
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }



    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings
        }
    }
})()

// GLOBAL APP  CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {
    
    let DOM = UICtrl.getDOMstrings()
    
    let ctrlAddItem = function () {

        // 1. Get the field input data
        let input = UICtrl.getInput()
        console.log(input)
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        console.log('it works')
    }   

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {
        // console.log(event)

        event.keyCode === 13 ? ctrlAddItem() : null
        
    })
})(budgetController, UIController)