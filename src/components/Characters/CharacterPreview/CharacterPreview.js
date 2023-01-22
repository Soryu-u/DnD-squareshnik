import React from 'react';
import styles from './CharacterPreview.module.css';
import trash_bin from '../../../images/trash-bin.png';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCharacter } from '../../../redux/features/character/characterSlice';

export const CharacterPreview = ({ character }) => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const deleteCharacterHandler = () => {
        try {
            dispatch(deleteCharacter(character._id));
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.item}>
            <div className={styles.item_header}>
                <div>{character.name}</div>
                <div>
                    {character.level}
                    {user._id === character.author && (
                        <img
                            onClick={deleteCharacterHandler}
                            className={styles.delete_icon}
                            src={trash_bin}
                            alt=""
                        />
                    )}
                </div>
            </div>
            <div>{character.race}</div>
        </div>
    );
};
