import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EspacosControl from '../../components/EspacosControl';
import { useUser } from '../../context/UserContext'; 

function MeusEspacos() {
    const { user } = useUser();
    return (
        <div className="MeusEspacos" >
            <EspacosControl condominio_id={user.id}/>
        </div>
    );
}

export default MeusEspacos;