import { getRecommender } from "../recommend/recommenderUtils";
import Types from "./types";

export const initState = {
  row: "5",
  col: "5",
};
export const reducer = (state, action) => {
  const recommender = getRecommender();
  switch (action.type) {
    case Types.UPDATE_ROW:
      recommender.setRow(action.payload);
      return { ...state, row: action.payload };
    case Types.UPDATE_COL:
      recommender.setCol(action.payload);
      return { ...state, col: action.payload };

    default:
      return state;
  }
};
