import React ,{ useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
const Login = () => {
    const history = useHistory()
    const [correo, setcorreo] = useState("")
    const [password, setpassword] = useState("")
    const [Login, setLogin] = useState({
        email:'',
        password:''
    })
    const EventoEmailChange=  (e) =>{
        setcorreo( e.target.value);
        // console.log(correo,e.target.value);
     }
     const EventoPassChange=  (e) =>{
        setpassword( e.target.value);
     }
     const clickkbutton= async (e) =>{
        e.preventDefault()

        await logindjangoasync()
     }

      const logindjangoasync = async () =>  {
        const Url = 'http://127.0.0.1:8000/api/user/login/';
        await fetch(Url,{
                method: 'POST', // or 'PUT'
                body: JSON.stringify({
                    "email": correo,
                    "password":password
                }), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
              })
          .then((res) => res.json())
          .then(async (resp) => {
            await setLogin(resp);
            if (resp.Login) {
                localStorage.setItem('usuario',JSON.stringify(resp))
                history.push("/");
            }
            // console.log(resp)
        })
      }

  return <div>
      
      <section className="page-section" id="contact">
            <div className="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Iniciar Sesion</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form id="contactForm">
                            {/* <!-- Email address input--> */}
                            <div className="form-floating mb-3">
                                <input value={correo} onChange={EventoEmailChange} className="form-control" id="email" type="email" placeholder="correo@ejemplo.com" />
                                <label >Correo</label>
                            </div>
                            {/* <!-- password input--> */}
                            <div className="form-floating mb-3 text-center justify-content-center">
                                <input value={password} onChange={EventoPassChange} className="form-control" id="name" type="password" placeholder="Contraseña"  />
                                <label >Contraseña</label>
                            </div>
                            <button onClick={clickkbutton} className="btn btn-primary btn-xl" id="submitButton" type="submit">Iniciar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


  </div>
};

export default Login;

