import React, { useState, useEffect } from 'react';

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
        <div style={{ padding: 20 }}>
            <table>
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
            </table>
        </div>
    );
}

export default ChampionshipResults;