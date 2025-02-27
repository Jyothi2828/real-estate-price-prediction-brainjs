// formValidation.js

export const validatePropertyInput = (propertyInput) => {
    const errors = {};

    if (propertyInput.Area <= 100) {
        errors.Area = "Whoa! That’s a bit too small for a house. Please enter a larger area.";
    } else if (propertyInput.Area > 10000) {
        errors.Area = "That's a bit too massive for a house! Please enter a more reasonable area.";
    }
    
    if (propertyInput.Bedrooms === 0) {
        errors.Bedrooms = "No bedrooms? Please enter at least one bedroom. Are you looking for a studio apartment?";
    } else if (propertyInput.Bedrooms < 0) {
        errors.Bedrooms = "Negative bedrooms don't exist! Please enter a positive number of bedrooms.";
    } else if (propertyInput.Bedrooms > 8) {
        errors.Bedrooms = "Wow, that's a lot of bedrooms! Please enter 8 or fewer bedrooms.";
    }

    if (propertyInput.Bathrooms === 0) {
        errors.Bathrooms = "A house without bathrooms? Please enter at least one bathroom. Every home needs a bathroom!";
    } else if (propertyInput.Bathrooms < 0) {
        errors.Bathrooms = "Negative bathrooms aren't a thing! Please enter a positive number of bathrooms.";
    } else if (propertyInput.Bathrooms > 10) {
        errors.Bathrooms = "That's a lot of bathrooms! Please enter 10 or fewer bathrooms.";
    }

    if (propertyInput["Age of Property"] < 0) {
        errors["Age of Property"] = "A house from the future? Please enter a positive number for the property's age.";
    } else if (propertyInput["Age of Property"] > 100) {
        errors["Age of Property"] = "Wow, that's ancient! Are you searching for a historic home? Please enter a lower age for more typical properties.";
    }

    if (!propertyInput.Location || propertyInput.Location.trim() === '') {
        errors.Location = "We need to know where it is! Please select a location for the property.";
    }

    return errors;
};
