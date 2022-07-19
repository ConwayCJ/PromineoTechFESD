/*1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.
*/

/*Hope your day is going well ~ here's a bad coding meme I made up (:

u must be a } cause I can't function without you

*/

//Welcome to Borger Boi!


//AnyBurger class that will create a burger for people. There is always default ingredients, but the name can be customized. Starts at 7.99
class AnyBurger {
  constructor(burgerName) {
    this._burgerName = burgerName
    this._ingredients = [
        'secret sauce',
        'pickles',
        '100% beef patty',
        'sourdough bun'
      ]
      this._price = 7.99
  }
} 

//had to create a customerBurger variable on global scope since I was having scope issues in createBurger() method.
let customerBurger = new AnyBurger('Hamburger')


//EVERYTHING BELOW HAS TO DO WITH WINDOW PROMPTS & MENU APP
class Menu {
    constructor() {        
    }

     //Upon being called, starts the app and calls methods based on which string gets input
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createBurger();
                    break;
                case '2':
                    this.addIngredient();
                    break;
                case '3':
                    this.removeIngredient();
                    break;
                case '4':
                    this.viewAllIngredients();
                    break;
                case '5':
                    this.happyBirthBurger()
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        //After 0 is selected, tells the user goodbye and exits.
        alert('Enjoy!')
    }
        //Shows a prompt, that is just text but asks the user to input an option from our switch statement
    showMainMenuOptions() {
        return prompt(`
        Hello! Welcome to Borger Boi! Please customize your burger : )
        All burgers come with Secret Sauce and Pickles. Cheese is extra!

        0) Check out
        1) Name your burger 
        2) Add an ingredient 
        3) Remove an ingredient
        4) View your creation! 
        5) It's my birthday!
        `)
    }

    //New burger that the user named.
    createBurger() {
        let customerDesiredName = prompt('Enter a name for your burger:');
        customerBurger = new AnyBurger(customerDesiredName)   
      }

      //Alerts the user, showing all of the ingredients in the [ingredients] array
    viewAllIngredients() {
        alert(`The total is $${customerBurger._price} for your ${customerBurger._burgerName}.\n\nYour burger toppings:\n${customerBurger._ingredients.join(',\n')}.`)
      }

     //Removes any ingredient on the burger
    removeIngredient(ingredient) {
        ingredient = prompt(`Which ingredient would you like to remove?`).toLowerCase()

        if (customerBurger._ingredients.includes(ingredient) === false) {
            alert(`Please enter a ingredient that is actually on your ${customerBurger._burgerName}. Case sensitive!`)
        } else {
            customerBurger._ingredients = customerBurger._ingredients.filter(element => !element.toLowerCase().includes(ingredient.toLowerCase())) 
            alert(`${ingredient} has been removed!`)
        }
    }

     //Method to add ANY ingredient to burger, $1 extra if it's cheese.
    addIngredient(ingredient) {
        ingredient = prompt('Which ingredient would you like to add?')

        if(ingredient.toLowerCase().includes('cheese')) {
            customerBurger._ingredients.push(ingredient.toLowerCase())
            customerBurger._price += 1
        } else {
            customerBurger._ingredients.push(ingredient.toLowerCase())
        }

        alert(`${ingredient} has been added!`)
      }

     //Adds a candle to the ingredient list, prompts a string to the user.
    happyBirthBurger() {
        customerBurger._ingredients.unshift('candle')
        alert(`You let the employee know it's your birthday. Your body tenses, instantly regretting your decision upon seeing the monstrosity that happens next. The employee sticks a candle straight in the middle of your ${customerBurger._burgerName}. You take a bite. It tastes like wax.
                    
        
                Yum.`)
  }
}

//creates a new menu, starts the application
let menu = new Menu();
menu.start();