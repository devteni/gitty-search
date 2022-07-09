import React from 'react'
import Repo from './Repo'

function RepoList({ repos }: { repos: any[]}) {
  return (
    <div className='card rounded-lg shadow-lg bg-base-100'>
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Repositories
            </h2>
            { repos.map((repo) => (
                <Repo key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}

export default RepoList