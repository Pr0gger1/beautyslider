import {useEffect, useState} from "react";
import style from "./slider.module.css";

const Slider = ({ checked = false, toggleState, variant = undefined}) => {
    const [active, isActive] = useState(checked);
    const variants = {
        duo: style.duo__color
    }
    let custom_classes = variants[variant];

    useEffect(() => {
        if (toggleState) toggleState(active);
    }, [active, toggleState]);

    return (
        <div className={style.slider}>
            <input type="checkbox" checked={active} onChange={e => isActive(e.target.checked)}/>
            <div className={`${style.flag} ${custom_classes}`} onClick={() => isActive(!active)}></div>
        </div>

    )
}
export default Slider;