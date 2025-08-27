const month="jan"
switch (month) {
   case "jan" ://we can also use string as values for the cases
    console.log("January");
    break;
   case 2 :
    console.log("February");
    // break;
   case 3 :
    console.log("March");
    break;
   case 4 :
    console.log("April");
    break;
   case 5 :
    console.log("May");
    break;
    
    default:
        console.log("No value found");
        
        break;
}