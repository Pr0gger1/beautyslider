import React, {useState} from 'react';
import './slider.css';

interface SliderProps {
    checked?: boolean,
    variant?: string
}
const Slider = ({ checked = false, variant = '' }: SliderProps) => {
  const [active, isActive] = useState<boolean>(checked);
  const styles = variant?.split(' ');
  let variants: { [key: string]: string } = {};
    variants = {
    duo: 'duo__theme',
    dark: 'dark__theme'
  };
    let properties: {[key: string]: string} = {
        caption: "caption"
    }
  // const customClasses = variants[variant];
    const theme = styles.filter(a => a in variants).map(a => variants[a]);
    const property = styles.filter(a => a in properties).map(a => properties[a]);
    console.log(theme)
    // const customClasses = `${theme} ${property}`;
    // console.log(customClasses)

    // console.log(customClasses);
  // useEffect(() => {
  //   if (toggleState) toggleState(active);
  // }, [active, toggleState]);

  return (
    <div className={`slider${property.length ? ' ' + property : ''}`}>
        <span id='on__sign'>ON</span>
        <span id='off__sign'>OFF</span>
      <input
        type='checkbox'
        checked={active}
        onChange={e => isActive(e.target.checked)}
      />
      <div
        className={`flag${theme.length ? ' ' + theme : ''}`}
        onClick={() => isActive(!active)}
      />
    </div>
  );
};

export default Slider;