import "./App.css";
import { useState } from "react";
import { usersData } from "./data/usersComplete";
import { UserProfile } from "./components/UserProfile";

// Good luck with the exercise 💪
function App() {
  // null, "men", "women"
  const [activeFilter, setActiveFilter] = useState(null);
  // null, "by-name", "by-age"
  const [activeSorting, setActiveSorting] = useState(null);

  console.log("App will be rendered with activeFilter=", activeFilter);

  // should return an array of users, filtered or sorted according to the activeFilter state
  function applyFilters(users) {
    return users
      .filter((user) => {
        return activeFilter === "women"
          ? user.gender === "female"
          : activeFilter === "men"
          ? user.gender === "male"
          : true;
      })
      .toSorted((userA, userB) => {
        return activeSorting === "by-name"
          ? userA.name.last.localeCompare(userB.name.last)
          : activeSorting === "by-age"
          ? userA.dob.age - userB.dob.age
          : 0;
      });
  }

  const filteredUsers = applyFilters(usersData);

  return (
    <>
      <header>
        <h1>React Array Exercise</h1>
      </header>
      <main>
        <section className="filter-container">
          <button
            onClick={() => {
              setActiveFilter(null);
            }}
            className={activeFilter === null ? "active" : null}
          >
            All genders
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
              setActiveSorting(null);
            }}
            className={activeSorting === null ? "active" : null}
          >
            Unsorted
          </button>
          <button
            onClick={() => {
              setActiveSorting("by-name");
            }}
            className={activeSorting === "by-name" ? "active" : null}
          >
            By Name
          </button>
          <button
            onClick={() => {
              setActiveSorting("by-age");
            }}
            className={activeSorting === "by-age" ? "active" : null}
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
