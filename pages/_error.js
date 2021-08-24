import ErrorPage from "../components/ErrorPage"
function Error({ statusCode }) {
    return (
      <ErrorPage/>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error