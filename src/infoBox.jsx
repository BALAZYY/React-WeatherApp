import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function infoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1534629938736-b1b076531d3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Vubnl8ZW58MHx8MHx8fDA%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW58ZW58MHx8MHx8fDA%3D";
  console.log(info);
  return (
    <div className="infoBox">
      <div className="">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.humidity < 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.humidity < 15 ? (
               <WbSunnyIcon/>
              ) : (
                <AcUnitIcon/>
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>temperature:{info.temp} &deg;c</p>
              <p>Humidty:{info.humidity}</p>
              <p>min temperature:{info.tempMin} &deg;c</p>
              <p>max temperature:{info.tempMax} &deg;c</p>
              <p>
                the weather can be described as {info.weather} and feels like:
                {info.feelsLike} &deg;c
              </p>
              <p></p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
