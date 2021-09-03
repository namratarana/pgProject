import React from "react"
import Link from "next/link"

import Footer from "../../components/Footer"
import {useEffect} from 'react';
import Header1 from "../../components/header1";
import Body from "../../components/body";
import Footer1 from "../../components/footer1";


function LandingPage()
{
        useEffect(() => 
        {
            localStorage.removeItem('recommendedResults') 
            localStorage.removeItem('answerChosen');   
        }, [])
        return (
            <div className="main">

           
                {/* <div className="banner mx-auto">
                    <picture className="banner-picture">
                        <source
                            srcSet="https://res.cloudinary.com/mtree/w_1200,q_auto:eco,f_auto,dpr_auto/PGPro_US/3ByInDeaGfdemUNc0GewSN/9e0b1918a1196a6b2a2e03f02149e2e2/Home-Banner_2x__1_.jpg 1200w,
                              https://res.cloudinary.com/mtree/w_1400,q_auto:eco,f_auto,dpr_auto/PGPro_US/3ByInDeaGfdemUNc0GewSN/9e0b1918a1196a6b2a2e03f02149e2e2/Home-Banner_2x__1_.jpg 1400w,
                              https://res.cloudinary.com/mtree/w_1600,q_auto:eco,f_auto,dpr_auto/PGPro_US/3ByInDeaGfdemUNc0GewSN/9e0b1918a1196a6b2a2e03f02149e2e2/Home-Banner_2x__1_.jpg 1600w"
                            media="(min-width: 1024px)" />

                        <source
                            srcSet="https://res.cloudinary.com/mtree/w_800,q_auto:eco,f_auto,dpr_auto/PGPro_US/AIPZST3Xf5BxSNAO32brF/0689dea597ca3bf6ae7902d2c8d87d76/home-tab_2x.jpg 800w,
                              https://res.cloudinary.com/mtree/w_1200,q_auto:eco,f_auto,dpr_auto/PGPro_US/AIPZST3Xf5BxSNAO32brF/0689dea597ca3bf6ae7902d2c8d87d76/home-tab_2x.jpg 1200w,
                              https://res.cloudinary.com/mtree/w_1400,q_auto:eco,f_auto,dpr_auto/PGPro_US/AIPZST3Xf5BxSNAO32brF/0689dea597ca3bf6ae7902d2c8d87d76/home-tab_2x.jpg 1400w,
                              https://res.cloudinary.com/mtree/w_1600,q_auto:eco,f_auto,dpr_auto/PGPro_US/AIPZST3Xf5BxSNAO32brF/0689dea597ca3bf6ae7902d2c8d87d76/home-tab_2x.jpg 1600w"
                            media="(min-width: 768px)" />

                        <img
                            src="https://res.cloudinary.com/mtree/w_750,q_auto:eco,f_auto,dpr_auto/PGPro_US/7rfzki8kfaDaIoak8V6w5M/3cf235d0b6538a0404fb2265a16eeaa7/Home-Banner_2x.jpg"
                            alt="Man cleaning countertop" />
                    </picture>

                    <div className="banner-text">
                        <img
                            className="logo"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzkuMzQ4IiBoZWlnaHQ9Ijc2LjcxMyIgdmlld0JveD0iMCAwIDc5LjM0OCA3Ni43MTMiPg0KICA8ZGVmcz4NCiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9IjAuMjEyIiBjeT0iMC4wNzEiIHI9IjEuMDI4IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA1KSBzY2FsZSgwLjk4OSAxKSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjODA5M2NhIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDEiIHN0b3AtY29sb3I9IiM4MDkzY2EiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMC40MyIgc3RvcC1jb2xvcj0iIzEwNWZhOSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjkzIiBzdG9wLWNvbG9yPSIjMWEzYjY2Ii8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYTNiNjYiLz4NCiAgICA8L3JhZGlhbEdyYWRpZW50Pg0KICA8L2RlZnM+DQogIDxnIGlkPSJwZ3BfbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjgwMiAtMjEuNikiPg0KICAgIDxnIGlkPSJncmFkaWVudCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuODAyIDIxLjYpIj4NCiAgICAgIDxnIGlkPSJYTUxJRF83N18iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTI1IDAuODk0KSIgb3BhY2l0eT0iMC42Ij4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik0yMS4xLDYxLjIwOWMwLDIwLjkyMywxNy40MDUsMzcuOTA5LDM4LjkxMiwzNy45MDlTOTguOTI0LDgyLjEzMiw5OC45MjQsNjEuMjA5LDgxLjUxOCwyMy4zLDYwLjAxMiwyMy4zQzM4LjU1OCwyMy4zLDIxLjEsNDAuMjg3LDIxLjEsNjEuMjA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuMSAtMjMuMykiLz4NCiAgICAgIDwvZz4NCiAgICAgIDxwYXRoIGlkPSJYTUxJRF83Nl8iIGQ9Ik0xOC4yLDU5LjUwOWMwLDIwLjkyMywxNy40MDUsMzcuOTA5LDM4LjkxMiwzNy45MDlTOTYuMDI0LDgwLjQzMiw5Ni4wMjQsNTkuNTA5LDc4LjYxOCwyMS42LDU3LjExMiwyMS42QzM1LjY1OCwyMS42LDE4LjIsMzguNTg3LDE4LjIsNTkuNTA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTguMiAtMjEuNikiIGZpbGw9InVybCgjcmFkaWFsLWdyYWRpZW50KSIvPg0KICAgIDwvZz4NCiAgICA8ZyBpZD0iY2lyY2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wOTMgMjMuNTQ2KSI+DQogICAgICA8ZyBpZD0iWE1MSURfMjQ2N18iPg0KICAgICAgICA8ZyBpZD0iWE1MSURfMjQ2OV8iPg0KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzIiIGRhdGEtbmFtZT0iUGF0aCAyIiBkPSJNNTguODE5LDk3LjMzM2MtMjAuNCwwLTM3LjAxOS0xNi4xNDUtMzcuMDE5LTM2LjAxNlMzOC40MTYsMjUuMyw1OC44MTksMjUuMyw5NS44MzgsNDEuNDQ1LDk1LjgzOCw2MS4zMTZDOTUuODM4LDgxLjEzNiw3OS4yMjEsOTcuMzMzLDU4LjgxOSw5Ny4zMzNabTAtNzEuNjcxYy0yMC4xOTIsMC0zNi42LDE1Ljk5LTM2LjYsMzUuNiwwLDE5LjY2NCwxNi40MDYsMzUuNiwzNi42LDM1LjZzMzYuNi0xNS45OSwzNi42LTM1LjZTNzkuMDExLDI1LjY2Miw1OC44MTksMjUuNjYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxLjggLTI1LjMpIiBmaWxsPSIjMWEzYjY2Ii8+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogICAgPGcgaWQ9IlBfeDI2X0dfbG9nb3R5cGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjQ1NyA0NS4wMTgpIj4NCiAgICAgIDxwYXRoIGlkPSJYTUxJRF82NV8iIGQ9Ik02Mi43LDc5LjM1OWgzLjA1YTkuNjI3LDkuNjI3LDAsMCwxLTMuMS0xLjg5M0EzLjQ3MSwzLjQ3MSwwLDAsMCw2My43LDc1LjA0N2gtMS40MmEuOTgyLjk4MiwwLDAsMSwuMjYzLjYzMSwxLjQ0NSwxLjQ0NSwwLDAsMS0uNDIxLDEuMTU3QTguMzkzLDguMzkzLDAsMCwxLDYwLjgwOSw3NGExMC4yMTYsMTAuMjE2LDAsMCwwLDIuMS0xLjEsMS45MjksMS45MjksMCwwLDAsLjczNi0xLjQ3MnYtLjA1M2ExLjE5NCwxLjE5NCwwLDAsMC0uNDczLS45NDcsMi4xLDIuMSwwLDAsMC0xLjk0Ni0uNDczLDMuMzEzLDMuMzEzLDAsMCwwLTEuMzY3LjY4NCwzLjczOCwzLjczOCwwLDAsMC0uODk0LDIuODkyLjc4Ljc4LDAsMCwwLC4wNTMuMzY4LjUzLjUzLDAsMCwwLS4xNTguMDUzYy0uNjMxLjI2My0yLjQxOS43MzYtMywyLjIwOGE0LjAzLDQuMDMsMCwwLDAtLjE1OCwxLjA1MiwyLjQwNywyLjQwNywwLDAsMCwuNDIxLDEuMjYyLDIuODUxLDIuODUxLDAsMCwwLDIuNTI0LDEuMTU3LDUuNDQ1LDUuNDQ1LDAsMCwwLDIuODQtMS4xYy4yNjMuMTA1Ljg5NC42ODQsMS4yMDkuODQxbS0uMzY4LTguMmEyLjc0LDIuNzQsMCwwLDEtMS42ODMsMi4xLDMuMjU1LDMuMjU1LDAsMCwxLC4zMTUtMi4xNTZjLjI2My0uNDczLjY4NC0uNjg0LDEtLjU3OGEuNTcxLjU3MSwwLDAsMSwuMzY4LjYzMW0tMS40Miw2LjY3OGEzLjc3MiwzLjc3MiwwLDAsMS0xLjUyNS41MjZBMS41OCwxLjU4LDAsMCwxLDU3LjYsNzYuODM1Yy0uMDUzLTEuMDUyLDEuMS0xLjk0NiwxLjY4My0yLjIwOWE5LjczLDkuNzMsMCwwLDAsMS42MywzLjIwOG0tMi44OTItNS44ODlhLjc0Ny43NDcsMCwwLDAsLjEwNS0uMzE2LDMuMSwzLjEsMCwwLDAtLjEwNS0zLDMuNTcsMy41NywwLDAsMC0yLjg5Mi0xLjIwOUg1MC4wODJhLjc1MS43NTEsMCwwLDEsLjI2My42ODRjMCwuMTA1LTIuNzg3LDEwLjYyMi0yLjc4NywxMC42MjJhMS41ODgsMS41ODgsMCwwLDEtLjY4NC43ODlINTAuNDVhLjY3LjY3LDAsMCwxLS4yNjMtLjU3OC4zMTYuMzE2LDAsMCwxLC4wNTMtLjIxbDEuMDUyLTMuODM5SDUxLjRjLjA1MywwLDQuNzg1LjU3OCw2LjUyLTIuNTc3Wm0tMi41NzctLjQ3M2EzLjM5MSwzLjM5MSwwLDAsMS00LDIuNjI5bDEuNTc3LTUuOTQyaC43ODlhMi4xLDIuMSwwLDAsMSwxLjU3OC41MjYsMy4yODcsMy4yODcsMCwwLDEsLjA1MywyLjc4N20xOS4wODgsMi43MzRjLS40MjEsMS40NzItMS4xNTcsNC4zMTItMS4yMDksNC4zNjRhNy4yMzEsNy4yMzEsMCwwLDEtNi4zNjMuMzE2LDMuNTU4LDMuNTU4LDAsMCwxLTEuODkzLTIuNTc3LDcuODg0LDcuODg0LDAsMCwxLDEuNDcyLTYuNDY4YzIuODkyLTMuNDcxLDcuMDQ2LTIuODkyLDkuMjU1LTIuMjA5LS4wNTMuMTU4LS4zMTYsMS4xNTctLjM2OCwxLjM2N0E0LjQyNyw0LjQyNywwLDAsMCw3MS44LDY4Yy0yLC40NzMtMy4zMTMsMi44NC0zLjc4Niw0LjczMy0uNzM2LDIuNjgyLS42ODQsNC41MjIuMTU4LDUuNDE2LjY4NC43MzYsMi4xNTYuNDczLDIuNTc3LjM2OGwxLjIwOS00LjM2NFY3My44OWEuOS45LDAsMCwwLS4zNjgtLjY4NGgzLjc4NmExLjIzOSwxLjIzOSwwLDAsMC0uODQxLDFNMzEuNzgzLDg2LjQ1OGguNTc4Yy44NDEsMCwxLjU3OC0uMjYzLDEuNTc4LTEuMjA5cy0uNzM2LTEuMjYyLTEuNTc4LTEuMjYyaC0uNTc4Wk0zMC4xLDgyLjY3MmgyLjFjMS43ODgsMCwzLjQxOC41MjYsMy40MTgsMi40NzEsMCwxLjg5My0xLjQyLDIuNTc3LTMuMTU1LDIuNTc3aC0uNjg0djMuMUgzMC4xWm02LjYyNiwyLjE1NmgxLjQydjEuMzY3SDM4LjJhMS44NDUsMS44NDUsMCwwLDEsMS42My0xLjUyNSwxLjQ1NiwxLjQ1NiwwLDAsMSwuNDczLjA1M1Y4Ni4zYTIuNDM3LDIuNDM3LDAsMCwwLS43MzYtLjEwNWMtMS4yNjIsMC0xLjI2MiwxLjU3OC0xLjI2MiwyLjQxOXYyLjIwOEgzNi43MjZabTcuMSw0Ljk0M2MxLjIwOSwwLDEuNTI1LTEuMDUyLDEuNTI1LTIuMDUxYTEuNiwxLjYsMCwwLDAtMS41MjUtMS43ODhBMS42MjUsMS42MjUsMCwwLDAsNDIuMyw4Ny43MmMwLC45NDcuMzE2LDIuMDUxLDEuNTI1LDIuMDUxbTAtNS4xYTMuMDA4LDMuMDA4LDAsMCwxLDMuMTU1LDMuMTU1LDMuMTU1LDMuMTU1LDAsMCwxLTYuMzEsMCwzLjAwOCwzLjAwOCwwLDAsMSwzLjE1NS0zLjE1NW01LDEuMzE1SDQ3LjY2M1Y4NC44MjhINDguODJ2LS44NDFhMS44NTIsMS44NTIsMCwwLDEsMS45NDYtMi4wNTEsNy44NzcsNy44NzcsMCwwLDEsMS4xNTcuMTA1bC0uMTU4LDEuMzE1YTEuMTcxLDEuMTcxLDAsMCwwLS42ODQtLjIxYy0uNTI2LDAtLjY4NC40NzMtLjY4NC44OTR2LjczNmgxLjM2N3YxLjE1N0g1MC40VjkwLjc3SDQ4LjgyWk01Ni42LDg3LjI0N2MtLjA1My0uNzM2LS40MjEtMS40Mi0xLjI2Mi0xLjQyLS44OTQsMC0xLjMxNS41NzgtMS40MiwxLjQyWm0xLjA1MiwzLjIwOGE0LjE1Miw0LjE1MiwwLDAsMS0yLjEuNDczLDIuODYzLDIuODYzLDAsMCwxLTMuMTU1LTMuMWMwLTEuNzM1Ljk0Ny0zLjE1NSwyLjc4Ny0zLjE1NSwyLjI2MSwwLDIuODkyLDEuNTI1LDIuODkyLDMuNjI4SDUzLjg2OEExLjU4MSwxLjU4MSwwLDAsMCw1NS42LDg5LjgyM2EzLjc0NywzLjc0NywwLDAsMCwyLS42MzF2MS4yNjJabTUuMzExLTQuMzY0YTQuMDE0LDQuMDE0LDAsMCwwLTEuNDItLjI2M2MtLjQyMSwwLS45NDcuMTU4LS45NDcuNjg0LDAsLjk0NywyLjczNC4zNjgsMi43MzQsMi41MjQsMCwxLjQyLTEuMjYyLDEuOTQ2LTIuNTI0LDEuOTQ2YTcsNywwLDAsMS0xLjc4OC0uMjYzbC4xMDUtMS4yNjJhMy4yMTIsMy4yMTIsMCwwLDAsMS41NzcuNDIxYy40MjEsMCwxLjA1Mi0uMTU4LDEuMDUyLS43MzYsMC0xLjE1Ny0yLjczNC0uMzY4LTIuNzM0LTIuNTI0LDAtMS4yNjIsMS4xNTctMS44NCwyLjM2Ni0xLjg0YTcuODIsNy44MiwwLDAsMSwxLjczNS4yMVptNS4yMDYsMGE0LjAxNCw0LjAxNCwwLDAsMC0xLjQyLS4yNjNjLS40MjEsMC0uOTQ3LjE1OC0uOTQ3LjY4NCwwLC45NDcsMi43MzQuMzY4LDIuNzM0LDIuNTI0LDAsMS40Mi0xLjI2MiwxLjk0Ni0yLjUyNCwxLjk0NmE2LjY3OCw2LjY3OCwwLDAsMS0xLjc4OC0uMjYzbC4xMDUtMS4yNjJhMy4yMTIsMy4yMTIsMCwwLDAsMS41NzcuNDIxYy4zNjgsMCwxLjA1Mi0uMTU4LDEuMDUyLS43MzYsMC0xLjE1Ny0yLjczNC0uMzY4LTIuNzM0LTIuNTI0LDAtMS4yNjIsMS4xNTctMS44NCwyLjM2Ni0xLjg0YTcuODIsNy44MiwwLDAsMSwxLjczNS4yMVptMS42ODMtMS4yNjJoMS41Nzh2NS45OTVINjkuODUzWm0wLTIuNTc3aDEuNTc4djEuNDcySDY5Ljg1M1ptNS45OTUsNy41MTljMS4yMDksMCwxLjUyNS0xLjA1MiwxLjUyNS0yLjA1MWExLjYsMS42LDAsMCwwLTEuNTI1LTEuNzg4LDEuNjI1LDEuNjI1LDAsMCwwLTEuNTI1LDEuNzg4YzAsLjk0Ny4zMTYsMi4wNTEsMS41MjUsMi4wNTFtMC01LjFBMy4wMDgsMy4wMDgsMCwwLDEsNzksODcuODI1YTMuMTU1LDMuMTU1LDAsMCwxLTYuMzEsMCwzLjAwOCwzLjAwOCwwLDAsMSwzLjE1NS0zLjE1NW00LjQxNy4xNThoMS40NzJ2Ljc4OWguMDUzYTIuMjQ3LDIuMjQ3LDAsMCwxLDItLjk0N2MxLjQyLDAsMi4wNTEsMSwyLjA1MSwyLjM2NnYzLjc4Nkg4NC4yNjFWODcuNjE1YzAtLjczNiwwLTEuNzM1LTEtMS43MzUtMS4xNTcsMC0xLjM2NywxLjIwOS0xLjM2NywydjIuOTQ1SDgwLjMxN1Y4NC44MjhabTkuMzA3LDVhMS40LDEuNCwwLDAsMCwxLjEtLjUyNiwxLjkwNSwxLjkwNSwwLDAsMCwuMzE2LTEuMjA5aC0uNjg0Yy0uNjg0LDAtMS43MzUuMTA1LTEuNzM1LDEuMDUyLDAsLjQ3My40MjEuNjg0LDEsLjY4NG0tMS44NC00LjY4YTUuODMsNS44MywwLDAsMSwyLjEtLjQ3M2MxLjg0LDAsMi42MjkuNzM2LDIuNjI5LDIuNTI0djIuMjYxYzAsLjQ3My4wNTMuODk0LjA1MywxLjMxNUg5MS4xNDlhNS43MzMsNS43MzMsMCwwLDEtLjA1My0uODk0aDBBMi4yNzcsMi4yNzcsMCwwLDEsODkuMiw5MC45MjhhMS45MTgsMS45MTgsMCwwLDEtMi4xLTEuNzg4LDEuNjY1LDEuNjY1LDAsMCwxLDEuMDUyLTEuNjgzLDUuMjY3LDUuMjY3LDAsMCwxLDIuMDUxLS4zNjhoLjg0MWMwLS45NDYtLjQyMS0xLjMxNS0xLjM2Ny0xLjMxNWEzLjU0MiwzLjU0MiwwLDAsMC0xLjg5My42MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMSAtNjcuMTE1KSIgZmlsbD0iI2ZmZiIvPg0KICAgICAgPHJlY3QgaWQ9IlhNTElEXzZfIiB3aWR0aD0iMS41NzgiIGhlaWdodD0iOC43MjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYzLjk0MiAxNC45NzgpIiBmaWxsPSIjZmZmIi8+DQogICAgICA8cGF0aCBpZD0iWE1MSURfMl8iIGQ9Ik0xNTYuNjIsOTYuMDIxaC0uNDczdjEuMWgtLjUyNnYtMS4xSDE1NS4yVjk1LjZoMS40MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04OS40MTggLTgwLjYyMikiIGZpbGw9IiNmZmYiLz4NCiAgICAgIDxwYXRoIGlkPSJYTUxJRF8xXyIgZD0iTTE1OC4xLDk1LjZoLjczNmwuMjEuNzg5aDBsLjE1OC0uNzg5aC43MzZ2MS41MjVoLS40NzNWOTUuOTE2aDBsLS4yNjMsMS4yMDloLS40MjFsLS4yMS0xLjIwOWgwbC0uMDUzLDEuMjA5SDE1OC4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkwLjc5MyAtODAuNjIyKSIgZmlsbD0iI2ZmZiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="
                            alt="PG Professional logo" />

                        <p className="title">P&G Professional SmartAssist</p>

                        <p className="desc1">
                            Enter the P&G Professional SmartAssist and tell us about your
                            business and your cleaning needs to get custom
                            cleaning product recommendations.{" "}
                        </p>

                        <Link href='/PGPro-SmartAssist-Quiz'> 
                            <button className="getStartedButton event_button_click" data-action-detail="get-started-button" >
                                Get Started
                            </button>
                        </Link>

                        <div className="tac">
                            By answering this questionnaire, I confirm that I am at least 18 years of age and that I have read and agree to the <a href={process.env.TERMS_AND_CONDITIONS} target="_blank" className="landingPrivacyLinks event_outbound_link" rel="noopener" data-action-detail={process.env.TERMS_AND_CONDITIONS}>P&amp;G Terms and Conditions</a> and <a href={process.env.PRIVACY_POLICY} className="landingPrivacyLinks event_outbound_link" target="_blank" rel="noopener" data-action-detail={process.env.PRIVACY_POLICY}>P&amp;G Privacy</a>.
                        </div>
                    </div>
                </div> */}
                <Header1/>
                <Body/>
                <Footer1/>
            </div>
        )
    }

export default LandingPage;
