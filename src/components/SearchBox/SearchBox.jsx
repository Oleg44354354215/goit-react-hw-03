import s from "./SearchBox.module.css";

const SearchBox = ({ hero, filtration }) => {
  return (
    <div>
      <label className={s.name}>
        <div>Find contacts by name</div>
        <input
          className={s.input}
          type="text"
          value={hero}
          id="filter"
          onChange={filtration}
          placeholder="Your name..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
