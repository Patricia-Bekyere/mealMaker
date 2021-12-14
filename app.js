const menu = {
  _courses: { 
    appetizers:[],
    mains:[], 
    desserts: []
},
    get appetizers(){
     return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
     get desserts(){
       return this._courses.desserts;
     },

    set appetizers(appetizers){
      this._courses.appetizers =appetizers;
    },
    set mains(mains){
       this._courses.mains = mains;
    },
    set desserts(desserts){
       this._courses.desserts = desserts;
    },

    get courses() {
    return {
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts
    }
    },
   addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
     }
      return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]; 
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizer');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.name;
 
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name} and the price is $${totalPrice}.`;
  }
};
// appetizers
menu.addDishToCourse('appetizers', 'Potato Skin Bites', 4.25);
menu.addDishToCourse('appetizers', 'Bacon crackers', 5.25);
menu.addDishToCourse('appetizers', 'Ham and Pickle roll ups', 9.25);
// mains
menu.addDishToCourse('mains', 'Mustard-Stuffed chicken', 5.25);
menu.addDishToCourse('mains', 'Spicy root', 7.25);
menu.addDishToCourse('mains', 'chicken biryani', 9.25);
// desserts
menu.addDishToCourse('dessert', 'ice cream', 3.25);
menu.addDishToCourse('dessert', 'cakes', 4.25);
menu.addDishToCourse('dessert', 'cookies', 8.25);
 
const meal = menu.generateRandomMeal();
console.log(meal);
