import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/globals.css" // After bootstrap
// import './App.scss';

import { Provider } from "react-redux"
import store from "../store"

import "../styles/Footer.css"
import "../styles/Questions.css"
import "../styles/LandingPage.css"
import "../styles/Question.css"
import "../styles/Button.css"
import "../styles/EmailResults.css"
// import "../styles/Header.css"
import "../styles/AnswerSelection.css"
import "../styles/Recommendations.css"
import "../styles/ErrorPage.css"
import "../styles/ProductCard.css"
import "../styles/Claims.css"
import "../styles/SDSModal.css"
import "../styles/header2.css"
import "../styles/footer1.css"
import "../styles/body2.css"




function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
