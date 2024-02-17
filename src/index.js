import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  value: 0,
}

 export const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
     increment: (state) => {
       // Redux Toolkit allows us to write "mutating" logic in reducers. It
       // doesn't actually mutate the state because it uses the Immer library,
       // which detects changes to a "draft state" and produces a brand new
       // immutable state based off those changes
       state.value += 1
     },
     decrement: (state) => {
       state.value -= 1
     },
     incrementByAmount: (state, action) => {
       state.value += action.payload
     },
   },
 })
 
 export const { increment, decrement, incrementByAmount } = counterSlice.actions

 export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

export function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
