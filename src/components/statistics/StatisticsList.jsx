import PropTypes from 'prop-types';
import Statistics from 'components/statistics/Statistics';
import getRandomHexColor from '../../utils/randomColor';

import s from './StatisticsList.module.css';

const BgColor = {
  backgroundColor: getRandomHexColor(),
};

export default function StatisticsList({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(elem => {
          return (
            <Statistics
              key={elem.id}
              label={elem.label}
              percentage={elem.percentage}
              style={BgColor}
            />
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
