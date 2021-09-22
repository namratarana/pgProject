import ErrorPage from "../components/ErrorPage";
import {useLocation} from 'react-router-dom';
import router, {useRouter} from 'next/router';
import Quiz from './PGPro-SmartAssist-Quiz';
import Recommendations from './PGPro-SmartAssist-Recommendations';


function Error({ statusCode, pathname }) {

    // console.log('pathname:', pathname);
    //let location = useLocation();
    const showError = true;
    console.log("start");
    let Router = useRouter();
    console.log('router:', Router.asPath);
    
    if(Router.asPath === '/PGPro-SmartAssist-Quiz')
    {
      console.log(1);
      Router.push('/PGPro-SmartAssist-Quiz')
      return true;
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Home1')
    {
      console.log(2);
      Router.push('/PGPro-SmartAssist-Home1')
      return true;
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Home2')
    {
      console.log(3);
      Router.push('/PGPro-SmartAssist-Home2')
      return true;
    }
    else if(Router.asPath === '/PGPro-SmartAssist-Recommendations')
    {
      console.log(4);
      Router.push('/PGPro-SmartAssist-Recommendations')
      return true;
    }
    else if(Router.asPath === '/')
    {
      console.log(5);
      Router.push('/PGPro-SmartAssist-Home1');
      return true;
    }
    else
    {
      console.log(6);
      console.log("asPath:", Router.asPath);
      if(Router.asPath !="/" && Router.asPath !="PGPro-SmartAssist-Quiz" && Router.asPath !="/PGPro-SmartAssist-Recommendations")
      {
      console.log(7);

        return(
          <ErrorPage showError={showError}/>
        )
      }
      else
      {

      console.log(8);
      return true;
      }
      
    }
}

Error.getInitialProps = ({ res, err }) => {
  console.log("start1");
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error