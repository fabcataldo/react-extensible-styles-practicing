import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
          <ProductCard.Image />
          <ProductCard.Title title={'CAFE'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>

    </div>
  )
}
