import React, { useContext } from "react";
import { TEST_DATA } from "../../constants";
import { AppContext } from "../../context/context";
import { getRecommender } from "../../recommend/recommenderUtils";
import "./PlayArea.css";

function PlayArea() {
  const { state } = useContext(AppContext);
  const row = parseInt(state.row);
  const col = parseInt(state.col);

  const recommender = getRecommender();

  const handleStopGame = () => {
    recommender.recommend();
  };

  return (
    <div className="recommendArea glassEffect">
      <div className="recommendArea__btn">
        <button
          className={`recommendArea__startBtn ${
            state.gameStarted && "gameStarted"
          }`}
          onClick={handleStopGame}
        >
          Recommend
        </button>
        <button
          className={`recommendArea__startBtn ${
            state.gameStarted && "gameStarted"
          }`}
          onClick={() => recommender.reset()}
        >
          Reset
        </button>
      </div>

      <div id="recommendBoard" className="recommendArea__board">
        <table className="recommendArea__table">
          <tbody>
            {[...Array(row)].map((_, i) => (
              <tr key={i}>
                {[...Array(col)].map((_, j) => (
                  <td
                    key={i + `${j}`}
                    id={`${i}${j}`}
                    className="cell"
                    contentEditable
                    suppressContentEditableWarning
                  >
                    {TEST_DATA[i][j]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayArea;
