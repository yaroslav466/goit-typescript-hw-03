class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false; 
    this.key = key;
    this.tenants = [];
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} has entered the house.`);
    } else {
      console.log("The door is closed. Can't come in.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is opened.');
    } else {
      console.log("Can't open the door. Invalid key.");
    }
  }
}

// Створення ключа, будинку та особи
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Відкриття дверей та вхід особи до будинку
house.openDoor(person.getKey());
house.comeIn(person);
