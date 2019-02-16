// Parent Class

class Creature {
  constructor(name) {
   this.name = name;
  }
  shout() {
    console.log(`I'm ${this.name}! Oorah!!`);
  }
};

class Dwarf extends Creature {
  constructor(name) {
    // The super keyword is used to access and call functions on an object's parent.
    // super([arguments]); // calls the parent constructor.
    // super.functionOnParent([arguments]);

    super(name);

    //the super keyword appears alone and must be used before the 'this' keyword is used.
    // If not, it will return a reference error

    this.tall = false;

  }
  hitWithMaze () {
    console.log("Smash!");
  }
}


class Wizard extends Creature {

  constructor(name,spell){  // Here we MUST pass 'name' as a parameter in order to call super(name); If not
                           //  will return nothing.
    super(name);          // We MUST pass super() in order to assign 'this.spell' and call it's parent's functions
    this.spell = spell;
    console.log(this.spell);

  }

  castASpell() {
    //this.spellCast = e;
    return "Gandlaf casts " + this.spell;
  }

}


let dwarf = new Dwarf('Thorin');
let wizard = new Wizard('Gandalf','Fireball');

dwarf.hitWithMaze();
dwarf.shout();


wizard.shout();
console.log(
  wizard.castASpell()
);

// Super Intelligent wizard

class SmartWizard extends Creature {
  constructor(name,spell) {
    super(name);
    this.spell = spell;

    this.castASpell(this.spell)
  }
  castASpell(e){
    return "Sauraman Casts " + e;
  }
}

let smartwizard = new SmartWizard('Sauraman');

smartwizard.shout();
console.log(smartwizard.castASpell('iceball')
);
console.log(smartwizard.castASpell('lighting Bolt')
);
