import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = [
    { title: 'Book1', quantity: 1, total: 10, price: 10, id:'item1'},
    { title: 'Book2', quantity: 1, total: 20, price: 20, id:'item2' }];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          items.map((item) => <ProductItem title={item.title} price={item.price} description='This is product description!' quantity={item.quantity} total={item.total} id={item.id}></ProductItem>)
        }
      </ul>
    </section>
  );
};

export default Products;
