import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import "./style.css"
import Sidebar from './Sidebar'
import notif from "../images/notifi.png"
import profil from "../images/profil.png"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Col, Container, Row } from 'react-bootstrap'

// import "../Dashboard_Admin/TableauBoard.css"
function Index() {
  const [navHeading, setNavHeading] = useState('Tableau de bord');
  const updateHeading = (newHeading) => {
    setNavHeading(newHeading);
  };
  return (
    <>
      {/* <ToastContainer hideProgressBar={true} /> */}
      <div className='main-wrap'>
        <div className='container-fluid side-head'>
          <div className='container-wrap'>
            <Row>
            <Sidebar updateHeading={updateHeading} />
            <div className='side-content'>
              <section className='header'>
                <h3 className='titleDashH'>{navHeading}</h3>
                <div className='other-navigation'>
                  
                  <Row>
                    <div className="profileDiv">
                      <Col>
                      
                      </Col>
                      <Col>
                        <div className="profileI d-inline-flex p-3">
                          
                          <div className="mx-3 mt-1">
                          <img
                              src={notif}
                              alt="ProfileI"
                              className="profile-imgI"
                            /> 
                           <img
                              src={profil}
                              alt="ProfileI"
                              className="profile-imgI"
                            /> 
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </div>
              </section>
              <Outlet />
            </div>
            </Row>
          </div>
        </div>
      </div>


    </>
  )
}

export default Index