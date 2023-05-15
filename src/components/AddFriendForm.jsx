import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddFriendMutation } from "../store/apiSlice";
import { useGetAllQuery } from "../store/apiSlice";
import friendApi from "../store/apiSlice";
import { addToData } from "../store/appStoreSlice";

function AddFriendForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");

  const [addFriend, { isLoading }] = useAddFriendMutation({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const friend = { title, body, photo };
      try {
        const result = await addFriend(friend).catch((error) =>
          console.error("Request failed:", error)
        );
        console.log(result.data);
        dispatch(addToData(result.data));
        //   setTitle("");
        //   setBody("");
      } catch (error) {
        console.error("Error adding friend:", error);
      }
    } catch (err) {
      console.error("Error adding friend:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

export default AddFriendForm;
