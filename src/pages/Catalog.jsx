import React from 'react';
import SelectImitation from '../components/utils/SelectImitation';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import Notice from '../components/Notice';

import { HiOutlineAdjustmentsHorizontal, HiOutlineMagnifyingGlass, HiOutlineBars3 } from "react-icons/hi2";


const Catalog = () => {
  return (
    <main>
      <section className='container'>
        <Notice/>
        <img src="imgs/Rectangle.png" alt="Rectangle" className='img-fluid mb-3 mb-sm-4' />
      </section>
      <section className='sec-5 container mb-5'>
        <Categories className={'mb-3 mb-sm-4 mb-md-5'}/>

        <div className='filter-line'>
          <h4 className='title'>Роллы</h4>
          <ul className='subcategories-list'>
            <li>
              <button type='button' className='btn-90 rounded-pill'>Фирменные</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill active'>Запечённые</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill'>Классические</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill'>В темпуре</button>
            </li>
          </ul>
          <button type='button' className='btn-search btn-90 rounded-circle'>
            <HiOutlineMagnifyingGlass/>
          </button>
          <button type='button' className='btn-filter btn-10 rounded-circle'>
            <HiOutlineAdjustmentsHorizontal/>
          </button>
          <SelectImitation 
            btnClass={'rounded-pill'}
            imgClass={'round'}
            optionsArr={[
              {
                value: 1,
                label: 'По увеличению',
                defaultChecked: true,
              },
              {
                value: 2,
                label: 'По уменьшению',
                defaultChecked: false,
              }
            ]}
          />
          <button type='button' className='btn-subcategories btn-10 rounded-circle'>
            <HiOutlineBars3/>
          </button>
        </div>
        <ul className='list-unstyled row row-cols-2 row-cols-sm-3 row-cols-lg-4 gx-4 gx-xl-5 gy-5'>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
        </ul>

        <hr className='divider'/>

        <div className='filter-line'>
          <h4 className='title'>Роллы</h4>
          <ul className='subcategories-list'>
            <li>
              <button type='button' className='btn-90 rounded-pill'>Фирменные</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill active'>Запечённые</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill'>Классические</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill'>В темпуре</button>
            </li>
          </ul>
          <button type='button' className='btn-search btn-90 rounded-circle'>
            <HiOutlineMagnifyingGlass/>
          </button>
          <button type='button' className='btn-filter btn-10 rounded-circle'>
            <HiOutlineAdjustmentsHorizontal/>
          </button>
          <SelectImitation 
            btnClass={'rounded-pill'}
            imgClass={'round'}
            optionsArr={[
              {
                value: 1,
                label: 'По увеличению',
                defaultChecked: true,
              },
              {
                value: 2,
                label: 'По уменьшению',
                defaultChecked: false,
              }
            ]}
          />
          <button type='button' className='btn-subcategories btn-10 rounded-circle'>
            <HiOutlineBars3/>
          </button>
        </div>
        <ul className='list-unstyled row row-cols-2 row-cols-sm-3 row-cols-lg-4 gx-4 gx-xl-5 gy-5'>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Catalog;