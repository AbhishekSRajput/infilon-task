import React, { Component } from "react";
import { updateUser, userInfo } from "../redux/user/userAction";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

//mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      email: "",
      last_name: "",
    };
  }

  componentDidMount = () => {
    const numId = parseInt(this.props.match.params.id);
    this.props.getUserInfo(numId);
  };

  componentDidUpdate() {
    console.log(this.props.userData);
    if (this.state.email === "") {
      const { first_name, last_name, email } = this.props.userData.singleUser;
      this.setState({
        first_name,
        last_name,
        email,
      });
    }
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitButton = () => {
    let withIdSIngleUser = Object.assign(
      this.props.userData.singleUser,
      this.state
    );

    this.props.updateSingleUser(withIdSIngleUser);

    this.props.history.push("/");
  };
  render() {
    const { first_name, email, last_name } = this.state;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "100vw",
          height: "100vh",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",

            maxWidth: "500px",
            width: "100%",
          }}
        >
          <TextField
            type="text"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            style={{ margin: "10px" }}
            value={first_name}
            name="first_name"
            onChange={this.inputHandler}
          />
          <TextField
            type="text"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            style={{ margin: "10px" }}
            value={last_name}
            name="last_name"
            onChange={this.inputHandler}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ margin: "10px" }}
            value={email}
            name="email"
            onChange={this.inputHandler}
          />
          <Button
            style={{ width: "50%", margin: "0 auto" }}
            variant="outlined"
            color="primary"
            onClick={this.submitButton}
          >
            Update
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(userInfo(id)),
    updateSingleUser: (data) => dispatch(updateUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
