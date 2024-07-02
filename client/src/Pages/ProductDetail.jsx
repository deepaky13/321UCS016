import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    description: "Description for product 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    price: 49.99,
    description: "Description for product 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Product 3",
    price: 19.99,
    description: "Description for product 3",
    image: "https://via.placeholder.com/150",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
          <Typography variant="body1" component="p" marginTop={2}>
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetail;
