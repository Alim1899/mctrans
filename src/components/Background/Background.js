import ship from "../../assets/ship.jpg";
import ge from "../../assets/flag-ge.png";
import az from "../../assets/flag-az.png";
import am from "../../assets/flag-am.png";
import ua from "../../assets/flag-ua.png";
import ky from "../../assets/flag-ky.png";
import kz from "../../assets/flag-kz.png";
import classes from "./Background.module.css";
export default function Background() {
  return (
    <div className={classes.main}>
      <div className={classes.background}>
        {" "}
        <img className={classes.backgroundImage} alt="ship" src={ship}></img>
      </div>
      <div className={classes.head}>
        <h1>International Shipping Company</h1>
        <div className={classes.flags}>
<img className={classes.icon} src={ge} alt="ge"></img>
<img className={classes.icon} src={ua} alt="ua"></img>
<img className={classes.icon} src={az} alt="az"></img>
<img className={classes.icon} src={am} alt="am"></img>
<img className={classes.icon} src={ky} alt="ky"></img>
<img className={classes.icon} src={kz} alt="kz"></img>
        </div>
      </div>
      <div className={classes.button}>
        <h2>საბუთის შემოწმება</h2>
        <h2>Проверка документов</h2>
      </div>
    </div>
  );
}
