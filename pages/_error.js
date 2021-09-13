import ErrorPage from "../components/ErrorPage";
import {useLocation} from 'react-router-dom';
import router, {useRouter} from 'next/router';
import Quiz from './PGPro-SmartAssist-Quiz';
import Recommendations from './PGPro-SmartAssist-Recommendations';


function Error({ statusCode, pathname }) {

    // console.log('pathname:', pathname);
    //let location = useLocation();
    let Router = useRouter();
    console.log('router:', Router.asPath);
    //console.log('location:', location);
// ]console.log('locationPath:', location.pathname);
    if(Router.asPath === '/PGPro-SmartAssist-Quiz')
    {
      Router.push('/PGPro-SmartAssist-Quiz')
      return true;
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Home1')
    {
      Router.push('/PGPro-SmartAssist-Home1')
      return true;
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Home2')
    {
      Router.push('/PGPro-SmartAssist-Home2')
      return true;
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Recommendations')
    {
      Router.push('/PGPro-SmartAssist-Recommendations')
      return true;
    }
    else if(Router.asPath === '/')
    {
      Router.push('/')
      return true;
    }
    else
    {
      console.log("asPath:", Router.asPath);
      if(Router.asPath !="/" && Router.asPath !="PGPro-SmartAssist-Quiz" && Router.asPath !="/PGPro-SmartAssist-Recommendations")
      {
        return(
          <ErrorPage/>
        )
      }
      else
      {
        return true;
      }
      
    }
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error