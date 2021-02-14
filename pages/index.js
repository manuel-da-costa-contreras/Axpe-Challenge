import Router from 'next/router'

const Index= () => null

Index.getInitialProps = async ({res}) => {
  if (res) {
    res.writeHead(302, {
      location: '/main/main'
    })
    res.end()
  } else {
    Router.push('/index/main')
  }
  return {}
}

export default Index