import style from '../Lista.module.scss'

interface Props{
    tarefa: string,
    tempo: string
}

export function Item({ tarefa, tempo } : Props){
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}