import React, { useState, useEffect }  from "react"
import Head from "next/head"
import Result from "../../components/Result"
import EmailResults from "../../components/EmailResults";
import ProductCard from '../../components/ProductCard';
import Claims from '../../components/Claims';
import SDSModal from '../../components/SDSModal';
import Header from "../../components/Header"
import { connect } from "react-redux";
import { setModalFlag } from "../../action/RecommendationAction";
import {useRouter} from 'next/router';

import {setAnswersChosen, setProductResult, setSubAnswerChosen} from '../../action/nextPageAction'

export async function getStaticProps(context) {

    return {
        props: {
            // productData: [],
            Product: "",
            DescriptionData: "",
            SizeData: "",
            BulletProductDescriptionData:"",
            productResult: [],
            answersChosen: [],
            subAnswerChosen: '',
        }, // will be passed to the page component as props
    }
}
 const businessSizeMapping = value => {
    switch (value) {
      case "1-4":
        return "Small";
      case "5-9":
        return "Medium";
      case "10-14":
        return "Large";
      case "15-19":
        return "Large";
      case "20+":
        return "Large";
      case "Less than 5":
        return "Small";
      case "5-10":
        return "Medium";
      case "10+":
        return "Large";
    };
  };

  const handleReset = () => {
    setProductResult([])
    setAnswersChosen([])
    setSubAnswerChosen('')
  };

const Recommendations = (props) => {

    let Router = useRouter();
    //let productData = [...new Set(props.productResult)] ? [...new Set(props.productResult)] : []
    const [productData, setProductData] = useState();
    const [answersChosen, setanswersChosen] = useState()
    
    console.log("########",props.answersChosen);
    console.log("*****************", productData);
    let uniqueProductImages = productData
        ? productData.filter(
            (v, i, a) =>
                a.findIndex(
                    (t) =>
                        t.Product === v.Product &&
                        t.DescriptionData === v.DescriptionData &&
                        t.SizeData === v.SizeData
                ) === i
        )
        : []

    const [modalProductdata, setModalProductData] = useState({})
    let coreData = uniqueProductImages.filter(x => x.Core == "Core")
    let nonCoreData = uniqueProductImages.filter(x => x.Core != "Core")
    

    React.useEffect(() => 
    {
        let RecommendedProducts = localStorage.getItem('recommendedResults');
        let answerChosen = localStorage.getItem('answerChosen');
        if(!RecommendedProducts)
        {
            Router.push('/PGPro-SmartAssist-Quiz')
        }
        else
        {
            // localStorage.setItem('recommendedResults', productData);
        
            setProductData(JSON.parse(RecommendedProducts));
            setanswersChosen(JSON.parse(answerChosen));
            console.log("Recommended Products: ",productData);
        }
        const buttonRight = document.getElementById('slideRight');
        const buttonLeft = document.getElementById('slideLeft');

        buttonRight.onclick = function() {
            document.getElementById('scrollItems').scrollLeft += 150;
        };
        buttonLeft.onclick = function(){
            document.getElementById('scrollItems').scrollLeft -= 150;
        };
    },[]);

    
    return (
            <div>
                <Header />
                {/* {props.productResult.length === 0 ?
                    <div className="noResults">
                        <img src="../icons/Box.svg" alt="No Results Icon" />
                        <div className="noResultDesc">There are currently no product recommendations available. Call for a consultation or you can restart below!</div>

                        <div className="container mt-4">
                            <div >
                                <a target="_blank" href="https://pgpro.com/en-us/request-consultation">
                                    <button className="contactButton" rel="noopener">Contact Us</button>
                                </a>
                            </div>
                            <Link href={process.env.NEXT_PUBLIC_BASE_URL}>
                                <button onClick={handleReset} className='btnRestartQuiz pt-2'>Restart Quiz</button>
                            </Link>
                        </div>
                    </div>
                : */}
                <div>
                    {answersChosen?<Result
                        BT={answersChosen[0]}
                        BS={businessSizeMapping(answersChosen[1])}
                        Tens={answersChosen[6]}
                        productResult={props.productResult}
                        
                    //   sizeDataResult={this.state.sizeDataResult}
                    //   descriptionDataResult={this.state.descriptionDataResult}
                    //   setImage={this.state.setImage}
                    //   ProDisclaimer={this.state.ProDisclaimer}
                    //   SuperiorityData={this.state.SuperiorityData}
                    />:null}

                    <SDSModal productData={modalProductdata ? modalProductdata : {}} />
                    <Head>
                        <meta name="ps-key" content="1766-5e9f1346be000c00243421b4" />
                        <meta name="ps-country" content="US" />
                        <meta name="ps-language" content="en" />
                        <script
                            src="https://cdn.pricespider.com/1/lib/ps-widget.js"
                            async
                        ></script>
                        <script
                            type="text/javascript"
                            src="https://cdn.pricespider.com/1/1766/ps-utid.js"
                            async
                        ></script>
                    </Head>
                    <div className="selectProducts mx-auto">
                        Select a product to view more details.
                </div>


                    <div className="scrollContainer mt-4">
                        <button className="buttonContainerLeft" id="slideLeft">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#003E7D" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                        <div className="scrollItems" id="scrollItems">
                            {/* <div className="nonCarouselView"> */}
                            {coreData.map((s, i) => (
                                <div key={i}>

                                    {/* <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a> */}
                                    <div className="d-flex flex-column align-items-center image-container grow-on-hover">
                                        <div >
                                            <a href={"#Product" + i} rel="noopener" data-action-detail={"#Product" + i} className="event_button_click">
                                                <img
                                                    className="productRecommImages image"
                                                    src={s.ImageUrl}
                                                    alt={s.ProductBrand + " " + s.ProductName}
                                                />
                                            </a>
                                        </div>

                                        <div>
                                            <div className="productData">
                                                {s.ProductName}
                                            </div>
                                        </div>
                                        {/* <div className="middle">
                                        {s.PrimaryArea.map((y, j) => (
                                            <div className="py-2 px-1" key={j}>
                                                <span className="p-1">{y}</span>
                                            </div>
                                        ))}
                                    </div> */}
                                    </div>


                                </div>


                            ))}

                        </div>
                        <button className="buttonContainerRight" id="slideRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#003E7D" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>

                    </div>
                    <div className="text-center mx-auto">
                        <EmailResults
                            answersChosen={props.answersChosen}
                            uniqueProductImages={uniqueProductImages}
                            SubAnswerChosen={props.SubAnswerChosen}
                        />
                    </div>
                    {coreData.map((x, i) => (
                        <ProductCard
                            x={x}
                            i={i}
                            key={i}
                            setModalProductData={setModalProductData}
                        />
                    ))}

                    <div>
                        {/* <div className="col-md-6 offset-2 mt-4 border-top"> */}
                        <div className="mobileFlex">
                            <div className="container moreRecommText mt-5">
                                Ancillary Products: For the Extra Tough Jobs
                        </div>
                            <div className="yellowAccent mb-5"></div>

                        </div>
                    </div>
                    {nonCoreData.map((x, i) => (
                        <ProductCard
                            x={x}
                            i={i}
                            key={i}
                            setModalProductData={setModalProductData}
                        />
                    ))}

                    <div>
                        <Claims />
                    </div>

                </div>
                {/* } */}
            </div>
        )
    }


const mapStateToProps = ({ nextPageReducer }) => ({
    productResult: nextPageReducer.productResult,
    answersChosen: nextPageReducer.answersChosen,
    subAnswerChosen: nextPageReducer.subAnswerChosen,
})
// export default Recommendations
const mapDispatchToProps = (dispatch) => {

  return {
    setModalFlag: () => dispatch(setModalFlag(false)),
    setProductResult,
    setAnswersChosen,
    setSubAnswerChosen
  }
}
export default connect( mapStateToProps,mapDispatchToProps)(Recommendations);