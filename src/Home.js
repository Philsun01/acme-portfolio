import React from 'react';

const Home = ({notesQty, vacationQty, companiesQty}) => {

return (
    <div className = 'container'>
        <h1> Home </h1>
        <div className = 'container-sub'>
          <div className = 'section'> 
            <a href = '#view=notes'>Notes</a> 
            <p> You have {notesQty} notes.</p> 
          </div>
            <div className = 'section'> 
          <a href = '#view=vacations'>Vacations Section</a>
            <p> You have {vacationQty} vacations.</p> 
          </div>
          <div className = 'section'>
            <a href = '#view=followingcompanies'>Following Companies</a>
            <p> You are following {companiesQty} companies.</p>
          </div>
        </div>


      </div>
)

}

export default Home;