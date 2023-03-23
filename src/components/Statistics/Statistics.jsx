import PropTypes from "prop-types";
import s from "./Statistics.module.css"
const Statistics = (props) => {
    const { data } = props;
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>

            <ul className={s.statList}>
{data.map(({id,label,percentage})=>(<li className={s.item} key={id}>
                    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{ percentage}</span>
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