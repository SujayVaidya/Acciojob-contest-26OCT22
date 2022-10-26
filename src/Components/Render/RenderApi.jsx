import React from 'react';
import './RenderApi.css';
import { useEffect , useState } from 'react';
import MainView from '../Layout/MainView';



const RenderApi = () => {
    const [productList, setProductList] = useState([]);

    const getProductInfo = async () =>{
        await fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json").then((response) => {return response.json()}).then((data)=>{
            const productInfo =[];
            for(const id in data){
                const product = {
                    id : id,
                    ...data[id]
                }
                productInfo.push(product);
            }
            setProductList(productInfo);
        })
        
        
        
        
    };
    //const data = await response.json();
 useEffect(() => {
    
    getProductInfo();
    
    
 }, []);

 
    return (
          <>  
           <ul  >
{
               productList.map((items)=>{
                return(
                   
                    <li key={items.id} ><MainView  
                                  productImage = {items.productImage}
                                  productName = {items.productName}
                                  id = {items.id}
                                  oldPrice = {items.oldPrice}
                                  newPrice = {items.newPrice}
                                     />
                                     </li>
                                   
                );
                
               }
               )

                
}  </ul>
     </>       
  )
}

export default RenderApi