import React, { useState } from "react";
import BoxCost from './BoxCost';
import TotalPainel from './TotalPainel';
import ItemList from './ItemList';


function PainelCusto() {

  const [Values, setValues] = useState({
    Margem: 0,
    Acucar_Mascavo_Minamel: 0,
    Acucar_ref_Caravelas: 0,
    Azeitona_fat_preta_Rili: 0,
    Azeitona_fat_verde_Arcobello: 0,
    Azeitona_fat_verde_32_36_Rili: 0,
    Bacon_fatiado_frimesa: 0,
    Browie_choc_cong_HoneyMG: 0,
    Carne_Hamburguer: 0,
    CarneSeca_desf_cong_Alfama: 0,
    Chocolate_gran_leite_MelkeG: 0,
    Chocolate_gran_croc_HaraldF: 0,
    CremeAvela_cacau_Nutella: 0,
    Farinha_panko_Romariz: 0,
    Farinha_trigo_pizza_AnacondaLF: 0,
    Farinha_trigo_piz_sal_BungePro: 0,
    Farinha_trigo_piz_sal_Anaconda: 0,
    Fermento_bio_seco_BestBaker: 0,
    Fuba_milho_Granfino: 0,
    Leite_cond_Itambe: 0,
    Linguica_calabresa_Perdigao: 0,
    Linguica_calabresa_SadiaRF: 0,
    Margarina_veget_80_Pastela: 0,
    Margarina_veget_80_SinaCheff: 0,
    Molho_Barbecue_PouchLiza: 0,
    Molho_Barbecue_Heinz: 0,
    Molho_Barbecue_Predilecta: 0,
    Molho_Cheddar_PolenghuiCM: 0,
    Pao_HB_cong_Australian: 0,
    Pao_HB_cong_Brioche: 0,
    Pao_HB_cong_Prime: 0,
    Pao_HB_cong_Smash: 0,
    PetitGateu_cong_HoneyMoon: 0,
    Queijo_cheddar_fat_Polengui: 0,
    Queijo_cheddar_fat_Vigor: 0,
    Queijo_mussarela_Friolack: 0,
    Queijo_mussarela_GranFilata: 0,
    Queijo_mussarela_President: 0,
    Queijo_gorgonzola_Nazza: 0,
    Queijo_gorgonzola_Vigor: 0,
    Queijo_provolone_Coyote: 0,
    Queijo_provolone_Nazareno: 0,
    Queijo_provolone_Quata: 0,
    Recheio_forn_Leite_Harald: 0,
    Recheio_forn_Branco_Harald: 0,
    Recheio_laka_oreo_Lacta: 0,
    Req_crem_cheddar_Catupiry: 0,
    Req_crem_cheddar_Nazareno: 0,
    Req_crem_Catupiry: 0,
    Req_crem_4Queijos_Catupiry: 0,

  });

  function handleChange(event, key) {
    
    let t = event.target.value
    let novo_estado = {};

    switch (key) {
      case 'Acucar_Mascavo_Minamel': novo_estado[key] = (t * 10.39) / 1000
        break;
      case 'Acucar_ref_Caravelas': novo_estado[key] = (t * 4.70) / 1000
        break;
      case 'Azeitona_fat_preta_Rili': novo_estado[key] = (t * 4.30) / 1000
        break;
      case 'Azeitona_fat_verde_Arcobello': novo_estado[key] = (t * 24.49) / 1000
        break;
      case 'Azeitona_fat_verde_32_36_Rili': novo_estado[key] = (t * 22,93) / 1000
        break;
      case 'Bacon_fatiado_frimesa': novo_estado[key] = (t * 36.90) / 1000
        break;
      case 'Browie_choc_cong_HoneyMG': novo_estado[key] = (t * 47.17) / 1000
        break;
      case 'Carne_Hamburguer': novo_estado[key] = (t * 30.90) / 1000
        break;
      case 'CarneSeca_desf_cong_Alfama': novo_estado[key] = (t * 47.82) / 1000
        break;
      case 'Chocolate_gran_leite_MelkeG': novo_estado[key] = (t * 66.75) / 1000
        break;
      case 'Chocolate_gran_croc_HaraldF': novo_estado[key] = (t * 15.58) / 1000
        break;
      case 'CremeAvela_cacau_Nutella': novo_estado[key] = (t * 48.30) / 1000
        break;
      case 'Farinha_panko_Romariz': novo_estado[key] = (t * 17.05) / 1000
        break;
      case 'Farinha_trigo_pizza_AnacondaLF': novo_estado[key] = (t * 5.24) / 1000
        break;
      case 'Farinha_trigo_piz_sal_BungePro': novo_estado[key] = (t * 23.78) / 1000
        break;
      case 'Farinha_trigo_piz_sal_Anaconda': novo_estado[key] = (t * 4,48) / 1000
        break;
      case 'Fermento_bio_seco_BestBaker': novo_estado[key] = (t * 28.90) / 1000
        break;
      case 'Fuba_milho_Granfino': novo_estado[key] = (t * 4.50) / 1000
        break;
      case 'Leite_cond_Itambe': novo_estado[key] = (t * 22.40) / 1000
        break;
      case 'Linguica_calabresa_Perdigao': novo_estado[key] = (t * 22.66) / 1000
        break;
      case 'Linguica_calabresa_SadiaRF': novo_estado[key] = (t * 43.70) / 1000
        break;
      case 'Margarina_veget_80_Pastela': novo_estado[key] = (t * 12.60) / 1000
        break;
      case 'Margarina_veget_80_SinaCheff': novo_estado[key] = (t * 11.60) / 1000
        break;
      case 'Molho_Barbecue_PouchLiza': novo_estado[key] = (t * 10.45) / 1000
        break;
      case 'Molho_Barbecue_Heinz': novo_estado[key] = (t * 14.89) / 1000
        break;
      case 'Molho_Barbecue_Predilecta': novo_estado[key] = (t * 10.42) / 1000
        break;
      case 'Molho_Cheddar_PolenghuiCM': novo_estado[key] = (t * 24.60) / 1000
        break;
      case 'Pao_HB_cong_Australian': novo_estado[key] = (t * 61.60) / 36
        break;
      case 'Pao_HB_cong_Brioche': novo_estado[key] = (t * 53.90) / 36
        break;
      case 'Pao_HB_cong_Prime': novo_estado[key] = (t * 62.50) / 36
        break;
      case 'Pao_HB_cong_Smash': novo_estado[key] = (t * 43.90) / 36
        break;
      case 'PetitGateu_cong_HoneyMoon': novo_estado[key] = (t * 50.81) / 1000
        break;
      case 'Queijo_cheddar_fat_Polengui': novo_estado[key] = (t * 35.93) / 1000
        break;
      case 'Queijo_cheddar_fat_Vigor': novo_estado[key] = (t * 35.66) / 1000
        break;
      case 'Queijo_mussarela_Friolack': novo_estado[key] = (t * 10.76) / 1000
        break;
      case 'Queijo_mussarela_GranFilata': novo_estado[key] = (t * 10.24) / 1000
        break;
      case 'Queijo_mussarela_President': novo_estado[key] = (t * 15.64) / 1000
        break;
      case 'Queijo_gorgonzola_Nazza': novo_estado[key] = (t * 20.97) / 1000
        break;
      case 'Queijo_gorgonzola_Vigor': novo_estado[key] = (t * 14.63) / 1000
        break;
      case 'Queijo_provolone_Coyote': novo_estado[key] = (t * 8.21) / 1000
        break;
      case 'Queijo_provolone_Nazareno': novo_estado[key] = (t * 8.52) / 1000
        break;
      case 'Queijo_provolone_Quata': novo_estado[key] = (t * 10.29) / 1000
        break;
      case 'Recheio_forn_Leite_Harald': novo_estado[key] = (t * 27.93) / 1000
        break;
      case 'Recheio_forn_Branco_Harald': novo_estado[key] = (t * 23.42) / 1000
        break;
      case 'Recheio_laka_oreo_Lacta': novo_estado[key] = (t * 38.33) / 1000
        break;
      case 'Req_crem_cheddar_Catupiry': novo_estado[key] = (t * 35.18) / 1000
        break;
      case 'Req_crem_cheddar_Nazareno': novo_estado[key] = (t * 11.37) / 1000
        break;
      case 'Req_crem_Catupiry': novo_estado[key] = (t * 31.93) / 1000
        break;
      case 'Req_crem_4Queijos_Catupiry': novo_estado[key] = (t * 46.94) / 1000
        break;

      default: novo_estado[key] = t
        break;
    }

    setValues((estado_atual) => Object.assign({ ...estado_atual }, novo_estado))


  }

  return (
    <div id='container'>

      <div id='ingredientes'>
        <h2>Digite o material</h2>
        <ItemList handle={handleChange}></ItemList>
      </div>

      <div id='boxes'>
        <div className='caixa'>
          <BoxCost
            valor={Values}
            name={[
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
              "Molho_Cheddar_PolenghuiCM",
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
              "Req_crem_cheddar_Catupiry",
              "Req_crem_cheddar_Nazareno",
              "Req_crem_Catupiry",
              "Req_crem_4Queijos_Catupiry",
              ]}>
          </BoxCost>
        </div>

        <div className='caixa' id='PainelTotal'>
          <TotalPainel value={Values} setValues={setValues}></TotalPainel>
        </div>
      </div>
    </div>
  )


}




export default PainelCusto


