import { useState } from 'react';
import heart from '../assets/Heart.png'
import icon from '../assets/Icon-white.png'
import cross from '../assets/Union.png'
import { useDispatch, useSelector } from 'react-redux';
import { addElement } from '../features/SavedData/SavedDataSlice';

export const Conversor = (props) => {

    const dispatch = useDispatch();

    const savedData = useSelector(state => state.savedData);
    console.log(savedData)

    const [mainUnit, setMainUnit] = useState("km");
    const [convertedUnit, setConvertedUnit] = useState("miles");
    const [conversion, setConversion] = useState(0.621371);
    const [mainValue, setMainValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState(mainValue * conversion);
    //const [savedData, setSavedData] = useState([]);

    const selectChangeHandler = (event) => {
        let inputValue = document.getElementsByClassName('input-field')[0].value;
        
        switch (event.target.value) {
            case "km-miles":
                setMainUnit("km");
                setConvertedUnit("miles");
                setConversion(0.621371);
                setMainValue(inputValue);
                setConvertedValue(inputValue * conversion);
                break;  
            case "miles-km":
                setMainUnit("miles");
                setConvertedUnit("km");
                setConversion(1.60934);
                setMainValue(inputValue);
                setConvertedValue(inputValue * conversion); 
                break;
            case "feet-m":
                setMainUnit("feet");
                setConvertedUnit("m");
                setConversion(0.3048);
                setMainValue(inputValue);
                setConvertedValue(inputValue * conversion); 
                break;
            case "m-feet":
                setMainUnit("m");
                setConvertedUnit("feet");
                setConversion(3.28084);
                setMainValue(inputValue);
                setConvertedValue(inputValue * conversion);
                break;
            case "cm-inches":
                setMainUnit("cm");
                setConvertedUnit("inches");
                setConversion(0.393701);
                setMainValue(inputValue);
                setConvertedValue(inputValue * conversion); 
                break;
            case "inches-cm":
                setMainUnit("inches");
                setConvertedUnit("cm");
                setConversion(2.54);
                setMainValue(inputValue);
                setConvertedValue(inputValue * conversion); 
                break;
          }
    };
    

    const inputChangeHandler = (event) => {
        setMainValue(event.target.value);
        setConvertedValue(mainValue * conversion);
    };

    const saveClickHandler = (event) => {
        let dataObject = {
            mainValue: mainValue,
            mainUnit: mainUnit,
            convertedValue: convertedValue,
            convertedUnit: convertedUnit
        };
        dispatch(addElement(dataObject));
    };


    const dataToElements = (data) => {
        let elementsToRender = [];
        data.forEach(element => {
            elementsToRender.push(
                <>
                <div className='data-cell'>
                    <p id="data">{`${element.mainValue} ${element.mainUnit} → ${element.convertedValue} ${element.convertedUnit}`}</p>
                    <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                </div>
                </>
            );
        });
        return elementsToRender;
    };

    return (
        <div className="conversor-container">
            <div className="conversor">
                <div className="title-row">
                    <h4>convert</h4>
                </div>
                <div className="calc-row">
                    <div className='selector-container'>
                        <select onChange={selectChangeHandler} className='selector' name="selector" id="selector">
                            <option value="km-miles">km → miles</option>
                            <option value="miles-km">miles → km</option>
                            <option value="feet-m">feet → m</option>
                            <option value="m-feet">m → feet</option>
                            <option value="cm-inches">cm → inches</option>
                            <option value="inches-cm">inches → cm</option>
                        </select>
                        <img src={icon} alt="Conversor"/>
                    </div>
                    
                    <div className="input">
                        <input onChange={inputChangeHandler} className='input-field' name="main-value"/>
                        <p>{mainUnit}</p>
                    </div> 
                </div>
                <div className="final-row">
                    <button onClick={saveClickHandler} className='save-btn'><img src={heart} alt="Save"/></button>
                    <div className='result'>
                        <h4>{convertedValue}</h4>
                        <p>{convertedUnit}</p>
                    </div>
                </div>
            </div>

            <div className="data-saved">
                <h4>saved</h4>
                <div className='data-container'>
                    {dataToElements(savedData)}
                </div>
            </div>
        </div>
    );
}