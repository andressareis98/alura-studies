import { Item } from './Item';
import style from './Lista.module.scss';
import { Tarefa } from '../../types/tarefa';


export function Lista({tarefas} : {tarefas : Tarefa[]}){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index)=> {
                    return(
                        <Item key={index} {...item}/>
                    )
                })}
            </ul>
        </aside>
    )
}