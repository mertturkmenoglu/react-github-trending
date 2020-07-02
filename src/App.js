import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RepositoryGrid from './components/repositories/RepositoryGrid'
import './App.css'

const App = () => {
    const [repos, setRepos] = useState([])
    const lang = 'javascript'
    useEffect(() => {
        const fetchRepos = async () => {
            const result = await axios(
                `https://ghapi.huchen.dev/repositories?language=${lang}`
            )

            setRepos(result.data)
        }

        fetchRepos()
    }, [])

    return (
        <div className='container'>
            <h1 className='center'>GitHub Trending Repositories</h1>
            <RepositoryGrid repos={repos}/>
        </div>
    )
}

export default App
