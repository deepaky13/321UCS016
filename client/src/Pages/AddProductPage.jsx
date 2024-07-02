import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from "react";

const AddProductPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    rating: "",
    discount: "",
    availability: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/product", product); // Adjust API endpoint as necessary
      console.log("Product submitted:", response.data);
      setProduct({
        productName: "",
        price: "",
        rating: "",
        discount: "",
        availability: "",
      });
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Failed to submit product:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: "0% 20% 5% 20%" }}>
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Add Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              fullWidth
              label="Product Name"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={product.price}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Discount"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Availability"
              name="availability"
              value={product.availability}
              onChange={handleChange}
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default AddProductPage;
