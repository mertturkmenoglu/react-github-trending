import React from 'react'

const Repository = ({repo}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={repo.avatar} alt=''/>
                </div>
                <div className='card-back'>
                    <h1>{repo.name}</h1>
                    <ul>
                        <li>
                            <strong>Repo:</strong> {repo.name}
                        </li>
                        <li>
                            <strong>Author:</strong> {repo.author}
                        </li>
                        <li>
                            <strong>Stars:</strong> {repo.stars}
                        </li>
                        <li>
                            <strong>Forks:</strong> {repo.forks}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Repository
