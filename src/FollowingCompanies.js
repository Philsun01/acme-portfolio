import React from 'react';

const FollowingCompanies = ({followingCompanies}) => {
    console.log(followingCompanies);
    return (
        <div>
            <h2>Following Companies</h2>
            {
            
            followingCompanies.map(company => {
                return(
                    <div key = {company.id}> 
                        {company.companyId}
                    </div>
                )
            })
            
            }
        </div>

    )
}

export default FollowingCompanies;