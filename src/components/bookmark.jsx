import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
    if (status === "disable") {
        return <i className="bi bi-bookmark" status={status}></i>;
    } else if (status === "enable") {
        return <i className="bi bi-bookmark-fill" status={status}></i>;
    }
};

BookMark.propTypes = {
    status: PropTypes.string.isRequired
};

export default BookMark;
