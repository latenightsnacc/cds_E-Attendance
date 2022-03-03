import Footer from "../components/Footer";
import Container from "../components/Container";
import Layout from "../components/Layout";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const AdminRegister = () => {
    const navigate = useNavigate();
    const initialCoordinatorState = {
        firstname: "",
        surname: "",
        cdsGroup:"",
        lga:"",
        email:"",
        password:"",
        role: "Coordinator",
        state:"Enugu"
    }
    const [coordinator, setCoordinator] = useState(initialCoordinatorState);

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name, value } = event.target;
        setCoordinator({...coordinator, [name]: value});
    }
    
    const createProfile = (e) => {
        e.preventDefault();
        const data = {
            firstname: coordinator.firstname,
            surname: coordinator.surname,
            cdsGroup:coordinator.cdsGroup,
            lga:coordinator.lga,
            passport:coordinator.password,
            email:coordinator.email,
            role: coordinator.role,
            state: coordinator.state
            } 
        try{
            AuthService.register(data)
            .then(response => {
                setCoordinator({
                    firstname: response.data.firstname,
                    surname: response.data.surname,
                    cdsGroup: response.data.cdsGroup,
                    lga: response.data.lga,
                    email: response.data.email,
                    password: response.data.password,
                    role: response.data.role,
                    state: response.data.state
                });
            })
            .then(() => {
                setSubmitted(true);
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            }) 
        }catch(e){
            console.log(e);
        };
    }
  return(
    <>
      <Layout>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center  mt-10 mb-6">
            <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
              <h1 className="text-black font-medium leading-loose text-2xl uppercase tracking-wide">create admin profile</h1>
             
            </div>
              <div className="w-full max-w-lg">
              <form className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
                        First Name
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'firstname'}
                    value={coordinator.firstname}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="surname">
                        Surname
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'surname'}
                    value={coordinator.surname}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="LGA">
                        Local Government Area (L.G.A)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'lga'}
                    value={coordinator.lga}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={''}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="C.D.S">
                        Community Development Service (CDS) Group
                    </label>
                    </div>
                    <div className="flex flex-row items-center px-2 my-2">
                        <input 
                        type="checkbox" 
                        id="I.C.T" 
                        name="cds" 
                        value="Information Communication Technology"
                        onChange={handleInputChange
                        className={'border-0 text-xs md:text-sm text-gray-700  py-2 px-2 checked:text-green-400 checked:border-0 checked:border-green-400 mr-2'} />
                        <label for="I.C.T" className="text-xs text-gray-700 md:text-sm"> Information Communication Technology (I.C.T)</label>
                    </div>
                    <div className="flex flex-row items-center px-2 my-2">
                        <input 
                        type="checkbox" 
                        id="Band" 
                        name="cds" 
                        value="Band"
                        className={'border-0 text-xs md:text-sm text-gray-700  py-2 px-2 checked:text-green-400 checked:border-0 checked:border-green-400 mr-2'} />
                        <label for="Band" className="text-xs text-gray-700 md:text-sm"> Band</label>
                    </div>
                    
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="email">
                        Email
                    </label>
                    </div>
                    <input 
                    type={'email'}
                    name={'email'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={''}
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
                    placeholder="******************"
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={''}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold capitalize" for="password">
                        confirm password
                    </label>
                    </div>
                    <input 
                    type={'password'}
                    name={'confirm_password'}
                    placeholder="******************"
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={''}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                
                
                <div className="flex w-full flex-col">
                  <button 
                  
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   Create Profile
                  </button>

                  <span className="inline-block mt-2 align-baseline text-xs md:text-sm text-gray-500  text-center">
                    Already have a profile? 
                        <Link to={"/api/auth/admin/signin"}>
                            <span className="text-green-400 ml-1 cursor-pointer text-underline font-medium">Login</span>
                        </Link>
                    
                  </span>
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

export default AdminRegister;