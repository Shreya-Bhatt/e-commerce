import './Product.css';

import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';
import Aux from '../../hoc/Auxiliary';

const Product = () => {
  return (
    <Aux>
      <header className={classes.Toolbar}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav className={classes.DesktopOnly}>
            <NavigationItemsUser />
          </nav>
      </header>
      <div className="product">
        <h2>Display the product whose view button is clicked!</h2>
      </div>
    </Aux>
  );
};

export default Product;
