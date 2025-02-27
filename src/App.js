import React from 'react';
import '../src/styles/App.css'; // Update the path to the CSS file
import PropertyInputForm from './components/PropertyInputForm';
import useRealEstatePrediction from './hooks/useRealEstatePrediction'; // Import the custom hook
import PredictedPrice from './components/PriceComparisonChart';
import FeedbackForm from './components/FeedbackForm'; // Ensure FeedbackForm is imported


const App = () => {
    const {
        predictedPrice,
        actualPrice,
        propertyInput,
        handleInputChange,
        handlePredictPrice,
    } = useRealEstatePrediction();

    return (
        <div className="App" style={{ display: 'flex' }}>

            <div style={{ flex: 1, marginRight: '2in' }}>
            <h1>Real Estate Price Predictor</h1>
            <PropertyInputForm
                predictedPrice={predictedPrice}
                propertyInput={propertyInput}
                handleInputChange={handleInputChange}
                handlePredictPrice={handlePredictPrice}
            />
            </div>
            <div style={{ flex: 1 }}>
                <PredictedPrice
                    predictedPrice={predictedPrice}
                    actualPrice={actualPrice}
                />
                <div style={{ marginTop: '0in' }}>
                <FeedbackForm 
    predictedPrice={predictedPrice} 
    actualPrice={actualPrice} 
    propertyInput={propertyInput} 
/>

                </div>
                
            </div>
        </div>
    );
};

export default App;
