import { useId } from "react";
import DropDownArrow from '../assets/dropdown-arrow.svg';

export default function DropDownField({ expanded, label, toggleDropDown, multiSelect, selectedValue, selectedValues}) {
    const dropdownInputId = useId();
    return (
        <>
            <label className={`dropdown-label ${expanded && "expanded"}`} htmlFor={dropdownInputId}>
                {label}
            </label>
            <div onClick={toggleDropDown} className={`dropdown-field ${expanded && "expanded"}`}>
                <input
                    type="text"
                    className="dropdown-selected"
                    value={multiSelect ? selectedValues.join(', ') : selectedValue}
                    id={dropdownInputId}
                    readOnly={true}
                />
                <img src={DropDownArrow} alt="Dropdown Arrow" className={`dropdown-arrow ${expanded && 'rotated'}`} />
            </div>
        </>

    );
}