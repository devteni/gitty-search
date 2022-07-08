import GithubContext from '../../context/github/GithubContext';
import { useContext } from 'react'
import Spinner from '../shared/Spinner';
import User from './User';

export type UserProp = {
  login: string
  avatar_url: string
}

function UsersLists() {
  const { users, loading } = useContext(GithubContext);
  
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {
            users?.map((user, i) => {
              return <User key={i} {...user}/>
            })
          }
      </div>
    )
  } else {
    return <h3><Spinner /></h3>
  }
  
  
}

export default UsersLists