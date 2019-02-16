///////////////////////
//// Classes
//////////////////////


// Parent Class
class Creature {
  constructor(name) {
   this.name = name;
  }
  shout() {
    console.log(`I'm ${this.name}! Oorah!!`);
  }
};

// Inherited Class
class Dwarf extends Creature {
  constructor(name){
    super(name); // We call super if we wnat to add a new property with 'this'

    this.tall = false;
  }
  hitWithMace() {
    console.log("Smash!");
  }
}

// Inherited Class
class Wizard extends Creature {
// Here we do not put the constructor function because we are not adding new properties with 'this'
  castAspell(){
    console.log("You shall not pass!");
  }
}

let dwarf = new Dwarf('Thorin');
let wizard = new Wizard('Gandalf');

dwarf.hitWithMace();
wizard.castAspell();


///////////////////////
//// Mixins
//////////////////////

//A Mixin is an abstract subclass; i.e. a subclass definition that may be
//applied to different superclasses to create a related family of modified
//classes.

const weaponry = {
  hitWithSword(){
    console.log("Swoosh!");
  }
}

// The Object.assign() method is used to copy the values of all
// properties from one or more source objects to a target object. It will
// return the target object.

// Object.assign(target, ...sources)

Object.assign(Dwarf.prototype, weaponry);

// So Mixins are usually defined as singletons and applied to a prototype with extension .prototype

dwarf.hitWithSword();


///////////////////////
//// Functional Mixins
//////////////////////

// "a mixin should be a process, not an object”. A better approach implies turning
// mixins into functions into which constructor can be injected. That’s called
// Functional Mixin.

const Armed = (target) => {
  Object.assign(target, {
    hitWithBetterSword(){
      console.log("Swoosh! Goblin's head is chopped off clean!");
    }
  })
}

Armed(Dwarf.prototype);
dwarf.hitWithBetterSword();


///////////////////////
//// Factories
//////////////////////

// Any JavaScript function can create new objects. If it’s not a constructor,
// it’s called a Factory function.

const bowSkills = {
  shotAnArrow() {
    console.log("Swift Arrow");
  }
};

// The Object.create() method creates a new object with the specified prototype
// object and properties.

// Object.create(proto[, propertiesObject])

// proto - The object which should be the prototype of the newly-created object. --> This is where bowSkills reside
// propertiesObject - an object whose enumerable own properties
// (that is, those properties defined upon itself and not enumerable properties
// along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property // names.

const archerFactory = (fighterName) => Object.assign( Object.create(bowSkills), {fighterName} );

let archer = archerFactory('Legolas');

archer.shotAnArrow();

console.log(archer);
