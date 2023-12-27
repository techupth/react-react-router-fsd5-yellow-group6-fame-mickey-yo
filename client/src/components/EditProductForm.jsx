import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function EditProductForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const params = useParams();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`http://localhost:4001/products/${params.id}`, {
        name: name,
        price: price,
        image: imageUrl,
        description: description,
      });
      alert("completed");
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <form
      className="product-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            value={imageUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Edit</button>
      </div>
    </form>
  );
}

export default EditProductForm;
