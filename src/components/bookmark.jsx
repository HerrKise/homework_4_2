import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
    let updatingName = "bi bi-bookmark";
    if (status === true) {
        updatingName += "-fill";
    }

    return <i className={updatingName} status={`${status}`}></i>;
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default BookMark;
