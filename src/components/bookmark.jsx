const BookMark = ({ status, ...rest }) => {
  if (status === "disable") {
    return <i className="bi bi-bookmark" status={status}></i>;
  } else if (status === "enable") {
    return <i className="bi bi-bookmark-fill" status={status}></i>;
  }
};

export default BookMark;
