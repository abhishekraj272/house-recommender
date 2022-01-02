import Types from "./types";

export const updateRow = (row) => ({
  type: Types.UPDATE_ROW,
  payload: row,
});

export const updateCol = (col) => ({
  type: Types.UPDATE_COL,
  payload: col,
});
