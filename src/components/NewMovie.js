import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ handleAdd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
 
  const [form, setForm] = useState({
    Title: "",
    Url: "",
    description: "",
    rating: 0,
  });
 
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleRate = (rate) => setForm({ ...form, rating: rate });
  return (
    <div>
      <button onClick={openModal} className="add">
        Add movie
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newMovie = {
              ...form,
              id: Math.random(),
            };
            handleAdd(newMovie);
            closeModal();
          }}
        >
          <label>title</label>
          <input
            type="text"
            value={form.Title}
            name="Title"
            onChange={handleChange}
            
          />
          <label>description</label>

          <input
            type="text"
            value={form.description}
            name="description"
            onChange={handleChange}
          />
          <StarRating rate={form.rating} handleRating={handleRate} />

          <label>Image</label>
          <input
            type="url"
            value={form.Url}
            name="Url"
            onChange={handleChange}
          />
          
          <div>
            <button  type="submit" className="add">
              ADD 
            </button>
            <button  onClick={closeModal}className="add">
              CANCEL
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
