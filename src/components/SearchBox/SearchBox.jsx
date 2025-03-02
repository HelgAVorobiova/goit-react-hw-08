import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <label className={css.searchBoxLabel}>
        Find contacts 
        <input
          type="text"
          onChange={handleFilterChange}
          className={css.searchBoxInput}
        />
      </label>
    </div>
  );
}
