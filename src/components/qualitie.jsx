import React from "react";
import PropTypes from "prop-types";
const Qualitie = ({ color, name, _id }) => {
    const getBadgeClasses = (color) => {
        let classes = "badge m-2 bg-";
        classes += color;
        return classes;
    };

    return (
        <span key={_id} className={getBadgeClasses(color)}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualitie;
