import classes from "./Form.module.css";
import logo from "../../assets/logo.png";
function Form() {
  const getFormattedDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${day}. ${month}. ${year} / ${hours}:${minutes}`;
  };

  const date = getFormattedDateTime();
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
            <select id="auction" className={classes.select}>
              <option>Choose</option>
            </select>
          </label>

          <label htmlFor="state">
            State:
            <select className={classes.select} id="state">
              <option className={classes.option}>Choose</option>
            </select>
          </label>

          <label htmlFor="city">
            City:
            <select id="city" className={classes.select}>
              <option>Choose</option>
            </select>
          </label>
        </div>
        <div className={classes.ports}>
          <p>Port GA:1923$</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
