import React from "react";
import { useState } from "react";
import { useCategoryContext } from "../hooks/useCategoryContext";

const CategoryForm = () => {
  const { dispatch } = useCategoryContext();

  const [mainMenu, setMainMenu] = useState("");
  const [subMenu, setSubMenu] = useState("");
  const [error, setError] = useState(null);

  //submit categories
  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = { mainMenu, subMenu };

    const response = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    //send an error message
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setMainMenu("");
      setSubMenu("");
      setError(null);
      console.log("New category Added", json);
      dispatch({ type: "CREATE_CATEGORY", payload: json });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add a new Category</h3>

        <label>Main Category: </label>
        <input
          type="text"
          onChange={(e) => setMainMenu(e.target.value)}
          value={mainMenu}
          required
        />

        <label>Sub Category: </label>
        <input
          type="text"
          onChange={(e) => setSubMenu(e.target.value)}
          value={subMenu}
        />

        <button>Add Category</button>
        {error && <div className="error">{error}</div>}
      </form>
      <form action="/profile" method="post" enctype="multipart/form-data">
        <h3>Upload Images here</h3>
        <div className="input-group">
          <input type="file" name="avatar" />
          <input
            className="btn btn-outline-secondary"
            type="submit"
            id="inputGroupFileAddon04"
          >
            Button
          </input>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
