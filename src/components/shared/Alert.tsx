import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
    const { alert } = useContext(AlertContext);

  return (
    <div>
        {
            alert.msg !== "" && 
            (
                <p className='flex items-start mb-4 space-x-2'>
                {
                 alert.type === "error" && (
                 <p 
                    className='flex-1 text-base font-semibold leading-7 text-white'>
                    {alert.msg}
                </p>)
                }
                </p>
            )
        }
    </div>
  )
}

export default Alert