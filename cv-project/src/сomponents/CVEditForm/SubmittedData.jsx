import React from 'react';

export default function SubmittedData({ data }) {
  if (!data) return null;

  return (
    <div className='submitted-data'>
      <h2 className='submitted-data__title'>Submitted Data:</h2>
      <div className='submitted-data__group'>
        <div className='submitted-data__field'>
          <label>First name:</label>
          <p>{data.firstName}</p>
        </div>
        <div className='submitted-data__field'>
          <label>Last name:</label>
          <p>{data.lastName}</p>
        </div>
        <div className='submitted-data__field'>
          <label>Profession:</label>
          <p>{data.profession}</p>
        </div>
        <div className='submitted-data__field'>
          <label>City and Country:</label>
          <p>{data.address}</p>
        </div>
        <div className='submitted-data__field'>
          <label>Email:</label>
          <p>{data.email}</p>
        </div>
        <div className='submitted-data__field'>
          <label>Phone number:</label>
          <p>{data.phoneNumber}</p>
        </div>
        <div className='submitted-data__field'>
          <label>About Me:</label>
          <p>{data.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}
