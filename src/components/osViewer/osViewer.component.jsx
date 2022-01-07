import React from 'react';
import Loading from '../loading/loading.component.jsx';

const OsViewer = ({ osData, setOsData, ...props }) => {

    const osDetails = {
        padding: 10,
        borderRadius: 10,
        margin: "auto",
        width: 300,
        fontSize: 20,
        color: "white",
    };

    const getContent = () => {
        if (!!osData) {
            if(!!osData.error) {
                return <p style={osDetails}>osData.error</p>;
            } else {
                
            return <div>
                    <p style={osDetails}>Detected OS: {osData.os}</p>
                    <p style={osDetails}>Detected Version: {osData.version}</p>
                </div>
            }
        } else {
            return <Loading text={"Waiting for OS data"} />
        }
    }

    const content = getContent()

    return (
        <div>
            {content}
        </div>
    );

}

export default OsViewer;