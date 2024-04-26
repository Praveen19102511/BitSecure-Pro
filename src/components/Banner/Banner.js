import { Container, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import Carousel from "./Carousel";

const BannerStyled = styled('div')(({ theme }) => ({
  backgroundImage: "url(./BitSecure.jpg)",
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",

  '& .bannerContent': {
    height: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  '& .tagline': {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  '& .carousel': {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {

  return (
    <BannerStyled>
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Bit$ecure-Pro
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize", 
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </BannerStyled>
   
  );
}

export default Banner;