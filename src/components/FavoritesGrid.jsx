import { Row, Col, Card } from "antd";
import { HeartFilled, EditFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeFromLiked } from "../store/appStoreSlice";
import { useRemoveLikedMetadataMutation } from "../store/apiSlice";

const { Meta } = Card;

function Grid(props) {
  const { array, loading } = props;
  const dispatch = useDispatch();
  const [removeLike] = useRemoveLikedMetadataMutation();
  const handleClick = async (itemId) => {
    dispatch(removeFromLiked(itemId));
    removeLike(itemId);
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      {array &&
        array.map((item) => (
          <Col key={item._id} xs={24} md={12} lg={8} xl={8}>
            <Card
              loading={loading}
              cover={
                <img src="https://source.unsplash.com/random/?width=800&height=800" />
              }
            >
              <h3 className="item-title">{item.title}</h3>
              <p className="item-body">{item.body}</p>
              <div className="buttons">
                <button onClick={() => handleClick(item._id)}>
                  <HeartFilled />
                </button>

                <button>
                  <EditFilled />
                </button>
              </div>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default Grid;
