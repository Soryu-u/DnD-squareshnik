import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCharacter } from '../../../redux/features/character/characterSlice';
import styles from './CharacterCreate.module.css';

export const CharacterCreate = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [lvl, setLvl] = useState('');

  const submitHandler = () => {
    try {
      const data = {
        'name': name,
        'race': race,
        'level': lvl
      };
      dispatch(createCharacter(data))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <div>
          <div>
            Name
          </div>
          <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            type='text' 
          />
        </div>
        <div>
          <div>
            Race
          </div>
          <input 
            value={race} 
            onChange={e => setRace(e.target.value)} 
            type='text' 
          />
        </div>
        <div>
          <div>
            LvL
          </div>
          <input 
            value={lvl} 
            onChange={e => setLvl(e.target.value)} 
            type='number' 
          />
        </div>
        <button onClick={submitHandler} type='submit'>Створити</button>
      </form>
    </>
  )
}
