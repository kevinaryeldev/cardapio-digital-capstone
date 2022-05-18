import {createContext, useContext, useState} from 'react'

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const [products, setProducts ] = useState([{
        id:1,
        name:"Batata frita",
        description: "Batata cortadas em palitos, fritas e crocantes",
        rating:5,
        waitingTime:13,
        imageUrl:"https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg",
        nutritionalValue:{  
          reference:"Porçao de 100g - 1 unidade",
          calorie: "101 kcal = 426 kJ",
          carbohydrates: "7,7g",
          proteins: "4,3g",
          totalFats: "6,0g",
          saturatedFate: "0,5g",
          transFat: "0g",
          dietaryFiber: "7,0g",
          Sodium: "67g"
        },
        additional:[{
          name: "Queijo cheddar",
          sumPrice: 2
          },
          {
          name: "Molho Tartaro",
          sumPrice: 2
          }],
        products: [{
            name:"Porçao Batata frita pequena (1 pessoa)",
            price:8
          },
          {
            name:"Porçao Batata frita media (2 pessoa)",
            price: 9
          },
          {
            name:"Porçao Batata frita media (2 pessoa)",
            price: 9
          }],
        },
        {
            id:2,
            name:"Batata frita",
            description: "Batata cortadas em palitos, fritas e crocantes",
            rating:5,
            waitingTime:13,
            imageUrl:"https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg",
            nutritionalValue:{  
              reference:"Porçao de 100g - 1 unidade",
              calorie: "101 kcal = 426 kJ",
              carbohydrates: "7,7g",
              proteins: "4,3g",
              totalFats: "6,0g",
              saturatedFate: "0,5g",
              transFat: "0g",
              dietaryFiber: "7,0g",
              Sodium: "67g"
            },
            additional:[{
              name: "Queijo cheddar",
              sumPrice: 2
              },
              {
              name: "Molho Tartaro",
              sumPrice: 2
              }],
            products: [{
                name:"Porçao Batata frita pequena (1 pessoa)",
                price:8
              },
              {
                name:"Porçao Batata frita media (2 pessoa)",
                price: 9
              },
              {
                name:"Porçao Batata frita media (2 pessoa)",
                price: 9
              }],
            },
            {
                id:3,
                name:"Banana frita",
                description: "Batata cortadas em palitos, fritas e crocantes",
                rating:5,
                waitingTime:13,
                imageUrl:"https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg",
                nutritionalValue:{  
                  reference:"Porçao de 100g - 1 unidade",
                  calorie: "101 kcal = 426 kJ",
                  carbohydrates: "7,7g",
                  proteins: "4,3g",
                  totalFats: "6,0g",
                  saturatedFate: "0,5g",
                  transFat: "0g",
                  dietaryFiber: "7,0g",
                  Sodium: "67g"
                },
                additional:[{
                  name: "Queijo cheddar",
                  sumPrice: 2
                  },
                  {
                  name: "Molho Tartaro",
                  sumPrice: 2
                  }],
                products: [{
                    name:"Porçao Batata frita pequena (1 pessoa)",
                    price:8
                  },
                  {
                    name:"Porçao Batata frita media (2 pessoa)",
                    price: 9
                  },
                  {
                    name:"Porçao Batata frita media (2 pessoa)",
                    price: 9
                  }],
                }
    ])
    return (
        <ProductsContext.Provider value={{products, setProducts }}>
          {children}
        </ProductsContext.Provider>
      );
}

export const useProducts = () => useContext(ProductsContext)