import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'

//Amplify config

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
  }
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Authenticator>
          {({ signOut, user}) => (
            <div>
              <p>Welcome {user.username}</p>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
        
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
