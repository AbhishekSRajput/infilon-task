import React from "react";

import { connect } from "react-redux";
import CardList from "./CardList";
import { fetchUser } from "../redux/user/userAction";
//material ui
import CircularProgress from "../mui/loader";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const Home = ({ fetchUser, userData }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px",
      }}
    >
      <div>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h4" component="div" gutterBottom>
            Click below to load users
          </Typography>
          <Button
            style={{ marginLeft: "8px" }}
            variant="outlined"
            color="success"
            onClick={() => fetchUser()}
          >
            Load Users
          </Button>
        </Box>
      </div>
      <div>
        {userData.loading && <CircularProgress />}
        {userData.user.length === 0 ? null : (
          <CardList userData={userData.user} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
