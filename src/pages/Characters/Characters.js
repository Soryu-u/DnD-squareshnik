import React, { useEffect, useState } from 'react';
import styles from './Characters.module.css';
import plus from '../../images/plus.png';
import { CharacterPreview } from '../../components/Characters/CharacterPreview/CharacterPreview';
import { createCharacter } from '../../redux/features/character/characterSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getMyCharacters } from '../../redux/features/character/characterSlice';
import { CharacterPage } from '../CharacterPage/CharacterPage';

export const Characters = () => {
    const [isCreate, setIsCreate] = useState(false);
    const { characters } = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    const create = () => {
        try {
            dispatch(createCharacter({ name: 'Name' }));
            setIsCreate(true);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        dispatch(getMyCharacters());
    }, [dispatch]);

    return (
        <>
            {!isCreate ? (
                <div className={styles.characters_list}>
                    {characters.map((character, index) => {
                        return (
                            character !== null && (
                                <CharacterPreview
                                    key={
                                        character.name + index
                                    }
                                    character={character}
                                />
                            )
                        );
                    })}
                    <img
                        className={styles.add_new_icon}
                        src={plus}
                        alt="+"
                        onClick={create}
                    />
                </div>
            ) : (
                <CharacterPage />
            )}
        </>
    );
};
