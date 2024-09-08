// store/homeSlice.js
import { createSlice, current } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'homes',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    totalPages: 0, // Add this field to store total pages
    totalCount: 0,  // Add this field to store total count
    nextPage: 1,
    homeToBeUpdated: ''
  },
  reducers: {
    setHomes(state, action) {
      state.data = action.payload.data
      state.totalPages = action.payload.totalPages
      state.totalCount = action.payload.totalCount
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
    incrementPage(state,action) {
      if(state.nextPage < state.totalPages) {
        state.nextPage += 1
      }
    },
    decrementPage(state,action){
      if(state.nextPage >= 1) {
        state.nextPage -= 1
      }
    },
    reInitializePage(state,action) {
      state.nextPage = 1
    },
    setHomeToBeUpdated(state,action) {
      state.homeToBeUpdated = action.payload
    }

  },
})

export const { setHomes, setLoading, setError, incrementPage, decrementPage, reInitializePage, setHomeToBeUpdated} = homeSlice.actions
const homeReducer = homeSlice.reducer;
export default homeReducer;

