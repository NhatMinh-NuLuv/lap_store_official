import "../page/index.scss";
import backgr from "../image/pic.png";
import banner from "../image/banner.jpg";
import bannerasus from "../image/bannerasus.jpg";

import Gen_asus from "./gen_asus";
import Gen_brand from "./genbrand";
function Home() {
  return (
    <>
      <div className="banner">
        <div className="banner_list">
          <img className="banner1" src={banner} alt=""></img>
          <img className="banner1" src={bannerasus} alt=""></img>
        </div>
      </div>
      <div>
        <img className="backgroundimage" src={backgr} alt="pic" />
      </div>
      <div className="shop">
        <div className="shop_list">
          <div className="product_noform">
            <Gen_brand />
          </div>
          <div className="product_form">
            <div className="product_form_up">
              <p className="shop_list_head_text">Asus</p>
            </div>
            <div className="product_form_down">
              <Gen_asus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
