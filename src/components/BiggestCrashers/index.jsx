import "./styles.css"

function BiggestCrashers() {
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
            <tr>
                <td>1</td>
                <td>João</td>
                <td>100</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Maria</td>
                <td>90</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Paulo</td>
                <td>80</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export { BiggestCrashers } 