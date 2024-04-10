import React, { useState } from 'react';
import Layout from '../../components/Layout';

function UploadResults() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Perform upload logic here
        console.log(selectedFile);
    };

    return (
        <Layout>
            <div className='container'>
                <h1>File Upload</h1>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </Layout>
    );
}

export default UploadResults;