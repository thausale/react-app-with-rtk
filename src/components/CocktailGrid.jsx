import React from "react";
import { Row, Col, Card } from "antd";

const CocktailGrid = (props) => {
  const { array } = props;
  console.log(array);

  return (
    <Row gutter={[16, 16]} justify="center">
      {array &&
        array.map((item) => (
          <>
            <Col key={item.strDrink} xs={12} md={6} lg={6} xl={4}>
              <Card cover={<img src={item.strDrinkThumb} />}>
                <h3 className={item.strDrink}>{item.strDrink}</h3>
                <p className="item-body">{item.body}</p>
                <div className="Buttons"></div>
              </Card>
            </Col>
          </>
        ))}
      {!array ? "nothing found" : ""}
    </Row>
  );
};

export default CocktailGrid;
