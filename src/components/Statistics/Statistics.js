import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import data from 'components/Statistics/data';

const statList = data.map(({ id, label, percentage }) => (
  <li className="item" key={id}>
    <span className="label">{label}: </span>
    <span className="percentage">{percentage}%</span>
  </li>
));
const Statistics = ({ title }) => (
  <section class="statistics">
    <h2 className="title">{title}</h2>

    <ul className="statList">{statList}</ul>
  </section>
);
export default Statistics;
statList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
