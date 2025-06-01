import { useState, useEffect, useRef } from 'react';
import DropDownField from './DropDownField';
import DropDownOptions from './DropDownOptions';

export default function DropDown({
    multiSelect = false,
    label,
    options,
    selectedValue,
    setSelectedValue,
    selectedValues = [],
    setSelectedValues
}) 
{
    const [expanded, setExpanded] = useState(false);

    const dropDownRef = useRef(null);

    useEffect(() => {
        const closeOpenMenus = (e) => {
            if (expanded && !dropDownRef.current?.contains(e.target)) {
            setExpanded(false);
            }
        }
        document.addEventListener('mousedown', closeOpenMenus)
    }, [expanded])

    const toggleDropDown = () => {
        setExpanded(prevExpanded => !prevExpanded)
    }

    const handleSingleSelect = (option) => {
        setSelectedValue(option);
        setExpanded(false);
    }

    const handleMultiSelect = (option) => {
        if (selectedValues.some(value => value === option)) {
            setSelectedValues(prevValues => prevValues.filter(value => value !== option))
        } else {
            setSelectedValues(prevValues => [...prevValues, option])
        }
    }

    return (
        <div ref={dropDownRef} className="dropdown">
            <DropDownField 
                expanded={expanded} 
                label={label} 
                toggleDropDown={toggleDropDown}
                multiSelect={multiSelect}
                selectedValue={selectedValue}
                selectedValues={selectedValues}
            />
            {expanded && (
                <DropDownOptions 
                    multiSelect={multiSelect}
                    options={options}
                    label={label}
                    selectedValue={selectedValue}
                    selectedValues={selectedValues}
                    handleMultiSelect={handleMultiSelect}
                    handleSingleSelect={handleSingleSelect}
                />
            )}
        </div>

    )
}