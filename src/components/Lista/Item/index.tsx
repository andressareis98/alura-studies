import { Tarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

export function Item({ tarefa, tempo, selecionado, completado, id } : Tarefa){
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}