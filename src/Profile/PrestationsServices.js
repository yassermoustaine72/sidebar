import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./PrestationsServices.css";
// import Navbar from './Layouts/Navbar';
// import Sidebar from './Layouts/SideBar';

export default function PrestationsServices(){

return <Container fluid >
        <Row style={{height:"100vh",width:"100vw"}}>
        {/* <Col className=' mt-5' xl={3} lg={3} md={3} sm={3} xs={3}>
    <Sidebar/> 
        </Col> */}

        <Col className='mt-4' xl={9} lg={9} md={9} sm={9} xs={9}>
                <Row >
                     {/* <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                     <Navbar title="Prestations de service"/> 
                    </Col> */}
                    
                </Row>
                <Row style={{height:"28%"}} className='mt-5'>
                <Col  xl={3} lg={3} md={2} sm={12} xs={12} className="prestations-card1 mx-5"> 
                     <p className='para1-card1-prestations' style={{fontSize:"1.2rem"}}> 
                     Certificat de cession <br/>irrévocable (AVI)  
                      </p>  
                      <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
                      S'abonner
                      </a>
        
                     </Col>

                     <Col xl={3} lg={3} md={2} sm={12} xs={12} className="prestations-card2 mx-4"> 
        <p className='para1-card1-prestations' style={{fontSize:"1.2rem"}}> 
        Assurance tous risques
         </p>
         <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
         S'abonner
         </a>
        </Col>

        <Col  xl={3} lg={3} md={2} sm={12} xs={12} className="prestations-card3 mx-5"> 
        <p className='para1-card1-prestations' style={{fontSize:"1.2rem"}}> 
       Recherche de <br/>logement
            
         </p>
         <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
         S'abonner
         </a>
        </Col>

       
    </Row>
    <Row className="mt-4" style={{height:"28%"}}> 
    <Col  xl={3} lg={3} md={3} sm={12} xs={12} className="prestations-card4 mx-5"> 
        <p className='para1-card1-prestations' style={{fontSize:"1.2rem"}}> 
        Billetterie <br/>
        Services
         </p>
         <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
         S'abonner
         </a>
        </Col>
      
    </Row>
                    
       
            
        </Col>
        </Row>


</Container>




















// return  <Container fluid style={{
//     background: "linear-gradient(90deg, #DEEAF0 0%, #F9E3E6 100%)",
//     height: "180vh" ,
//     width:"100vw"
// }}>
//     <Row style={{height:"180vh"}}>
//     <Col style={{height:"150vh",marginTop:"3%"}} xl={3} lg={3} md={3} sm={3} xs={3}>
//     <Sidebar/>
//     </Col>

// <Col  style={{height:"150vh"}} xl={9} lg={9} md={9} sm={9} xs={9}>
//     <Row  xl={9} lg={9} md={8} sm={8} xs={8} style={{marginTop:"3%"}}>
//     <Navbar/>
//     </Row>
//     <Row className="mt-5" > 
//         <Col  xl={4} lg={4} md={4} sm={12} xs={12} className="prestations-card1"> 
//         <p className='para1-card1-prestations'> 
//         Certificat de cession <br/>irrévocable (AVI)  
//          </p>  
//          <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
//          S'abonner
//          </a>
        
//         </Col>

//         <Col xl={4} lg={4} md={4} sm={12} xs={12} className="prestations-card2"> 
//         <p className='para1-card1-prestations'> 
//         Assurance tous risques
//          </p>
//          <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
//          S'abonner
//          </a>
//         </Col>

//         <Col  xl={4} lg={4} md={4} sm={12} xs={12} className="prestations-card3"> 
//         <p className='para1-card1-prestations'> 
//        Recherche de <br/>logement
            
//          </p>
//          <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
//          S'abonner
//          </a>
//         </Col>

       
//     </Row>
//     <Row className="mt-4"> 
//     <Col  xl={4} lg={4} md={4} sm={12} xs={12} className="prestations-card4"> 
//         <p className='para1-card1-prestations'> 
//         Billetterie <br/>
//         Services
//          </p>
//          <a style={{float:"right"}} href="#" className="prestations-card1-lien"> 
//          S'abonner
//          </a>
//         </Col>
      
//     </Row>
// </Col>
//     </Row>

    

// </Container>
 }