Lifecycle - Create (note: STATIC keyword on getDerivedStateFromProps)

1. constructor(props){super(props);}

2. static getDerivedStateFromProps(props, state){}

3. render(){}

4. render child components

5. componentDidMount()

---

Lifecycle - Update (note: STATIC keyword on getDerivedStateFromProps)

1. static getDerivedStateFromProps(props, state){}

2. shouldComponentUpdate(nextProps, nextState){}

3. getSnapshotBeforeUpdate(prevProps, prevState){
	return {message: 'Snapshot!'}
}

4. render(){}

5. update Child Component Props

//receives snapshot returned from 3.
6. componentDidUpdate(prevProps, prevState,  {
}