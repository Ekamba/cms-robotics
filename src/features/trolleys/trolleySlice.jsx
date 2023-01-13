import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statue: [
    { pending: "pending" },
    { inProgress: "in progress" },
    { completed: "completed" },
    { cancelled: "cancelled" },
  ],
  deliQty: 0,
  wineSpritzQty: 0,
  freshGoodQty: 0,
  frozenQty: 0,
  fruitsVegQty: 0,
};

const trolleySlice = createSlice({
  name: "trolley",
  initialState,
  reducers: {
    addDeliToTrolley: (state) => {
      state.deliQty += 1;
    },
    addWineSpritzToTrolley: (state) => {
      state.wineSpritzQty += 1;
    },
    addFreshGoodsToTrolley: (state) => {
      state.freshGoodQty += 1;
    },
    addFrozenToTrolley: (state) => {
      state.frozenQty += 1;
    },
    addFruitsVegToTrolley: (state) => {
      state.fruitsVegQty += 1;
    },

    removeToTrolley: (state) => {
      state.deliQty = 0;
      state.wineSpritzQty = 0;
      state.freshGoodQty = 0;
      state.frozenQty = 0;
      state.fruitsVegQty = 0;
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
  removeToTrolley,
} = trolleySlice.actions;

export default trolleySlice.reducer;
