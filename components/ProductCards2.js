import React from "react";
import ImageReferenceData from '../data/ImageReference.json';
import primary_Areas from "../data/primaryAreas.json"

import { connect } from "react-redux";
import { setModalFlag } from "../action/RecommendationAction";

export async function getStaticProps(context) {
    return {
        props: {
            x: {
                BulletProductDescriptionData: [],
                BulletProductSuperiorityData:[],
                Core: "",
                DescriptionData: "",
                Disclaimer: "",
                ImageUrl: "",
                PrimaryArea: [],
                ProductBrand: "",
                ProductName: "",
                SizeData: "",
                Sku: "",
                Superiority: "",
                Tensions: []
            },
            i: ""
        }, // will be passed to the page component as props
    }
}

const ProductCard = (props) => {
    // console.log('props:---', props);
    const ProductInfo = props.x
    const ProductIndex = props.i

    let name = ProductInfo.ProductName;
    let areas = primary_Areas[name];
    return (
        <div id={"Product" + ProductIndex} className="container recommCard2">
            <div className="card cardView col-12">
                    <div className="row">
                        <div className="col col-lg-4 col-12">
                            
                            <div className="imgContainer">
                                    <img
                                        className="productRecommImage mb-2"
                                        src={ProductInfo.ImageUrl}
                                        alt={ProductInfo.ProductBrand + " " + ProductInfo.ProductName}
                                    />
                                </div>
                            
                            <div className="mobileProductTitle ms-2">
                                {ProductInfo.ProductBrand}®
                            </div>
                            <div className="mobileProductSubTitle ms-2">
                                {ProductInfo.ProductName}
                            </div>
                            <div className="mobileProductSubInfo">
                                <div className="desktopSds">
                                    <button onClick={()=>{props.setModalProductData(ProductInfo);props.setModalFlag(true)}} className=" buttonWrapper d-inline-flex align-items-center buttonView event_button_click" data-action-detail="sds_button">
                                        <img
                                            src={
                                                ImageReferenceData.SdsImage
                                            }
                                            alt="SDS icon"
                                            height="20px" width="20px"
                                        />
                                        <div className="sdsText me-3">View SDS</div>
                                        <span className="mobileSizeData">
                                                {ProductInfo.SizeData}
                                        </span>
                                    </button>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col col-lg-4 col-12">
                            <u><p className="cleanLocations">Your locations it can clean</p></u>
                            <div className="chips">
                                {areas?areas.map((y, j) => (
                                    // <div className="py-2 px-1" key={j}>
                                        <span className="me-2 py-1 fw-bold prod-primary-area2">{y}</span>
                                    // </div>d
                                )):null}
                            </div>

                            {ProductInfo.Tensions.length>0 ?
                            <div>
                                <u><p className="cleanLocations mt-2">Your problems it tackles</p></u>
                                <div className="chips"> 
                                    {ProductInfo.Tensions.map((y, j) => (
                                        // <div className="py-2 px-1" key={j}>
                                            <span className="me-2 py-1 prod-recomm-area prod-tensions">{y}</span>
                                        // </div>
                                    ))}
                                </div>
                            </div>:null}
                        </div>
                        
                        <div className="col col-lg-4 col-12">
                            <u><p className="cleanLocations mt-2">Description</p></u>
                            <div className="row">
                                    <div className="row g-0">
                                        <div className="descriptionProd" dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductDescriptionData }} />
                                    </div>
                            </div>
                            <div
                                    className="ps-widget buyNowButton event_buy_now event_buy_now_chose_product d-flex align-items-center"
                                    ps-widget-type="lightbox"
                                    role="button"
                                    aria-disabled="false"
                                    aria-label="Find where to buy this product"
                                    data-action-detail={ProductInfo.Sku}
                                    ps-sku={ProductInfo.Sku}
                                >
                                    
                            </div>
                                
                        </div>
                        
                    </div>
                
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
        return {
            setModalFlag: () => dispatch(setModalFlag(true))
        }
    }
export default connect(null,mapDispatchToProps)(ProductCard);
