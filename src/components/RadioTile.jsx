import styles from "@/modules/RadioTile.module.css";

function RadioTile(data) {
  return (
    <input
      type="radio"
      className={styles.accent + "flex flex-row-reverse border-2 rounded"}
      value={data.area}
      name="campingarea"
      key={data.area}
    ></input>
  );
}

export default RadioTile;
