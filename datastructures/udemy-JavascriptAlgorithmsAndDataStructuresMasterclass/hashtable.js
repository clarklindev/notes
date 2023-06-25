// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     // map "a" to 1, "b" to 2, "c" to 3, etc.
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// hash with min length of key + using prime number to help avoid collisions
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    //if something is at keyMap[index]
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //note: returns first one
        if (this.keyMap[i][0] === key) {
          return this.keyMap[index][i][1]; //return just the value
        }
      }
      return this.keyMap[index];
    }
    return undefined;
  }

  //returns all keys
  keys() {
    let keysArr = [];
    //loop over keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        //loops through array at keyMap[i]
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //handling duplicates, only add if unique
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  //returns all values, values() does worry about duplicate data
  values() {
    let valuesArr = [];
    //loop over keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        //loops through array at keyMap[i]
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //handling duplicates, only add if unique
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(4);
ht.set('hello world', 'goodbye!!');
ht.set('dogs', 'are cool');
ht.set('cats', 'are fine');
