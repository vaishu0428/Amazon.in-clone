import Cardcomponent from "../adminComponents/card/Cardcomponent";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
// import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";

// import PieChart from "react-pie-graph-chart";
import styles from "./home.module.css";

import { useEffect, useState } from "react";
import { allOrders, allProducts, alluser } from "../fetchData/data";

export const data = [
  ["Field", "Amount", { role: "style" }],
  ["Products", 100, "#ffa41c"], // RGB value
  ["Users", 10, "silver"], // English color name
  ["Orders", 3, "gold"],
  // CSS-style declaration
];

export const data1 = [
  ["Day", "Products", "Orders", "users"],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
  [12, 6.6, 8.4, 5.2],
  [13, 4.8, 6.3, 3.6],
  [14, 4.2, 6.2, 3.4],
];

export const options = {
  chart: {
    title: "Website figures in First Two Weeks of February",
    subtitle: "in numbers",
  },
};
export const data2 = [
  ["Field", "Numbers"],
  ["Products", 100],
  ["orders", 20],
];
export const data3 = [
  ["Field", "Numbers"],
  ["Products", 100],
  ["users", 50],
];
export const options2 = {
  title: "Website Inventories",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
const Home = () => {
  const [Allusers, setAllusers] = useState([]);
  const [allproducts, setAllProducts] = useState(0);
  const [allOrder, setAllOrder] = useState([]);


  useEffect(() => {
    alluser().then((res) => {
      setAllusers(res.data.allusers);
      // console.log(res.data);
    });
    allProducts().then((res) => {
      setAllProducts(res.data.total);
      // console.log(res.data.total);
    });
    allOrders().then((res) => {
      setAllOrder(res.data.orders);
    });
  }, []);
  

  return (
    <div>
      <div className={styles.navbar}>
        <AdminNavbar />
      </div>
      <div className={styles.home}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <Cardcomponent title={"Total Users"} total={Allusers.length} />
            <Cardcomponent title={"Total Products"} total={allproducts} />
            <Cardcomponent title={"Total Orders"} total={allOrder.length} />
          </div>
          <div className={styles.chart}>
            <Chart
              chartType="PieChart"
              data={data2}
              options={options2}
              width={"100%"}
              height={"400px"}
            />
            <Chart
              chartType="PieChart"
              data={data3}
              options={options2}
              width={"100%"}
              height={"400px"}
            />
          </div>
          <div className={styles.graphs}>
            <Chart
              chartType="Line"
              width="85%"
              height="400px"
              data={data1}
              options={options}
            />
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
