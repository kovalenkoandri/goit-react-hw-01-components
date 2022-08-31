import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatList = ({ stats }) =>
  stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={styles.item}
      style={{
        backgroundColor:
          '#' + Math.floor(Math.random() * 16777215).toString(16),
      }}
    >
      <span className={styles.label}>{label}: </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  ));
export default StatList;
StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
