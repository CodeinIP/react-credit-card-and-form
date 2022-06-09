import React from "react";
import styles from "./card.module.css";
const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <img src="https://static.toiimg.com/photo/msid-74887573/74887573.jpg" style={{ width: "100px", display: "block",borderRadius:"10px" }} alt="" />
        <img
          src="https://thumbs.dreamstime.com/z/sim-card-chip-isolated-white-background-sim-card-chip-isolated-white-background-vector-152493853.jpg"
          style={{ width: "60px", display: "block",borderRadius:"10px" }}
          alt=""
        />
      </div>
      <h2 className={styles.cardNum}>{data.cardnumber}</h2>
      <div className={styles.details}>
        <div>
          <h4 className={styles.h4}>CARD HOLDER</h4>
          <h2 className={styles.h2}>{data.name}</h2>
        </div>
        <div>
          <h4 className={styles.h4}>EXPIRY DATE</h4>
          <h3 className={styles.h2}>{`${data.month}/${data.year}`}</h3>
        </div>
        <div>
          <h4 className={styles.h4}>CVV</h4>
          <h3 className={styles.h2}>{data.cvv}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
