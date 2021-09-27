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
        <div id={"Product" + ProductIndex} className="col-lg-4 recommCard1 ">
            <div className="d-flex justify-content-center">
                <div className="mobileProductSubTitle1 text-wrap text-center mt-2">
                        {ProductInfo.ProductName}
                </div>
            </div>

            <div className="d-flex justify-content-center mt-2">
                <img
                    className="productRecommImage1"
                    src={ProductInfo.ImageUrl}
                    alt={ProductInfo.ProductBrand + " " + ProductInfo.ProductName}
                />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div
                    className="ps-widget buyNowButton1 event_buy_now event_buy_now_chose_product "
                    ps-widget-type="lightbox"
                    role="button"
                    aria-disabled="false"
                    aria-label="Find where to buy this product"
                    data-action-detail={ProductInfo.Sku}
                    ps-sku={ProductInfo.Sku}>
                        
                </div>
            </div>
            <div className="descriptionTitle mt-2">
                
                <u><p className="description1">Description</p></u>
                <div className="row ms-2 text-wrap">
                        <div className="descriptionPoints" dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductDescriptionData }} />
                        <div className="descriptionPoints" dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductSuperiorityData }} />
                        
                
                </div>
            </div>
            <div className="descriptionTitle mt-2">
                
                <u><p className="description1">Your Locations it Will Clean</p></u>
                <div className="row text-wrap">
                <div className="chips">
                        {ProductInfo.PrimaryArea.map((y, j) => (
                            <div className="py-1 px-1" key={j}>
                                <span className="p-2 prod-recomm-area prod-primary-area">{y}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <u><p className="description1 mt-1">Your Problems it Tackles</p></u>
                <div className="row text-wrap">
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
    )
}

const mapDispatchToProps = (dispatch) => {
        return {
            setModalFlag: () => dispatch(setModalFlag(true))
        }
    }
export default connect(null,mapDispatchToProps)(ProductCard);
