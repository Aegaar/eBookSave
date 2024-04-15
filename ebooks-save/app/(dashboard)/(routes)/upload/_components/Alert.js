import { ShieldAlert } from 'lucide-react';

function Alert({message}) {
  return (
    <div className='p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5 items-center '>
        <ShieldAlert />
        {message}
    </div>
  )
}

export default Alert