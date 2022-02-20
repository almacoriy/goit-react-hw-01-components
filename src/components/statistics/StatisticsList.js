import PropTypes from 'prop-types';
import Statistics from 'components/statistics/Statistics';

export default function StatisticsList({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(elem => {
          return (
            <li key={elem.id} className="item">
              <Statistics label={elem.label} percentage={elem.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
