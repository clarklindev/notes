# Unit testing (Test Driven Development)

- organized
- maintainable
- fewer bugs

## versions

- create react app 1.5.2
- node 8.2.1
- npm 5.3.0
- react 16.3.2
- jest 22.4.3
- enzyme 3.3.0
- enzyme-adapter-react16 1.1.1
- redux 4.0.0
- react-redux 5.0.7
- redux-thunk 2.2.0
- axios 0.18.0
- moxios 0.4.0

## Sections

1. jest and enzyme (create react app)
2. testing simple React app (component state and component elements)
3. react/redux app, testing connected redux components (how they deal with state)
4. testing action creators and reducers
5. testing redux thunk and Axios
6. testing redux props and action creator calls

---

# 1. jest and enzyme (create react app)

- npx downloads the latest version of create-react-app templates every time
- meaning its not dependant on when you last installed create-react-app on your machine
- npx - using npx means its never installed on your machine (needs npm 5.2+)

```
npx create-react-app demo
```
