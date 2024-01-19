import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
     const defaultPercentage = 0;
  


    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        {stats.map(dataStats => {
          return (<ul className={css.stat_list}>
            <li className={css.item}>
            <span className={css.label}>{dataStats.label}</span>
              <span className={css.percentage}>{dataStats.percentage ?? defaultPercentage }</span>
            </li>
          </ul>)
        })}
  
        
    {/* <ul className="stat-list">
    <li className="item">
        <span className="label">{stats[1].label}</span>
      <span className="percentage">{stats[1].percentage }</span>
    </li> */}
    {/* <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage ?? defaultPercentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage ?? defaultPercentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage ?? defaultPercentage}</span>
    </li> */}
  {/* </ul> */}
</section>
    )

 }

// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.object,

// }