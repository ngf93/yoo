import React from 'react';
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountMenu from '../pages/account/AccountMenu';

const AccountLayout = ({isMobile}) => {
  return (
    <main className='account mb-5'>
      <Container>
        <h1>Личный кабинет</h1>
        {
          (isMobile)
          ? <Outlet/>
          : <div>
            <Row className="account-top">
              <Col lg={3}>
                <div className="box w-100 d-flex align-items-center">
                  <div className="icon">
                    <span>A</span>
                  </div>
                  <div>
                    <h6>Алексей</h6>
                    <p className='mb-2'><a href="tel:+79198563658">+7 919 856-36-58</a></p>
                    <button type='button' className='main-color'>Изменить</button>
                  </div>
                </div>
              </Col>
              <Col lg={2}>
                <div className="box w-100 h-100 d-flex flex-column justify-content-between text-center">
                  <p className='fs-09 fw-6'>Вы можете потратить</p>
                  <p className='main-color'>
                    <span className='fs-18'>102</span>&nbsp;<span className='fw-6 fs-11'>бонуса</span>
                  </p>
                </div>
              </Col>
              <Col lg={7}>
                <Row className='h-100 w-100' md={2}>
                  <Col>
                  <div className="gradient-block"></div>
                  </Col>
                  <Col>
                  <div className="gradient-block"></div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="row">
              <div className="col-4 col-xl-3">
                <AccountMenu/>
              </div>
              <div className="col-8 col-xl-9"><Outlet/></div>
            </div>
          </div>
        }
      </Container>
    </main>
  );
};

export default AccountLayout;