import "./styles.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [people, setPersons] = useState([]);
  const [SearchPersons, setSearchPersons] = useState(people);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/JohanSwannie/10ec52c77bd989e512f6474d1686fb36/raw/39c5d068383a546070279c46268fd0702b2de7da/jswan-persons1.json"
    )
      .then((response) => response.json())
      .then((users) => setPersons(users));
  }, []);

  useEffect(() => {
    const filteredSearchPersons = people.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setSearchPersons(filteredSearchPersons);
  }, [people, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">My Family & Friends</h1>

      <SearchBox
        className="persons-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search for people"
      />
      <CardList people={SearchPersons} />
    </div>
  );
};

export default App;
