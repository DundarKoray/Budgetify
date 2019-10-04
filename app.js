// BUDGET CONTROLLER
let budgetController = () => {
    // Some code
}

// UI CONTROLLER 
let UIController = () => {
    // Some code
}

// GLOBAL APP  CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {
    let ctrlAddItem = function () {

        // 1. Get the field input data
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        console.log('it works')
    }   

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {
        // console.log(event)

        event.keyCode === 13 ? ctrlAddItem() : null
        
    })
})(budgetController, UIController)