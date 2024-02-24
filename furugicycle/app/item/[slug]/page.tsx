import item from '../../../components/apiFakeForItem.json'

export default async function Item({ params }: { params: { slug: string } }) {
  const pedido = item.Item
  const pedidoItem = pedido.filter(Item => Item.id === params.slug)

  console.log(pedidoItem)

  return (
    <>
      <img src={pedidoItem[0].itemImg} alt='' />
      <div>My Post: {params.slug}</div>
    </>
  )
}
