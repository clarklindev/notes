function HashTable(size){
    this.buckets = Array(size); //buckets is Array of (size)
    this.numBuckets = this.buckets.length; //keep track of no. of buckets in hash table
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null; //next stores next node in bucket if there are collisions
}

//key is key prop on a node
//turn key into a number using charCodeAt, 
//adding up values in each character in key, storing total in a variable
//total is much larger than we need it to be as we are using it as index for insert in hashtable size (0-29)
//solution: use total mod this.numBuckets, remainder will be a value between 0 and 29
HashTable.prototype.hash = function(key){
    var total = 0;
    for(let i =0; i< key.length; i++){
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;  //tells us which position to put Node in HashTable
};

HashTable.prototype.insert = function(key, value){
    //get bucket hash node will go in
    let index = this.hash(key);
    console.log("index: ", index);
    //bucket is empty
    if(!this.buckets[index]){
        this.buckets[index] = new HashNode(key, value);
    }
    //check first node in bucket
    else if(this.buckets[index].key === key){
        this.buckets[index].value = value;
    }
    //bucket is not empty
    else{
        //current node = firstnode in bucket
        var currentNode = this.buckets[index];
        //while not last node in the chain, continue to travel down chain, by changing curentNode to the next node in the chain
        //when on last node in chain, next will be null, while loop will be false
        //will never execute for last node in chain as always checking .next node
        while(currentNode.next){ 
            if(currentNode.next.key === key){
                currentNode.next.value = value;
                return; //if we found our friend, and updated, we can stop running while loop
            }
            currentNode = currentNode.next;
        }
        //currentNode will now point to last node in chain
        //add new HashNode and add to the last node    
        currentNode.next = new HashNode(key, value);
    }
}

HashTable.prototype.get = function(key){
    //find bucket to look in
    let index = this.hash(key);
    if(!this.buckets[index]){
        return null;
    }
    //bucket is not empty
    else{
        var currentNode = this.buckets[index];
        while(currentNode) {
            if(currentNode.key === key){
                //found friend
                return currentNode.value;   //return the email
            }
            //point to next, and repeat while()
            currentNode = currentNode.next;
        }
        //not found
        return null;
    }
}

//traversing all nodes in hashTable
HashTable.prototype.retrieveAll = function(){
    let allNodes = [];
    for(var i =0; i< this.numBuckets; i++){
        var currentNode = this.buckets[i];        
        while(currentNode){
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
    }
    return allNodes;
};

var myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
//testing collision - because same letters and also start letter same 'D'
myHT.insert('Dane', 'dane@yahoo.com');
//updating email
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'Dane1010@outlook.com');
myHT.insert('Joe', 'Joey@facebook.com');
myHT.insert('Samantha', 'Sammy@twitter.com');
//testing get method
console.log(myHT.get('Dean'));
console.log(myHT.get('Megan'));
console.log(myHT.get('Dane'));

console.log(myHT.retrieveAll());
