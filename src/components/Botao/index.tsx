import style from './Botao.module.scss';

interface Props{
    texto: string
}

export function Botao({texto} : Props){
    return(
        <div >
            <button className={style.botao}>{texto}</button>
        </div>
    )
}