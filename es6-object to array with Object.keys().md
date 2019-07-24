turning an Object into an array,

Object.keys(props.ingredients);

take an object and its keys and turns it into an array of keys, 
the values are not part of the array

now that we have an array, we can perform map()

so we map each key, and return an Array() with size of the value associated with the key
now that we have a size, we can have index,

.map() if you dont care about the value but the index, you can use _ to represent a blank, and that you dont care about the value, and the second prop of map() is the index

then we can use the index to create a unique key, 
then we call map again, 
<ingredient key={igKey + i} type={igKey}>



