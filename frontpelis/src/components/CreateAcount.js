
import React ,{ useEffect, useState } from 'react';
const CrearCuenta = () => {

    const [nombre, setnombre] = useState("")
    const [correo, setcorreo] = useState("")
    const [edad, setedad] = useState("")
    const [password, setpassword] = useState("")
    const [password1, setpassword1] = useState("")
    const EventoPassChange=  (e) =>{
        setpassword( e.target.value);
     }
    const EventoPass1Change=  (e) =>{
        setpassword1( e.target.value);
     }
    const EventoEdadChange=  (e) =>{
        setedad( e.target.value);
     }
    const EventoCorreoChange=  (e) =>{
        setcorreo( e.target.value);
     }
    const EventoNombreChange=  (e) =>{
        setnombre( e.target.value);
     }

    const clickkbutton= async (e) =>{
       e.preventDefault()

       await CrearUserDjango()
    }
    const CrearUserDjango = async () =>  {
        const Url = 'http://127.0.0.1:8000/api/user/create/';
        await fetch(Url,{
                method: 'POST', // or 'PUT'
                body: JSON.stringify({
                    "nombre":nombre,
                    "email": correo,
                    "edad": edad,
                    "password":password
                }), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
              })
          .then((res) => res.json())
          .then(async (resp) => {
            
            // if (resp.Login) {
            //     localStorage.setItem('usuario',JSON.stringify(resp))
            //     history.push("/");
            // }
            console.log(resp)
        })
      }
  return <div>

<section className="page-section" id="contact">
            <div className="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Crear Cuenta</h2>
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
                            {/* <!-- Name input--> */}
                            <div className="form-floating mb-3">
                                <input value={nombre} onChange={EventoNombreChange} className="form-control" id="name" type="text" placeholder="Nombre completo"/>
                                <label htmlFor="name">nombre completo</label>
                            </div>
                            {/* <!-- Email address input--> */}
                            <div className="form-floating mb-3">
                                <input value={correo} onChange={EventoCorreoChange} className="form-control" id="email" type="email" placeholder="ejemplo@gmail.com" />
                                <label htmlFor="email">Correo</label>
                            </div>
                            {/* <!--  number input--> */}
                            <div className="form-floating mb-3">
                                <input value={edad} onChange={EventoEdadChange} className="form-control" id="phone" type="numer" placeholder="0" />
                                <label htmlFor="phone">edad</label>
                            </div>
                            {/* <!-- password input--> */}
                            <div className="form-floating mb-3 text-center justify-content-center">
                                <input value={password} onChange={EventoPassChange} className="form-control" id="pass1" type="password" placeholder="Contraseña"  />
                                <label >Contraseña</label>
                            </div>
                            {/* <!-- password input--> */}
                            <div className="form-floating mb-3 text-center justify-content-center">
                                <input value={password1} onChange={EventoPass1Change} className="form-control" id="pass2" type="password" placeholder="Contraseña"  />
                                <label >Repetir contraseña</label>
                            </div>
                            <button onClick={clickkbutton} className="btn btn-primary btn-xl " id="submitButton" type="submit">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


  </div>;
};

export default CrearCuenta;
