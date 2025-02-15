import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.search}>
      <p className={s.text}>Find contacts by name</p>
      <input className={s.input} type="text" value={value} onChange={onChange} placeholder="Search by name..." />
    </div>
  );
};

export default SearchBox;
