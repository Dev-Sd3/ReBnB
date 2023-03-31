import React from 'react';
import listings from '../listings_cleaned.json'
import { Link, useParams } from 'react-router-dom'
import houseIcon from '../assets/house-icon.png'
import '../index.css'

/*
This is the PropertCard component where a specific property was selected 
from the listings and is now displayed in its own route, the routes
link is the listing's ID as present in the JSON file
*/

// Simple rating function to turn the grade / 100 to a 5 star based rating
const Rating = ({ grade }) => {
  const rating = Math.round((grade / 100) * 5);
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? '★' : '☆'
  );
  return <div style={{ color: '#FF5A60', fontSize: '1.3em', marginTop: '10px' }}>{stars}</div>;
};


const MainStyle = {
  marginTop: '20px',
  boxShadow: '0 0 20px 2px #e6e1e1',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '80%',
  height: '600px',
  borderRadius: '15px'
};

const ViewImageStyle = {
  height: '150px',
  width: '260px',
  margin: '15px',
  boxShadow: '0 0 5px 2.5px grey',
  borderRadius: '5px',
  objectFit: 'cover',
};

const MainImageStyle = {
  height: '300px',
  width: '550px',
  marginTop: '30px',
  marginLeft: '15px',
  marginBottom: '15px',
  boxShadow: '0 0 5px 1.5px grey',
  borderRadius: '5px',
  objectFit: 'cover',
};

const TextDiv = {
  marginTop: '10px',
  padding: '10px',
}

const ButtonDivStyle = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
  marginTop: '20px',
};

const HomeButtonStyle =
{
  width: '70px',
  height: '70px',
  backgroundColor: '#FF5A60',
  justifyContent: 'center',
  display: 'flex',
  borderRadius: '50%'
}

const PropertyCard = () => {
  // Using the handle from the react route to locate listing from the json file
  const { handle } = useParams()
  const numberforcard = handle - 1; // -1 since the id's start from 1 not 0

  // Destructuring the specific listing into their different parameters to avoid redundancy
  const
    {
      picture_url,
      name,
      review_scores_rating,
      street,
      zipcode,
      summary,
      price,
      bedrooms,
      bathrooms,
      guests_included,
      extra_people
    } = listings.at(numberforcard)

  const handleClick = () => {
    alert('This project has no backend! we cannot book right now')
  }

  return (
    <div>
      <div style={MainStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={picture_url} alt={name} crossOrigin="anonymous" style={MainImageStyle}></img>
            <div style={{ display: 'flex' }}>

              <img src={listings.at((numberforcard + 1) % 56).picture_url} alt={name} crossOrigin="anonymous" style={ViewImageStyle}></img>
              <img src={listings.at((numberforcard + 2) % 56).picture_url} alt={name} crossOrigin="anonymous" style={ViewImageStyle}></img>
            </div>
          </div>
          <div style={TextDiv}>
            <h1>{name}</h1>
            <Rating grade={review_scores_rating} />
            <br></br>
            <p><strong>Street:</strong> {street}</p>
            <p><strong>Zipcode:</strong> {zipcode}</p>
            <br></br>
            <p><strong>Summary:</strong> {summary}</p>
            <br></br>
            <p><strong>Night Rate:</strong> {price} + <strong>{extra_people}</strong> extra per guest</p>
            <p><strong>Bedrooms:</strong> {bedrooms}</p>
            <p><strong>Bathrooms:</strong> {bathrooms}</p>
            <p><strong>Maximum Guests:</strong> {guests_included}, </p>
            <br></br>
            <button onClick={handleClick}>Book</button>

          </div>
        </div>
      </div>
      <div style={ButtonDivStyle}>
        <Link to='/'>
          <div style={HomeButtonStyle}>
            <img src={houseIcon} alt={name}style={
              {
                width: '45px',
                height: '40px',
                marginTop: '12px',
                marginLeft: '1px'
              }}></img>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default PropertyCard;