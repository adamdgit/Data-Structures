class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }
  
  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)

    const bucket = this.table[index]
    if (!bucket) {
      bucket = [[key, value]]
    } else {
      const checkExistingKey = bucket.find(item => item[0] === key)
      if (checkExistingKey) {
        checkExistingKey[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }

  get(key) {
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key) {
    const index = this.hash(key)
    this.table[index] = null
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }      
    }
  }

}

const table = new HashTable(50)

table.set("name", "Adam")

table.display()

console.log(table.get("name"))
