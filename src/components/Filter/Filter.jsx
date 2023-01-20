// import filter

import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    console.log(filterContacts(e.target.value));
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
          // onChange={e => {
          //   dispatch(filterContacts(e.target.value));
          // }}
          className={styles.inputField}
        />
      </label>
    </div>
  );
};
