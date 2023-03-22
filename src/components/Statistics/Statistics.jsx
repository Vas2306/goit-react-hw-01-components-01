import PropTypes from "prop-types";
import "./Statistics.css"
const Statistics = (props) => {
    const { data } = props;
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
{data.map(({id,label,percentage})=>(<li className="item" key={id}>
                    <span className="label">{label}</span>
    <span className="percentage">{ percentage}</span>
                </li>))}
                
            </ul>
        </section>
    );
};
export default Statistics;

Statistics.prototype = {
  
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};