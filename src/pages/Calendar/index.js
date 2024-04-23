import Layout from "../../components/Layout";
import { Link } from "react-router-dom";


function Calendar() {
    return (
        <Layout>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Etapa</th>
                        <th>Categorias dos pilotos humanos</th>
                        <th>Formato</th>
                        <th>Pontuação</th>
                        <th>Observações</th>
                        <th>Tanque (a testar a %)</th>
                        <th>Pista</th>
                        <th>Bots</th>
                        <th>Amarelas no TOE</th>
                        <th>Amarelas Aleatórias</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="../SingleRaceResults?date=2024-07-02">07/02</Link>
                        </td>
                        <td>OK</td>
                        <td>1</td>
                        <td>SimLab Mazda/GR/Clio</td>
                        <td>30 / 30 / 30min</td>
                        <td>Longa</td>
                        <td>OBS 1</td>
                        <td>15%</td>
                        <td>VIR Full Course</td>
                        <td>Mazda/GR/Clio</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="../SingleRaceResults?date=2024-02-28">28/2</Link>
                        </td>
                        <td>OK</td>
                        <td>2</td>
                        <td>F1600</td>
                        <td>F1600</td>
                        <td>30 / 60min</td>
                        <td>Curta + Média</td>
                        <td></td>
                        <td>30%</td>
                        <td>Summit Point Raceway</td>
                        <td>F1600</td>
                        <td>Na prova de 60min</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}

export default Calendar;