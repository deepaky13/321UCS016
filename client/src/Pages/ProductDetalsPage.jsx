import { Container, Typography } from "@mui/material";
import ProductDetail from "../Pages/ProductDetail";

const ProductDetailPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Detail
      </Typography>
      <ProductDetail />
    </Container>
  );
};

export default ProductDetailPage;
