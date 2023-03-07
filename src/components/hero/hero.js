import React from "react";
import classes from "./hero.module.css";
import arrow from "../../assets/arrow-down.png";
import total from "../../assets/dollar-circle.png";
import approved from "../../assets/money-recive.png";
import failed from "../../assets/money-send.png";
import terminals from "../../assets/group.png";
import overall from "../../assets/point.png";

const hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigText}>
        <h1>Welcome back,</h1>
        <div className={classes.date}>
        <p>12th October, 2022</p>
        <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={classes.text}>
        <p>Here's what is happening with your Terminals today,</p>
      </div>
      <div className={classes.btn}>
        <button>Transactions</button>
        <p>Settlements</p>
        <p>Performance</p>
        <p>Terminal Health</p>
        <p>Bank Statement</p>
      </div>
      <div className={classes.transact}>
        <div className={classes.total}>
        <div className={classes.flex}>
          <img src={total} alt="total" />
          <p>Total Transactions</p>
          </div>
          <h3>30,101</h3>
        </div>

        <div className={classes.total}>
        <div className={classes.flex}>
          <img src={approved} alt="approved" />
          <p>Approved Transactions</p>
          </div>
          <h3>20,101</h3>
        </div>

        <div className={classes.total}>
        <div className={classes.flex}>
          <img src={failed} alt="failed" />
          <p>Failed Transactions</p>
          </div>
          <h3>10,000</h3>
        </div>

        <div className={classes.total}>
        <div className={classes.flex}>
          <img src={terminals} alt="terminals" />
          <p>Transacting Terminals</p>
          </div>
          <h3>48</h3>
        </div>

        <div className={classes.total}>
        <div className={classes.flex}>
          <img src={overall} alt="overall" />
          <p>Total Terminals</p>
          </div>
          <h3>120</h3>
        </div>
      </div>
    </div>
  );
};

export default hero;
