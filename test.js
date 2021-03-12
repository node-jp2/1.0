const jp2 = require("jp2");
jp2.reminder.on("937", () => {
  console.log("Do papieżowej zostało: 12h")
})
jp2.reminder.on("2037", () => {
  console.log("Za godzine papiezowa !!#!@#!@#!@#@#!@")
})
jp2.reminder.on("2132", () => {
  console.log("Do papieżowej 5 minut")
})
jp2.reminder.on("2137", () => {
  console.log("2137")
})
let ile_do_papiezowej = jp2.ile().hours + " godzin, " + jp2.ile().minutes + " minut";
console.log(ile_do_papiezowej)
