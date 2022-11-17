const mini = document.getElementById("mini");
const preMini = document.getElementById("preMini");
const juveniles = document.getElementById("juveniles");
const adultos = document.getElementById("adultos");
const danes = document.getElementById("danes");

const templateMini = `
<thead>
  <tr>
    <th scope="col"> </th>
    <th scope="col">LUNES</th>
    <th scope="col">MARTES</th>
    <th scope="col">MIERCOLES</th>
    <th scope="col">JUEVES</th>
    <th scope="col">VIERNES</th>
    <th scope="col">SABADO</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">9 a 10</th>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)<td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">10 a 11</th>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">11 a 12</th>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">12 a 13</th>
    <td>Act.Funcional</td>
    <td></td>
    <td>Act.Funcional</td>
    <td><td>
    <td>Act.Funcional</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">18 a 19</th>
    <td></td>
    <td>Juan (III DAN)</td>
    <td></td>
    <td>Juan (III DAN)</td>
    <td></td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">19 a 20</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">20 a 21</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
`
const templatePreMini = `
<thead>
  <tr>
    <th scope="col"> </th>
    <th scope="col">LUNES</th>
    <th scope="col">MARTES</th>
    <th scope="col">MIERCOLES</th>
    <th scope="col">JUEVES</th>
    <th scope="col">VIERNES</th>
    <th scope="col">SABADO</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">9 a 10</th>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)<td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">10 a 11</th>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">11 a 12</th>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">12 a 13</th>
    <td>Act.Funcional</td>
    <td></td>
    <td>Act.Funcional</td>
    <td><td>
    <td>Act.Funcional</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">18 a 19</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">19 a 20</th>
    <td>Soledad (IV DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Soledad (IV DAN)<td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">20 a 21</th>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)<td>
    <td></td>
  </tr>
</tbody>
`

const templateJuveniles = `
<thead>
  <tr>
    <th scope="col"> </th>
    <th scope="col">LUNES</th>
    <th scope="col">MARTES</th>
    <th scope="col">MIERCOLES</th>
    <th scope="col">JUEVES</th>
    <th scope="col">VIERNES</th>
    <th scope="col">SABADO</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">9 a 10</th>
    <td>Act.Funcional</td>
    <td></td>
    <td>Act.Funcional</td>
    <td><td>
    <td>Act.Funcional</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">10 a 11</th>
    <td>Soledad (IV DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Magali (I DAN)</td>
  </tr>
  <tr>
    <th scope="row">11 a 12</th>
    <td>Soledad (IV DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
  <th scope="row">12 a 13</th>
    <td>Act.Funcional</td>
    <td></td>
    <td>Act.Funcional</td>
    <td><td>
    <td>Act.Funcional</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">18 a 19</th>
    <td>Soledad (IV DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">19 a 20</th>
    <td>Magali (I DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">20 a 21</th>
    <td>Magali (I DAN)</td>
    <td>Magali (I DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Soledad (IV DAN)</td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
</tbody>
`

const templateAdultos = `
<thead>
  <tr>
    <th scope="col"> </th>
    <th scope="col">LUNES</th>
    <th scope="col">MARTES</th>
    <th scope="col">MIERCOLES</th>
    <th scope="col">JUEVES</th>
    <th scope="col">VIERNES</th>
    <th scope="col">SABADO</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">9 a 10</th>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">10 a 11</th>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">11 a 12</th>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">12 a 13</th>
    <td>Act.Funcional</td>
    <td></td>
    <td>Act.Funcional</td>
    <td><td>
    <td>Act.Funcional</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">18 a 19</th>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td>Soledad (IV DAN)</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">19 a 20</th>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">20 a 21</th>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
    <td>Magali (I DAN)</td>
    <td></td>
  </tr>
</tbody>
`
const templateDanes = `
<thead>
  <tr>
    <th scope="col"> </th>
    <th scope="col">LUNES</th>
    <th scope="col">MARTES</th>
    <th scope="col">MIERCOLES</th>
    <th scope="col">JUEVES</th>
    <th scope="col">VIERNES</th>
    <th scope="col">SABADO</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">9 a 10</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  </tr>
  <tr>
    <th scope="row">10 a 11</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  </tr>
  <tr>
    <th scope="row">11 a 12</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">12 a 13</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">18 a 19</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">19 a 20</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
  <tr>
    <th scope="row">20 a 21</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Juan (III DAN)</td>
    <td>Juan (III DAN)</td>
  </tr>
</tbody>
`

const setCalendar = (id) => {

}

mini.addEventListener('click', () => {
  document.getElementById("tableHorario").innerHTML = templateMini;
})

preMini.addEventListener('click', () => {
  document.getElementById("tableHorario").innerHTML = templatePreMini;
})

juveniles.addEventListener('click', () => {
  document.getElementById("tableHorario").innerHTML = templateJuveniles;
})

adultos.addEventListener('click', () => {
  document.getElementById("tableHorario").innerHTML = templateAdultos;
})

danes.addEventListener('click', () => {
  document.getElementById("tableHorario").innerHTML = templateDanes;
})