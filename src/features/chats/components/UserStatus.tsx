import React from 'react'

const UserStatus = () => {
    return (
        <div className='relative top-1 ml-4'>
            <p>William smith</p>
            <span>
                <small className='w-2.5 h-2.5 rounded-full inline-block bg-green-600 mr-2'></small>
                <small>Online</small>
            </span>
        </div>
    )
}

export default UserStatus
