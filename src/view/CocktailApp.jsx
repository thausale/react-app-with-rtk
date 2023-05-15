import React from "react";
import CocktailGrid from "../components/CocktailGrid";
import CocktailSearchForm from "../components/CocktailSearchForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const CocktailApp = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <h1>
        CocktailApp
        <Link to="/">
          <Button>To friends</Button>
        </Link>
      </h1>

      <CocktailSearchForm
        setCocktails={setCocktails}
        setIsLoading={setIsLoading}
      />

      <CocktailGrid array={cocktails} isLoading={isLoading} />
    </div>
  );
};

export default CocktailApp;
