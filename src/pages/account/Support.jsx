import React from 'react';
import AccountTitleReturn from '../../components/AccountTitleReturn';
import SelectImitation from '../../components/utils/SelectImitation';
import LiRequest from '../../components/LiRequest';
import MyMessage from '../../components/chat/MyMessage';
import ManagerMessage from '../../components/chat/ManagerMessage';

const Support = () => {
  return (
    <form className='support'>
      <div className="support-top">
        <div className="support-top-icon me-4">
          <img src="imgs/avatar.jpg" alt="avatar" />
          <div className="indicator active"></div>
        </div>
        <h5 className='mb-0'>Чат с поддержкой</h5>
        <span className='fs-15 mx-4'>•</span>
        <h5 className='mb-0 dark-gray'>Обращение № 26574</h5>
      </div>
      <div className="support-chat">
        <div className="chat">
          <MyMessage time={'12:37'} text={'Здравствуйте! Все приехало остывшее, заказ добирался до меня 3 часа! Карл, 3 часа! Вы бы хоть предупредили, что задерживаетесь.'}/>
          <ManagerMessage time={'12:37'} text={'Здравствуйте! Все приехало остывшее, заказ добирался до меня 3 часа! Карл, 3 часа! Вы бы хоть предупредили, что задерживаетесь.'}/>
        </div>
      </div>
      <div className="support-form">
        <input type="text" placeholder='Новое сообщение...'/>
        <button type='submit' className='btn-1 ms-3'>Отправить</button>
      </div>
      <div className="support-choose">
        <SelectImitation 
          btnClass={'rounded-3'}
          imgClass={'round'}
          optionsArr={[
            {
              value: 1,
              label: 'По дате',
              defaultChecked: true,
            },
            {
              value: 2,
              label: 'По порядку',
              defaultChecked: false,
            }
          ]}
        />

        <ul className='my-4'>
          <LiRequest/>
          <LiRequest/>
          <LiRequest/>
          <LiRequest/>
        </ul>
      </div>
    </form>
  );
};

export default Support;