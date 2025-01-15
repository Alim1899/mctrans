import React from "react";
import classes from "./Form.module.css";
import logo from "../../assets/logo.png";
import app from "../../firebaseConfig.js";
import { useEffect, useReducer } from "react";
import { getDatabase, get, ref } from "firebase/database";
const getFormattedDateTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}. ${month}. ${year} / ${hours}:${minutes}`;
};
const initialState = {
  auction: "",
  state: "",
  city: "",
  port: "",
  port2: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "getData":
      return { initialState, auction: action.payload };
    case "auctionSelected":
      return { ...state, state: action.payload, city: "", port: "", port2: "" };
    case "stateSelected":
      return { ...state, city: action.payload, port: "", port2: "" };
      case "resetState":
        return { ...state, city:"", port: "", port2: "" };
    case "citySelected":
      return {
        ...state,
        port: action.payload.port,
        port2: action.payload.port2,
      };
    default:
      throw new Error("Unknown action typpe");
  }
};
function Calculator() {
  const [{ auction, state, city, port, port2 }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const date = getFormattedDateTime();
  const getData = async (auc) => {
    try {
      const db = getDatabase(app);
      const auction = ref(db, auc);
      const snapshot = await get(auction);
      dispatch({ type: "auctionSelected", payload: Object.entries(snapshot.val()) });
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };
  const auctionSelectionHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "getData",
      payload: e.target.options[e.target.selectedIndex].id,
    });
  };
  const stateSelectionHandle = (e) => {
    e.preventDefault();
    const findByText = (textToFind) => {
      return state.find((option) => option[1].text === textToFind);
    };
    const selectedCity = findByText(e.target.value);
    console.log(selectedCity);
    selectedCity?dispatch({ type: "stateSelected", payload: selectedCity[1].cities }):dispatch({type:'resetState'})
  };
  const citySelectionHandle = (e) => {
    e.preventDefault();
    const findByText = (textToFind) => {
      return city?.find((option) => option.text === textToFind);
    };
    const selectedPort = findByText(e.target.value);
    dispatch({
      type: "citySelected",
      payload: {
        port: selectedPort.price || "",
        port2: selectedPort.price2 || "",
      },
    });
  };

  useEffect(() => {
    if (auction) getData(auction);
  }, [auction]);

  return (
    <div className={classes.main}>
      <div className={classes.date}>
        <p>{date}</p>
        <a
          href="https://mc.mctrans.ge/price.pdf"
          rel="noreferrer"
          target="_blank"
        >
          <button type="button">Download Price</button>
        </a>
      </div>
      <div className={classes.form}>
        <img src={logo} className={classes.logo} alt="logo"></img>
        <div className={classes.fields}>
          <label htmlFor="auction">
            Auction:
            <select
              id="auction"
              onChange={(e) => auctionSelectionHandle(e)}
              className={classes.select}
            >
              <option id="">Choose</option>
              <option id="copart">Copart</option>
              <option id="iaai">IAAI</option>
              <option id="manhaim">Manheim</option>
              <option id="canada">Canada</option>
              <option id="sub_copart">SUBLOT COPART</option>
              <option id="sub_iaai">SUBLOT IAAI</option>
            </select>
          </label>

          <label htmlFor="state">
            State:
            <select
              className={classes.select}
              disabled={state ? false : true}
              id="state"
              onChange={(e) => stateSelectionHandle(e)}
            >
            <option value="">Choose</option>
              {state &&
                state.map((el) => {
                  return <option key={el[1].text}>{el[1].text}</option>;
                })}
              {!state && <option>Choose</option>}
            </select>
          </label>

          <label htmlFor="city">
            City:
            <select
              id="city"
              onChange={(e) => citySelectionHandle(e)}
              className={classes.select}
              disabled={city ? false : true}
            >
              {!city && <option>Choose</option>}
              {city &&
                city.map((city) => {
                  return <option key={city.text}>{city.text}</option>;
                })}
            </select>
          </label>
        </div>
        <div className={classes.ports}>
          {port && <p>{port}</p>}
          {port2 && <p>{port2}</p>}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
