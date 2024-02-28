import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {

    function handleNameChange(){
        const names =["Earn","Grow","Give"];
        const int = Math.floor(Math.random()*3);
        return names[int]
    }

    return(

        
        <Layout>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems:'center',
                fontSize: '100px',
                padding: "2rem"
            }}>
                <h1>My React Page</h1>
                <p>This is a React {handleNameChange()}in Docusaurus</p>
                </div>
         
        </Layout>

        
    );
}