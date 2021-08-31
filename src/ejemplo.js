// const ItemDetail = ({ dataProduct }) => {
//   const [cart, setCart] = useState(null);

//   const Añadir = ({ stockItems }) => {
//     if (stockItems > stock) {
//       alert("No hay suficiente Stock");
//     } else {
//       setCart(cart + Añadir);
//       Añadir === 0 ? setCart(cart) : setCart(cart + Añadir);
//     }
//   };

//   return (
//     <Card style={{ height: 730, width: 400, margin: 20 }}>
//       <Item.Group style={{ margin: 20 }}>
//         <Item>
//           <Item.Content>
//             <Item.Header>
//               <h1>{dataProduct.title}</h1>
//             </Item.Header>
//             <Item.Meta>
//               <span className="stay">{dataProduct.category}</span>
//               <p className="price">${dataProduct.price}</p>
//             </Item.Meta>
//             <Item.Description>{dataProduct.description}</Item.Description>
//             <Item.Image size="medium" src={dataProduct.image} />{" "}
//             {!cart && <ItemCount stock={stock} initial={0} onAdd={Añadir} />}
//             <Link to="/CartWidget">
//               <Button>Comprar{setCart}</Button>
//             </Link>
//           </Item.Content>
//         </Item>
//       </Item.Group>
//     </Card>
//   );
// };
