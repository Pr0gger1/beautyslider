import React, {useState} from 'react';
import './slider.css';
// const styles = require('./slider.css');
// import './slider.css';

interface SliderProps {
    checked?: boolean,
    variant?: string
}
const Slider = ({ checked = false, variant = '' }: SliderProps) => {
  const [active, isActive] = useState<boolean>(checked);
  let variants: { [key: string]: string } = {};
    variants = {
    duo: "duo_color"
  };
  const customClasses = variants[variant];

  // useEffect(() => {
  //   if (toggleState) toggleState(active);
  // }, [active, toggleState]);

  return (
    <div className='slider'>
      <input
        type='checkbox'
        checked={active}
        onChange={(e) => isActive(e.target.checked)}
      />
      <div
        className={`flag ${customClasses}`}
        onClick={() => isActive(!active)}
      />
    </div>
  );
};

export default Slider;