import { Box, Typography } from "@mui/material";
import { Header } from "./header";
import camisasImg from "../assets/img/camisas.png";
import bottonsImg from "../assets/img/bottons.png";
import canecasImg from "../assets/img/canecas.png";
import {
  BoxCard,
  BoxInfo,
  Image,
  ImageBackdrop,
  ImageButton,
  ImageSrc,
  TypographyStyle1,
  TypographyStyle2,
} from "./homeScreemStyle";
import { Footer } from "./footer";
import { CardHome } from "./cardHome";

const images = [
  {
    url: camisasImg,
    title: "Camisas",
    width: "33.3%",
    subtitle: "Clique para acessar",
  },
  {
    url: bottonsImg,
    title: "Bottons",
    width: "33.3%",
    subtitle: "Clique para acessar",
  },
  {
    url: canecasImg,
    title: "Canecas",
    width: "33.3%",
    subtitle: "Clique para acessar",
  },
];

export const HomeScreen = () => {
  return (
    <>
      <Header variant="home" />
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="h5"
                color="inherit"
                sx={(theme) => ({
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <Typography variant="subtitle1">{image.subtitle}</Typography>
              </Typography>
            </Image>
          </ImageButton>
        ))}
        <BoxInfo>
          <TypographyStyle1 variant="h5">
            Jogos que <TypographyStyle2>Educam</TypographyStyle2>
          </TypographyStyle1>
          <TypographyStyle1 variant="h2">
            Histórias que <TypographyStyle2>Inspiram</TypographyStyle2>
          </TypographyStyle1>
          <TypographyStyle1 variant="body1" margin={"3% 0"}>
            <TypographyStyle2>{">  "}</TypographyStyle2>Sobre nós
          </TypographyStyle1>
          <TypographyStyle1 variant="body1" mainText>
            A Asa Branca nasceu do desejo de dar asas à cultura nordestina — de
            transformá-la em arte, cor e identidade. Inspirada na canção imortal
            de Luiz Gonzaga, a marca carrega o simbolismo da liberdade e do
            pertencimento que definem o povo do Sertão. <br />
            <br />
            Somos uma marca que une tradição e modernidade. Misturamos o traço
            expressivo do cordel com o design contemporâneo, criando produtos
            que contam histórias, despertam memórias e celebram as raízes do
            Nordeste. Cada peça, cada detalhe, carrega o calor do sol sertanejo,
            a força da terra rachada e a alegria das festas populares.
          </TypographyStyle1>
        </BoxInfo>
        <BoxCard>
          <CardHome />
        </BoxCard>
      </Box>
      <Footer />
    </>
  );
};
