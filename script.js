list = [
  {
    title: "Distanásia",
    text: "A abordagem médica relacionada com o óbito do paciente, corresponde ao prolongamento desnecessário da vida por meio do uso de remédios que podem trazer sofrimento para a pessoa. Dessa forma, é considerada uma má prática médica, pois, embora alivie os sintomas, não traz melhora da qualidade de vida para a pessoa, tornando a morte mais lenta e dolorosa.",
  },
  {
    title: "Eutanásia",
    text: "Eutanásia: A eutanásia é o ato de abreviar a vida de uma pessoa, ou seja, tem como princípio acabar com o sofrimento da pessoa que possui uma doença grave e incurável, quando não existem mais tratamentos que possam ser realizados para melhorar o quadro clínico da pessoa, existem tipos diferentes, e incluem:",
    list: [
      "Eutanásia ativa voluntária: é feita pela administração de medicamentos ou realização de algum procedimento com o intuito de levar o paciente à morte, após o seu consentimento;",
      "Suicídio assistido: é o ato realizado quando o médico fornece medicamentos para que o próprio paciente possa abreviar a vida;",
      "Eutanásia ativa involuntária: é a administração de medicamentos ou realização de procedimentos para levar o paciente à morte, em situação na qual o paciente não consentiu previamente. Esta prática é ilegal em todos os países.",
    ],
  },
  {
    title: "Ortotanásia",
    text: "A ortotanásia é uma prática médica em que há promoção de uma morte natural, sem que sejam realizados tratamentos fúteis, invasivos ou artificiais para manter a pessoa viva e prolongar a morte. Praticada por meio dos cuidados paliativos, é uma abordagem que procura manter a qualidade de vida do paciente, e da sua família, em casos de doenças graves e incuráveis, ajudando no controle de sintomas físicos, psicológicos e sociais. <br>Na ortotanásia a morte é vista como algo natural pelo qual todo ser humano passará, buscando-se o objetivo que não é abreviar e nem adiar a morte, mas sim buscar a melhor maneira de passar por ela, mantendo a dignidade da pessoa humana.",
  },
];

count = 0;

list.forEach((e, i) => {
  $("#list").append(
    `
    <button class="btn btn-text" id="btn${i}" data-target="text${i}">${
      e.title
    }</button>
    <div class="card" id="text${i}" style="display:none">
      <div class="card-body">
        <strong>${e.title}:</strong> ${e.text}
        ${
          e.list
            ? `<ul id="list${i}">
        ${e.list
          .map((item) => {
            return `<li >${item}</li>`;
          })
          .join("")}    
        </ul>`
            : ""
        }
      </div>
    </div>
    `
  );
});

$(".btn-text").click(function () {
  let target = $(this).data("target");
  $(`#${target}`).show();
  $(this).hide();
  count++;
  console.log(count);
  if (count == list.length) {
    $("#btn-next").show();
  }
});
