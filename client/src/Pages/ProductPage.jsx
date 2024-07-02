import { Container, Typography } from "@mui/material";
import ProductList from "../Pages/ProductList";

const ProductPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <ProductList />
    </Container>
  );
};

export default ProductPage;
