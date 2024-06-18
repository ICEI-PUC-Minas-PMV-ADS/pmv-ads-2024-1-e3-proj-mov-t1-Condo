import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EspacosControl from '../../components/EspacosControl';
import { UserProvider, useUser } from '../../context/UserContext'; 

function MeusEspacos() {
    return (
        <div className="MeusEspacos">
                <EspacosControl>
                  </EspacosControl> 
        </div>
    );
}

export default MeusEspacos;