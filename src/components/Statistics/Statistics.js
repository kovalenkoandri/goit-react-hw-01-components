import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import data from 'components/Statistics/data';
// const randomColor = Math.floor(Math.random() * 16777215).toString(16);
// document.body.style.backgroundColor = '#' + randomColor;
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};
function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
const statList = data.map(({ id, label, percentage }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}: </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
});
export const Statistics = ({ title }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>{statList}</ul>
  </section>
);
export default Statistics;
statList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
