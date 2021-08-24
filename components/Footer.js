import React,{useState} from "react";

function FooterComponent() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navlinks = [
    { name: "About Us", href: process.env.ABOUT_US, target:"_blank", id: "#aboutUsLink"},
    { name: "Contact Us", href: process.env.CONTACT_US, target:"_blank", id: "#contactUsLink" },
    {
      name: "Privacy",
      href: process.env.PRIVACY_POLICY,
      target:"_blank",
      id: "#privacyLink"
    },
    {
      name: "CA Privacy",
      href: process.env.CA_POLICY,
      target:"_blank",
      id: "#caPrivacyLink"

    },
    {
      name: "Terms & Conditions",
      href: process.env.TERMS_AND_CONDITIONS,
      target:"_blank",
      id: "#termsLink"
    },
    {
      
      name: "Do Not Sell My Personal Information",
      href:"javascript:void(0);",
      id: "#doNotSellLink",
      //onclick: () => handleClose(),
      onclick: () =>  Optanon.ToggleInfoDisplay()
      
    },
    { name: "Sitemap", href: process.env.SITEMAP, target:"_blank", id: "#sitemapLink" },

  ];
  return (
    <div className="navBar z1 bottom-auto">
      {/* <DoNotSell show={show} handleShow={() => handleShow()}/> */}
      <div>
        <img
          className="footerCurve"
          src="https://res.cloudinary.com/mtree/image/upload/v1601377364/PGPro_US/static/images/Mobile-footer-cureve.svg"
          alt="Footer curve design"
        />
      </div>
      <div className="d-flex flex-column justify-content-between navBar-container">
        <div className="navBar-container-links">
          <div className="linkContainer centerColumn">
            {navlinks.map((x) => (
              <a id={x.id} key={x.id} href={x.href} className="links event_outbound_link" target={x.target} onClick={x.onclick} rel="noopener" data-action-detail={x.href}>
                {x.name}
              </a>
            ))}
          </div>

          <div className="socialLinks mr-n5">
            {/* 
                        Navy icons are actually different SVG's. 
                        These onMouseOver and onMouseOut events are switching the src for the <img> tags. 
                      */}
            <a
              className="socialLink w-5 h-5 p-2 mr-2 event_socialmedia_exit"
              data-action-detail="Facebook"
              href={process.env.FACEBOOK}
              target="_blank"
              rel="noopener"
              onMouseOver={(e) =>
              (e.currentTarget.querySelector("img").src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9ImZhY2Vib29rLWhvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxnIGlkPSJHcm91cF8yMDI1MCIgZGF0YS1uYW1lPSJHcm91cCAyMDI1MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM2Ny4xNjMgLTQuMTAxKSI+DQogICAgICA8ZyBpZD0iRmFjZWJvb2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MC44MzcgNjM1LjEwMSkiPg0KICAgICAgICA8ZyBpZD0iZmFjZWJvb2stbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+DQogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjc3OCIgZGF0YS1uYW1lPSJQYXRoIDI3NzgiIGQ9Ik0zMC40LDAsMjguMzI3LDBhMy42NDQsMy42NDQsMCwwLDAtMy44MzcsMy45MzhWNS43NTNIMjIuNGEuMzI2LjMyNiwwLDAsMC0uMzI2LjMyNlY4LjcxYS4zMjYuMzI2LDAsMCwwLC4zMjYuMzI2aDIuMDg2djYuNjM3YS4zMjYuMzI2LDAsMCwwLC4zMjYuMzI2aDIuNzIyYS4zMjYuMzI2LDAsMCwwLC4zMjYtLjMyNlY5LjAzNkgzMC4zYS4zMjYuMzI2LDAsMCwwLC4zMjYtLjMyNlY2LjA4YS4zMjYuMzI2LDAsMCwwLS4zMjYtLjMyNmgtMi40NFY0LjIxNGMwLS43NC4xNzYtMS4xMTUsMS4xNC0xLjExNWgxLjRhLjMyNi4zMjYsMCwwLDAsLjMyNi0uMzI2Vi4zM0EuMzI2LjMyNiwwLDAsMCwzMC40LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDc3KSIgZmlsbD0iIzAwM2U3ZCIvPg0KICAgICAgICA8L2c+DQogICAgICA8L2c+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg==")
              }
              onMouseOut={(e) =>
              (e.currentTarget.querySelector("img").src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxnIGlkPSJHcm91cF8yMDI1MCIgZGF0YS1uYW1lPSJHcm91cCAyMDI1MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM2Ny4xNjMgLTQuMTAxKSI+DQogICAgICA8ZyBpZD0iRmFjZWJvb2stMiIgZGF0YS1uYW1lPSJGYWNlYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjgzNyA2MzUuMTAxKSI+DQogICAgICAgIDxnIGlkPSJmYWNlYm9vay1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4NCiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8yNzc4IiBkYXRhLW5hbWU9IlBhdGggMjc3OCIgZD0iTTMwLjQsMCwyOC4zMjcsMGEzLjY0NCwzLjY0NCwwLDAsMC0zLjgzNywzLjkzOFY1Ljc1M0gyMi40YS4zMjYuMzI2LDAsMCwwLS4zMjYuMzI2VjguNzFhLjMyNi4zMjYsMCwwLDAsLjMyNi4zMjZoMi4wODZ2Ni42MzdhLjMyNi4zMjYsMCwwLDAsLjMyNi4zMjZoMi43MjJhLjMyNi4zMjYsMCwwLDAsLjMyNi0uMzI2VjkuMDM2SDMwLjNhLjMyNi4zMjYsMCwwLDAsLjMyNi0uMzI2VjYuMDhhLjMyNi4zMjYsMCwwLDAtLjMyNi0uMzI2aC0yLjQ0VjQuMjE0YzAtLjc0LjE3Ni0xLjExNSwxLjE0LTEuMTE1aDEuNGEuMzI2LjMyNiwwLDAsMCwuMzI2LS4zMjZWLjMzQS4zMjYuMzI2LDAsMCwwLDMwLjQsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMi4wNzcpIiBmaWxsPSIjZmZmIi8+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K")
              }
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxnIGlkPSJHcm91cF8yMDI1MCIgZGF0YS1uYW1lPSJHcm91cCAyMDI1MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM2Ny4xNjMgLTQuMTAxKSI+DQogICAgICA8ZyBpZD0iRmFjZWJvb2stMiIgZGF0YS1uYW1lPSJGYWNlYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjgzNyA2MzUuMTAxKSI+DQogICAgICAgIDxnIGlkPSJmYWNlYm9vay1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4NCiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8yNzc4IiBkYXRhLW5hbWU9IlBhdGggMjc3OCIgZD0iTTMwLjQsMCwyOC4zMjcsMGEzLjY0NCwzLjY0NCwwLDAsMC0zLjgzNywzLjkzOFY1Ljc1M0gyMi40YS4zMjYuMzI2LDAsMCwwLS4zMjYuMzI2VjguNzFhLjMyNi4zMjYsMCwwLDAsLjMyNi4zMjZoMi4wODZ2Ni42MzdhLjMyNi4zMjYsMCwwLDAsLjMyNi4zMjZoMi43MjJhLjMyNi4zMjYsMCwwLDAsLjMyNi0uMzI2VjkuMDM2SDMwLjNhLjMyNi4zMjYsMCwwLDAsLjMyNi0uMzI2VjYuMDhhLjMyNi4zMjYsMCwwLDAtLjMyNi0uMzI2aC0yLjQ0VjQuMjE0YzAtLjc0LjE3Ni0xLjExNSwxLjE0LTEuMTE1aDEuNGEuMzI2LjMyNiwwLDAsMCwuMzI2LS4zMjZWLjMzQS4zMjYuMzI2LDAsMCwwLDMwLjQsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMi4wNzcpIiBmaWxsPSIjZmZmIi8+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K"
                alt="Facebook link icon"
              />
            </a>
            <a
              className="socialLink w-2 h-2 p-2 mr-2 event_socialmedia_exit"
              data-action-detail="LinkedIn"
              href={process.env.LINKEDIN}
              target="_blank"
              rel="noopener"
              onMouseOver={(e) =>
              (e.currentTarget.querySelector("img").src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9ImxpbmtlZGluLWhvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtbGlua2VkaW4taW4iIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWxpbmtlZGluLWluIiBkPSJNMy42LDE2LjA4NEguMjY2VjUuMzQ2SDMuNlpNMS45MzEsMy44ODFBMS45NCwxLjk0LDAsMSwxLDMuODYyLDEuOTMyLDEuOTQ3LDEuOTQ3LDAsMCwxLDEuOTMxLDMuODgxWm0xNC4xNDksMTIuMkgxMi43NTNWMTAuODU3YzAtMS4yNDYtLjAyNS0yLjg0My0xLjczNC0yLjg0My0xLjczNCwwLTIsMS4zNTMtMiwyLjc1NHY1LjMxN0g1LjY4OVY1LjM0NmgzLjJWNi44MTFoLjA0N2EzLjUsMy41LDAsMCwxLDMuMTU1LTEuNzM0YzMuMzc1LDAsNCwyLjIyMiw0LDUuMTA5djUuOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzQgNjMwLjk5OSkiIGZpbGw9IiMwMDNlN2QiLz4NCiAgPC9nPg0KPC9zdmc+DQo=")
              }
              onMouseOut={(e) =>
              (e.currentTarget.querySelector("img").src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9ImxpbmtlZGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtbGlua2VkaW4taW4iIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWxpbmtlZGluLWluIiBkPSJNMy42LDE2LjA4NEguMjY2VjUuMzQ2SDMuNlpNMS45MzEsMy44ODFBMS45NCwxLjk0LDAsMSwxLDMuODYyLDEuOTMyLDEuOTQ3LDEuOTQ3LDAsMCwxLDEuOTMxLDMuODgxWm0xNC4xNDksMTIuMkgxMi43NTNWMTAuODU3YzAtMS4yNDYtLjAyNS0yLjg0My0xLjczNC0yLjg0My0xLjczNCwwLTIsMS4zNTMtMiwyLjc1NHY1LjMxN0g1LjY4OVY1LjM0NmgzLjJWNi44MTFoLjA0N2EzLjUsMy41LDAsMCwxLDMuMTU1LTEuNzM0YzMuMzc1LDAsNCwyLjIyMiw0LDUuMTA5djUuOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzQgNjMwLjk5OSkiIGZpbGw9IiNmZmYiLz4NCiAgPC9nPg0KPC9zdmc+DQo=")
              }
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9ImxpbmtlZGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtbGlua2VkaW4taW4iIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWxpbmtlZGluLWluIiBkPSJNMy42LDE2LjA4NEguMjY2VjUuMzQ2SDMuNlpNMS45MzEsMy44ODFBMS45NCwxLjk0LDAsMSwxLDMuODYyLDEuOTMyLDEuOTQ3LDEuOTQ3LDAsMCwxLDEuOTMxLDMuODgxWm0xNC4xNDksMTIuMkgxMi43NTNWMTAuODU3YzAtMS4yNDYtLjAyNS0yLjg0My0xLjczNC0yLjg0My0xLjczNCwwLTIsMS4zNTMtMiwyLjc1NHY1LjMxN0g1LjY4OVY1LjM0NmgzLjJWNi44MTFoLjA0N2EzLjUsMy41LDAsMCwxLDMuMTU1LTEuNzM0YzMuMzc1LDAsNCwyLjIyMiw0LDUuMTA5djUuOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzQgNjMwLjk5OSkiIGZpbGw9IiNmZmYiLz4NCiAgPC9nPg0KPC9zdmc+DQo="
                alt="LinkedIn link icon"
              />
            </a>
            <a
              className="socialLink w-2 h-2 p-2 mr-2 lg:ml-5 event_socialmedia_exit"
              data-action-detail="Youtube"
              target="_blank"
              href={process.env.YOUTUBE}
              rel="noopener"
              onMouseOver={(e) =>
              (e.currentTarget.querySelector("img").src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9InV0dWJlLWhvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzQ2NjM4IiBkYXRhLW5hbWU9IlBhdGggNDY2MzgiIGQ9Ik0zMS4yNDgsMjcuNUgyMC4zYTIuOCwyLjgsMCwwLDAtMi44LDIuOHY1Ljg1NmEyLjgsMi44LDAsMCwwLDIuOCwyLjhIMzEuMjQ4YTIuOCwyLjgsMCwwLDAsMi44LTIuOFYzMC4zQTIuOCwyLjgsMCwwLDAsMzEuMjQ4LDI3LjVabS00Ljc3NCw3LTIuNDgyLDEuMjczVjMwLjY4M2wyLjQ4MiwxLjI3MywyLjQ4MiwxLjI3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MTYuMyA2MDUuOCkiIGZpbGw9IiMwMDNlN2QiLz4NCiAgPC9nPg0KPC9zdmc+DQo=")
              }
              onMouseOut={(e) =>
              (e.currentTarget.querySelector("img").src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9InV0dWJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzQ2NjM4IiBkYXRhLW5hbWU9IlBhdGggNDY2MzgiIGQ9Ik0zMS4yNDgsMjcuNUgyMC4zYTIuOCwyLjgsMCwwLDAtMi44LDIuOHY1Ljg1NmEyLjgsMi44LDAsMCwwLDIuOCwyLjhIMzEuMjQ4YTIuOCwyLjgsMCwwLDAsMi44LTIuOFYzMC4zQTIuOCwyLjgsMCwwLDAsMzEuMjQ4LDI3LjVabS00Ljc3NCw3LTIuNDgyLDEuMjczVjMwLjY4M2wyLjQ4MiwxLjI3MywyLjQ4MiwxLjI3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MTYuMyA2MDUuOCkiIGZpbGw9IiNmZmYiLz4NCiAgPC9nPg0KPC9zdmc+DQo=")
              }
            >
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9InV0dWJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUzMiAtNjI5KSI+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV81NzM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA1NzM5IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MzIgNjI5KSIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzQ2NjM4IiBkYXRhLW5hbWU9IlBhdGggNDY2MzgiIGQ9Ik0zMS4yNDgsMjcuNUgyMC4zYTIuOCwyLjgsMCwwLDAtMi44LDIuOHY1Ljg1NmEyLjgsMi44LDAsMCwwLDIuOCwyLjhIMzEuMjQ4YTIuOCwyLjgsMCwwLDAsMi44LTIuOFYzMC4zQTIuOCwyLjgsMCwwLDAsMzEuMjQ4LDI3LjVabS00Ljc3NCw3LTIuNDgyLDEuMjczVjMwLjY4M2wyLjQ4MiwxLjI3MywyLjQ4MiwxLjI3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1MTYuMyA2MDUuOCkiIGZpbGw9IiNmZmYiLz4NCiAgPC9nPg0KPC9zdmc+DQo="
                alt="YouTube link icon"
              />
            </a>
          </div>
        </div>

        <div className="businessIcon pt-3">
          <a href={process.env.ISTUDIO} target="_blank" rel="noopener" className="event_outbound_link" data-action-detail={process.env.ISTUDIO}>
            <img
              src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/5lghEdWm63oI9O5oFSX88E/81f00aaa973994c1230734017fd999e2/bbb.png"
              alt="BBB Accredited Business"
            />
          </a>
        </div>
        
        <div className="d-flex align-items line-container">
          <div className="mainLine">

            <img
              src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/4O9ROWeYkTATgHQxtuIeUl/2fe2e6b248f776268b13b76f2f0d727a/istodio.png"
              alt="iStudio logo"
            />

          </div>
          <div className="digitalLine">
            Your digital warehouse for images, documents, videos,
            training and other PGPro resources.&ensp;
                        <a id="GFG" className="footerStarter event_outbound_link" href="https://istudio.pgpro.com/Account/LogOn?ReturnUrl=%2f" target="_blank" rel="noopener" data-action-detail="https://istudio.pgpro.com/Account/LogOn?ReturnUrl=%2f">
              Get Started
                        </a>
          </div>
        </div>

        <div className="navBar-container-links centerColumn pb-3 pt-3">
          <div className="additionalInformationLine">
            For additional information call 1-800-332-7787 Call center hours
            24/7, 365 days a year.
          </div>
          <div className="copyRights centerColumn text-right">
            &copy; 2020 P&G. All Rights Reserved.
          </div>
        </div>

        <div className="inline-flex">
          <a href={process.env.IBA_PRIVACY}
            className="event_outbound_link"
            data-action-detail={process.env.IBA_PRIVACY}
            target="_blank"
            rel="noopener">
            <div className="additionalInformationLine pb-3">AdChoices
                <img
                className="adChoiceIcon pl-2"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA8CAYAAAFEEEmeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1REZCMkMxQjg5ODExRTU4RTQxRUZEMzVEMDRGMjI0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1REZCMkMwQjg5ODExRTU4RTQxRUZEMzVEMDRGMjI0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ1dWlkOjNiOTdjODBmLTk2MmQtOTM0OC05ODY0LWRhYTczZjc3ZTY0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODEx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"
                alt="AdChoice icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default FooterComponent;
