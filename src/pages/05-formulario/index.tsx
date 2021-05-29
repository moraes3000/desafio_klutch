import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import TelaHome from "../../components/TelaHome";
import Cabecalho from "../../components/TelaHome/cabecalho";

import styles from "./formulario.module.scss";
export default function Form() {
    return (       <>


            <div className={styles.container}>

                <Cabecalho />


                <div className={styles.conteudo}>
                    <div>
                        <p>Insira os dados do cartão</p>
                        <Input name='' placeholder='Lara B Esquivel' type='text' />
                        <Input name='' placeholder='0000000000' type='number' />
                        <Input name='' placeholder='Data de Validade' type='date' />
                        <Input name='' placeholder='CVC' type='number' />
                    </div>

                    <div>
                        <p>Faça o upload dos anexos  do cartão</p>
                        <Input name='' placeholder='Cartão de crédito (Frente)' type='number' />
                        <Input name='' placeholder='Cartão de crédito (Frente)' type='number' />
                        <Input name='' placeholder='selfie com o cartão de crédito' type='text' />
                        <p>Atenção: As fotos devem estar legíveis, com todas as informações visíveis do cartão</p>


                    </div>
                </div>
                <div className={styles.footer}>
                    <Button name='clicar' color='#fff' bg='#228a95' />
                </div>
            </div>
        </>

    )
}