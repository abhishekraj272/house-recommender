// Var is used because we dont need block scope here.
import HouseRecommender from "./Recommender";

export var houseRecommender;

export function getRecommender(row, col) {
  if (!houseRecommender) {
    houseRecommender = new HouseRecommender(row, col);
  }
  return houseRecommender;
}
