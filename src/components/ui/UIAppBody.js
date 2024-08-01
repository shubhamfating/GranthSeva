import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import UINavBar from './UINavBar'
import { Navigate } from 'react-router-dom';
import { uiRoutes } from '../../routes/ui/uiRoutes';

const UIAppBody = (props) => {

  let data = sessionStorage.getItem('udata');
  if (data) {
    return <Navigate to={uiRoutes.authHome} />
  }

  return (
    <LoadingOverlay
      active={props.loading}
      spinner
      text="Loading your content..."
     >
      <div className="page">
        <UINavBar />
        <div className="page-wrapper">
          {props.content}
        </div>
      </div>
    </LoadingOverlay>
  )
}

export default UIAppBody