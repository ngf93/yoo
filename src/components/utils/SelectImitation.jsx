import React, {useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { HiChevronDown } from "react-icons/hi2";

const SelectImitation = (props) => {
  const optionsArr = props.optionsArr;

  const [options, setOptions] = useState(optionsArr);
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef();
  
  const handleChange = (val) => {
    setOptions(options.map(obj => {
      if (obj.value === val) {
        return {...obj, defaultChecked: true};
      } else {
        return {...obj, defaultChecked: false};
      }
   }));
  }

  useOnClickOutside(ref, () => setShowOptions(false));

  return (
    <div ref={ref} className='select'>
      <button type='button' onClick={()=>setShowOptions(!showOptions)} className={'select-button '+props.btnClass}>
        <div className="select-button-value">
          {
            (options.find(item => item.defaultChecked === true))
            ? <>
              <img src={options.find(item => item.defaultChecked === true).icon} alt="" className={props.imgClass}/>
              <span>{options.find(item => item.defaultChecked === true).label}</span>
            </>
            : <span className='gray'>Выберите</span>
          }
        </div>
        <HiChevronDown className='select-button-chevron'/>
      </button>
      <ul className={(showOptions) ? "select-options" : "select-options d-none"}>
        {
          options.map( obj => {
            return <li key={obj.value}>
              <label className={(obj.defaultChecked)?'active':''}>
                <input 
                type="radio" 
                name='receiving' 
                defaultChecked={obj.defaultChecked} 
                value={obj.value} 
                onChange={() => handleChange(obj.value)}
                hidden />
                <img src={obj.icon} alt="" className={props.imgClass}/>
                <div>{obj.label}</div>
              </label>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default SelectImitation;