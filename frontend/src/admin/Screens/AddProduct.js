import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

export default function AddProduct() {
  //image
  const handleLinkClick = () => {
    document.getElementById("image").click();
  };

  //post data
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [inStock, setInStock] = React.useState("");
  const [description, setDescription] = React.useState("");
  // const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState([]);

  //add product function
  const addProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", title);
    data.append("brand", brand);
    data.append("price", price);
    data.append("inStock", inStock);
    // data.append("category",category)
    data.append("description", description);
    data.append("image", image);

    try {
      const response = await fetch("http://localhost:8000/product", {
        method: "POST",
        body: data,
      });
      navigate("/product");
      // console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Box sx={{ flex: 1, width: "100%" }}>
        {/* //header */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
            >
              Dashboard
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              Products
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            display: "flex",
            mb: 1,
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography level="h2" component="h1">
            Add Product
          </Typography>
          <Link to="/product">
            <Button
              color="primary"
              // startDecorator={<AddIcon />}
              size="sm"
            >
              Back to Product
            </Button>
          </Link>
        </Box>

        {/* form */}
        <Stack
          spacing={4}
          sx={{
            display: "flex",
            maxWidth: "900px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Card>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Product Name</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Product Name"
                      sx={{ flexGrow: 1 }}
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Product Brand</FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      placeholder="Product Brand"
                      sx={{ flexGrow: 1 }}
                      value={brand}
                      required
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Product Price</FormLabel>
                    <Input
                      size="sm"
                      placeholder="price 0.00"
                      type="number"
                      value={price}
                      required
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Product Stock</FormLabel>
                    <Input
                      size="sm"
                      placeholder="No. of product available"
                      value={inStock}
                      required
                      onChange={(e) => setInStock(e.target.value)}
                    />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Product Category</FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      placeholder="Laptop"
                      sx={{ flexGrow: 1 }}
                      // value={category}
                      //       required
                      //       onChange={(e) => setCategory(e.target.value)}
                      disabled
                    />
                  </FormControl>
                </Stack>
                <Stack spacing={2} sx={{ my: 1 }}>
                  <FormLabel> Product Description</FormLabel>
                  <Textarea
                    size="sm"
                    minRows={4}
                    sx={{ mt: 1.5 }}
                    placeholder="Write a description about the product."
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} sx={{ my: 1 }}>
                  <FormLabel> Product Image</FormLabel>
                  <Card
                    variant="soft"
                    sx={[
                      {
                        borderRadius: "sm",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        alignItems: "center",
                        px: 3,
                        flexGrow: 1,
                        boxShadow: "none",
                      },
                    ]}
                  >
                    <AspectRatio
                      ratio="1"
                      variant="solid"
                      color="primary"
                      sx={{
                        minWidth: 32,
                        borderRadius: "50%",
                        "--Icon-fontSize": "16px",
                      }}
                    >
                      <div>{<FileUploadRoundedIcon />}</div>
                    </AspectRatio>
                    <Typography level="body-sm" textAlign="center">
                      <Link
                        component="button"
                        overlay
                        onClick={handleLinkClick}
                      >
                        Click to upload
                      </Link>{" "}
                      <input
                        type="file"
                        class="form-control"
                        hidden="true"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        id="image"
                      />
                      or drag and drop
                      <br /> SVG, PNG, JPG or GIF (max. 800x400px)
                    </Typography>
                  </Card>
                </Stack>
              </Stack>
            </Stack>
            <CardOverflow
              sx={{ borderTop: "1px solid", borderColor: "divider" }}
            >
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  <Link to="/product">Cancel</Link>
                </Button>
                <Button size="sm" variant="solid" onClick={addProduct}>
                  Add
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
