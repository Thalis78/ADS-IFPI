
## Questões

### Questão 1: Sistema Bancário - Taxas e Juros
Cada cliente de um sistema bancário pode ter **dois tipos de conta**: **corrente** ou **poupança**. A cada mês, a conta é cobrada de uma taxa fixa. Se o cliente não tiver saldo suficiente, ele será cobrado uma taxa extra de **juros por conta negativa**. As condições são as seguintes:

- Se o cliente tiver **conta corrente**, ele paga uma taxa fixa de **R$ 50,00**, mas, se o saldo for negativo, será cobrado **juros de 10%** sobre o valor negativo.
- Se o cliente tiver **conta poupança**, ele paga uma taxa fixa de **R$ 30,00**, mas, se o saldo for negativo, será cobrado **juros de 5%** sobre o valor negativo.

**Tarefa:** Escreva um algoritmo para calcular o valor total que o cliente deverá pagar, considerando o tipo de conta, o saldo e a taxa de juros, caso o saldo seja negativo.


### Questão 2: Sistema de Reservas de Voo
Em um sistema de reservas de voo, o preço da passagem depende de vários fatores. A cada compra, o sistema verifica o **tipo de passageiro**, a **antecedência da compra** e a **classe do voo** (econômica ou executiva). As condições para o cálculo do preço da passagem são as seguintes:

- Se o passageiro for **VIP**, o preço será sempre **50% do valor normal**.
- Se o passageiro for **não VIP**, o preço será:
  - **50% de desconto** se a compra for feita **com mais de 30 dias de antecedência**.
  - Se a compra for feita **com menos de 30 dias de antecedência**, o preço será **1,5 vezes o valor normal**.
- A **classe econômica** tem **valor normal**, enquanto a **classe executiva** tem **1,2 vezes o valor normal**.

**Tarefa:** Escreva um algoritmo que calcule o preço final da passagem, considerando o tipo de passageiro, a antecedência da compra e a classe do voo.


### Questão 3: Sistema de Pontuação de Fidelidade
Um sistema de **gestão de pontos de fidelidade** oferece uma pontuação para os clientes de acordo com o valor das compras realizadas. A cada compra, o cliente ganha pontos, mas as condições de acúmulo variam de acordo com o tipo de cliente e o valor gasto. As regras para o acúmulo de pontos são as seguintes:

- Se o cliente for **normal**:
  - Para compras acima de **R$ 500**, o cliente ganha **1 ponto a cada R$ 10** gastos.
  - Para compras de **até R$ 500**, o cliente ganha **1 ponto a cada R$ 20** gastos.
- Se o cliente for **premium**:
  - Para compras acima de **R$ 500**, o cliente ganha **2 pontos a cada R$ 10** gastos.
  - Para compras de **até R$ 500**, o cliente ganha **1 ponto a cada R$ 10** gastos.

**Tarefa:** Escreva um algoritmo que calcule o total de pontos ganhos por um cliente, considerando seu tipo e o valor da compra.


### Questão 4: Controle de Acesso em Plataforma de E-learning
Em um sistema de **controle de acesso** a uma plataforma de e-learning, o acesso ao conteúdo depende de três fatores: **tipo de assinatura**, **presença mínima nas aulas** e **status de pagamento**. O controle de acesso funciona da seguinte forma:

- Se o **usuário for assinante gratuito**, ele tem **acesso apenas aos materiais básicos**.
- Se o **usuário for assinante premium**, ele tem **acesso a todo o conteúdo** independentemente da presença nas aulas ou do pagamento.
- Se o **usuário for assinante básico**, ele só tem acesso ao conteúdo **se tiver pago a assinatura e cumprido a presença mínima nas aulas** (pelo menos 75% de presença nas aulas).

**Tarefa:** Escreva um algoritmo para verificar o tipo de assinatura do usuário, se ele tem a presença mínima nas aulas e se o pagamento foi realizado, determinando se ele pode acessar o conteúdo completo ou apenas o básico.


### Questão 5: Sistema de Classificação de Desempenho de Funcionários
Em um sistema de **pontuação de desempenho** de funcionários de uma empresa, a performance de cada funcionário é analisada em três aspectos: **produtividade**, **pontualidade** e **comportamento**. Cada aspecto recebe uma pontuação de 1 a 10. Com base nas pontuações, a empresa atribui uma **classificação** de desempenho. As regras para essa classificação são as seguintes:

- Se a pontuação de **produtividade** for **maior que 8**, o funcionário recebe a classificação **"Excelente"** independentemente das outras pontuações.
- Se a **pontuação de pontualidade** for **menor que 5**, o funcionário recebe a classificação **"Desempenho Insatisfatório"**, independentemente das outras pontuações.
- Se a **pontuação de comportamento** for **menor que 6**, o funcionário recebe a classificação **"Precisa Melhorar"**, independentemente das outras pontuações.
- Caso contrário, a classificação será **"Bom"**.

**Tarefa:** Escreva um algoritmo para calcular a classificação do funcionário, considerando as pontuações de produtividade, pontualidade e comportamento.


## Instruções

1. Para cada questão, implemente o algoritmo proposto.
2. Considere os casos de teste possíveis e faça os ajustes necessários para garantir que o algoritmo funcione corretamente em todos os cenários descritos.
3. Lembre-se de que a lógica condicional deve ser tratada de forma clara e eficiente, considerando todas as possibilidades de entrada.
