import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Form() {
    return (
        <div>
            <div>
                <Input name='' placeholder='Lara B Esquivel' type='text' />
                <Input name='' placeholder='0000000000' type='number' />
                <Input name='' placeholder='Data de Validade' type='date' />
                <Input name='' placeholder='CVC' type='number' />
            </div>

            <div>
                <Input name='' placeholder='Cartão de crédito (Frente)' type='number' />
                <Input name='' placeholder='Cartão de crédito (Frente)' type='number' />
                <Input name='' placeholder='selfie com o cartão de crédito' type='text' />
                <p>Atenção: As fotos devem estar legíveis, com todas as informações visíveis do cartão</p>

                <Button name='clicar' color='red' bg='blue'/>
            </div>
        </div>

    )
}