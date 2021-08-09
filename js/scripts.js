function convert(gallons) {
  return gallons * 3.785;
}

const gallons = prompt("Enter number of gallons:");
const result = convert(gallons) + " liters"
alert(result);

