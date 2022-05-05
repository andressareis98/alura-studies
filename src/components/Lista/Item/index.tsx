import { Tarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

interface Props extends Tarefa{
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

export function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa } : Props){
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
            tarefa, 
            tempo, 
            selecionado, 
            completado, 
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}