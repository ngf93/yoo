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
        <img src="imgs/Rectangle.png" alt="Rectangle" className='img-fluid mb-4' />
      </section>
      <section className='sec-5 container mb-5'>
        <Categories className={'mb-5'}/>

        <div className='filter-line'>
          <h4 className='title'>Роллы</h4>
          <ul className='subcategories-list'>
            <li>
              <button type='button' className='btn-90'>Фирменные</button>
            </li>
            <li>
              <button type='button' className='btn-90 active'>Запечённые</button>
            </li>
            <li>
              <button type='button' className='btn-90'>Классические</button>
            </li>
            <li>
              <button type='button' className='btn-90'>В темпуре</button>
            </li>
          </ul>
          <button type='button' className='btn-search btn-90 rounded-circle p-2'>
            <HiOutlineMagnifyingGlass className='dark-gray'/>
          </button>
          <button type='button' className='btn-filter btn-10 rounded-circle p-2'>
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
          <button type='button' className='btn-subcategories btn-10 rounded-circle p-2'>
            <HiOutlineBars3/>
          </button>
        </div>
        <ul className='list-unstyled row row-cols-3 row-cols-lg-4 gx-4 gx-xl-5 gy-5'>
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

        <div className='d-flex align-items-center justify-content-between mb-5'>
          <div className="d-flex">
            <h4 className='mb-0 me-4'>Пицца</h4>
            <ul className='list-unstyled d-flex'>
              <li className='me-3'>
                <button type='button' className='btn-90'>Мясная</button>
              </li>
              <li className='me-3'>
                <button type='button' className='btn-90 active'>Острая</button>
              </li>
              <li className='me-3'>
                <button type='button' className='btn-90'>С овощами</button>
              </li>
              <li className='me-3'>
                <button type='button' className='btn-90'>Вегетерианская</button>
              </li>
            </ul>
            <button type='button' className='btn-90 rounded-circle p-2'>
              <HiOutlineMagnifyingGlass className='fs-15 dark-gray'/>
            </button>
          </div>

          <div className='d-flex'>
            <button type='button' className='btn-10 rounded-circle p-2 me-3'>
              <HiOutlineAdjustmentsHorizontal className='fs-15'/>
            </button>
            <SelectImitation 
              btnClass={''}
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
          </div>
        </div>
        <ul className='list-unstyled row row-cols-4 g-5'>
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