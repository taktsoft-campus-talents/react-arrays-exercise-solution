import "./App.css";
import { useState } from "react";
import { users } from "./data/usersComplete";
import { UserProfile } from "./components/UserProfile";

// Good luck with the exercise 💪
function App() {
  // "all", "men", "women", "by-age", "by-name"
  const [activeFilter, setActiveFilter] = useState("all");

  console.log("App will be rendered with activeFilter=", activeFilter);

  // should return an array of users, filtered or sorted according to the activeFilter state
  function applyFilters() {
    if (activeFilter === "women") {
      return users.filter((user) => user.gender === "female");
    }
    if (activeFilter === "men") {
      return users.filter((user) => user.gender === "male");
    }
    if (activeFilter === "by-age") {
      return users.toSorted((userA, userB) => {
        return userA.dob.age - userB.dob.age;
      });
    }
    if (activeFilter === "by-name") {
      return users.toSorted((userA, userB) => {
        return userA.name.last.localeCompare(userB.name.last);
      });
    }
    return users;
  }

  const filteredUsers = applyFilters();

  return (
    <>
      <header>
        <h1>React Array Exercise</h1>
      </header>
      <main>
        <section className="filter-container">
          <button
            onClick={() => {
              setActiveFilter("all");
            }}
            className={activeFilter === "all" ? "active" : null}
          >
            All
          </button>
          <button
            onClick={() => {
              setActiveFilter("women");
            }}
            className={activeFilter === "women" ? "active" : null}
          >
            Women
          </button>
          <button
            onClick={() => {
              setActiveFilter("men");
            }}
            className={activeFilter === "men" ? "active" : null}
          >
            Men
          </button>
          <button
            onClick={() => {
              setActiveFilter("by-name");
            }}
            className={activeFilter === "by-name" ? "active" : null}
          >
            By Name
          </button>
          <button
            onClick={() => {
              setActiveFilter("by-age");
            }}
            className={activeFilter === "by-age" ? "active" : null}
          >
            By Age
          </button>
        </section>
        <section>
          <ul className="user-list">
            {filteredUsers.map((user) => {
              return (
                <li key={user.email}>
                  <UserProfile
                    firstName={user.name.first}
                    lastName={user.name.last}
                    gender={user.gender}
                    age={user.dob.age}
                    imgPath={user.picture.medium}
                  />
                </li>
                // <li key={user.email}>
                //   {user.name.first} {user.name.last}, {user.gender},{" "}
                //   {user.dob.age}
                // </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
