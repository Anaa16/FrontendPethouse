import './styles.css';

import CarrinhoImg from 'assets/images/doguinho.svg';

const Carrinho =  () => {


    return(

        <div className="car-top-container">
        <img src= {CarrinhoImg} alt="Imagem do carrinho vazio" />
        <div className="car-text-container">
            <h6>Nenhum produto foi adicionado ao carrinho</h6>
        </div>
    </div>
       
            


    );
}

export default Carrinho;