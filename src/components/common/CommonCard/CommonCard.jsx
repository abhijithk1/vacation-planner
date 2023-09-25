import { Card, CardContent, Grid, Typography } from "@mui/material";

function formatDateRange(fromDate, endDate) {
  const options = { day: "numeric", month: "short", year: "numeric" };

  const formattedFromDate = new Date(fromDate).toLocaleDateString(
    "en-IN",
    options
  );
  const formattedEndDate = new Date(endDate).toLocaleDateString(
    "en-IN",
    options
  );

  return `${formattedFromDate} to ${formattedEndDate}`;
}

const CommonCard = ({ lists, type }) => {
    let isTeam = false
    if(type == "team") {
        isTeam = true
    }
  return (
    <>
      {lists.map((item) => (
        <Grid item key={item.id}>
          <Card>
            <CardContent>
              {isTeam && <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
                align="center"
              >
                {item.Username}
              </Typography>}
              <Typography variant="h5" component="div" align="center" gutterBottom>
                {item.Title}
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                align="center"
              >
                {formatDateRange(item.FromDate, item.EndDate)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.Description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CommonCard;
