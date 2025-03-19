import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const { setCategory } = filterSlice.actions

export default filterSlice.reducer
