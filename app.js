
  let monthlyBudget = 2000;
  let hairSalon = 200;
  let nailSpa = 150;
  let skinCareproducts = 100;
  let fitnessClass = 250;
  let wardrobeSubscriptions = 300;
  let facial = 150;
  let massage = 100;
  let yoga = 100;
  let foodSubscription = 250;
  let poppingChampagne = 300;
  let totalExpenses = hairSalon + nailSpa + skinCareproducts + fitnessClass + wardrobeSubscriptions + facial + massage + yoga + foodSubscription + poppingChampagne;

let remainingBalance = monthlyBudget - totalExpenses;



if (remainingBalance > 0) {
  console.log(`${remainingBalance} is positive. You have $${remainingBalance} left! Keep slaying, Javay! You are stacking RACKS on RACKS on RACKS! 💵💵💵`);
}
else if (remainingBalance === 0) {
  console.log(`${remainingBalance} is zero. Neutral. That's What's up Javay! You have successfully balanced your ${monthlyBudget} Diva Well-being Monthly Maintenance Budget to ${remainingBalance}! Stay beautiful Girlie!`);
}
else if (remainingBalance < 0) {
  console.log(`${remainingBalance} is negative. So, you need to cut back, or either get a part-time job fr fr. You have gone over your ${monthlyBudget}! I'm just keeping it 100 Sis, you are NOT managing your money well! Chill on 🍾🥂 popping bottles 🍾🥂 for a while.`);}

// 4. Use 2 Logical Operators
let onBudget = 0;
let overBudget = 2; 
let underBudget = 1;
let goodFinances = true
let badFinances = false
let ontarget = true


// if (ontarget & onBudget ===0) {
// console.log("You are an accounting pro 📈, Sis!")
// }

// if (badFinances || overBudget >= 2) {
// console.log("Good luck on becoming that millionaire!")
// }

// if (goodFinances & underBudget <= 1) {
//   console.log("💵💵💵 Welcome to the Millionaire Women's Club 💵💵💵")
// }

      // 5. Interpolate All 10 of your variables in a console log

console.log(`Diva Sista Girl Maintenance Budget
    monthlyBudget: ${monthlyBudget}
    hairSalon: ${hairSalon}
    nailSpa: ${nailSpa}
    skinCareproducts: ${skinCareproducts}
    fitnessClass: ${fitnessClass}
    wardrobeSubscriptions: ${wardrobeSubscriptions} 
    facial: ${facial}
    massage: ${massage}
    yoga: ${yoga}
    foodSubscription: ${foodSubscription} 
    poppingChampagne: ${poppingChampagne}
    remainingBalance: ${remainingBalance}`);


   //caculate remaining budget
let balance = (monthlyBudget - totalExpenses);
// let Remainingbalance = (totalExpenses - monthlyBudget);


 

  



