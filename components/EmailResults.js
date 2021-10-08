import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Frame from 'react-frame-component';
import parse from 'html-react-parser';
import { connect } from 'react-redux';

import { setAnswersChosen, setProductResult, setSubAnswerChosen } from '../action/nextPageAction'

export async function getStaticProps(context) {

  return {
    props: {
      answersChosen: [],
      uniqueProductImages: [],
      subAnswerChosen: '',
    } // will be passed to the page component as props
  };
}

const emailResults = ({
  answersChosen,
  uniqueProductImages,
  subAnswerChosen,
  setProductResult,
}) => {

  // Email form
  // const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validEmailMessage, setValidEmailMessage] = useState('');

  // Submitting form
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [_document, setDocument] = useState();

  useEffect(() => {
    setDocument(document);
  }, []);

  const formRef = useCallback(node => {
    // console.log({ node });
    if (node !== null) {
      // ga('send','event',{eventCategory:'event_crm_action',eventAction:'event_profile_register',eventLabel:'email-signup'})
      node.addEventListener('submit', () => setEmailSubmitted(true));
    }
  }, []);

  // Revalidate email address after it's changed
  useEffect(() => {
    const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (emailAddress === '') {
      setValidEmailMessage('');
    } else {
      if (emailAddress.match(mailformat)) {
        setValidEmail(true);
        setValidEmailMessage('');
      } else {
        setValidEmailMessage('Enter valid email address');
        setValidEmail(false);
      }
    }
  }, [emailAddress]);

  let productName = uniqueProductImages.map(data => data.ProductName);
  let productBrand = uniqueProductImages.map(data => data.ProductBrand);
  let descriptionData = uniqueProductImages.map(data => data.DescriptionData);
  let imageUrl = uniqueProductImages.map(data => data.ImageUrl);

  const results = [
    { name: 'business_type', value: answersChosen[0] },
    {
      name: 'business_sub_type',
      value: subAnswerChosen ? subAnswerChosen : 'N/A'
    },
    {
      name: 'number_of_locations',
      value: answersChosen ? answersChosen[1] : ''
    },
    { name: 'number_of_employees', value: '0' },
    {
      name: 'cleaning_areas',
      value: answersChosen ? answersChosen[5] : ''
    },
    { name: 'familiar_with_cleaning', value: answersChosen[2] },
    { name: 'cleaning_factors', value: answersChosen[3] },
    { name: 'cleaning_profile', value: answersChosen[4] },
    { name: 'product_1_brand', value: productBrand[0] },
    { name: 'product_1_name', value: productName[0] },
    { name: 'product_1_desc', value: descriptionData[0] },
    { name: 'product_1_img', value: imageUrl[0] },
    { name: 'product_2_brand', value: productBrand[1] },
    { name: 'product_2_name', value: productName[1] },
    { name: 'product_2_desc', value: descriptionData[1] },
    { name: 'product_2_img', value: imageUrl[1] },
    { name: 'product_3_brand', value: productBrand[2] },
    { name: 'product_3_name', value: productName[2] },
    { name: 'product_3_desc', value: descriptionData[2] },
    { name: 'product_3_img', value: imageUrl[2] },
    { name: 'product_4_brand', value: productBrand[3] },
    { name: 'product_4_name', value: productName[3] },
    { name: 'product_4_desc', value: descriptionData[3] },
    { name: 'product_4_img', value: imageUrl[3] },
    { name: 'product_5_brand', value: productBrand[4] },
    { name: 'product_5_name', value: productName[4] },
    { name: 'product_5_desc', value: descriptionData[4] },
    { name: 'product_5_img', value: imageUrl[4] },
    { name: 'product_6_brand', value: productBrand[5] },
    { name: 'product_6_name', value: productName[5] },
    { name: 'product_6_desc', value: descriptionData[5] },
    { name: 'product_6_img', value: imageUrl[5] },
    { name: 'product_7_brand', value: productBrand[6] },
    { name: 'product_7_name', value: productName[6] },
    { name: 'product_7_desc', value: descriptionData[6] },
    { name: 'product_7_img', value: imageUrl[6] },
    { name: 'product_8_brand', value: productBrand[7] },
    { name: 'product_8_name', value: productName[7] },
    { name: 'product_8_desc', value: descriptionData[7] },
    { name: 'product_8_img', value: imageUrl[7] },
    { name: 'product_9_brand', value: productBrand[8] },
    { name: 'product_9_name', value: productName[8] },
    { name: 'product_9_desc', value: descriptionData[8] },
    { name: 'product_9_img', value: imageUrl[8] },
    { name: 'product_10_brand', value: productBrand[9] },
    { name: 'product_10_name', value: productName[9] },
    { name: 'product_10_desc', value: descriptionData[9] },
    { name: 'product_10_img', value: imageUrl[9] }
  ];

  // const handleCheckBox = evt => {
  //   setCheckBoxStatus(evt.target.checked);
  // };

  const handleReset = () => {
    setProductResult([])
    setAnswersChosen([])
    setSubAnswerChosen('')
  };
  const handleSubmit = (e)=>
  {
    e.preventDefault();

  }

  // Head tags for iframe to bring all styles from parent window
  const initialContent = _document ? parse(_document.head.innerHTML) : [];
  return (
    <div className=' mt-3'>
      
      {/* <Frame
        head={initialContent}
        className={`formIFrame ${emailSubmitted && 'd-none'}`}
      >  */}
        <div>
          <form
            action='https://go.pgpro.com/l/769383/2021-01-07/cf7mpk'
            method='post'
            ref={formRef}
          >
            <br />
            <div hidden>
              {results.map((x, i) => (
                <input
                  name={x.name}
                  type='text'
                  value={x.value}
                  readOnly
                  key={i}
                />
              ))}
            </div>
            <div className='emailContent'>
              {validEmailMessage && (
                <div className='email-error'>{validEmailMessage}</div>
              )}
             


             <div className="d-flex flex-column align-items-center position-relative  w-100">
                                <svg className="emailIcon d-lg-block d-none" width="50" height="50" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25672 36.6758C9.11537 36.6758 8.97981 36.623 8.87986 36.529C8.77991 36.435 8.72376 36.3075 8.72376 36.1746V31.9867H8.13377C7.35382 31.9866 6.60576 31.6956 6.05365 31.1776C5.50155 30.6596 5.19046 29.9568 5.18863 29.2235V14.8751C5.18948 14.1409 5.50004 13.437 6.05218 12.9178C6.60431 12.3986 7.35293 12.1066 8.13377 12.1058H31.7279C32.5087 12.1068 33.2572 12.3988 33.8092 12.918C34.3612 13.4371 34.6717 14.141 34.6725 14.8751V29.2235C34.6707 29.9568 34.3596 30.6596 33.8075 31.1776C33.2554 31.6956 32.5074 31.9866 31.7274 31.9867H18.3501L9.5168 36.6121C9.43731 36.6539 9.34777 36.6758 9.25672 36.6758ZM8.13377 13.1081C7.63554 13.1086 7.15788 13.295 6.80558 13.6262C6.45328 13.9575 6.25511 14.4066 6.25455 14.8751V29.2235C6.2561 29.6911 6.45479 30.1391 6.80706 30.4692C7.15933 30.7993 7.63643 30.9846 8.13377 30.9844H9.25672C9.39807 30.9844 9.53363 31.0372 9.63358 31.1312C9.73353 31.2252 9.78968 31.3526 9.78968 31.4856V35.3222L17.9546 31.0476C18.0339 31.0062 18.123 30.9844 18.2137 30.9844H31.7279C32.2252 30.9844 32.7021 30.7991 33.0543 30.469C33.4065 30.1389 33.6051 29.691 33.6066 29.2235V14.8751C33.6061 14.4066 33.4079 13.9575 33.0556 13.6262C32.7033 13.295 32.2256 13.1086 31.7274 13.1081H8.13377Z" fill="#231F20" />
                                    <path d="M30.1798 18.1265H9.56378C9.41702 18.1265 9.27626 18.0682 9.17249 17.9644C9.06871 17.8607 9.01041 17.7199 9.01041 17.5732C9.01041 17.4264 9.06871 17.2856 9.17249 17.1819C9.27626 17.0781 9.41702 17.0198 9.56378 17.0198H30.1798C30.3266 17.0198 30.4674 17.0781 30.5711 17.1819C30.6749 17.2856 30.7332 17.4264 30.7332 17.5732C30.7332 17.7199 30.6749 17.8607 30.5711 17.9644C30.4674 18.0682 30.3266 18.1265 30.1798 18.1265Z" fill="#00AAE7" />
                                    <path d="M30.3134 21.3155H9.6973C9.55053 21.3155 9.40978 21.2572 9.306 21.1534C9.20222 21.0496 9.14392 20.9089 9.14392 20.7621C9.14392 20.6154 9.20222 20.4746 9.306 20.3708C9.40978 20.267 9.55053 20.2087 9.6973 20.2087H30.3134C30.4601 20.2087 30.6009 20.267 30.7047 20.3708C30.8084 20.4746 30.8667 20.6154 30.8667 20.7621C30.8667 20.9089 30.8084 21.0496 30.7047 21.1534C30.6009 21.2572 30.4601 21.3155 30.3134 21.3155Z" fill="#00AAE7" />
                                    <path d="M30.3134 24.5915H9.6973C9.55053 24.5915 9.40978 24.5332 9.306 24.4294C9.20222 24.3256 9.14392 24.1849 9.14392 24.0381C9.14392 23.8914 9.20222 23.7506 9.306 23.6468C9.40978 23.543 9.55053 23.4847 9.6973 23.4847H30.3134C30.4601 23.4847 30.6009 23.543 30.7047 23.6468C30.8084 23.7506 30.8667 23.8914 30.8667 24.0381C30.8667 24.1849 30.8084 24.3256 30.7047 24.4294C30.6009 24.5332 30.4601 24.5915 30.3134 24.5915Z" fill="#00AAE7" />
                                    <path d="M30.1985 27.8675H17.887C17.7402 27.8675 17.5994 27.8092 17.4957 27.7054C17.3919 27.6016 17.3336 27.4609 17.3336 27.3141C17.3336 27.1674 17.3919 27.0266 17.4957 26.9228C17.5994 26.819 17.7402 26.7607 17.887 26.7607H30.1985C30.3453 26.7607 30.486 26.819 30.5898 26.9228C30.6936 27.0266 30.7519 27.1674 30.7519 27.3141C30.7519 27.4609 30.6936 27.6016 30.5898 27.7054C30.486 27.8092 30.3453 27.8675 30.1985 27.8675Z" fill="#00AAE7" />
                                    <path d="M40.2577 40.7557C40.1634 40.7556 40.0706 40.7314 39.9882 40.6854L33.9797 37.3402H24.87C24.2851 37.3405 23.724 37.1088 23.3097 36.6959C22.8955 36.283 22.662 35.7227 22.6603 35.1378V31.6183C22.6603 31.4716 22.7186 31.3308 22.8224 31.227C22.9262 31.1232 23.067 31.0649 23.2137 31.0649C23.3605 31.0649 23.5012 31.1232 23.605 31.227C23.7088 31.3308 23.7671 31.4716 23.7671 31.6183V35.1378C23.7684 35.4292 23.8853 35.7083 24.092 35.9137C24.2988 36.1191 24.5785 36.2341 24.87 36.2335H34.1235C34.2179 36.2336 34.3107 36.2577 34.393 36.3038L39.7055 39.261V36.7869C39.7055 36.6401 39.7638 36.4993 39.8675 36.3956C39.9713 36.2918 40.1121 36.2335 40.2588 36.2335H41.0336C41.3241 36.2332 41.6027 36.1177 41.8082 35.9123C42.0137 35.7069 42.1294 35.4284 42.1298 35.1378V24.6895C42.1304 24.3978 42.0151 24.1177 41.8094 23.9109C41.6036 23.7041 41.3242 23.5875 41.0325 23.5866H34.5579C34.4112 23.5866 34.2704 23.5283 34.1666 23.4245C34.0629 23.3208 34.0046 23.18 34.0046 23.0332C34.0046 22.8865 34.0629 22.7457 34.1666 22.6419C34.2704 22.5382 34.4112 22.4799 34.5579 22.4799H41.0325C41.6174 22.4813 42.1779 22.7148 42.5909 23.1291C43.0039 23.5433 43.2357 24.1045 43.2354 24.6895V35.1372C43.2349 35.7213 43.0026 36.2813 42.5896 36.6944C42.1765 37.1074 41.6165 37.3397 41.0325 37.3402H40.8111V40.2029C40.8111 40.3496 40.7528 40.4904 40.649 40.5942C40.5452 40.6979 40.4045 40.7562 40.2577 40.7562V40.7557Z" fill="#231F20" />
                                </svg>
              </div>

                <div className="">
                  
                  <p className="card2subText text-start ms-2 pb-1 ">Your email address</p>
                  <input
                    name='email'
                    type='text'
                    className='emailInput ms-2'
                    value={emailAddress}
                    onChange={e => setEmailAddress(e.target.value)}
                    
                    aria-label='Email Address'
                    aria-describedby='basic-addon2'
                  // disabled={emailSubmitted}
                  />
                </div>

                <input
                  disabled={
                    // emailSubmitted ||
                    !(validEmail)
                  }
                  className='emailResultsButton  event_profile_register w-100 mt-1'
                  type='submit'
                  // onClick = {e=>handleSubmit(e)}
                  value='Get My Results'
                  
                  data-action-detail="email_results-button"
                />
                
                <div className="text-center terms">
                  <label className='form-check-label checkBoxLabel mt-3'>
                    By proceeding, I agree to receive emails from SmartAssist and other trusted P&G brands and programs. Click to read
                    <a
                      href='https://www.pg.com/en_US/terms_conditions/index.shtml'
                      className='event_outbound_link'
                      data-action-detail='https://www.pg.com/en_US/terms_conditions/index.shtml'
                      target='_blank'
                      rel='noopener'
                    >
                      {' '}<u><b>P&G Terms and Conditions</b></u>
                    </a>
                    {' '} and
                    <a
                      href='https://www.pg.com/privacy/english/privacy_statement.shtml'
                      className='event_outbound_link'
                      data-action-detail='https://www.pg.com/privacy/english/privacy_statement.shtml'
                      target='_blank'
                      rel='noopener'
                    >{' '}
                      <u><b>Privacy Policy</b></u>.
                    </a>
                  </label>
                </div>
              
            </div>
          </form>
        </div>
      {/* </Frame> */}




      <div
        className={`submittedButtonContainer text-center w-100 ${!emailSubmitted && 'd-none'}`}
      >
        <input
          disabled={true}
          className='mt-3 submittedButton'
          type='submit'
          value='Email Submitted'
          style={{ pointerEvents: 'none' }}
          readOnly
        />
      </div>
    </div>
  )
}

// export default emailResults;
const mapStateToProps = ({ nextPageReducer }) => ({
  productResult: nextPageReducer.productResult,
  answersChosen: nextPageReducer.answersChosen,
  subAnswerChosen: nextPageReducer.subAnswerChosen,
})

export default connect(
  mapStateToProps,
  {
    setProductResult,
    setAnswersChosen,
    setSubAnswerChosen
  })(emailResults)