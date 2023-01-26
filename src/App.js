import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { requestRobots, setSearchfield } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  };
};

function App(props) {
  const { searchField, onSearchChange, robots, isPending } = props;

  useEffect(() => {
    props.onRequestRobots()
  },[]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  if (isPending) {
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={onSearchChange}></SearchBox>
        <Scroll>
          <CardList robots={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
