import React, { Component } from 'react';
import { Link } from 'react-router';

//  Image url handling is convoluted in scss , much easier to set inline and get images from root
let backgroundStyle = { background: 'url(assets/img/synvisio.jpg)' };

class Home extends Component {
  render() {
    return (
      <div>

        <div className="home-header" style={backgroundStyle}>
        </div>

        <div className="container home-body">

          <h1> GI Demo Files, Click on any link to explore the dataset </h1>
                 <ul>
            <li> <Link to={'/Dashboard/bn'}> Bn </Link> - Brassica napus , Canola </li>
            <li> <Link to={'/Dashboard/bnigra_bol_brapa_ortho'}> B.nigra vs B.oleracea vs B.rapa </Link> - 3 Way comparision between Brassica nigra , Brassica rapa and Brassica oleracea </li>
            <li> <Link to={'/Dashboard/ca_lc_mt'}> Ca vs Lc vs Mt </Link> - 3 Way comparision between Chickpea , Lentils and Barrel Meddick </li>
            <li> <Link to={'/Dashboard/ta_cs'}> Wheat IWGSC </Link> - Wheat , Chinese Spring (With SNP tracks) </li>
            <li> <Link to={'/Dashboard/ta_hb'}> Wheat  Hybrid </Link> - Wheat Hybrid , Artificial Ancestral Hexaplod </li>
            <li> <Link to={'/Dashboard/cs_hb'}> Wheat cross way analysis </Link> - Wheat Chinese Spring vs Artificial Ancestral Hexaplod</li>
            <li> <Link to={'/Dashboard/hs_pt'}> Hs vs Pt </Link> - Hs(Homo sapiens Hg38, Human) vs Pt(Pan troglodytes Pan-tro 3, Chimpanzee)</li>
            <li> <Link to={'/Dashboard/at'}> At </Link> - Arabidopsis thaliana ,Thale cress </li>
            <li> <Link to={'/Dashboard/os_sb'}> Os vs Sb </Link> - Os(Oriza sativa, Rice) vs Sb(Sorghum bicolor , Broom-Corn)</li>
            <li> <Link to={'/Dashboard/at_vv'}> At vs Vv </Link> - At(Arabidopsis thaliana, Thale cress) vs Vv(Vitis vinifera , Grape Vine)</li>
          </ul>
        </div>
      </div >

    )
  }
};

export default Home;


