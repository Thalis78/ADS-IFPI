# Explorador de APIs Públicas

Projeto web simples com HTML, CSS e JavaScript para explorar 4 APIs públicas diferentes.  
A aplicação está hospedada via GitHub Pages.

## APIs Utilizadas

### 1. SpaceX API

- **Descrição:** Retorna dados públicos sobre lançamentos da SpaceX.
- **Autenticação:** Não precisa de chave.
- **Exemplo (curl):**

```
https://api.spacexdata.com/v4/launches/latest
```

### pokéAPI

- **Descrição:** Fornece informações completas sobre Pokémon (como tipos, habilidades e evoluções).
- **_Autenticação: _**Não precisa de chave.
- **Exemplo (curl):**

```
https://pokeapi.co/api/v2/pokemon/ditto
```

### NASA APOD

- **Descrição:** Retorna a imagem astronômica do dia e sua descrição.
- **Autenticação:** Requer chave de API (usei a DEMO_KEY para testes).
- **Exemplo (curl):**

```
"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
```

### Agify API

- **Descrição:** Estima a idade média de uma pessoa com base no nome informado.
- **Autenticação:** Não requer chave.
- **Exemplo (curl):**

```
"https://api.agify.io/?name=maria"
```
