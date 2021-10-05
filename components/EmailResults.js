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
      subAnswerChosen: ''
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

  // Head tags for iframe to bring all styles from parent window
  const initialContent = _document ? parse(_document.head.innerHTML) : [];
  return (
    <div className=' mt-3'>
      <Frame
        head={initialContent}
        className={`formIFrame ${emailSubmitted && 'd-none'}`}
      >
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
                  className='emailResultsButton  event_profile_register w-100 mt-3 '
                  type='submit'
                  value='Get My Results'
                  
                  data-action-detail="email_results-button"
                />
                <div className="text-center terms">
                  <label className='form-check-label checkBoxLabel mt-4'>
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
      </Frame>




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