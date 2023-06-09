import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from './CategoryCard';
import Choose from '../assets/imgs/choose.svg';
import GridIcon from './svgs/GridIcon';
import { HiOutlineArrowUturnDown } from "react-icons/hi2";
import CategoryGroup from './CategoryGroup';
import Categories from './Categories';

const Section3 = () => {
  const [viewCategories, setViewCategories] = useState(false);

  return (
    <section className='sec-3 mb-5'>
      {
        (viewCategories)
        ? <Container className='box'>
          <button 
          type='button' 
          onClick={()=>setViewCategories(!viewCategories)}
          className='d-none d-md-flex btn-view mb-3 ms-auto me-4'>
            <img src={Choose} alt="Choose"/>
            <GridIcon/>
          </button>
          <Row xs={2} md={3} xl={4} className='g-3 g-sm-4'>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
          </Row>
          <button type='button' className='main-color mx-auto mt-4'>
            <span>показать все</span>
            <HiOutlineArrowUturnDown className='fs-15 ms-3 main-color rotateY-180'/>
          </button>
        </Container>
        : <Container>
          <div className="sticky-box mb-3 mb-sm-4 mb-md-5">
            <Categories className={'w-90'}/>
            <button 
              type='button' 
              onClick={()=>setViewCategories(!viewCategories)}
              className='btn-view me-4'>
                <img src={Choose} alt="Choose"/>
                <GridIcon/>
            </button>
          </div>
          
          <div className="categories-box">
            <CategoryGroup/>
            <CategoryGroup/>
          </div>
        </Container>
      }
        
      </section>
  );
};

export default Section3;