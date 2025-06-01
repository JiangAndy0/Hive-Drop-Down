export default function DropDownOptions({multiSelect, options, selectedValue, selectedValues, handleSingleSelect, handleMultiSelect}) {
    let optionsElement;
    if (multiSelect) {
        optionsElement = options.map((option, i) => {
            return (
                <div
                    key={i}
                    className={`dropdown-option ${selectedValues.some(value => value === option) && "checked"}`}
                    onClick={() => handleMultiSelect(option)}
                >
                    <input
                        type="checkbox"
                        checked={selectedValues.some(value => value === option)}
                        value={option}
                        readOnly={true}
                    />
                    <label>
                        {option}
                    </label>
                </div>
            )
        })
    } else {
        optionsElement = options.map((option, i) => {
            return (
                <div
                    value={option}
                    key={i}
                    onClick={() => handleSingleSelect(option)}
                    className={`dropdown-option ${(selectedValue === option) && "hidden"}`}
                >
                    {option}
                </div>)
        })
    }

    return (
        <div className="dropdown-options">
            {optionsElement}
        </div>
    );
}