import { Row, Col, Card, Button, Modal } from "antd";
import { HeartOutlined, EditFilled, CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToLiked } from "../store/appStoreSlice";
import friendApi from "../store/apiSlice";
import {
  useAddLikedMetadataMutation,
  useEditFriendMutation,
} from "../store/apiSlice";
import { useEffect, useState } from "react";
import EditFriendForm from "./EditFriendForm";
import DeleteFriendForm from "./DeleteFriendForm";

const { Meta } = Card;

function Grid(props) {
  const { array, loading } = props;
  const dispatch = useDispatch();
  const [addLikedMetadata, { data }] = useAddLikedMetadataMutation();

  //Modal stuff

  const [open, setOpen] = useState({
    status: false,
    component: <EditFriendForm />,
  });

  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleClick = async (itemId) => {
    dispatch(addToLiked(itemId));
    addLikedMetadata(itemId);
  };

  const handleEditClick = async (itemId) => {
    setOpen({
      status: true,
      component: <EditFriendForm itemId={itemId} />,
    });
  };

  const handleDeleteClick = async (itemId) => {
    setOpen({
      status: true,
      component: <DeleteFriendForm id={itemId} />,
    });
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      {array &&
        array.map((item) => (
          <>
            <Col key={item._id} xs={12} md={6} lg={6} xl={4}>
              <Card
                loading={loading}
                cover={
                  <img src="https://source.unsplash.com/random/?width=800&height=800" />
                }
              >
                <h3 className="item-title">{item.title}</h3>
                <p className="item-body">{item.body}</p>
                <div className="Buttons">
                  <button onClick={() => handleClick(item._id)}>
                    <HeartOutlined />
                  </button>
                  <button onClick={() => handleEditClick(item._id)}>
                    <EditFilled />
                  </button>

                  <button>
                    <CloseOutlined
                      onClick={() => handleDeleteClick(item._id)}
                    />
                  </button>
                </div>
              </Card>
            </Col>
          </>
        ))}
      <Modal
        title="Title"
        open={open.status}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {open.component}
      </Modal>
    </Row>
  );
}

export default Grid;
