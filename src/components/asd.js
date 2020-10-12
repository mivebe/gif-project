import React, { Component } from "react";
import Table from "./Table";
import axios from "axios";

class TableContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading...",
    };
  }
  componentDidMount() {
    this.getData(this.props.location.pathname);
  }
  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.location.pathname);
  }
  getData(pathname) {
    axios
      .get(`api${pathname}/`)
      .then((response) => {
        this.setState({
          data: response.data,
          loaded: true,
        });
      })
      .catch(() =>
        this.setState({
          placeholder: "Something went wrong, please try again later",
        })
      );
  }
  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? <Table data={data} /> : <p>{placeholder}</p>;
  }
}
export default TableContainer;
