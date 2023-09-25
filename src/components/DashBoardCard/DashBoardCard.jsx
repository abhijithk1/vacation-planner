import {
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import {
  myDashBoardItems,
  teamDashBoardItems,
} from "../../components/DashBoardCard/dashBoardItems";

const DashBoardCard = ({ title }) => {
  let dashBoardItems = [];
  if (title == "personal") {
    dashBoardItems = myDashBoardItems;
  } else if (title == "team") {
    dashBoardItems = teamDashBoardItems;
  }
  return (
    <Grid container spacing={2}>
      {dashBoardItems.map((item) => (
        <Grid item key={item.id}>
          <Card sx={{ mt: 6, textAlign: "center", m: 2 }}>
            <CardActionArea>
              <ButtonBase href={item.path}>
                <CardMedia component="img" height="200" image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.id}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
              </ButtonBase>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashBoardCard;
