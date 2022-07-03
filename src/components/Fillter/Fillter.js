import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, filtrate } from '../../redux/contactsReducer';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filtrate(event.currentTarget.value));
  };

  return (
    <div className={s.filterBox}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};

export default Filter;
