# FUNKCJE
# Eventy:
require("jp2").reminder.on("937", () => {
  // Do papieżowej: 12h
})
require("jp2").reminder.on("2037", () => {
  // Do papieżowej: 1h
})
require("jp2").reminder.on('2132', () => {
  // Do papieżowej: 5min
})
require("jp2").reminder.on("2137", () => {
  // Papieżowa
})

# Funkcje
// Info o module
require("jp2").help()

// Ile do papieżowej: (zwraca JSON)
require("jp2").ile() 
