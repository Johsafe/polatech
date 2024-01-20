import * as React from "react";
import { Container } from "@mui/material";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import PageHeader from "../Layout/PageHeader";
import { Breadcrumbs, Divider } from "@mui/joy";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea,} from "@mui/material";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PageFooter from "../Layout/pageFooter";

export default function ProductPage() {
  return (
    <div>
      <PageHeader />
      <Container sx={{ marginTop: "20px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={18}
              fontWeight={500}
            >
              Home
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={18}>
              Laptops
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "& > *": {
              m: 1,
            },
          }}
        >
          <Box>
            <Box>
              {/*logo */}
              <img
                src="https://www.asgardsys.co.il/wp-content/uploads/2022/08/AsgardsSystems-01.png"
                width="180px"
                alt="Asgard"
              />
            </Box>
            <Box
              sx={{
                width: "280px",
                marginTop: "30px",
                padding: "20px",
                border: "1px solid grey",
                borderRadius: "10px",
              }}
            >
              Laptops
              <Divider sx={{ m: 1 }} />
              <Typography gutterBottom variant="h5" component="div">
                Apple Laptops
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Asus Laptops
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Dell Laptops
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                HP Laptops
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Lenovo Laptops
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Acer Laptops
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mb: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
            }}
          >
            <Typography level="h2" component="div" sx={{ fontWeight: 550 }}>
              Laptops Prices in Nairobi, Kenya: Brand-new.
            </Typography>
            <Typography sx={{ fontWeight: 550 }}>
              Buy laptops from leading brands at Asgard systems. Check out our
              laptop shopping guide to help you choose the right laptop for you.
            </Typography>

            <div>
              <Typography
                level="h2"
                component="h2"
                sx={{
                  fontWeight: 550,
                  marginTop: "30px",
                  borderBottom: "1px solid #007563",
                }}
              >
                Laptops Categories
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Card sx={{ width: 146 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/06/New-Apple-Macbook-Air-Gold-New-300x300.jpg"
                      alt="Apple"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Apple Laptops
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 146 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/04/vivobook-512-300x300.jpg"
                      alt="Asus"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Asus Laptops
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 146 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/07/Dell-vostro-3500-300x300.jpg"
                      alt="Dell"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dell Laptops
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 146 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/08/hp-250-g8-300x300.jpg"
                      alt="Hp"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        HP Laptops
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 146 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/04/v14-cel-300x300.jpg"
                      alt="Lenovo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lenovo Laptops
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 146 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://laptopmedia.com/wp-content/uploads/2021/04/1-61-e1662092298816-680x472.jpg"
                      alt="Acer"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Acer Laptops
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
            <Box>
              <Typography
                level="h2"
                component="h2"
                sx={{
                  fontWeight: 550,
                  marginTop: "30px",
                  borderBottom: "1px solid #007563",
                }}
              >
                Laptops
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Card sx={{ width: 220 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/09/asus-x409f-side-3-min.jpg"
                      alt="https://smartbuy.co.ke/wp-content/uploads/woocommerce-placeholder-300x300.png"
                    />
                    <CardContent>
                      <Typography level="body-xs">Asus Celeron</Typography>
                      <Link
                        href="/details"
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        ASUS X543M, Celeron N4020
                      </Link>

                      <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: "xl" }}
                        endDecorator={
                          <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            color="success"
                          >
                            Lowest price
                          </Chip>
                        }
                      >
                        KSh26,499
                      </Typography>
                      <Typography level="body-sm">
                        (Only <b>7</b> left in stock!)
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 220 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/04/LENOVO-IDEAPAD-1-15-FRONT-IMAGE.jpg"
                      alt="https://smartbuy.co.ke/wp-content/uploads/woocommerce-placeholder-300x300.png"
                    />
                    <CardContent>
                      <Typography level="body-xs">Lenovo Celeron</Typography>
                      <Link
                        href="/details"
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        Lenovo Ideapad 1,Celeron N4020,
                      </Link>

                      <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: "xl" }}
                        endDecorator={
                          <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            color="success"
                          >
                            Lowest price
                          </Chip>
                        }
                      >
                        KSh33,999
                      </Typography>
                      <Typography level="body-sm">
                        (Only <b>5</b> left in stock!)
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 220 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/08/hp-14-notebook-B-600x600.jpg"
                      alt="https://smartbuy.co.ke/wp-content/uploads/woocommerce-placeholder-300x300.png"
                    />
                    <CardContent>
                      <Typography level="body-xs">Hp Celeron</Typography>
                      <Link
                        href="/details"
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        HP 14 Notebook, Celeron
                      </Link>

                      <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: "xl" }}
                        endDecorator={
                          <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            color="success"
                          >
                            Lowest price
                          </Chip>
                        }
                      >
                        KSh33,999
                      </Typography>
                      <Typography level="body-sm" sx={{ color: "red" }}>
                        (Out Of Stock)
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 220 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://smartbuy.co.ke/wp-content/uploads/2021/08/dell-vostro-3500-i5-11th-gen-300x300.jpg"
                      alt="https://smartbuy.co.ke/wp-content/uploads/woocommerce-placeholder-300x300.png"
                    />
                    <CardContent>
                      <Typography level="body-xs">Dell Laptops</Typography>
                      <Link
                        href="/details"
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        Dell Vostro 3500 i5 11TH Gen,
                      </Link>

                      <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: "xl" }}
                        endDecorator={
                          <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            color="success"
                          >
                            Lowest price
                          </Chip>
                        }
                      >
                        KSh63,999
                      </Typography>
                      <Typography level="body-sm">
                        (Only <b>1</b> left in stock!)
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
      <PageFooter />
    </div>
  );
}
