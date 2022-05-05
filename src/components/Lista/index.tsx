import { Item } from './Item';
import style from './Lista.module.scss';
import { Tarefa } from '../../types/tarefa';

interface Props{
    tarefas : Tarefa[]
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}


export function Lista({tarefas, selecionaTarefa} : Props){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item)=> {
                    return(
                        <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item}/>
                    )
                })}
            </ul>
        </aside>
    )
}