import React from 'react';
import firebase from "../config/firebase";

const Home = () => {
    return (
        <>
        <div>
            <h2>ホーム</h2>
        </div>
        <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Home;