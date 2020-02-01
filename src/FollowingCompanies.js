import React from 'react';

const FollowingCompanies = ({followingCompanies}) => {
    console.log(followingCompanies);
    return (
        <div>
            <h2>Following Companies</h2>
            <div className = 'add-note'>
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
        </div>

    )
}

export default FollowingCompanies;