import Calculator from "./Calculator.js";
import CheckTitle from "./CheckTitle.js";
function Form({showForm}) {
  return (
    showForm?<Calculator/>:<CheckTitle/>
  );
}

export default Form;
