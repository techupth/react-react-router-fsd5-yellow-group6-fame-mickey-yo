import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ViewProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [viewProduct, setViewProduct] = useState({});
  useEffect(() => {
    getViewProduct();
  }, []);
  const getViewProduct = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/products/${params.id}`
      );

      setViewProduct(result.data.data);
    } catch (error) {
      alert("Fetching error");
    }
  };
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{viewProduct.name}</h2>
        <p>{viewProduct.description}</p>
      </div>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
