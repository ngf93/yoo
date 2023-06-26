import React from 'react';
import AccountTitleReturn from '../../components/AccountTitleReturn';

const Support = () => {
  return (
    <section className='support'>
      <div className="top">
        <AccountTitleReturn link={'/account'} title={'Чат с поддержкой'} className={'mb-0'}/>
        <span>•</span>
        <h5 className='dark-gray'>Обращение № 26574</h5>
      </div>
    </section>
  );
};

export default Support;