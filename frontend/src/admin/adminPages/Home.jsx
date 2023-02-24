import Cardcomponent from "../adminComponents/card/Cardcomponent";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
import styles from "./home.module.css"


const Home = () => {
 return (
    <div>
      <div className={styles.navbar}>
        <AdminNavbar/>
      </div>
    <div className={styles.home}>
      <div className={styles.header}>
        <Header/>
      </div>
    <div className={styles.right}>
    <div className={styles.card}>
        <Cardcomponent/>
        <Cardcomponent/>
        <Cardcomponent/>
      </div>
    </div>
      
    </div>
    </div>
  );
};

export default Home;
