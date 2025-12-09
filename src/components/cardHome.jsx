import { Card, CardContent, CardMedia } from "@mui/material";
import { TypographyStyle1 } from "./homeScreemStyle";
import imgValores from "../assets/img/cards/valores.png";
import imgMissao from "../assets/img/cards/missao.png";
import imgVisao from "../assets/img/cards/visao.png";
import { TypographyInfoCard } from "./cardHomeStyle";

const values = [
  {
    media: imgMissao,
    title: "Missão",
    content:
      "Valorizar e difundir a cultura nordestina por meio de produtos autênticos que unem tradição, arte e identidade regional.",
  },
  {
    media: imgVisao,
    title: "Visão",
    content:
      "Ser referência nacional em design cultural, levando a essência do Nordeste para novos públicos e gerações.",
  },
  {
    media: imgValores,
    title: "Valores",
    content:
      "Cultura | Criatividade | Pertencimento | Liberdade | Orgulho Nordestino",
  },
];

export const CardHome = () => {
  return (
    <>
      {values.map((value) => (
        <Card sx={{ minWidth: "31.5%" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={value.media}
            title={value.title}
          />
          <CardContent>
            <TypographyStyle1 variant="body1" variantCard>
              {value.title}
            </TypographyStyle1>
            <TypographyInfoCard variant="body2">
              {value.content}
            </TypographyInfoCard>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
