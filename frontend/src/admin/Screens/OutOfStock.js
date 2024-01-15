/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
// import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
// import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaidIcon from "@mui/icons-material/Paid";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { styled } from "@mui/material/styles";
// import { Divider } from "@mui/material";
import moment from "moment";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import EditStockModal from "./EditProductStock";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 250,
  color: theme.palette.text.primary,
}));

export default function OutOfStock() {
  const [open, setOpen] = React.useState(false);

  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    //get out-of-stock products
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(`http://localhost:8000/stats/out-of-stock`);
        const jsonData = await fetched.json();
        setProducts(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: { xs: "flex", sm: "none" },
          my: 1,
          gap: 1,
        }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAltIcon />
        </IconButton>
      </Sheet>
      {/* search for products */}
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: { xs: "120px", md: "160px" },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for product</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            style={{ width: "50%" }}
          />
        </FormControl>
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 120, padding: "12px 6px" }}>#</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Title</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Brand</th>
              <th style={{ width: 140, padding: "12px 6px" }}>InStock</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Price</th>
              {/* <th style={{ width: 240, padding: "12px 6px" }}>Customer</th> */}
              <th style={{ width: 140, padding: "12px 6px" }}> </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <Typography level="body-xs">
                    <Avatar
                      size="40"
                      color={Avatar.getRandomColor("sitebase", [
                        "rgb(233, 150, 150)",
                        "rgb(164, 231, 164)",
                        "rgb(236, 224, 167)",
                        "rgb(174, 185, 233)",
                      ])}
                      round={true}
                      src={product.image}
                      alt={product.title}
                    />
                  </Typography>
                </td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.inStock}</td>
                <td>Ksh. {product.price}</td>
                <td>
                  <td>
                    <div>
                      <EditStockModal product={product} />
                    </div>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? "outlined" : "plain"}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}
