function createStreetLight<C extends string>(
  colors: C[], // "red" | "yellow" | "green" 
  defaultColor?: NoInfer<C>, // Не рассширяем тип, у нас все также остается: "red" | "yellow" | "green"
) {
  // ...
}
createStreetLight(["red", "yellow", "green"], "red");  // OK
// createStreetLight(["red", "yellow", "green"], "blue");  // Error

// "red" | "yellow" | "green"