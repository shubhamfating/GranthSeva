import React from 'react'
import AdminAppBody from '../components/admin/AdminAppBody'

const CorporaterList = () => {
  return (
    <AdminAppBody
            loading={loading}
            heading={" E-Books"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            
                        </div>
                    </div>
                </div>
            }
        />
  )
}

export default CorporaterList