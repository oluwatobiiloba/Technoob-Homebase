import React, { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import classes from "./DashSelector.module.css";
import { AppContext } from "../AppContext/AppContext";
import DashSelectorCard from "./DashSelectorCard";

const Backdrop = (props) => {
  return <div className={classes.selector_overlay} onClick={props.onClick} />;
};

const Overlay = (props) => {
  const { title, onClick } = props;
  return (
    <div className={classes.selector_prompt} onClick={onClick}>
      <div className={classes.selector_message} onClick={onClick}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <footer className={classes.actions}>
          <button
            className={classes.button}
            type="submit"
            value={"admin"}
            onClick={props.onSelectHandler}
          >
            <DashSelectorCard titleText={"Admin Dashboard"} value={"admin"} />
          </button>

          <button
            className={classes.button}
            type="submit"
            dashselection={"user"}
            onClick={props.onSelectHandler}
          >
            <DashSelectorCard titleText={"User Dashboard"} />
          </button>
        </footer>
      </div>
    </div>
  );
};

const DashSelector = () => {
  const { setDashboardToggle } = useContext(AppContext);
  const onClickHandler = () => {
    setDashboardToggle({
      displayToggle: false,
      toggleValue: "User Dashboard",
    });
  };
  const onSelectHandler = (props) => {
    const selection = {
      displayToggle: false,
      toggleValue: props.target.innerText,
    }
    setDashboardToggle(selection);
    sessionStorage.setItem("viewPreference",JSON.stringify(selection))

  };
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={onClickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Overlay title="Select Dashboard" onClick={onSelectHandler}></Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default DashSelector;
