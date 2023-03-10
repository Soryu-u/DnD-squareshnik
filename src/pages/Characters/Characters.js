import React, { useEffect, useState } from 'react';
import styles from './Characters.module.css';
import plus from '../../images/plus.png';
import { CharacterPreview } from '../../components/Characters/CharacterPreview/CharacterPreview';
import { CharacterCreate } from '../../components/Characters/CharacterCreate/CharacterCreate';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../../redux/features/character/characterSlice';


export const Characters = () => {
  const [isCreate, setIsCreate] = useState(false);
  const { characters } = useSelector((state) => state.characters)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch])

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
