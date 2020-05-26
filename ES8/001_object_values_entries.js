// Object.values (dict.values() from Python)
let temperatures = {
  '6:00AM': 55,
  '9:00AM': 65,
  '12:00PM': 80,
  '3:00PM': 75,
  '6:00PM': 65
}
let maxTemp = Object.values(temperatures).reduce(
  (prev, current) => {
    if (current > prev) {
      return current
    } else {
      return prev
    }
  }
)
console.log(`Maximum Temperature: ${maxTemp}`);

// Object.entries (dict.items() from Python)
let myElectricBills = {
  jan: 40,
  feb: 30,
  mar: 35,
  apr: 40
}

for (let [month, price] of Object.entries(myElectricBills)) {
  console.log(`In ${month}, I paid $${price} for electricity.`)
}