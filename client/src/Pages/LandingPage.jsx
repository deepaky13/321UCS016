import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
];

const Landing = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <Typography variant="h4">Welcome to Our Store</Typography>
          <Typography variant="subtitle1">
            Find the best products here
          </Typography>
        </div>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/product" className="btn register-link">
            <Button variant="outlined" color="primary">
              Product Lists
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Landing;
