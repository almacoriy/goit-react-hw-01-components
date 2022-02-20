import PropTypes from 'prop-types';

export default function Statistics({ label, percentage }) {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
