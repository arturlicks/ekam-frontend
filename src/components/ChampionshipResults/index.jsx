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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Driver</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.driver}>
                            <td>{result.driver}</td>
                            <td>{result.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ChampionshipResults;