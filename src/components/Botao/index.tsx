import style from './Botao.module.scss';

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined
    texto: string,
    onClick?: () => void
}

export function Botao({type = 'button', texto, onClick} : Props){
    return(
        <div >
            <button onClick={onClick} type={type} className={style.botao}>{texto}</button>
        </div>
    )
}