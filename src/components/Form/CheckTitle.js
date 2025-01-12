import classes from "./Form.module.css";
import logo from "../../assets/logo.png";
import data from "../../assets/title.json";
import { useState } from "react";
const getFormattedDateTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}. ${month}. ${year} / ${hours}:${minutes}`;
};
export default function CheckTitle() {
  const [query, setQuery] = useState("");
  const [titles, setTitles] = useState([]);
  const date = getFormattedDateTime();

  const titleFinder = (e, title) => {
    e.preventDefault();
    const filtered = Object.entries(data).filter(([key]) => {
      return key.toLowerCase().includes(title.toLowerCase());
    });
    setTitles(filtered);
  };

  return (
    <div className={classes.title}>
      <div className={classes.date}>
        <p>{date}</p>
      </div>
      <div className={classes.content}>
        <img src={logo} className={classes.logo} alt="logo"></img>
        <div>
          {" "}
          <input
            onChange={(e) => setQuery(e.target.value)}
            className={classes.titleInput}
            type="text"
            placeholder="Search for..."
          ></input>
          <button onClick={(e) => titleFinder(e, query)} type="button">
            Go!
          </button>
        </div>

        <div className={classes.titleList}>
          <div className={classes.list}>
            {titles.map((el) => {
              return (
                <p key={el[0]}>
                  {el[0]} - <span>{el[1]}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
