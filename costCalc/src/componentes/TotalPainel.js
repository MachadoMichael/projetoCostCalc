import React, { useState } from "react";

function TotalPainel(props) {

    const Values = props.value

    const [precoVenda, setPrecoVenda] = useState(0);
    const [precoCusto, setPrecoCusto] = useState(0)
    let valor_de_custo = 0
    let valor_margem = 0
    let valor_de_venda = 0

    function Soma() {

        valor_de_custo += Values.Acucar_Mascavo_Minamel
        valor_de_custo += Values.Acucar_ref_Caravelas
        valor_de_custo += Values.Azeitona_fat_preta_Rili
        valor_de_custo += Values.Azeitona_fat_verde_Arcobello
        valor_de_custo += Values.Azeitona_fat_verde_32_36_Rili
        valor_de_custo += Values.Bacon_fatiado_frimesa
        valor_de_custo += Values.Browie_choc_cong_HoneyMG
        valor_de_custo += Values.Carne_Hamburguer
        valor_de_custo += Values.CarneSeca_desf_cong_Alfama
        valor_de_custo += Values.Chocolate_gran_leite_MelkeG
        valor_de_custo += Values.Chocolate_gran_croc_HaraldF
        valor_de_custo += Values.CremeAvela_cacau_Nutella
        valor_de_custo += Values.Farinha_panko_Romariz
        valor_de_custo += Values.Farinha_trigo_pizza_AnacondaLF
        valor_de_custo += Values.Farinha_trigo_piz_sal_BungePro
        valor_de_custo += Values.Farinha_trigo_piz_sal_Anaconda
        valor_de_custo += Values.Fermento_bio_seco_BestBaker
        valor_de_custo += Values.Fuba_milho_Granfino
        valor_de_custo += Values.Leite_cond_Itambe
        valor_de_custo += Values.Linguica_calabresa_Perdigao
        valor_de_custo += Values.Linguica_calabresa_SadiaRF
        valor_de_custo += Values.Margarina_veget_80_Pastela
        valor_de_custo += Values.Margarina_veget_80_SinaCheff
        valor_de_custo += Values.Molho_Barbecue_PouchLiza
        valor_de_custo += Values.Molho_Barbecue_Heinz
        valor_de_custo += Values.Molho_Barbecue_Predilecta
        valor_de_custo += Values.Molho_Cheddar_PolenghuiCM
        valor_de_custo += Values.Pao_HB_cong_Australian
        valor_de_custo += Values.Pao_HB_cong_Brioche
        valor_de_custo += Values.Pao_HB_cong_Prime
        valor_de_custo += Values.Pao_HB_cong_Smash
        valor_de_custo += Values.PetitGateu_cong_HoneyMoon
        valor_de_custo += Values.Queijo_cheddar_fat_Polengui
        valor_de_custo += Values.Queijo_cheddar_fat_Vigor
        valor_de_custo += Values.Queijo_mussarela_Friolack
        valor_de_custo += Values.Queijo_mussarela_GranFilata
        valor_de_custo += Values.Queijo_mussarela_President
        valor_de_custo += Values.Queijo_gorgonzola_Nazza
        valor_de_custo += Values.Queijo_gorgonzola_Vigor
        valor_de_custo += Values.Queijo_provolone_Coyote
        valor_de_custo += Values.Queijo_provolone_Nazareno
        valor_de_custo += Values.Queijo_provolone_Quata
        valor_de_custo += Values.Recheio_forn_Leite_Harald
        valor_de_custo += Values.Recheio_forn_Branco_Harald
        valor_de_custo += Values.Recheio_laka_oreo_Lacta
        valor_de_custo += Values.Req_crem_cheddar_Catupiry
        valor_de_custo += Values.Req_crem_cheddar_Nazareno
        valor_de_custo += Values.Req_crem_Catupiry
        valor_de_custo += Values.Req_crem_4Queijos_Catupiry

        valor_margem = (valor_de_custo * Values.Margem) / 100
        valor_de_venda = valor_de_custo + valor_margem

        console.log(`Esse é o valor total dos produtos ${valor_de_custo} + o valor da margem ${valor_margem} (margem = ${Values.Margem}%) que da um valor final de ${valor_de_venda}`)

        setPrecoCusto(valor_de_custo.toFixed(2))
        setPrecoVenda(valor_de_venda.toFixed(2))

    }


    function resetValores() {
        valor_de_custo = 0
        valor_margem = 0
        valor_de_venda = 0
        setPrecoCusto(0)
        setPrecoVenda(0)
     
    }



    return (
        <div id="painelSoma">
            <button onClick={resetValores} id="btn_salvar_produto">Resetar valores</button>
            <button onClick={Soma} id="btn_salvar_produto">Calcular</button>

            <h2 className="valores">CUSTO DE PRODUÇÃO: R$ {precoCusto}</h2>
            <h2 className="valores">PREÇO DE VENDA: R$ {precoVenda}</h2>
        </div>
    )
}



export default TotalPainel