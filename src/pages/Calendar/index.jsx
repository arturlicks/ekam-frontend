import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";



function Calendar() {
    return (
        <Layout>
            <CardGroup style={{ padding: 20 }}>
                <Link to="../SingleRaceResults?date=2024-07-02" style={{ textDecoration: 'none' }}>
                    <Card>
                        <Card.Header>Etapa 1</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src="/logo-series-road-d-simlab-prod-car-challenge.png" style={{ width: '18rem' }} />
                            <Card.Title>SimLab - VIR Full Course</Card.Title>
                            <Card.Text>
                                Calendário de 2024
                            </Card.Text>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-top">
                                    Duração da corrida
                                    </Tooltip>
                                }
                                placement="top"
                            >
                                <Badge bg="secondary">30 Min</Badge>
                            </OverlayTrigger>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-top">
                                    Pontuação
                                    </Tooltip>
                                }
                                placement="top"
                            >
                                <Badge bg="secondary">Longa</Badge>
                            </OverlayTrigger>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-top">
                                    OBS 1: (Baterias pontuam como curta para fazer a classicação da etapa. Bots vão pontuar junto nas curtas, mas no resultado final não)
                                    </Tooltip>
                                }
                                placement="top"
                            >
                                <Badge bg="primary">OBS 1</Badge>
                            </OverlayTrigger>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-top">
                                    Tanque
                                    </Tooltip>
                                }
                                placement="top"
                            >
                                <Badge bg="secondary">15%</Badge>
                            </OverlayTrigger>
                                <Badge bg="warning">Amarelas no tow</Badge>
                        </Card.Body>
                    </Card>
                </Link>
                <Card>
                    <Card.Header>Etapa 1</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src="/logo-series-road-d-simlab-prod-car-challenge.png" style={{ width: '18rem' }} />
                        <Card.Title>SimLab - VIR Full Course</Card.Title>
                        <Card.Text>
                            Calendário de 2024
                        </Card.Text>
                            <Badge bg="secondary">30 Min</Badge>
                            <Badge bg="secondary">Longa</Badge>
                            <Badge bg="primary">OBS 1</Badge>
                            <Badge bg="secondary">2024</Badge>
                            <Badge bg="warning">Amarelas no tow</Badge>
                    </Card.Body>
                </Card>
            </CardGroup>
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