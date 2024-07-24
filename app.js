// let anExample = "this"
// let calculatedExample = 723 + 44 
// let templateLit = `Both ${anExample} but also ${calculatedExample} as a String`
// // ---------------------------variableDeclarations



// const demo = () => {
//   let userInput = prompt(" Give me a number to add");
//   //   Get Users Input
//   if (userInput === "10") {
//     alert("Perfect 10 BRO");
//   } else {
//     alert("Thats Just the way it goes.");
//   }
//   console.log(userInput);
// };
// // Demo 1 _ IF Statement

// const legalAgeFunc = () => {
//   let usersAge = prompt(" Enter Age");
//   let ageToDrive = 18;
//   let ageToDrink = 21;
//   let ageToRentCar = 25;

//   if (usersAge >= ageToDrive && usersAge >= ageToDrink) {
//     console.log("Congrats! Come get your permit! and have a drink");
//   } else {
//     console.log("You are not of age.");
//   }
// };
// // Demo 2 _ IF Statement MULTI Conditional


// // Conditional Breakdown: 
//     // if(userInput === '10'){
//     //     alert("Perfect 10 BRO")
//     // }
//     // else{
//     //     alert("Thats Just the way it goes.")
//     // }

// // =================if Statement: uses () to evaluate a stmnt to see if result = true.
//     // --> true : {}first code block executes
//     // --> false: {}else code block executes


//-----------------------------------------------------------------------------------------------------------------
  //create 10 variables
//Diva Well-being Monthly Maintenance Budget
  let monthlyBudget = 1700;
  let hairSalon = 190;
  let nailSpa = 110;
  let skinCare = 100;
  let fitnessClass = 250;
  let wardrobeSubscriptions = 300;
  let facial = 150;
  let massage = 100;
  let yoga = 100;
  let foodSubscription = 250;
  let sistaGirlOutings = 300;
  let totalExpenses = hairSalon + nailSpa + skinCare + fitnessClass + wardrobeSubscriptions + facial + massage + yoga + foodSubscription + sistaGirlOutings;

  // 2. Perform calculations(*operator) on vars and create new Vars
//caculate remaining balance
let remainingBalance  = totalExpenses - monthlyBudget;
let OverYourBudget = monthlyBudget - totalExpenses;

//3. Create 3 if Statements and test their outputs in console.
  if (remainingBalance > 0) {
    console.log("You have $" + remainingBalance + " left! Keep slaying, Javay!");
  } 
  
  else if (remainingBalance === 0) {
    console.log("you have successfully balanced your Diva Well-being Monthly Maintenance Budget! Stay beautiful Girlie");
  }

else if (remainingBalance < 0) {
  console.log("So, you need to cut back, or either get a part-time job. Just keeping it real sis");
}

// 4. Use 2 Logical Operators
let onBudget = 2;
let overBudget = 0; 
let underBudget = 1;
let goodFinances = true
let badFinances = true
let ontarget = true


if (ontarget = onBudget >= 2) {
console.log("You are managing your money well!")
}

if (badFinances = overBudget = 0) {
console.log("You are NOT managing your money well!")
}


      // 5. Interpolate All 10 of your variables in a console log

console.log(`Diva Sista Girl Maintenance Budget
    monthlyBudget: ${monthlyBudget}
    hairSalon: ${hairSalon}
    nailSpa: ${nailSpa}
    skinCare: ${skinCare}
    fitnessClass: ${fitnessClass}
    wardrobeSubscriptions: ${wardrobeSubscriptions} 
    facial: ${facial}
    massage: ${massage}
    yoga: ${yoga}
    foodSubscription: ${foodSubscription} 
    sistaGirlOutings: ${sistaGirlOutings}
    remainingBalance: ${remainingBalance}`);


  //calculate total expense
let remainingBalance2 = (monthlyBudget - totalExpenses);
let OverYourBudget2 = (totalExpenses - monthlyBudget);


  //caculate remaining budget

  



