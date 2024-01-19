import Profile from 'components/Profile/Profile.jsx'
import Statistics from 'components/Statistics/Statistics.jsx'
import user from '../user.json'
import data from '../data.json'

// { avatar,  username, tag, location, stats}


export default function App() {
  return (
 <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data}  />

      {/* <div>
        <Statistics title="Upload stats"  />
    
        {data.map(d => (<Statistics
        key={d.id}
        statsLabel={d.label}
        statsPercentage={d.percentage}
        />))}
      </div> */}
    </>
  )
};
