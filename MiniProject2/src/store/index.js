import {createSlice , configureStore} from '@reduxjs/toolkit'

const productState = createSlice ({
    name:"food",
    initialState:{
            products:[
                {
                    productId: "P001",
                    productName: "Pizza",
                    image: "images/pizza.jpg",
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
                    price: 12,
                    stock: 10,
                  },
                  {
                    productId: "P002",
                    productName: "Hamburger",
                    image: "images/Hamburger.jpg",
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
                    price: 16,
                    stock: 0,
                  },
                  {
                    productId: "P003",
                    productName: "Bread",
                    image: "images/bread.jpg",
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
                    price: 13,
                    stock: 8,
                  },
                  {
                    productId: "P004",
                    productName: "Cake",
                    image: "images/Cake.jpg",
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
                    price: 14,
                    stock: 6,
                  }
            ],
            cart:[],
        },
    reducers:{
        addCart:(state,action)=>{
            let check = state.cart.findIndex(item=>item.productId == action.payload)
            console.log(check);
            if(check == -1){
                let result = state.products.find(item=>item.productId == action.payload)
                let newProduct = {...result,quantity:1}
                state.cart.push(newProduct)
                
            }else{
                state.cart[check].quantity = state.cart[check].quantity + 1
            }
        }
    }
})

export const {addCart} = productState.actions
const productReducer = productState.reducer

const store = configureStore({
    reducer:{
        productReducer,
    }
})

export default store