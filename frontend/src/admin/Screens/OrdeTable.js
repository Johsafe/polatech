import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import { CardProps } from "@mui/joy/Card";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

// import DropZone from './DropZone';
// import FileUpload from './FileUpload';
// import CountrySelector from './CountrySelector';
// import EditorToolbar from './EditorToolbar';

export default function OrderTable() {
  return (
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
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Product Brand</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    placeholder="Product Brand"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Product Price</FormLabel>
                  <Input size="sm" placeholder="Ksh. 0.00" />
                </FormControl>
                <FormControl>
                  <FormLabel>Product Stock</FormLabel>
                  <Input size="sm" placeholder="No. of product available" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Product Category</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    placeholder="Laptop"
                    sx={{ flexGrow: 1 }}
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
                    <Link component="button" overlay>
                      Click to upload
                    </Link>{" "}
                    or drag and drop
                    <br /> SVG, PNG, JPG or GIF (max. 800x400px)
                  </Typography>
                </Card>
              </Stack>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}
