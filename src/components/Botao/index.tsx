import style from './Botao.module.scss';

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined
    texto: string
}

export function Botao({type = 'button', texto} : Props){
    return(
        <div >
            <button type={type} className={style.botao}>{texto}</button>
        </div>
    )
}