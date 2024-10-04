import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Book from "../images/BOOK.png"
// import Navbar from './Layouts/Navbar';
// import Sidebar from './Layouts/SideBar';
import "./Dashboard.css";
import profile from "../images/profilStu.png" 
import bell from "../images/bell.png" 
import Comp from "../images/Comp.png" 
import task from "../images/task.png" 
export default function Dashboard(){
    return <Container fluid style={{height:"170vh",width:"140%"}}>
        <Row > 
        {/* <Col className=' mt-5' xl={3} lg={3} md={3} sm={3} xs={3} style={{height:"150vh"}} >
         <Sidebar/>  
        </Col> */}

        <Col className='mt-4' xl={9} lg={9} md={9} sm={9} xs={9}>
                <Row >
                     {/* <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                     <Navbar title="Tableau de bord"/> 
                    </Col> */}
                    
                </Row>
                
                <Row >
                     <Col xl={9} lg={9} md={9} sm={9} xs={9} >
                        <Row className="container1-dashboard-student mx-3">
                                <Col xl={7} lg={6} md={6} sm={6} xs={6} className='mt-5' >
                                <h3 className='hello-dashboard-student'>bonjour James 👋</h3>
                                <p>Bonne journée. complètez votre profil en attente</p>
                                </Col>

                                <Col xl={5} lg={6} md={6} sm={6} xs={6} className='mt-3'>
                                <img src={Book} alt="books"/>
                                </Col>
                        </Row>
                    
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3} xs={3}  className="dashboad-student-profil-container  ">
                            <Row >
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                            <img src={profile} />
                            </Col>
                            </Row >
                            <Row >
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                            <p className='student-dashboard-nom'>James Wilson</p>
                            </Col>
                            </Row >
                            <Row >
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                            <button className="dashboard-student-deconnecter"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.42 4.08L11.3325 5.1675C11.9933 5.56548 12.5401 6.12745 12.9199 6.79892C13.2996 7.47039 13.4995 8.22858 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5C7.80653 13.5 6.66194 13.0259 5.81802 12.182C4.97411 11.3381 4.5 10.1935 4.5 9C4.5 7.3725 5.37 5.955 6.66 5.16L5.58 4.08C4.78338 4.62955 4.1323 5.36452 3.68285 6.22161C3.2334 7.07871 2.99905 8.03221 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 6.96 13.98 5.16 12.42 4.08ZM9.75 2.25H8.25V9.75H9.75" fill="white"/>
                            </svg> déconnecter
                            </button>
                            </Col>
                            </Row >
                    
                    </Col>
                    
                </Row>
                

                <Row className='mt-5'>   

                    <Col xl={4} lg={4} md={4} sm={4} xs={4} className='dashboard-student-container2-box mx-4' style={{width:"304px"}}>   
                            <Row className='mt-2'>   
                                <Col xl={7} lg={7} md={7} sm={7} xs={7}>   
                                <h3> 40+</h3>
                                <p> Notifications</p>
                                </Col>

                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>   
                                <img src={bell}/> 
                                </Col>  
                                
                            </Row>  
                        

                    </Col> 

                    <Col xl={4} lg={4} md={4} sm={4} xs={4} className='dashboard-student-container2-box mx-4' style={{width:"306px"}}>   
                            <Row className='mt-2'>   
                                <Col xl={7} lg={7} md={7} sm={7} xs={7}>   
                                <h3> 03</h3>
                                <p> Services<br/> Abonées</p>
                                </Col>

                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>   
                                <img src={Comp} style={{marginTop:"15px",marginLeft:"-2px"}}/> 
                                </Col>  
                                
                            </Row>  
                        

                    </Col> 
                    <Col xl={4} lg={4} md={4} sm={4} xs={4} className='dashboard-student-container2-box mx-4' style={{width:"304px"}}>   
                            <Row className='mt-2'>   
                                <Col xl={7} lg={7} md={7} sm={7} xs={7}>   
                                <h3> 85%</h3>
                                <p> Profil<br/> Terminé</p>
                                </Col>

                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>   
                                <img src={task} /> 
                                </Col>  
                                
                            </Row>  
                        

                    </Col> 


                </Row> 
                
                <Row className="mt-5">  
                    
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>  
                <Row>  
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}> 
                        <h3 className="dashboard-student-prestations-title"> Prestations de service</h3> 
                        </Col> 
                 </Row>

                  <Row>  
                  <Col xl={4} lg={4} md={4} sm={4} xs={4} className="student-dashboard-prestations-container1 mx-4" style={{width:"304px"}}> 
                            <Row> 
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <p className='dashboard-student-Subtitle-service'> 
                                        Certificat de cession <br/>irrévocable (AVI)  
                                    </p>  
                                </Col> 
                             </Row> 
                             <Row> 
                             <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <p className='student-dashbord-number'> 
                                        01
                                        </p>  
                                </Col> 
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <a  href="#" className="student-dashboard-abonner" > 
                                        S'abonner
                                        </a>  
                                </Col> 
                             </Row> 
                    </Col>  
                    <Col xl={4} lg={4} md={4} sm={4} xs={4} className="student-dashboard-prestations-container2 mx-4" style={{width:"304px"}}> 
                            <Row> 
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <p className='dashboard-student-Subtitle-service'> 
                                    Assurance tous risques  
                                    </p>  
                                </Col> 
                             </Row> 
                             <Row> 
                             <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <p className='student-dashbord-number'> 
                                        02
                                        </p>  
                                </Col> 
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <a  href="#" className="student-dashboard-abonner" > 
                                        S'abonner
                                        </a>  
                                </Col> 
                             </Row> 
                    </Col>  
                    <Col xl={4} lg={4} md={4} sm={4} xs={4} className="student-dashboard-prestations-container3 mx-4" style={{width:"304px"}}> 
                            <Row> 
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <p className='dashboard-student-Subtitle-service'> 
                                    Billetterie <br/>Services
                                    </p>  
                                </Col> 
                             </Row> 
                             <Row> 
                             <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <p className='student-dashbord-number'> 
                                        03
                                        </p>  
                                </Col> 
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <a  href="#" className="student-dashboard-abonner" > 
                                        S'abonner
                                        </a>  
                                </Col> 
                             </Row> 
                    </Col>   
                 </Row> 

                 <Row className="mt-4">  
                  <Col xl={4} lg={4} md={4} sm={4} xs={4} className="student-dashboard-prestations-container4 mx-4" style={{width:"304px"}}> 
                            <Row> 
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <p className='dashboard-student-Subtitle-service'> 
                                   Recherche de <br/>
                                            logement
                                    </p>  
                                </Col> 
                             </Row> 
                             <Row> 
                             <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <p className='student-dashbord-number'> 
                                        04
                                        </p>  
                                </Col> 
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <a  href="#" className="student-dashboard-abonner" > 
                                        S'abonner
                                        </a>  
                                </Col> 
                             </Row> 
                    </Col>  
               
                    
                   </Row> 
                    
                </Col>  
                    
                    
                    
                </Row>  

           
         
            
        </Col>
        </Row>


</Container>
}

