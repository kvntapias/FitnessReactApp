import React from 'react';
import Card from '../components/Card';
import Welcome from '../components/Welcome';

class Excercises extends React.Component{
    render(){
        return(
            <div>
                <Welcome username="Kevin"/>
                <Card title="Mi titulo"
                    description="my card description"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06" 
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                    />
            </div>
        )
    }
}
export default Excercises