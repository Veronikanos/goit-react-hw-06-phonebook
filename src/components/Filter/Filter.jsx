import PropTypes from 'prop-types';

import styles from './Filter.module.css';
export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={onChange}
          className={styles.inputField}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
