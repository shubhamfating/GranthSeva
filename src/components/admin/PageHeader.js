import React from "react";

const PageHeader = (props) => {
  return (
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* Page pre-title */}
            <h2 className="page-title">{props.heading}</h2>
          </div>
          {/* Page title actions */}
         
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
