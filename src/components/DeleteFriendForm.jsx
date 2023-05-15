import React from "react";
import { useDeleteFriendMutation } from "../store/apiSlice";

const DeleteFriendForm = (props) => {
  const [deleteFriend] = useDeleteFriendMutation();

  const { id } = props;
  const handleClick = () => {
    console.log(`deleting friend with id${id} `);
    deleteFriend(id);
  };

  return (
    <div>
      <h3>Are you sure you want to delete friend ?</h3>
      <button onClick={() => handleClick()}>Yes</button>
    </div>
  );
};

export default DeleteFriendForm;
