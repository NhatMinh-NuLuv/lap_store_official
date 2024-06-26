
import backgr from '../image/pic.png'
import bannermac1 from "../image/bannermac1.jpg"
import bannermac2 from "../image/bannermac2.jpg"
import Generics from "../macbook/gen_macbook"
import Genbrand from "./genbrand"


function Home() {
  return (
<>

      <div className="banner">
          <div className="banner_list">
            <img className="banner1" src={bannermac1} alt=""></img>
            <img className="banner1" src={bannermac2} alt=""></img>
          </div>
      </div>
      <div>     
        <img className ="backgroundimage" src={backgr} alt="pic"/>
      </div>
        <div className="shop">
          <div className = 'shop_list'>
            <div className='product_noform'>
            <Genbrand/>
            </div>
            <div className="product_form">
              <div className='product_form_up'>
                  <p className="shop_list_head_text">MacBook</p>
              </div>
              <div className='product_form_down'>
                  <Generics/>
              </div>
            </div>
          </div>
        </div>
</>
  )

}
 
export default Home;
