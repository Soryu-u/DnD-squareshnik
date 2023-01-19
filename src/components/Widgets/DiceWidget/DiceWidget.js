import React, { useState } from 'react';
import styles from './DiceWidget.module.css';
import dice from '../../../images/dice.png';
import useComponentVisible from '../../../utils/useComponentVisible';

export const DiceWidget = () => {
    const [showDices, setShowDices] = useState(false);
    const { ref } = useComponentVisible(setShowDices);
    const [selectedDice, setSelectedDice] = useState({
        d4: 0,
        d6: 0,
    });

    function randomize(dice, count) {
        const result = [];
        for (let i = 1; i <= count; i++) {
            result.push(Math.floor(Math.random() * (dice - 1 + 1) + 1));
            console.log(result);
        }
    }

    return (
        <div
            ref={ref}
            className={styles.dice_widget}
            onClick={() => {
                setShowDices(true);
            }}
        >
            <img
                className={[
                    styles.dice_image,
                    showDices ? styles.dice_darker : '',
                ].join(' ')}
                src={dice}
                alt=""
            />
            {/* {showDices && <div onClick={randomize(4, 1)}>go</div>} */}
            {showDices && (
                <div className={styles.dices}>
                    <Dice diceStyle={styles.d4} diceNumber={4} />
                    <Dice diceStyle={styles.d6} diceNumber={6} />
                </div>
            )}
        </div>
    );
};

function Dice({ diceStyle, diceNumber }) {
    const [diceSelected, setDiceSelected] = useState(0);
    function selectDice() {
        setDiceSelected(diceSelected + 1);
    }

    return (
        <div
            className={[styles.dice, diceStyle].join(' ')}
            onClick={selectDice}
        >
            {diceNumber}
            {diceSelected > 0 && (
                <div className={styles.selected_dice}>{diceSelected}</div>
            )}
        </div>
    );
}
