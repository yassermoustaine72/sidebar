import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import Navbar from './Layouts/Navbar';
// import Sidebar from './Layouts/SideBar';
import CustomCountrySelect from './Layouts/CountrySelect';
import { useState } from 'react';
import "./Profil.css"

export default function Profil(){

    const [codeCountry,setCodeCountry]=useState("");

    function handleCodeCountry(c){
        setCodeCountry(c);
    }
    

   return <Container fluid >
        <Row > 
        {/* <Col className=' mt-5' xl={3} lg={3} md={3} sm={3} xs={3} style={{height:"145vh"}}>
         <Sidebar/>  
        </Col> */}

        <Col className='mt-4' xl={9} lg={9} md={9} sm={9} xs={9}>
                <Row >
                     {/* <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                     <Navbar title="Profile"/> 
                    </Col> */}
                    
                </Row>
                <Row  className="student-profil-container mt-3">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}  >
                <h3 className="student-profil-coordonnees-title">Mes coordonnées</h3>
                <Form className='mt-4'>
                <Row className=' mt-3'>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6} >
                    <Form.Group>
                            <Form.Label>
                              Prénom
                            </Form.Label>
                            <Form.Control type="text" name="prenom"/>

                    </Form.Group>
                    </Col>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                              Nom
                            </Form.Label>
                            <Form.Control type="text" name="nom"/>

                    </Form.Group>
                    </Col>
                </Row>
                <Row  className=' mt-3'>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                              Numéro de téléphone
                            </Form.Label>
                            <Row>
                            <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                            <CustomCountrySelect codeCountry={handleCodeCountry}/>
                            </Col>
                            <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                            <Form.Control type="text" name="tel" placeholder='XXX XXX XXXX'/>
                            </Col>
                            </Row>
                    </Form.Group>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                              Ville
                            </Form.Label>
                            <Form.Control type="text" name="ville"/>

                    </Form.Group>
                    </Col>
                </Row>
                <Row  className=' mt-3'>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                             DDN
                            </Form.Label>
                            <Form.Control type="date" name="dateN"/>

                    </Form.Group>
                    </Col>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                             Pays
                            </Form.Label>
                            <Form.Select  name="pays"/>

                    </Form.Group>
                    </Col>
                </Row>
                <Row  className=' mt-3'>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                            Pays d'origine
                            </Form.Label>
                            <Form.Control type="text" name="paysOrigin"/>

                    </Form.Group>

                    </Col>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                              Adresse Email
                            </Form.Label>
                            <Form.Control type="email" name="email" placeholder='abc@gmail.com' />

                    </Form.Group>
                    </Col>
                </Row>
                </Form>

                </Col>

       
                </Row>

                <Row className="student-profil-container2 mt-4" > 
                <Col xl={12} lg={12} md={12} sm={12} xs={12}  >
                <h3 className="student-profil-parents-title">les détails de mes parents</h3>
                <Form className='mt-5'>
                <Row className=' mt-3'>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4} >
                    <Form.Group>
                            <Form.Label>
                            Nom du père
                            </Form.Label>
                            <Form.Control type="text" name="nomPere"/>

                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Form.Group>
                            <Form.Label>
                              Adresse email du père
                            </Form.Label>
                            <Form.Control type="text" name="nom" placeholder='abc@gmail.com'/>

                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Form.Group>
                            <Form.Label>
                             Numéro de téléphone du père
                            </Form.Label>
                            <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                            <CustomCountrySelect codeCountry={handleCodeCountry}/>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Form.Control type="text" name="tel" placeholder='XXX XXX XXXX'/>
                            </Col>
                            </Row>

                    </Form.Group>
                    </Col>
                </Row>
              
                <Row className=' mt-3'>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4} >
                    <Form.Group>
                            <Form.Label>
                            Nom de la mère
                            </Form.Label>
                            <Form.Control type="text" name="nomPere"/>

                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Form.Group>
                            <Form.Label>
                              Adresse email de la mère
                            </Form.Label> 
                            <Form.Control type="email" name="nom" placeholder='abc@gmail.com'/>

                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Form.Group>
                            <Form.Label>
                             Numéro de téléphone de la mère
                            </Form.Label>
                            <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                            <CustomCountrySelect codeCountry={handleCodeCountry}/>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Form.Control type="text" name="tel" placeholder='XXX XXX XXXX'/>
                            </Col>
                            </Row>

                    </Form.Group>
                    </Col>
                </Row>
              
                
                </Form>

                </Col>

       
                
            </Row>

            <Row  className="student-profil-container3 mt-5">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}  >
                <h3 className="student-profil-coordonnees-title">Mon Curriculum</h3>
                <Form className='mt-4'>
                <Row className=' mt-3'>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6} >
                    <Form.Group>
                            <Form.Label>
                            Dernier diplôme obtenu
                            </Form.Label>
                            <Form.Control type="text" name="prenom"/>

                    </Form.Group>
                    </Col>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                            Secteur souhaité
                            </Form.Label>
                            <Form.Control type="text" name="nom"/>

                    </Form.Group>
                    </Col>
                </Row>
                <Row  className=' mt-3'>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                            Ville de destination
                            </Form.Label>
                           
                            <Form.Control type="text" name="tel"/>
                           
                    </Form.Group>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                            Université ou établissement ciblé
                            </Form.Label>
                            <Form.Control type="text" name="ville"/>

                    </Form.Group>
                    </Col>
                </Row>
                <Row  className=' mt-3'>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                            Pays de Destination
                            </Form.Label>
                            <Form.Control type="text" name="dateN"/>

                    </Form.Group>
                    </Col>
                    <Col xl={6} lg={2} md={6} sm={6} xs={6}>
                    <Form.Group>
                            <Form.Label>
                            Année Scolaire
                            </Form.Label>
                            <Form.Control name="pays" type="text"/>

                    </Form.Group>
                    </Col>
                </Row>

                <Row className='mt-5' style={{height:"53px"}}>
                        <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                             
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={3} xs={3} className="mt-3">
                        <button type="submit" className="button-profil">Enregistrer<svg  viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="profil-fleche">
                            <rect y="0.5" width="29" height="29" rx="14.5" fill="white"/>
                            <path d="M16.7277 9.43604L22.2918 15.0002L16.7277 20.5644M6.7085 15.0002H22.136" stroke="#015192" strokeWidth="1.375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></button>
                        </Col>

                </Row>
         
                </Form>

                </Col>

       
                </Row>
         
       
            
        </Col>
        </Row>


</Container>
}