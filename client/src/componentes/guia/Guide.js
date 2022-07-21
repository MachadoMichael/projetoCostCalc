import React from "react";
import Step from "./Step";

function GuideUser() {
    return (
        <div className="guide">
            <h1>Guia de uso do Sistema</h1>
            <div className="steps">
                <Step step={1} text='Primeiro você deve fazer o seu cadastro. (Área em construção)'></Step>
                <Step step={2} text='Depois preencher os preços dos ingredientes.'></Step>
                <Step step={3} text='Em seguida vá a área da calculadora de custo.'></Step>
                <Step step={4} text='Preencha o peso de cada ingrediente usado, mais a margem desejada. Lembre-se peso em gramas.'></Step>
                <Step step={5} text='Ao clicar em calcular sistema irá lhe dizer os valores de custo e venda.'></Step>
                <Step step={6} text='Nesta mesma página terá um botão chamado cadastrar produto. Nomeie o produto e clique neste botão. (Área em construção)'></Step>
                <Step step={7} text='Este produto ficará salvo em nosso banco de dados. (Área em construção)'></Step>
                <Step step={8} text='Em "produtos cadastrados" você poderá ver todos os produtos que já cadastrou.  (Área em construção)'></Step>
                <Step step={9} text='Na calculadora de compras você poderá dizer quanto de cada produto deseja e com isso será criado uma lista.  (Área em construção)'></Step>
                <Step step={10} text='Ao clicar no botão "gerar lista". Criaremos uma lista de compras com os ingredientes e quanto de cada você precisa comprar.  (Área em construção)'></Step>

            </div>
        </div>
    )
}

export default GuideUser