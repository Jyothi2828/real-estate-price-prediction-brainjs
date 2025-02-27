import React, { useState } from 'react';
import '../styles/formStyles.css';
import { validatePropertyInput } from '../utils/formValidation';  // Import the validation function

const PropertyInputForm = ({ propertyInput, handleInputChange, handlePredictPrice, predictedPrice, actualPrice }) => {
    const [errors, setErrors] = useState({}); // Declare errors state once

    const handleSubmit = (e) => {
        console.log('Current propertyInput:', propertyInput); // Debugging log
        e.preventDefault();
        
        const newErrors = validatePropertyInput(propertyInput);  // Use the validation function

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            handlePredictPrice();
        } else {
            console.log("Form has errors, not submitting");  // Add this line for logging errors
        }
    };

    console.log("Predicted Price:", predictedPrice);  // Debugging log
    console.log("Actual Price:", actualPrice);  // Debugging log

    return (
        <div className="form-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <form className="form" onSubmit={handleSubmit}>
                {Object.keys(errors).length === 0 && actualPrice && (
                    <div className="actual-price">
                        <h3>Actual Price: ${actualPrice}</h3>
                    </div>
                )}

                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label>Area (sqft) :</label>
                    <input 
                        type="number" 
                        name="Area" 
                        value={propertyInput.Area || ''} 
                        onChange={handleInputChange} 
                        required 
                    />
                    {errors.Area && <div className="error">{errors.Area}</div>}
                </div>
                <div className="input-group">
                    <label>Bedrooms :</label>
                    <input 
                        type="number" 
                        name="Bedrooms" 
                        value={propertyInput.Bedrooms || ''} 
                        onChange={handleInputChange} 
                        required 
                    />
                    {errors.Bedrooms && <div className="error">{errors.Bedrooms}</div>}
                </div>
                <div className="input-group">
                    <label>Bathrooms :</label>
                    <input 
                        type="number" 
                        name="Bathrooms" 
                        value={propertyInput.Bathrooms || ''} 
                        onChange={handleInputChange} 
                        required 
                    />
                    {errors.Bathrooms && <div className="error">{errors.Bathrooms}</div>}
                </div>
                <div className="input-group">
                    <label>Location :</label>
                    <div className="radio-input">
                        {['Downtown', 'Suburban', 'Rural'].map((location) => (
                            <React.Fragment key={location}>
                                <input 
                                    type="radio" 
                                    id={location} 
                                    name="Location" 
                                    value={location} 
                                    checked={propertyInput.Location === location}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor={location}>{location}</label>
                            </React.Fragment>
                        ))}
                        <span className="selection"></span>
                    </div>
                </div>
                <div className="input-group">
                    <label>Age of Property :</label>
                    <input 
                        type="number" 
                        name="Age of Property" 
                        value={propertyInput["Age of Property"] || ''} 
                        onChange={handleInputChange} 
                        required 
                    />
                    {errors['Age of Property'] && <div className="error">{errors['Age of Property']}</div>}
                </div>
                <button className="btn-12" type="submit" style={{ backgroundColor: '#6482AD', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    <span>Predict Price</span>
                </button>
            </form>

            {predictedPrice !== null && predictedPrice !== undefined && ( 
                <div className="form-container-predicted-price">
                    <h3 className="title" style={{ color: '#333', fontSize: '1.5em' }}>
                        Predicted Price: ${predictedPrice.toLocaleString()}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default PropertyInputForm;
