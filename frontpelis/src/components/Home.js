
import React ,{ useEffect, useState } from 'react';
const Home = () => {
    
    const [listpeli, setlistpeli] = useState()
    const [kwordS, setkwordS] = useState("")
    const EventokwordsChange=  (e) =>{
      setkwordS( e.target.value);
      // console.log(correo,e.target.value);
   }
   const getkword = async () =>  {
    const Url = `http://127.0.0.1:8000/api/pelicula/search-titulo/${kwordS}/`;
          await fetch(Url,{
                  method: 'GET',
                  headers:{
                    'Content-Type': 'application/json'
                  }
                })
            .then((res) => res.json())
            .then(async (resp) => {
                await setlistpeli(resp)
              console.log(resp)
          })
  }
    const pelisall = async () =>  {
        await fetch('http://127.0.0.1:8000/api/pelicula/list-all/',{
            method: 'GET',
            headers:{
            'Content-Type': 'application/json'
            }
        })
    .then((res) => res.json())
    .then(async (resp) => {
        await setlistpeli(resp)
        console.log(resp)
    })
  }
   const entersearch = (e) =>{
     e.preventDefault()
    if(kwordS){
        getkword()
    }else{
        pelisall()
    }
   }
 
    useEffect(async () => {
        pelisall()

      }, [setlistpeli]);


      
  return <div>  
    {listpeli ? (<>
        
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Peliculas</h2>

                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <form className="divider-custom" onSubmit={entersearch}>
                    <input value={kwordS} onChange={EventokwordsChange}   className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">

                    {/* <!-- Portfolio Item 1--> */}
                    {
                        listpeli.map((ob) =>{
                            return(
                                <div className="col-md-6 col-lg-4 mb-5" key={ob.id}>
                                <div className="portfolio-item mx-auto">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" >{ob.nombre}</div>
                                    </div>
                                    <img className="imagen-cuatro" src={ob.imagen} alt="..." />
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
                
            </div>
        </section>
            </>) : ( <> </>)}
            
        </div>    
};

export default Home;
