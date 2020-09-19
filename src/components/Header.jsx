import React from 'react';

function Header(){
    return (
        <div style={{padding:'0px 15px', height: '60px', background: "#353348", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            
            <div style={{display: 'flex'}}>
                <p class="pr-3 text-white">Nome do usuário</p>
                <button class="btn btn-warning"><i class="fa fa-user"></i></button>
            </div>

            <div>
                <h3 class="pr-3 text-white font-weight-light">Naruto Help Desk</h3>
            </div>
            
            <div style={{display: 'flex'}}>
                <input class="form-control" />
            </div>
            
        </div>
    )
}

export default Header;