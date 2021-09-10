import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  toggleBookMark,
  status,
  ...rest
}) => {
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>
        {qualities.map((qualitie) => (
          <Qualitie
            key={qualitie._id}
            color={qualitie.color}
            name={qualitie.name}
            _id={qualitie._id}
          />
        ))}
      </td>
      <td key={profession._id}>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <button id={_id} onClick={() => toggleBookMark(_id)}>
          <BookMark key={_id} status={status} {...rest} />
        </button>
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="bts btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
