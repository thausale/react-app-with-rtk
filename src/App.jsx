import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import FavoritesGrid from "./components/FavoritesGrid";
import DataGrid from "./components/DataGrid";
import { Row, Col } from "antd";
import { useGetAllQuery } from "./store/apiSlice";
import AddFriend from "./components/AddFriend";
import { updateData, initialiseData } from "./store/appStoreSlice";

function App() {
  const dispatch = useDispatch();

  const liked = useSelector((state) => state.appStore.liked);
  const dataFromStore = useSelector((state) => state.appStore.data);

  const { isLoading, data } = useGetAllQuery("");

  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    dispatch(initialiseData(data));
  }, [dispatch, data]);

  return (
    <>
      <AddFriend />
      <Row>
        <Col span={18} className="list">
          <h4>All friends</h4>
          <DataGrid loading={isLoading} array={dataFromStore} />
        </Col>
        <Col span={6} className="likes">
          <h4>Favorite Friends</h4>
          <FavoritesGrid array={liked} loading={isLoading} />
        </Col>
      </Row>
    </>
  );
}

export default App;
