import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import Axios from "axios";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Layout from "../components/Layout";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  }

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  }

  const handleLogin = e => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try{
        Axios.post("http://localhost:4000/api/auth/signin", {
            email: email,
            password: password
        }).then((response) => {
            console.log("Logged in")
            console.log(response.data);
            navigate(`/api/dashboard/member/${reso.id}`)
        })
    }catch(e) {
        console.log(e);
    }
    // AuthService.login(email, password).then(() => {
    //   console.log("logged in");
    // }).catch(e => {
    //   console.log(e);
    //   setLoading(false);
    //   setMessage(e);
    // })
    console.log(email, password);
    setLoading(false);
  }
  return(
    <>
      <Layout>
        <Container>
          <div className="flex h-screen flex-col items-center justify-center">
            <div className="text-center mb-4">
            <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
              <h1 className="text-black font-medium leading-loose text-2xl uppercase tracking-wide">Corper Login</h1>
             
            </div>
              <div className="w-full max-w-sm">
              <form  className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="relative group py-2 mb-6 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="email">
                        Email
                    </label>
                    </div>
                    <input 
                    type={'email'}
                    name={'email'}
                    placeholder="email@example.com"
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={onChangeEmail}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold capitalize" for="password">
                        password
                    </label>
                    </div>
                    <input 
                    type={'password'}
                    name={'password'}
                    id={'password'}
                    placeholder="******************"
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={onChangePassword}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                
                <div className="flex w-full flex-col">
                  
                  <button onClick={handleLogin} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={loading} >
                    {loading && <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>}
                    Login
                  </button>
                  {message && (
                    <div className="my-2">
                      <p className="text-red-400 text-xs italic text-center">{message}</p>
                    </div>
                  )}
                  <div className="flex flex-row text-xs md:text-sm justify-between">
                    <span className="inline-block mt-2 align-baseline  text-gray-500  text-center">
                     Don't have a profile? 
                      <Link to={"/api/auth/signup"}>
                          <span className="text-green-400 ml-1 cursor-pointer text-underline font-medium">Create</span>
                      </Link>
                    </span>
                    <span className="inline-block mt-2 align-baseline text-gray-500 hover:text-green-500 text-center">
                      Forgot Password?
                    </span>
                  </div>
                </div>
              </form>
              <Footer />
              </div>
          </div>
        
        </Container>
      </Layout>
      
    </>
  )
}

export default Login;