import Form from './components/Form'
import Footer from '../About/components/Footer'

const UserLogin = (props) => {
  return (
    <>
      <header className='uni text-center md:text-6xl text-3xl font-bold md:py-20 py-10 text-tblue'>LOGIN
      </header>
      <Form isLoggedIn={ props.isLoggedIn } />
      <Footer/>
    </>
  )
}

export default UserLogin