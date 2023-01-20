// import filter

import { useSelector } from 'react-redux';
import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          // onChange={onChange}
          className={styles.inputField}
        />
      </label>
    </div>
  );
};
