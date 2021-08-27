import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const getBadgeClasses = (color) => {
    let classes = "badge m-2 bg-";
    classes += color;
    return classes;
  };

  const qualities = (arrayOfQualities) => {
    return arrayOfQualities.map((quality) => {
      return (
        <span key={quality._id} className={getBadgeClasses(quality.color)}>
          {quality.name}
        </span>
      );
    });
  };

  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td>{qualities(user.qualities)}</td>
        <td key={user.profession._id}>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            onClick={() => handleDelete(user._id)}
            className="bts btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  const handleDelete = (userId) => {
    return setUsers(
      users.filter((i) => {
        return i._id !== userId;
      })
    );
  };

  const renderPhrase = (number) => {
    if (number > 4 || number === 1) {
      return `${number} человек тусанёт с тобой сегодня`;
    } else if (number > 1) {
      return `${number} человека тусанут с тобой сегодня`;
    } else {
      document.querySelector("#heading-badge").className = "badge bg-danger";
      // я пытался удалить table тут через document.querySelector('table').remove() но мне писало ошибку, что cannot read property remove of null. Так и не понял почему не может, когда я спокойно в консоли мог получать этот элемент, а удалить не могу уже
      return `Никто с тобой не тусанёт`;
    }
  };

  return (
    <>
      <h1>
        <span id="heading-badge" className="badge bg-primary">
          {renderPhrase(users.length)}
        </span>
      </h1>
      {users.length === 0 ? (
        ""
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      )}
    </>
  );
};

export default Users;
