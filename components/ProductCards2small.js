import React, {useState} from "react";
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
    const [Link, setLink] = useState(false);

    return (
        <div id={"Product" + ProductIndex} className="container recommCard2-small">
        {Link=== false?
            <div className="card cardView-small col-12">
                <hr className="hr"/>
                <div className="chips-small row">
                    <div className="row row-cols-2">
                    {ProductInfo.PrimaryArea.map((y, j) => (
                        <div className="col">
                        {/* // <div className="py-2 px-1" key={j} */}
                            <span className="me-2 py-1 fw-bold prod-primary-area2-small">{y}</span>
                        {/* // </div> */}
                        </div>
                    ))}
                    </div>
                </div>
                <div className="imgContainer mt-2">
                    <img
                        className="productRecommImage-small  mb-2"
                        src={ProductInfo.ImageUrl}
                        alt={ProductInfo.ProductBrand + " " + ProductInfo.ProductName}
                    />
                </div>
                <div className="mobileProductSubTitle-small ms-2">
                    {ProductInfo.ProductName}
                </div>
                <div className="prodLink mt-1">
                    <a  onClick={e=> console.log(setLink(true))}><u>Why do I need this?</u></a>
                </div> 
                
                <div
                    className="ps-widget buyNowButton event_buy_now event_buy_now_chose_product mt-3"
                    ps-widget-type="lightbox"
                    role="button"
                    aria-disabled="false"
                    aria-label="Find where to buy this product"
                    data-action-detail={ProductInfo.Sku}
                    ps-sku={ProductInfo.Sku}
                />
            </div>
            :
            <div className="card cardView-small col-12">
                <hr className="hr"/>
                <div className="imgContainer-small d-flex justify-content-center mt-2">
                    <div onClick={e=> setLink(false)}>X</div>
                    <img
                        className="productRecommImage-small mb-2"
                        src={ProductInfo.ImageUrl}
                        alt={ProductInfo.ProductBrand + " " + ProductInfo.ProductName}
                    />
                </div>
                
                <div className="mobileProductTitle-small ms-2">
                    {ProductInfo.ProductBrand}®
                </div>
                <div className="mobileProductSubTitle-small ms-2">
                    {ProductInfo.ProductName}
                </div>
                <div className="">
                    <div className="desktopSds-small">
                        <button onClick={()=>{props.setModalProductData(ProductInfo);props.setModalFlag(true)}} className=" buttonWrapper d-inline-flex align-items-center buttonView event_button_click" data-action-detail="sds_button">
                            <img
                                src={
                                    ImageReferenceData.SdsImage
                                }
                                alt="SDS icon"
                                className="sdsImg"
                            />
                            <div className="sdsText-small me-3">View SDS</div>
                            <span className="mobileSizeData-small">
                                    {ProductInfo.SizeData}
                            </span>
                        </button>
                    </div>   
                </div>
                {/* <hr className="hr "/> */}
                
                <u><p className="cleanLocations-small">Your locations it can clean</p></u>
                <div className="chips-small row">
                    <div className="row row-cols-2">
                    {ProductInfo.PrimaryArea.map((y, j) => (
                        <div className="col">
                        {/* // <div className="py-2 px-1" key={j} */}
                            <span className="me-2 py-1 fw-bold prod-primary-area2-small">{y}</span>
                        {/* // </div> */}
                        </div>
                    ))}
                    </div>
                </div>

                <u><p className="cleanLocations-small mt-2">Your problems it tackles</p></u>
                <div className="chips-small row">
                    <div className="row row-cols-2">
                        {ProductInfo.Tensions.map((y, j) => (
                         <div className="col">

                            {/* // <div className="py-2 px-1" key={j}> */}
                                <span className="me-2 py-1 prod-tensions-small">{y}</span>
                            {/* // </div> */}
                        </div>
                        ))}
                    </div>
                </div>
                    {/* <hr className="hr"/> */}
                    <u><p className="cleanLocations-small">Descriptions</p></u>
                    <div className="row">
                        <div className="row g-0">
                            <div className="descriptionProd-small" dangerouslySetInnerHTML={{__html: ProductInfo.BulletProductDescriptionData }} />
                        </div>
                    </div>
                    <div
                        className="ps-widget buyNowButton event_buy_now event_buy_now_chose_product mt-3"
                        ps-widget-type="lightbox"
                        role="button"
                        aria-disabled="false"
                        aria-label="Find where to buy this product"
                        data-action-detail={ProductInfo.Sku}
                        ps-sku={ProductInfo.Sku}
                    />
                    
            </div>}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
        return {
            setModalFlag: () => dispatch(setModalFlag(true))
        }
    }
export default connect(null,mapDispatchToProps)(ProductCard);
