import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header , List } from 'semantic-ui-react'

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/ActivitiesContoller').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, []);

  return (
    <>
      <Header as='h2' icon='users' content='Reactivities'/>
        <div className='App'>
          <List>
            {activities.map(activity => (
              <List.Item key={activity.id}>
                {activity.title} - {activity.catagory}
              </List.Item>
            ))}
          </List>
        </div>
    </>
  );
}

export default App;
