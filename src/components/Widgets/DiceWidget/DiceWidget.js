import React, { useState } from 'react';
import styles from './DiceWidget.module.css';
import dice from '../../../images/dice.png';
import close from '../../../images/close.png';
import useComponentVisible from '../../../utils/useComponentVisible';

export const DiceWidget = ({ submitRoll }) => {
    const [showDices, setShowDices] = useState(false);
    const { ref } = useComponentVisible(setShowDices, closeWidget);
    const [roll, setRoll] = useState(false);
    let selectedDice = [];

    const [d2, setD2] = useState({
        dice: 2,
        count: 0,
    });
    const [d4, setD4] = useState({
        dice: 4,
        count: 0,
    });
    const [d6, setD6] = useState({
        dice: 6,
        count: 0,
    });
    const [d8, setD8] = useState({
        dice: 8,
        count: 0,
    });
    const [d10, setD10] = useState({
        dice: 10,
        count: 0,
    });
    const [d12, setD12] = useState({
        dice: 12,
        count: 0,
    });
    const [d20, setD20] = useState({
        dice: 20,
        count: 0,
    });
    const [d100, setD100] = useState({
        dice: 100,
        count: 0,
    });

    function closeWidget() {
        setShowDices(false);
        setRoll(false);
        selectedDice = [];
        setD2({});
        setD4({});
        setD6({});
        setD8({});
        setD10({});
        setD12({});
        setD20({});
        setD100({});
    }

    function randomize() {
        selectedDice.push(d20, d12, d10, d100, d8, d6, d4, d2);
        const result = [];
        selectedDice.forEach((element) => {
            const random = [];
            if (element.count > 0) {
                if (element.dice === 100) {
                    for (let i = 1; i <= element.count; i++) {
                        random.push(
                            Math.floor((Math.random() * (10 - 1 + 1) + 1)) * 10
                        );
                    }
                } else {
                    for (let i = 1; i <= element.count; i++) {
                        random.push(
                            Math.floor(Math.random() * (element.dice - 1 + 1) + 1)
                        );
                    }
                }
                result.push({ dice: element.dice, result: random });
            }
        });
        closeWidget();
        return result;
    }

    return (
        <div ref={ref} className={styles.dice_widget}>
            <img
                className={[
                    styles.dice_image,
                    showDices ? styles.dice_darker : '',
                ].join(' ')}
                src={dice}
                alt=""
                onClick={() => {
                    setShowDices(true);
                }}
            />
            {showDices && !roll && (
                <img
                    onClick={closeWidget}
                    className={styles.close}
                    src={close}
                    alt=""
                />
            )}
            {roll && (
                <div
                    className={styles.roll}
                    onClick={() => {
                        submitRoll(randomize());
                    }}
                >
                    roll
                </div>
            )}
            {showDices && (
                <div className={styles.dices}>
                    <Dice
                        diceStyle={styles.d20}
                        diceNumber={20}
                        setRoll={setRoll}
                        setSelectedDice={setD20}
                    />
                    <Dice
                        diceStyle={styles.d12}
                        diceNumber={12}
                        setRoll={setRoll}
                        setSelectedDice={setD12}
                    />
                    <Dice
                        diceStyle={styles.d10}
                        diceNumber={10}
                        setRoll={setRoll}
                        setSelectedDice={setD10}
                    />
                    <Dice
                        diceStyle={styles.d100}
                        diceNumber={100}
                        setRoll={setRoll}
                        setSelectedDice={setD100}
                    />
                    <Dice
                        diceStyle={styles.d8}
                        diceNumber={8}
                        setRoll={setRoll}
                        setSelectedDice={setD8}
                    />
                    <Dice
                        diceStyle={styles.d6}
                        diceNumber={6}
                        setRoll={setRoll}
                        setSelectedDice={setD6}
                    />
                    <Dice
                        diceStyle={styles.d4}
                        diceNumber={4}
                        setRoll={setRoll}
                        setSelectedDice={setD4}
                    />
                    <Dice
                        diceStyle={styles.d2}
                        diceNumber={2}
                        setRoll={setRoll}
                        setSelectedDice={setD2}
                    />
                </div>
            )}
        </div>
    );
};

function Dice({ diceStyle, diceNumber, setRoll, setSelectedDice }) {
    const [count, setCount] = useState(0);
    function selectDice() {
        setRoll(true);
        setCount(count + 1);
        setSelectedDice({ dice: diceNumber, count: count + 1 });
    }

    return (
        <div
            className={[styles.dice, diceStyle].join(' ')}
            onClick={selectDice}
        >
            {diceNumber}
            {count > 0 && <div className={styles.selected_dice}>{count}</div>}
        </div>
    );
}
