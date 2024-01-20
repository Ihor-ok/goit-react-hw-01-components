import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
     const defaultPercentage = 0;
  


    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat_list}>{stats.map(dataStats => {
          return (
            <li key={dataStats.id} className={css.item}>
            <span className={css.label}>{dataStats.label}</span>
              <span className={css.percentage}>{dataStats.percentage ?? defaultPercentage }%</span>
            </li>
          )
        })}</ul>
           

</section>
    )

 }

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,

}