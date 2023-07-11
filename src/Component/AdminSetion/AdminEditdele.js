import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { context } from "../Context";

const AdminEditDelete = () => {
  const { state, setState } = useContext(context);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const onDelete = () => {
    const filteredDeleter = state.filter((item) => item.id !== selectedItemId);
    setState(filteredDeleter);
    setShowDeleteModal(false);
    alert("Item deleted successfully!");
  };

  const openDeleteModal = (id) => {
    setSelectedItemId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className="bg-black py-5">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.ProductName}
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                    onClick={() => openImageModal(item.image)}
                  />
                </td>
                <td>{item.ProductName}</td>
                <td>${item.price}</td>
                <td>
                  <div className="d-flex justify-content-between">
                    <Button
                      className="bg-danger"
                      variant="primary"
                      onClick={() => openDeleteModal(item.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/admin/edit/${item.id}`}>
                      <Button className="bg-info" variant="primary">
                        Edit
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Image Modal */}
      <Modal show={showImageModal} onHide={closeImageModal}>
        <Modal.Body className="d-flex justify-content-center">
          <img src={selectedImage} alt="Selected Product" style={{ maxHeight: "80vh", maxWidth: "80vw" }} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminEditDelete;
