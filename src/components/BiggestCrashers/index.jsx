import "./styles.css"
import { useState, useEffect } from "react";

function BiggestCrashers() {

    const [crashersTable, setCrashersTable] = useState('');

    const handleGetData = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const date = urlParams.get('date');
        const response = await fetch(`http://localhost:8080/racedata?date=${date}`);
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
                    {crashersTable &&
                        crashersTable
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