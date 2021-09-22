import React from "react"
import Modal from "react-bootstrap/Modal"
import { connect } from "react-redux";
import { setNoProductModalFlag } from "../action/RecommendationAction";

function NoProductModal(props) {
  let { noProductModalFlag } = props;

  return (
    <Modal
      show={noProductModalFlag} size="lg"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <button className="closeButton" onClick={() => props.setNoProductModalFlag()}>&#10006;</button>
      </Modal.Header>
      <Modal.Body className="show-grid pb-5">
              <div className="container ">
                  <img src="../icons/Box.svg" alt="No Results Icon" />
                  <div className="noResultTitle">Oops!</div>
                  <div className="noResultDesc">There are currently no products listed! Come back later to see products in this category.</div>
              </div>
      </Modal.Body>
    </Modal>
  )
}


const mapStateToProps = ({ RecommendationReducer }) => ({
    noProductModalFlag: RecommendationReducer.noProductModalFlag,
})


export default connect(
    mapStateToProps,
    {
        setNoProductModalFlag,
    })(NoProductModal)