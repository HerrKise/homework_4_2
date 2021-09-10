const SearchStatus = ({ length }) => {
  if (length > 4 || length === 1) {
    return `${length} человек тусанёт с тобой сегодня`;
  } else if (length > 1) {
    return `${length} человека тусанут с тобой сегодня`;
  } else {
    document.querySelector("#heading-badge").className = "badge bg-danger";
    return `Никто с тобой не тусанёт`;
  }
};

export default SearchStatus;
