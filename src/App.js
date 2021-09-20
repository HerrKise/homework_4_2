import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
    const [users, setUsers] = useState(
        api.users.fetchAll().map((i) => {
            return {
                ...i,
                status: "disable"
            };
        })
    );

    const handleDelete = (userId) => {
        return setUsers(
            users.filter((i) => {
                return i._id !== userId;
            })
        );
    };

    const handleToggleBookMark = (id) => {
        return setUsers(
            users.map((i) => {
                if (i._id === id) {
                    i.status === "disable"
                        ? (i.status = "enable")
                        : (i.status = "disable");
                }
                return i;
            })
        );
    };

    return (
        <div>
            <h1>
                <span id="heading-badge" className="badge bg-primary">
                    <SearchStatus length={users.length} />
                </span>
            </h1>
            <Users
                users={users}
                onDelete={handleDelete}
                toggleBookMark={handleToggleBookMark}
            />
        </div>
    );
}

export default App;
