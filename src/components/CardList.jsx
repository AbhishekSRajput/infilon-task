//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
//redux
import { deleteUser } from "../redux/user/userAction";
import { useDispatch } from "react-redux";

const CardList = ({ userData }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {userData &&
        userData.map(({ first_name, last_name, email, id, avatar }) => (
          <Card sx={{ maxWidth: 345 }} style={{ margin: "20px" }} key={id}>
            <CardMedia
              component="img"
              height="240"
              image={avatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {first_name} {last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {email}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/edit-user/${id}`}>
                <Button variant="outlined" color="primary">
                  edit
                </Button>
              </Link>
              <Button
                style={{ marginLeft: "8px" }}
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(deleteUser(id))}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default CardList;
