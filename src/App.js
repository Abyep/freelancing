import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./Saga";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Paper, TextField, Select } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      category: "",
      searchInput: "",
      categories: ["first_name", "last_name", "email"],
      id: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(getData());
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== null) {
      return { data: nextProps.data, filteredData: nextProps.data.data };
    } else return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data.length !== 0) {
      return true;
    }
    return true;
  }

  handleCategory = (event) => {
    this.setState({
      category: event.target.value.toLowerCase(),
    });
  };

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  search = () => {
    return (
      <div className="searchDiv">
        <FormControl>
          <Select
            variant="outlined"
            select
            className="categories"
            native
            onChange={this.handleCategory}
            label="Category"
          >
            <option aria-label="None" value="" />
            {this.state.categories.map((category, index) => (
              <option key={index} value={category}>
                {this.Capitalize(category.replace("_", " "))}
              </option>
            ))}
          </Select>
        </FormControl>
        <TextField
          className="search"
          variant="outlined"
          value={this.state.searchInput}
          placeholder="Search"
          id="standard-start-adornment"
          onChange={this.handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  };

  handleId = (id) => {
    this.setState({
      id: id,
    });
  };

  render() {
    console.log(this.state);
    let filteredData = this.state.filteredData.slice();
    if (this.state.searchInput !== "") {
      filteredData = this.state.filteredData.filter((data) => {
        return (
          data[this.state.category]
            .toLowerCase()
            .indexOf(this.state.searchInput.toLowerCase()) !== -1
        );
      });
    }

    return (
      <div>
        <Paper className="paper">
          {this.search()}
          <div className="parentDiv">
            {this.props.data &&
              filteredData.map((user, index) => (
                <div key={user.id} className="userDiv">
                  <img src={user.avatar} className="userIcon" />
                  <div className="userInfo">
                    <div>{user.first_name + " " + user.last_name}</div>
                    <div>{user.email}</div>
                  </div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={this.state.id}
                        checked={this.state.id == user.id ? true : false}
                        onClick={() => this.handleId(user.id)}
                      />
                    }
                  />
                </div>
              ))}
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.reducer.data,
  };
};

export default connect(mapStateToProps)(App);
