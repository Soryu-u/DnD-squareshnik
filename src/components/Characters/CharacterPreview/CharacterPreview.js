import React from 'react';
import styles from './CharacterPreview.module.css';

export const CharacterPreview = ( {character} ) => {
  return (
    <div className={styles.item}>
        <div className={styles.item_header}>
            <div>
                { character.name }
            </div>
            <div>
                { character.level } lvl
            </div>
        </div>
        <div>
            { character.race }
        </div>
    </div>
  )
}
