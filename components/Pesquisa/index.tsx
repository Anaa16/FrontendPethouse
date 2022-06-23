import './styles.css';

import lupaImg from 'assets/images/lupa.svg';

const Pesquisa = () =>{
    return(
<div className="container-search">
    <div className="search">
    <input type="text" placeholder="O que seu pet precisa?" className="input-test"/>
</div>
<div>
<button>
    <div className="lupa-top-container">
                <img src= {lupaImg} alt="Imagem da lupa" />
            </div>
</button>

    </div>
</div>

    );
}

export default Pesquisa;