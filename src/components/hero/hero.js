import React from "react";
import classes from "./hero.module.css";
import arrow from "../../assets/arrow-down.png";
import total from "../../assets/dollar-circle.png";
import approved from "../../assets/money-recive.png";
import failed from "../../assets/money-send.png";
import terminals from "../../assets/group.png";
import overall from "../../assets/point.png";
import refresh from "../../assets/Refresh.png";
import download from "../../assets/Download.png";

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
      <div className={classes.liveMonitor}>
        <div className={classes.top}>
        <h1>Live Monitoring</h1>
        <div className={classes.images}>
        <img src={refresh} alt="refresh" />
        <img src={download} alt="download" />
        </div>
        </div>
        <table>
            <tr className={classes.heading}>
                <th>Time</th>
                <th>Amount</th>
                <th>Payment Type</th>
                <th>Terminal</th>
                <th>Account</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>12: 30 pm</td>
                <td>20,100</td>
                <td>Card</td>
                <td>23012100</td>
                <td>07613***67</td>
                <td className={classes.approved} >Approved</td>
            </tr>
            <tr>
                <td>12:08 pm</td>
                <td>14,200</td>
                <td>Transfer</td>
                <td>23013201</td>
                <td>07613***67</td>
                <td className={classes.approved}>Approved</td>
            </tr>
            <tr>
                <td>11:32 am</td>
                <td>4,500</td>
                <td>Card</td>
                <td>23019800</td>
                <td>07613***67</td>
                <td className={classes.approved}>Approved</td>
            </tr>
            <tr>
                <td>11:25 am</td>
                <td>8,000</td>
                <td>Card</td>
                <td>23014019</td>
                <td>07613***67</td>
                <td className={classes.failed}>Failed</td>
            </tr>
            <tr>
                <td>11:20 am</td>
                <td>1,100</td>
                <td>Transfer</td>
                <td>23011100</td>
                <td>07613***67</td>
                <td className={classes.failed}>Failed</td>
            </tr>
            <tr>
                <td>11:05 am</td>
                <td>3,400</td>
                <td>Transfer</td>
                <td>09087043AA</td>
                <td>07613***67</td>
                <td className={classes.failed}>Failed</td>
            </tr>
            <tr>
                <td>10:30 am</td>
                <td>2,000</td>
                <td>Card</td>
                <td>09087043AA</td>
                <td>07613***67</td>
                <td className={classes.failed}>Failed</td>
            </tr>
            <tr>
                <td>10:05 am</td>
                <td>50,000</td>
                <td>Card</td>
                <td>09087043AA</td>
                <td>07613***67</td>
                <td className={classes.failed}>Failed</td>
            </tr>
            <tr>
                <td>9:50 am</td>
                <td>3,500</td>
                <td>Card</td>
                <td>09087043AA</td>
                <td>07613***67</td>
                <td className={classes.failed}>Failed</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default hero;
