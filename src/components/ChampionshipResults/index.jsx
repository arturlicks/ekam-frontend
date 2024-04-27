import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


const ChampionshipResults = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('http://localhost:8080/sumpoints');
            const data = await response.json();
            const formattedResults = data.map(item => ({
                driver: item.display_name,
                points: item.total_points
            }));
            setResults(formattedResults);
            } catch (error) {
            console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Piloto</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={result.driver}>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td style={{ textAlign: 'center' }}>{result.driver}</td>
                            <td style={{ textAlign: 'center' }}>{result.points}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>    
    );
}

export default ChampionshipResults;