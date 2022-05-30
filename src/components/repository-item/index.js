import React from 'react'

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        <div>
            <h2> {name} </h2>
            <h4>full name:</h4>
            <a href={linkToRepo} target="_blank">
                {fullName}
            </a>
        </div>
    )
};

export default RepositoryItem;