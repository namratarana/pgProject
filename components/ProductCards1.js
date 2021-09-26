import React from "react";
import ImageReferenceData from '../data/ImageReference.json';
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

    return (
        <div id={"Product" + ProductIndex} className="container mt-2">
            <div className="card cardView col-12">
                    <div className="row">
                        <div className="col col-12">
                            
                            <div className="mobileProductSubTitle1 ms-5">
                                {ProductInfo.ProductName}
                            </div>
                            <div className=" text-center infoContLeft pr-4">
                                <div className="imgContainer">
                                    <img
                                        className="productRecommImage mb-2"
                                        src={ProductInfo.ImageUrl}
                                        alt={ProductInfo.ProductBrand + " " + ProductInfo.ProductName}
                                    />
                                </div>       
                            </div>
                            <div
                                className="ps-widget buyNowButton1 event_buy_now event_buy_now_chose_product mt-4"
                                ps-widget-type="lightbox"
                                role="button"
                                aria-disabled="false"
                                aria-label="Find where to buy this product"
                                data-action-detail={ProductInfo.Sku}
                                ps-sku={ProductInfo.Sku}>
                                    Buy Now
                            </div>
                                
                            <div className="col col-12">
                                <p><u style={{color:"#003E7E "}}>Description</u></p>
                                <div className="row px-2 ">
                                    <div className="row">
                                        <div className="description" dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductDescriptionData }} />
                                        <div className="description" dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductSuperiorityData }} />
                                    </div>
                                </div>
                            </div>
                             
                        </div>

                        <div className="col col-12">
                            <p className="mt-3"><u style={{color:"#003E7E "}}>Your locations it can clean</u></p>
                            <div className="chips">
                                {ProductInfo.PrimaryArea.map((y, j) => (
                                    <div className="py-2 px-1" key={j}>
                                        <span className="p-2 prod-recomm-area prod-primary-area">{y}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-3"><u style={{color:"#003E7E "}}>Your problems it tackles</u></p>
                            <div className="chips"> 
                                {ProductInfo.Tensions.map((y, j) => (
                                    <div className="py-2 px-1" key={j}>
                                        <span className="p-2 prod-recomm-area prod-tensions">{y}</span>
                                    </div>
                                ))}
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
