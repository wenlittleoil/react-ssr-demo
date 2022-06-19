import { 
  configureStore,
  createSlice,
} from '@reduxjs/toolkit'

const getStore = (initialState) => {
  const counterSlice = createSlice({
    name: 'num',
    initialState,
    reducers: {
      increment: (state) => {
        state += 1
      },
      decrement: (state) => {
        state -= 1
      },
      incrementByAmount: (state, action) => {
        state += action.payload
      },
    },
  })
  const store = configureStore({
    reducer: {
      num: counterSlice.reducer,
    }
  });
  return store;
}

export default getStore;
