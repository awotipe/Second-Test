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
import frame from "../../assets/Chart.png";
import round from "../../assets/pie.png";
import Cards from '../../components/cards/cards';

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
        <div className={classes.btn1}>
          <button>Transactions</button>
        </div>
        <div className={classes.btn2}>
          <button>Settlements</button>
          <button>Performance</button>
          <button>Terminal Health</button>
          <button>Bank Statement</button>
        </div>
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
        <div className={classes.wrapper}>
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
              <td>
                <span className={classes.approved}>Approved</span>
              </td>
            </tr>
            <tr>
              <td>12:08 pm</td>
              <td>14,200</td>
              <td>Transfer</td>
              <td>23013201</td>
              <td>07613***67</td>
              <td>
                <span className={classes.approved}>Approved</span>
              </td>
            </tr>
            <tr>
              <td>11:32 am</td>
              <td>4,500</td>
              <td>Card</td>
              <td>23019800</td>
              <td>07613***67</td>
              <td>
                <span className={classes.approved}>Approved</span>
              </td>
            </tr>
            <tr>
              <td>11:25 am</td>
              <td>8,000</td>
              <td>Card</td>
              <td>23014019</td>
              <td>07613***67</td>
              <td>
                <span>Failed</span>
              </td>
            </tr>
            <tr>
              <td>11:20 am</td>
              <td>1,100</td>
              <td>Transfer</td>
              <td>23011100</td>
              <td>07613***67</td>
              <td>
                <span>Failed</span>
              </td>
            </tr>
            <tr>
              <td>11:05 am</td>
              <td>3,400</td>
              <td>Transfer</td>
              <td>09087043AA</td>
              <td>07613***67</td>
              <td>
                <span>Failed</span>
              </td>
            </tr>
            <tr>
              <td>10:30 am</td>
              <td>2,000</td>
              <td>Card</td>
              <td>09087043AA</td>
              <td>07613***67</td>
              <td>
                <span>Failed</span>
              </td>
            </tr>
            <tr>
              <td>10:05 am</td>
              <td>50,000</td>
              <td>Card</td>
              <td>09087043AA</td>
              <td>07613***67</td>
              <td>
                <span>Failed</span>
              </td>
            </tr>
            <tr>
              <td>9:50 am</td>
              <td>3,500</td>
              <td>Card</td>
              <td>09087043AA</td>
              <td>07613***67</td>
              <td>
                <span>Failed</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className={classes.distribution}>
        <h3>Hourly Distribution</h3>

        <div className={classes.frame}>
          <div className={classes.textFrame}>
            <h4>Overall Approval Rate: 45.0%</h4>
            <p>Transactions per time</p>
          </div>
          <img src={frame} alt="graph" />

          <div className={classes.below}>
            <div className={classes.comment}>
              <div className={classes.circle}>
                <div className={classes.color}></div>
                <p>Approved</p>
              </div>

              <div className={classes.circle}>
                <div className={classes.colorRed}></div>
                <p>Failed</p>
              </div>
            </div>
            <div className={classes.chtBtn}>
              <button>View Table</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.failure}>
        <h3>Failed Transactions</h3>
        <div className={classes.contain}>
          <div className={classes.class}>
            <h4>Failures by Class</h4>
            <div className={classes.allText1}>
              <div className={classes.acquire}>
                <div className={classes.redCircle}></div>
                <p>Acquirer Related</p>
              </div>
              <div className={classes.acquire}>
                <div className={classes.blueCircle}></div>
                <p>Cardholder Related</p>
              </div>
              <div className={classes.acquire}>
                <div className={classes.purpleCircle}></div>
                <p>Issuer Related</p>
              </div>
            </div>
            <div className={classes.allText2}>
              <div className={classes.acquire}>
                <div className={classes.orangeCircle}></div>
                <p>Switch Related</p>
              </div>
              <div className={classes.acquire}>
                <div className={classes.greenCircle}></div>
                <p>Undefined</p>
              </div>
            </div>
            <div className={classes.classImage}>
              <img src={round} alt="piechart" />
            </div>
            <div className={classes.progressBar}>
              <div className={classes.barWrap}>
                <div className={classes.bar1a}></div>
                <div className={classes.bar2}></div>
                <div className={classes.percent}>
                  <p>22%</p>
                </div>
              </div>

              <div className={classes.barWrap}>
                <div className={classes.bar1b}></div>
                <div className={classes.bar2}></div>
                <div className={classes.percent}>
                  <p>14%</p>
                </div>
              </div>

              <div className={classes.barWrap}>
                <div className={classes.bar1c}></div>
                <div className={classes.bar2}></div>
                <div className={classes.percent}>
                  <p>9%</p>
                </div>
              </div>

              <div className={classes.barWrap}>
                <div className={classes.bar1d}></div>
                <div className={classes.bar2}></div>
                <div className={classes.percent}>
                  <p>3%</p>
                </div>
              </div>

              <div className={classes.barWrap}>
                <div className={classes.bar1e}></div>
                <div className={classes.bar2}></div>
                <div className={classes.percent}>
                  <p>2%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.cardholder}>
            <div className={classes.bigText}>
              <h1>10,000</h1>
            </div>
            <div className={classes.text}>
              <p>Here's why your transactions failed!</p>
            </div>
            <div className={classes.Buttons}>
              <div className={classes.btns1}>
                <button>Cardholder</button>
              </div>
              <div className={classes.btns2}>
                <button>Acquirer</button>
                <button>Issuer</button>
                <button>Switch</button>
                <button>Undefined</button>
              </div>
            </div>
            <div className={classes.lists}>
              <ul className={classes.funds}>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
                <li>51 (Not sufficient funds)</li>
              </ul>
              <ul className={classes.amount}>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
                <li>1,110</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <Cards/>
    </div>
  );
};

export default hero;
