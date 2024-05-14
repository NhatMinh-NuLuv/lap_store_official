import data from "./data/home.json"
import '../page/index.css'
function gen_home(){
    return(
        <>
        {data.map((item) => (
          <div className="product_list1">
                <a href={item.href}>               
                <img className="product_img_1" src={item.img}  alt=""></img>
                  </a>
                  <p className="product_deltail">{item.name}</p>
                  <div className="product_price">
                  <p className="product_old_price">{item.old}</p>
                    <p className="product_price_sale">{item.price}</p>
                    
                  </div>
                </div>
        ))}
        
        </>
        
    )
}
export default gen_home;
