import React, { useState, useEffect } from 'react';
import "./CountrySelect.css"
// Import the JSON file
import countriesData from './countries.json'; 

const CustomCountrySelect = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  
  useEffect(() => {
    const countryData = countriesData.sort((a, b) => {
     
      return parseInt(a.dialCode.replace("+", "")) - parseInt(b.dialCode.replace("+", ""));
    });
    
    setCountries(countryData);
    setSelectedCountry(countryData[0]); 
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    props.codeCountry(country.dialCode)
    setIsOpen(false);
  };

  return (
    <div className='flagSelect' >
      <div 
        style={{
        
          display: 'flex',
          alignItems: 'center',
          justifyContent:"center",
          cursor: 'pointer'
        }}
        onClick={toggleDropdown}
      >
        {selectedCountry && (
          <>
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              
              className='imgSelect'
            />
            <span className='codeSelect'>{selectedCountry.dialCode}</span>
          </>
        )}
        {/* Arrow Icon */}
        <svg width="13" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M2.625 4.81348L6 8.18848L9.375 4.81348" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" className='flecheFlag'/>
</svg>
      </div>

      {isOpen && (
        <div className='boxCountry'>
          {countries.map((country) => (
            <div
              key={country.code}
              style={{
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
              onClick={() => handleSelect(country)}
            >
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: '25px', marginRight: '10px' }}
              />
              <span>{country.dialCode}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomCountrySelect;
