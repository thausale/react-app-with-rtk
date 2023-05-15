import React from "react";
import "../App.css";
import {
  useGetCocktailByIngredientQuery,
  getCocktailByIngredient,
} from "../store/cocktailApiSlice";
import { useState, useEffect } from "react";
import cocktailApi from "../store/cocktailApiSlice";

import { Link } from "react-router-dom";
import { Checkbox, Button, Input } from "antd";

const CocktailSearchForm = (props) => {
  //Props destructuring
  const { setCocktails } = props;

  //State variables
  const [inputField, setInputField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isAlcoholFree, setIsAlcoholFree] = useState(false);
  const [skip, setSkip] = useState(true);
  const { data, refetch } = useGetCocktailByIngredientQuery(searchValue, {
    skip,
  });

  //Action handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isAlcoholFree) {
      setSearchValue(inputField + "&a=Non_Alcoholic");
    } else {
      setSearchValue(inputField);
    }

    if (skip) {
      setSkip(false);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAlcoholFree(e.target.checked);
  };

  //UseEffects
  useEffect(() => {
    setCocktails(data);
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="cocktailForm">
        <Input
          type="text"
          value={inputField}
          onChange={(e) => {
            setInputField(e.target.value);
          }}
          size="small"
        />
        <p>alcohol-free ?</p>
        <Checkbox
          type="checkbox"
          checked={isAlcoholFree}
          onChange={handleCheckboxChange}
        />
        <Button type="primary">Submit</Button>
      </form>
    </div>
  );
};

export default CocktailSearchForm;
