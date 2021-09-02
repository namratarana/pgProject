import React from "react"
import Head from "next/head"

import { createMemoryHistory } from "history"
import LandingPage from "./PGPro-SmartAssist-Home/index"

class App extends React.Component {
    render() {
        const history = createMemoryHistory()

        return (
            <div>
                <Head>
                    <script dangerouslySetInnerHTML={{
                            __html: `var PGdataLayer = {
                            'GTM': {
                            'SiteCountry': 'US',
                            'SiteBrand': 'PG Professional',
                            'SiteLanguage': 'en',
                            'SitePlatform': 'Modern Web',
                            'SiteEnvironment': 'prod-EN-US',
                            'SiteHost': 'Azure',
                            'SiteTechnicalAgency': 'Capgemini',
                            'SiteStatus': 'Live',
                            'SiteLocalContainer': '',
                            'GoogleAnalyticsLocal': 'UA-40283704-12',
                            'GoogleAnalyticsSiteSpeedSampleRate': 'high',
                            'GoogleAnalyticsReportingView': '237254869',
                            'ConsentOverlay':'OneTrust',
                            'SitePrivacyProtection':'CCPA',
                            'ConsentOverlayID':'a7ef1dc1-71f6-4852-b52c-340565acbda4'
                            },
                            'user': {
                            'id': '',
                            'type': 'unknown',
                            },
                            'session': {},
                            'content': {
                            'type': 'page',
                            'category': '',
                            'sub_category': ''
                            }}
                            `}}
                        />
                    {/* <script dangerouslySetInnerHTML={{
                        __html: `var PGdataLayer = {
                        'GTM': {
                        'SiteCountry': 'US',
                        'SiteBrand': 'PG Professional',
                        'SiteLanguage': 'en',
                        'SitePlatform': 'Modern Web',
                        'SiteEnvironment': 'staging-EN-US',
                        'SiteHost': 'Azure',
                        'SiteTechnicalAgency': 'Capgemini',
                        'SiteStatus': 'Live',
                        'SiteLocalContainer': '',
                        'GoogleAnalyticsLocal': 'UA-38384539-1',
                        'GoogleAnalyticsSiteSpeedSampleRate': 'high',
                        'GoogleAnalyticsReportingView': '68911582',
                        'ConsentOverlay':'OneTrust',
                        'SitePrivacyProtection':'CCPA',
                        'ConsentOverlayID':'a7ef1dc1-71f6-4852-b52c-340565acbda4-test'
                        },
                        'user': {
                        'id': '',
                        'type': 'unknown',
                        },
                        'session': {},
                        'content': {
                        'type': 'page',
                        'category': '',
                        'sub_category': ''
                        }}
                        `}}
                    /> */}

                    {/*Google Tag Manager*/}
                    {/* Global */}
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-N94XXFB');`}} />
                    {/* Local */}
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-N9RX7G5');`}} />
                    {/*End Google Tag Manager*/}
                    <link rel="preload" href={"https://res.cloudinary.com/mtree/w_750,q_auto:eco,f_auto,dpr_auto/PGPro_US/7rfzki8kfaDaIoak8V6w5M/3cf235d0b6538a0404fb2265a16eeaa7/Home-Banner_2x.jpg"} as="image" />
                    <link rel="preload" href={"https://res.cloudinary.com/mtree/w_1200,q_auto:eco,f_auto,dpr_auto/PGPro_US/3ByInDeaGfdemUNc0GewSN/9e0b1918a1196a6b2a2e03f02149e2e2/Home-Banner_2x__1_.jpg"} as="image" />
                    <link rel="preload" href="/fonts/8687927b-2586-4261-b723-ebaead0c3034.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
                    <link rel="preload" href="/fonts/e37e5a82-2eec-4d9c-8627-52ace8acc340.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
                    <link rel="preload" href="/fonts/d1d28160-b956-42a3-a2ff-d45b94b4c507.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                    />
                    <meta name="description" content="Description" />
                    <meta name="keywords" content="Keywords" />
                    <title>SmartAssist Cleaning Product Recommendations | P&amp;G Professional</title>
                    
                    {/* <title>Cleaning Innovations, Solutions and Supplies | P&amp;G Professional | SmartAssist</title> */}
                    <meta name="description" content="P&amp;G Professional meets the specific cleaning needs in a wide range of industries, such as foodservice, hospitality, homes and are effective in killing harmful germs."></meta>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#317EFB" />
                    {/* <script type="text/javascript" charset="UTF-8" src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-domain-script="164a50e6-6064-45de-9920-47d4a3e24c85"></script>
                    <script src="https://cdn.cookielaw.org/scripttemplates/6.9.0/otBannerSdk.js" async="" type="text/javascript"></script> */}

                </Head>

                <LandingPage />

                

                <script type="text/javascript" dangerouslySetInnerHTML={{

                    __html: `
                    piAId = '770383';
                    piCId = '49036';
                    piHostname = 'pi.pardot.com';
                    (function() {
                        function async_load() {
                            var s = document.createElement('script'); s.type = 'text/javascript';
                            s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
                            var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
                        }
                        
                        if(window.attachEvent) {
                            window.attachEvent('onload', async_load)
                        }else{
                            window.addEventListener('load', async_load, false)
                        }
                    })();`

                }} />

                {/*Google Tag Manager(No Script)*/}
                <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N94XXFB" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
                {/*End Google Tag Manager(No Script)*/}
                
            </div>
        )
    }
}
export default App
