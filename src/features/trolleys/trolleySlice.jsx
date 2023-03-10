import { createSlice } from "@reduxjs/toolkit";

const freshGoodQty =
  localStorage.getItem("fresh") !== null
    ? JSON.parse(localStorage.getItem("fresh"))
    : 0;

const setQty = (freshGoodsQty) => {
  localStorage.setItem("fresh", JSON.stringify(freshGoodsQty));
};

const initialState = {
  pending: null,
  inProgress: null,
  completed: null,
  cancelled: null,

  deliQty: 0,
  wineSpritzQty: 0,
  freshGoodQty: freshGoodQty,
  frozenQty: 0,
  fruitsVegQty: 0,
};

const trolleySlice = createSlice({
  name: "trolley",
  initialState,
  reducers: {
    addDeliToTrolley(state) {
      state.deliQty++;
    },
    addFreshGoodsToTrolley(state) {
      state.freshGoodQty++;
      setQty(state.freshGoodQty);
    },
    addWineSpritzToTrolley(state) {
      state.wineSpritzQty++;
    },
    addFrozenToTrolley(state) {
      state.frozenQty++;
    },
    addFruitsVegToTrolley(state) {
      state.fruitsVegQty++;
    },
    removeFreshFromTrolley(state, action) {
      state = state.freshGoodQty = 0;
    },
    removeDeliFromTrolley(state, action) {
      state = state.deliQty = 0;
    },
    removeFruitVegFromTrolley(state, action) {
      state = state.fruitsVegQty = 0;
    },
    removeWineSpritzFromTrolley(state, action) {
      state = state.wineSpritzQty = 0;
    },
    removeFrozenFromTrolley(state, action) {
      state = state.frozenQty = 0;
    },
  },
  extraReducers: {},
});

export const {
  addDeliToTrolley,
  addWineSpritzToTrolley,
  addFreshGoodsToTrolley,
  addFrozenToTrolley,
  addFruitsVegToTrolley,
  removeFreshFromTrolley,
  removeDeliFromTrolley,
  removeFrozenFromTrolley,
  removeFruitVegFromTrolley,
  removeWineSpritzFromTrolley,
} = trolleySlice.actions;

export default trolleySlice.reducer;
