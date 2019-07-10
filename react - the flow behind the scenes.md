## Filter input

- have some STATE: have a state for the input 'search' : ''
- have some INPUT: onChange={} call a handler
- handler() updates 'search' state with input
- inside render(), setup let filteredData = all the data;
- return filteredData.map(item=>{ return <Item/>})
- ADDING the filter to the full list (all the data).filter((item)=>{
  return item.name.indexOf(this.state.search) === true;
  })
- .indexOf() looks for and tries to match char/string we look for
- we pass into .indexOf the 'search' state
- to ignore case in the search return item.name.toLowerCase().indexOf(this.state.search.toLowerCase())
