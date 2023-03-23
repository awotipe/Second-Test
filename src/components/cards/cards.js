import React from 'react'
import classes from './cards.module.css';
import Nigeria from "../../assets/nigeria.png";
import Logo from "../../assets/visa.png";

const cards = () => {
  return (
    <div className={classes.container}>
        <h3>Transactions Per Card Type</h3>
        <div className={classes.cards}>
             <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                <div className={classes.nigeria}>
                    <img src={Nigeria} alt='nigeria'></img>
                    <p> Dutch Nigerian Bank</p>
                </div>
                <div className={classes.logo}>
                <img src={Logo} alt='logo'></img>
                </div>
                </div>
                <div className={classes.wrap}>
                <div className={classes.approved}>
                    <p>Approved (30%)</p>
                    <p><span>512</span></p>
                </div>
                <div className={classes.failed}>
                     <p>Failed (70%)</p>
                    <p><span>3,343</span></p>
                </div>
                </div>
            </div>

            <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                <div className={classes.nigeria}>
                    <img src={Nigeria} alt='nigeria'></img>
                    <p> Dutch Nigerian Bank</p>
                </div>
                <div className={classes.logo}>
                <img src={Logo} alt='logo'></img>
                </div>
                </div>
                <div className={classes.wrap}>
                <div className={classes.approved}>
                    <p>Approved (30%)</p>
                    <p><span>512</span></p>
                </div>
                <div className={classes.failed}>
                     <p>Failed (70%)</p>
                    <p><span>3,343</span></p>
                </div>
                </div>
            </div>

             <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                <div className={classes.nigeria}>
                    <img src={Nigeria} alt='nigeria'></img>
                    <p> Dutch Nigerian Bank</p>
                </div>
                <div className={classes.logo}>
                <img src={Logo} alt='logo'></img>
                </div>
                </div>
                <div className={classes.wrap}>
                <div className={classes.approved}>
                    <p>Approved (30%)</p>
                    <p><span>512</span></p>
                </div>
                <div className={classes.failed}>
                     <p>Failed (70%)</p>
                    <p><span>3,343</span></p>
                </div>
                </div>
            </div>
        </div>

        <div className={classes.cards}>
             <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                <div className={classes.nigeria}>
                    <img src={Nigeria} alt='nigeria'></img>
                    <p> Dutch Nigerian Bank</p>
                </div>
                <div className={classes.logo}>
                <img src={Logo} alt='logo'></img>
                </div>
                </div>
                <div className={classes.wrap}>
                <div className={classes.approved}>
                    <p>Approved (30%)</p>
                    <p><span>512</span></p>
                </div>
                <div className={classes.failed}>
                     <p>Failed (70%)</p>
                    <p><span>3,343</span></p>
                </div>
                </div>
            </div>

            <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                <div className={classes.nigeria}>
                    <img src={Nigeria} alt='nigeria'></img>
                    <p> Dutch Nigerian Bank</p>
                </div>
                <div className={classes.logo}>
                <img src={Logo} alt='logo'></img>
                </div>
                </div>
                <div className={classes.wrap}>
                <div className={classes.approved}>
                    <p>Approved (30%)</p>
                    <p><span>512</span></p>
                </div>
                <div className={classes.failed}>
                     <p>Failed (70%)</p>
                    <p><span>3,343</span></p>
                </div>
                </div>
            </div>

             <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                <div className={classes.nigeria}>
                    <img src={Nigeria} alt='nigeria'></img>
                    <p> Dutch Nigerian Bank</p>
                </div>
                <div className={classes.logo}>
                <img src={Logo} alt='logo'></img>
                </div>
                </div>
                <div className={classes.wrap}>
                <div className={classes.approved}>
                    <p>Approved (30%)</p>
                    <p><span>512</span></p>
                </div>
                <div className={classes.failed}>
                     <p>Failed (70%)</p>
                    <p><span>3,343</span></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default cards