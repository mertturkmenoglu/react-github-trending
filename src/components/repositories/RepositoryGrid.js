import React from 'react'
import Repository from './Repository'

const CharacterGrid = ({repos}) => {
    return (
        <section className='cards'>
            {repos.map((repo) => (
                <Repository key={repo.url} repo={repo}/>
            ))}
        </section>
    )
}

export default CharacterGrid
