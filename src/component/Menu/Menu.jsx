import React, { useContext, useEffect } from "react";
import "./Menu.css";
import { AppContext } from "./../../context/context";
import { updateCol, updateRow } from "./../../context/action";

function Menu() {
  const { state, dispatch } = useContext(AppContext);
  const row = 5;
  const col = 5;

  useEffect(() => {
    dispatch(updateRow(row));
    dispatch(updateCol(col));
  }, [row, col, dispatch]);

  return (
    <div className="menu glassEffect">
      <div>
        <label htmlFor="rowSelect">Rows</label>
        <input
          id="rowSelect"
          type="range"
          value={state.row}
          onChange={(e) => dispatch(updateRow(e.target.value))}
          min="3"
          step="1"
          max="6"
          disabled={state.gameStarted}
        />
      </div>

      <div>
        <label htmlFor="colSelect">Columns</label>
        <input
          id="colSelect"
          type="range"
          value={state.col}
          onChange={(e) => dispatch(updateCol(e.target.value))}
          min="3"
          step="1"
          max="6"
          disabled={state.gameStarted}
        />
      </div>
    </div>
  );
}

export default Menu;
