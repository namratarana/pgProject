import Modal from 'react-bootstrap/Modal';
import React from "react";
import { connect } from "react-redux";
import { setModalFlag } from "../action/RecommendationAction";
import ImageReferenceData from '../data/ImageReference.json';

function SDSModal(props) {
  let { modalFlag } = props;
  const productDetails = props.productData?props.productData:{};
  console.log(productDetails.SDSurls);

  return (
    <Modal
      show={modalFlag} size="lg"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <img src={ImageReferenceData.SdsImage}alt="SDS icon"/>
        <button className="closeButton" onClick={() => props.setModalFlag()}>&#10006;</button>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="mx-3">
          <p className="productSubTitle">{productDetails.ProductBrand}®</p>
          <p><h5>{productDetails.ProductName}</h5></p>
        </div>
        <div className="mx-3 selectProduct"><p>Select Language to Download SDS sheet</p></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="modalLanguageButton">
                {productDetails?productDetails.SDSurls?Object.entries(productDetails.SDSurls).map((keys, keyIndex) => {
                  return keys[1].map((unit, unitIndex) => (
                  <a href={unit} rel="noopener"><button className="LanguageButtons" >{keys[0]}</button></a>
                  ));
                })
                : '':''}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}


const mapStateToProps = ({ RecommendationReducer }) => {
  return {
    modalFlag: RecommendationReducer.modalFlag,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setModalFlag: () => dispatch(setModalFlag(false))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SDSModal);