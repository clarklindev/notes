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

//search filter update
https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

```js
import memoize from 'memoize-one';

class Example extends Component {
  // State only needs to hold the current filter text value:
  state = { filterText: '' };

  // Re-run the filter whenever the list array or filter text changes:
  filter = memoize((list, filterText) =>
    list.filter(item => item.text.includes(filterText))
  );

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // Calculate the latest filtered list. If these arguments haven't changed
    // since the last render, `memoize-one` will reuse the last return value.
    const filteredList = this.filter(this.props.list, this.state.filterText);

    return (
      <Fragment>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>
          {filteredList.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
```
