import Cardcomponent from "../adminComponents/card/Cardcomponent";
import Header from "../adminComponents/Header/Header";
import styles from "./home.module.css"


const Home = () => {
 return (
    <div>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.card}>
        <Cardcomponent/>
        <Cardcomponent/>
        <Cardcomponent/>
      </div>
    </div>
  );
};

export default Home;
