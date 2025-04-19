## SEXTA QUESTÃO:

#### A:

Sim, o banco pode fazer isso, mas pode ficar muito sobrecarregado e difícil de manter. Idealmente, o banco deveria gerenciar as interações, enquanto a validação e o cadastro seriam feitos em classes separadas.

#### B:

Sim, é uma boa ideia. Separar o cadastro em classes específicas deixa o código mais organizado, e o banco pode focar em gerenciar as interações e regras gerais.

#### C:

O método associarClienteConta deveria estar no Banco. Isso porque o banco gerencia a relação entre clientes e contas, mas a validação específica de cada conta ou cliente pode ser feita nas classes de cadastro.
