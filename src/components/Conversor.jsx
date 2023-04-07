import heart from '../assets/Heart.png'
import icon from '../assets/Icon-white.png'
import cross from '../assets/Union.png'

export const Conversor = (props) => {
    return (
        <div className="conversor-container">
            <div className="conversor">
                <div className="title-row">
                    <h4>convert</h4>
                </div>
                <div className="calc-row">
                    <div className='selector-container'>
                        <select className='selector' name="selector" id="selector"></select>
                        <img src={icon} alt="Conversor"/>
                    </div>
                    
                    <div className="input">
                        <input className='input-field' name="to-convert"/>
                        <p>km</p>
                    </div> 
                </div>
                <div className="final-row">
                    <button className='save-btn'><img src={heart} alt="Save"/></button>
                    <div className='result'>
                        <h4>60.14</h4>
                        <p>miles</p>
                    </div>
                </div>
            </div>

            <div className="data-saved">
                <h4>saved</h4>
                <div className='data-container'>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                    <div className='data-cell'>
                        <p>100 miles ==D 160km</p>
                        <button className='delete-btn'><img src={cross} alt="Delete icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}