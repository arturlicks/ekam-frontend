import "./styles.css"
import { useState, useEffect } from "react";

function BiggestCrashers() {

    const [crashersTable, setCrashersTable] = useState('');

    const handleGetData = async () => {
        const response = await fetch('http://localhost:8080/parsejson');
        const data = await response.json();
  
        setCrashersTable(data);
    }

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Campeonato de batedores</th>
                    </tr>
                    <tr>
                        <th>Posição</th>
                        <th>Piloto</th>
                        <th>Incidentes</th>
                    </tr>
                </thead>
                <tbody>
                    {crashersTable['race_result'] &&
                        crashersTable['race_result']
                            .sort((a, b) => b.incidents - a.incidents) // Sort the array by incidents in descending order
                            .map((entry, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{entry.display_name}</td>
                                    <td>{entry.incidents}</td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
    );
}

export { BiggestCrashers }