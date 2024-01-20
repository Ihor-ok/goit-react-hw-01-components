import Profile from 'components/Profile/Profile.jsx'
import Statistics from 'components/Statistics/Statistics.jsx'
import FriendList from 'components/FriendList/FriendList.jsx'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


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
      {/* {data.map(d => (<Statistics title="Upload stats" stats={data} key={d.id}/>))} */}

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      <FriendList friends={friends} />
      
      <>
        <TransactionHistory items={transactions} />
      </>

    </>
  )
};
