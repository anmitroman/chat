import React, {Component} from 'react';

const App1 = props => (

    <div className="container">
    <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
      <div className="lh-100">
        <h1 className="mb-0 text-white lh-100">Просточат</h1>
        <small>Since 2011</small>
      </div>
    </div>
    <div className="col-md-12 col-xs-12">
    <div className="my-3 p-3 bg-white rounded shadow-sm col-md-8 col-xs-12 float-left">
      <h6 className="border-bottom border-gray pb-2 mb-0">Последние обновления в комнате:</h6>
      <div className="media text-muted pt-3">
        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="42" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">@username</strong>
          <small className="d-block text-info">05.09.2019 в 14:45</small>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="validationTooltip04" placeholder="Введите сообщение" required />
      </div>
      </div>
      <div className="my-3 p-3 bg-white rounded shadow-sm col-md-4 col-xs-12 float-right">
        <h6 className="border-bottom border-gray pb-2 mb-0">С нами в чате:</h6>
       <div className="media text-muted pt-3">
         <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
         <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
           <div className="d-flex justify-content-between align-items-center w-100">
             <strong className="text-gray-dark">Full Name</strong>
             
           </div>
           <span className="d-block">@username</span>
         </div>
       </div>
      </div>
  </div>

    </div>

)

export default App1
