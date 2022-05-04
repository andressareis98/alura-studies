import React, { useState } from "react";
import { Tarefa } from "../../types/tarefa";
import { Botao } from "../Botao";
import style from './Formulario.module.scss';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}

export function Formulario({ setTarefas } : Props){
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa, tempo}])
    }

    return(
        <div>
            <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value = { tarefa }
                        onChange={(evento)=> setTarefa(evento.target.value)}
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        value={tempo}
                        onChange={(evento)=> setTempo(evento.target.value)}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao type="submit" texto="adicionar"/>
            </form>
        </div>
    )
}