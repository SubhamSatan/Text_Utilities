import React from "react";

function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  );
}

export default Alert;


//If props.alert is null then we wont get the part after the null statement but if props.a;ert is not null thne
// we will get the function after the &&
//This is because all the JSX gets called to js calls 