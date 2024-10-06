import React from 'react';
import Styles from './ColorCards.module.css';

const ColorCards = ({color, title, icon}) => {
    return (
        <div className={Styles.container} style={{backgroundColor: color}}>
            <div className={Styles.contents}>
                <div className={Styles.iconOne}>
                    {icon}
                </div>
                <div className={Styles.textDiv}>
                    <h5 className={Styles.textOne}> {title} </h5>
                    <p className={Styles.textTwo}>100</p>
                </div>
                <div className={Styles.iconTwo}>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default ColorCards;