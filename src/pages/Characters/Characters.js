import React, { useState } from 'react';
import styles from './Characters.module.css';
import plus from '../../images/plus.png';
import { CharacterPreview } from '../../components/Characters/CharacterPreview/CharacterPreview';
import { CharacterCreate } from '../../components/Characters/CharacterCreate/CharacterCreate';


export const Characters = () => {
  const [isCreate, setIsCreate] = useState(false);

  const characters = [
    {
      name: 'szpaku',
      race: 'Dwarf',
      lvl: '1'
    },
    {
      name: 'Soryu',
      race: 'Elf',
      lvl: '3'
    },
  ]


  return (
    <>
    {
     !isCreate ?
    <div className={styles.characters_list}>
      {
        characters.map((character, index) => {
          return <CharacterPreview key={character.name + character.race +index} character={character} />
        })
      }
      <img className={styles.add_new_icon} src={plus} alt='+' onClick={()=> {setIsCreate(true)}} />
    </div>
       :
     <div className={styles.content}>
      <div className={styles.back} onClick={()=> {setIsCreate(false)}}>
        Back
      </div>
      <CharacterCreate />
     </div>
    }
    </>
  )
}
