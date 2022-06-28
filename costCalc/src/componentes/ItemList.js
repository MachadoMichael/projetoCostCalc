import React from "react";
import Input from "./Input";

function ItemList(props) {

    return (
        <div id="itens">
            <Input handle={props.handle} 
                itens={[
                    "Margem",
                    "Acucar_Mascavo_Minamel",
                    "Acucar_ref_Caravelas",
                    "Azeitona_fat_preta_Rili",
                    "Azeitona_fat_verde_Arcobello",
                    "Azeitona_fat_verde_32_36_Rili",
                    "Bacon_fatiado_frimesa",
                    "Browie_choc_cong_HoneyMG",
                    "Carne_Hamburguer",
                    "CarneSeca_desf_cong_Alfama",
                    "Chocolate_gran_leite_MelkeG",
                    "Chocolate_gran_croc_HaraldF",
                    "CremeAvela_cacau_Nutella",
                    "Farinha_panko_Romariz",
                    "Farinha_trigo_pizza_AnacondaLF",
                    "Farinha_trigo_piz_sal_BungePro",
                    "Farinha_trigo_piz_sal_Anaconda",
                    "Fermento_bio_seco_BestBaker",
                    "Fuba_milho_Granfino",
                    "Leite_cond_Itambe",
                    "Linguica_calabresa_Perdigao",
                    "Linguica_calabresa_SadiaRF",
                    "Margarina_veget_80_Pastela",
                    "Margarina_veget_80_SinaChef",
                    "Molho_Barbecue_PouchLiza",
                    "Molho_Barbecue_Heinz",
                    "Molho_Barbecue_Predilecta",
                    "Molho_Cheddar_PolenghuiClubdoMolho",
                    "Pao_HB_cong_Australian",
                    "Pao_HB_cong_Brioche",
                    "Pao_HB_cong_Prime",
                    "Pao_HB_cong_Smash",
                    "PetitGateu_cong_HoneyMoon",
                    "Queijo_cheddar_fat_Polengui",
                    "Queijo_cheddar_fat_Vigor",
                    "Queijo_mussarela_Friolack",
                    "Queijo_mussarela_GranFilata",
                    "Queijo_mussarela_President",
                    "Queijo_gorgonzola_Nazza",
                    "Queijo_gorgonzola_Vigor",
                    "Queijo_provolone_Coyote",
                    "Queijo_provolone_Nazareno",
                    "Queijo_provolone_Quata",
                    "Recheio_forn_Leite_Harald",
                    "Recheio_forn_Branco_Harald",
                    "Recheio_laka_oreo_Lacta",
                    "Requeijao_crem_cheddar_Catupiry",
                    "Requeijao_crem_cheddar_Nazareno",
                    "Requeijao_crem_Catupiry",
                    "Requeijao_crem_4Queijos_Catupiry",
                    ]}>
            </Input>
        </div>
    )
}


export default ItemList