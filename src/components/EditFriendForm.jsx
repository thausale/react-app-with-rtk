import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddFriendMutation, useEditFriendMutation } from "../store/apiSlice";
import { useGetAllQuery } from "../store/apiSlice";
import friendApi from "../store/apiSlice";
import { addToData } from "../store/appStoreSlice";

function EditFriendForm(props) {
  const [editFriend, { isLoading }] = useEditFriendMutation();

  const dispatch = useDispatch();
  const { itemId } = props;
  console.log(itemId);
  const [title, setTitle] = useState("aze");
  const [body, setBody] = useState("rty");
  const [photo, setPhoto] = useState("uio");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const friend = { title, body, photo, itemId };
      console.log(friend);
      try {
        //TODO: editFriend doesnt work yet
        const result = await editFriend(friend);
        console.log(result.data);

        // dispatch(addToData(result.data));
      } catch (error) {
        console.error("Error adding friend:", error);
      }
    } catch (err) {
      console.error("Error adding friend:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{itemId}</h3>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="body">Body:</label>
      <input
        id="body"
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <input
        id="photo"
        type="text"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      <button type="submit">Add Friend</button>
    </form>
  );
}

export default EditFriendForm;
