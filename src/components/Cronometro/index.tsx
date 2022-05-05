import { Botao } from "../Botao"
import { Relogio } from "./Relogio"
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: Tarefa | undefined
}

export function Cronometro({selecionado}: Props){
    const [tempo, setTempo] = useState<number>();

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador -1);
                return regressiva (contador - 1)
            }
        }, 1000)
    }

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo = {tempo}/>
            </div>
            <Botao onClick={()=> regressiva(tempo)} texto="Começar"/>
        </div>
    )
}