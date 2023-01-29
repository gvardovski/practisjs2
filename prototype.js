let animal = {
    name: "Cat",
    move: true
};
  
let cat= {
    jumps: true,
    __proto__: animal
};

console.log(cat.move)