import React from 'react'
import { Link } from 'react-router-dom'
import { uiRoutes } from '../../routes/ui/uiRoutes'

const NotAuthrized = () => {
    return (
        <div>
            <h1>You do not have permission to access</h1>
            <Link to={uiRoutes.authHome}><button className='btn btn-primary'>Go To Home</button></Link>
        </div>
    )
}

export default NotAuthrized
