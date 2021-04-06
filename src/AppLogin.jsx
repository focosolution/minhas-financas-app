import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css'

class AppLogin extends React.Component {

    // o método render pertence a superclasse, estamos aqui apenas implementando, sabendo que o próprio React irá chamá-lo
    render(){
      return (
        <div>
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
      );
    }
}

export default AppLogin;
