import "./App.css";
import { useState } from "react";
import { users } from "./data/users";

// Good luck with the exercise 💪
function App() {
  // "all", "men", "women", "by-age", "by-name"
  const [activeFilter, setActiveFilter] = useState("all");

  // should return an array of users, filtered or sorted according to the activeFilter state
  function applyFilters() {
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
          <button>All</button>
          <button>Women</button>
          <button>Men</button>
          <button>By Name</button>
          <button>By Age</button>
        </section>
      </main>
    </>
  );
}

export default App;
