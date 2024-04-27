import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function UploadResults() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [alert, setAlert] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContent = event.target.result;
                // Send the jsonObject to the server
                fetch('http://localhost:8080/parseuploadedjson', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fileContent)
                })
                    .then(response => {
                        console.log(response);
                        if (response.ok) {
                            setAlert(<Alert variant="success">File uploaded successfully</Alert>);
                            return response.text();
                        } else {
                            setAlert(<Alert variant="danger">File upload failed</Alert>);
                            throw new Error('Server response was not ok.');
                        }
                    })
                    .then(data => {
                        // console.log('Success:', data);
                    })
                    .catch(error => {
                        // Handle any errors here
                        console.error(error);
                    });
            };
            reader.readAsText(selectedFile);
        }

    };

    return (
        <Layout>
            <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                {alert}
                <h2>File Upload</h2>
                <input type="file" onChange={handleFileChange} />
                <Button onClick={handleUpload}>Upload</Button>
            </div>
        </Layout>
    );
}

export default UploadResults;