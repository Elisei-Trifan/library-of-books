import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: null,
    isOpen: false,
    currentPage: 0,
    selectedBook: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    toggleModal(state, action) {
      state.isOpen = action.payload
      state.selectedBook = action.payload.book || null
      state.currentPage = 0
    },
    nextPage(state, action) {
      state.currentPage = (state.currentPage + 1) % 2 // 0 → 1 → 0
    },
  },
})

export const { setCategory, toggleModal, nextPage } = filterSlice.actions

export default filterSlice.reducer
