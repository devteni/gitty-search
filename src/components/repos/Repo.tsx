import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

function Repo({ repo }: { repo: any }) {
  return (
    <div className='card mb-2 rounded-md bg-[#253e68] hover:bg-[#2e4779]'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={repo.html_url}>
                    <FaLink className='inline mr-1' />
                    {repo.name}
                </a>
            </h3>
            <p className="mb-4">
                {repo.description}
            </p>
            <div className=''>
                <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className='mr-2' /> {repo.watchers_count}
                </div>
                
                <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className='mr-2' /> {repo.stargazers_count}
                </div>
                
                <div className="mr-2 badge badge-error badge-lg">
                    <FaInfo className='mr-2' /> {repo.open_issues}
                </div>
                
                <div className="mr-2 badge badge-warning badge-lg">
                    <FaUtensils className='mr-2' /> {repo.forks}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repo