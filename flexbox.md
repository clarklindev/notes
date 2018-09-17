# Flexbox

reference: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/]()

## property of parent (flex container)
![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/parent-container.png?raw=true)

```
display: flex, inline-flex;
```

```
flex-direction: row, row-reverse, column, column-reverse
```
![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/flex-direction.png?raw=true)

```
flex-wrap: nowrap, wrap, wrap-reverse 
```
![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/flex-wrap.png?raw=true)

```
justify-content: flex-start, flex-end, center, space-between, space-around, space-evenly 
```

![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/justify-content.png?raw=true)

```
align-items: flex-start, flex-end, center, baseline, stretch 
```

![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/align-items.png?raw=true)

```
align-content: flex-start, flex-end, center, space-between, space-around, stretch
```

![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/align-content.png?raw=true)

## property of children (flex items)
![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/child-container.png?raw=true)

```
order: <integer>; /*default is 0*/
```
![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/order.png?raw=true)

```
flex-grow: <number> /* default 0 */   
```
![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/flex-grow.png?raw=true)

flex-shrink: <number> /* default 1 */   
flex-basis: <length> | auto /* default auto */   
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]   
align-self: auto | flex-start | flex-end | center | baseline | stretch;  

![](https://github.com/clarklindeveloper/notes/blob/master/assets/flexbox/align-self.png?raw=true)

NOTE: float, clear and vertical-align have no effect on a flex item 

