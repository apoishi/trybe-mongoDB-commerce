db.produtos.find(
  {
    $and: [{ "valoresNutricionais.0.quantidade": { $lt: 500 } }],
  },
  { nome: 1, _id: 0 },
);