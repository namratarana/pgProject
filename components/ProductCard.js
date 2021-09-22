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
        <div id={"Product" + ProductIndex} className="container py-3 mt-2">
            <div className="card cardView col-md-9">
                <div className="cardFlex">
                        <div className="mobileCardHeader">
                            <div className="mobileProductTitle">
                                {ProductInfo.ProductBrand}®
                                </div>
                            <div className="mobileProductSubTitle">
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
                                        />
                                        <div className="sdsText">View SDS</div>
                                    </button>
                                </div>
                                <div className="mobileSizeData">
                                    {ProductInfo.SizeData}
                                </div>
                            </div>
                        </div>
                    <div className="cardInfoFlex">

                        <div className="infoContLeft pr-4">
                            <div className="imgContainer">
                                <img
                                    className="productRecommImage mb-2"
                                    src={ProductInfo.ImageUrl}
                                    alt={ProductInfo.ProductBrand + " " + ProductInfo.ProductName}
                                />
                                <div
                                    className="ps-widget buyNowButton event_buy_now event_buy_now_chose_product"
                                    ps-widget-type="lightbox"
                                    role="button"
                                    aria-disabled="false"
                                    aria-label="Find where to buy this product"
                                    data-action-detail={ProductInfo.Sku}
                                    ps-sku={ProductInfo.Sku}
                                />
                            </div>
                        </div>

                        <div className="infoContRight">
                            <div className="cardHeader mb-2">
                                <div className="productTitle">
                                    {ProductInfo.ProductBrand}®
                                    </div>
                                <div className="productSubTitle">
                                    {ProductInfo.ProductName}
                                </div>
                                <div className="productSubInfo">
                                    <div className="desktopSds">
                                        <button onClick={()=>{props.setModalProductData(ProductInfo);props.setModalFlag(true)}} className=" buttonWrapper d-inline-flex align-items-center buttonView event_button_click" data-action-detail="sds_button">
                                            <img
                                                src={
                                                    ImageReferenceData.SdsImage
                                                }
                                                alt="SDS icon"
                                            />
                                            <div className="sdsText">View SDS</div>
                                        </button>
                                    </div>
                                    <div className="sizeData">
                                        {ProductInfo.SizeData}
                                    </div>
                                </div>
                            </div>
                            <div className="productDescription py-2">
                            <div className="productRecommend"> Description </div>
                                <div className="row px-2">
                                    <div className="row">
                                        <div dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductDescriptionData }} />
                                    </div>
                                </div>
                            </div>
                            <div className="cardInfoContainer">
                                <div className="superiorityContainer mr-3">
                                    <p className="productRecommend"> Product Superiority </p>
                                    <div className="row px-2">
                                        <div className="row">
                                            <div className="productDescription mr-2">
                                                <div dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductSuperiorityData }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="recommendContainer">
                                    <p className="productRecommend"> Why we recommend: </p>
                                    <div className="chips">
                                        {ProductInfo.PrimaryArea.map((y, j) => (
                                            <div className="py-2 px-1" key={j}>
                                                <span className="p-2 prod-recomm-area prod-primary-area">{y}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="chips"> 
                                        {ProductInfo.Tensions.map((y, j) => (
                                            <div className="py-2 px-1" key={j}>
                                                <span className="p-2 prod-recomm-area prod-tensions">{y}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mobileSds">
                                        <button onClick={()=>{props.setModalProductData(ProductInfo);props.setModalFlag(true)}} className=" buttonWrapper d-inline-flex align-items-center buttonView event_button_click" data-action-detail="sds_button">
                                            <img
                                                src={
                                                    ImageReferenceData.SdsImage
                                                }
                                                alt="SDS icon"
                                            />
                                            <div className="sdsText">View SDS</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
