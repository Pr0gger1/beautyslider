// import React, { useEffect, useState } from 'react';
// import style from './slider.module.css';
//
// const Slider = ({ checked = false, toggleState, variant = undefined }) => {
//   const [active, isActive] = useState(checked);
//   const variants = {
//     duo: style.duo__color
//   };
//   const customClasses = variants[variant];
//
//   useEffect(() => {
//     if (toggleState) toggleState(active);
//   }, [active, toggleState]);
//
//   return (
//     <div className={style.slider}>
//       <input
//         type='checkbox'
//         checked={active}
//         onChange={(e) => isActive(e.target.checked)}
//       />
//       <div
//         className={`${style.flag} ${customClasses}`}
//         onClick={() => isActive(!active)}
//       />
//     </div>
//   );
// };
//
// export default Slider;
