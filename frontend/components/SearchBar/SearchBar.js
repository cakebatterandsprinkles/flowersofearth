import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: event.target });
    console.log(event.target, this.state.value);
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <input
          type="text"
          className={classes.searchTerm}
          placeholder="What are you looking for?"
        />
        <button type="submit" className={classes.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
