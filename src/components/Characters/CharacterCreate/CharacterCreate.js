import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCharacter } from '../../../redux/features/character/characterSlice';
import styles from './CharacterCreate.module.css';

export const CharacterCreate = ({ setIsCreate }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [character, setCharacter] = useState({
        name: '',
        race: '',
        level: '',
    });

    const submitHandler = () => {
        try {
            dispatch(createCharacter(character));
            setIsCreate(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form>
                <div>
                    <div>Name</div>
                    <input
                        value={character.name}
                        onChange={(e) =>
                            setCharacter({ ...character, name: e.target.value })
                        }
                        type="text"
                    />
                </div>
                <div>
                    <div>Race</div>
                    <input
                        value={character.race}
                        onChange={(e) =>
                            setCharacter({ ...character, race: e.target.value })
                        }
                        type="text"
                    />
                </div>
                <div>
                    <div>LvL</div>
                    <input
                        value={character.level}
                        onChange={(e) =>
                            setCharacter({
                                ...character,
                                level: e.target.value,
                            })
                        }
                        type="number"
                    />
                </div>
                <button onClick={submitHandler} type="submit">
                    Створити
                </button>
            </form>
        </>
    );
};
