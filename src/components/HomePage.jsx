import { connect } from "react-redux";
import CardList from "./CardList";
import { fetchUser } from "../redux/user/userAction";
//material ui
import CircularProgress from "../mui/loader";
import Button from "@mui/material/Button";

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
        <Button
          style={{ marginLeft: "8px" }}
          variant="outlined"
          color="success"
          onClick={() => fetchUser()}
        >
          Load Users
        </Button>
      </div>
      <div>
        {userData.loading ? (
          <CircularProgress />
        ) : userData.error ? (
          <h2>{userData.error}</h2>
        ) : (
          <div>
            {userData && userData.user && <CardList userData={userData.user} />}
          </div>
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
