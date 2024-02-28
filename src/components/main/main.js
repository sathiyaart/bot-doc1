import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {

    return(
        <Layout>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems:'center',
                fontSize: '20px',
                padding: "2rem"
            }}>
                <h1>My React Page</h1>
                <p>This is a React page in Docusaurus</p>
                </div>
        </Layout>
    );
}