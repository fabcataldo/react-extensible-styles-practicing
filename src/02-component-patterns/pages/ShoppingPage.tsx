import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'coffee mug - card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr></hr>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {/* esto es para que vivan las 2 opciones de este patron de compound components */}
        <ProductCard product={product}>
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title title={'CAFE'} className='text-bold'/>
          <ProductCard.Buttons className='custom-buttons bg-dark-buttons'/>
        </ProductCard>

        <ProductCard
          product={product}
          className='bg-dark'
          >
          <ProductImage 
            className='custom-image' 
            style={{
              boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'
            }}
          />
          <ProductTitle className='text-white text-bold'/>
          <ProductButtons className='custom-buttons'/>
        </ProductCard>

        <ProductCard
          product={product}
          style={{backgroundColor: '#70D1F8'}}
          >
          <ProductImage style={{
            boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle style={{fontWeight: 'bold'}}/>
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }}/>
        </ProductCard>
      </div>

    </div>
  )
}
