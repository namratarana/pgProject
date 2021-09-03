import ErrorPage from "../components/ErrorPage";
import {useLocation} from 'react-router-dom';
import router, {useRouter} from 'next/router';
import Quiz from './PGPro-SmartAssist-Quiz';
import Recommendations from './PGPro-SmartAssist-Recommendations';


function Error({ statusCode, pathname }) {

    // console.log('pathname:', pathname);
    //=let location = useLocation();
    let Router = useRouter();
    console.log('router:', Router.asPath);
    //console.log('location:', location);
// ]console.log('locationPath:', location.pathname);
    if(Router.asPath === '/PGPro-SmartAssist-Quiz')
    {
      return(<Quiz/>)
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Recommendations')
    {
      return(<Recommendations/>)
    }
    else
    {
      return (

      <ErrorPage/>
    )
    }
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error