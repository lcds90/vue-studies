# Vue - The Complete Guide

<a id="topo"></a>

# Sumário 📑

- [Sobre o repositório](#repositorio)
- [Projetos](#projects)
- [Seções](#section)
    - [Conceitos Fundamentais](#concepts)
    - [Renderização](#rendering)
    - [Por trás das cenas](#behind)
    - [Componetização](#components)
    - [Formulários](#forms)
    - [Requisições HTTP](#http)
    - [Roteamento](#router)

> TODO: Resumos de seções do curso

---

# Sobre o repositório <a id="repositorio"></a> 🛡️

Bem vindo ao meu repositório de estudos sobre o framework Vue, o intuito desse repositório é totalmente voltado para estudos.
Nesse README está resumido os conceitos abordados e desenvolvidos do curso `Vue - The Complete Guide`
Além de indicações apontando a documentação como forma de praticar e absorver o conteúdo.

# Projetos <a id="projects"></a> ⚙️ 

Projetos realizados durante o curso, cada projeto aborda conceitos que foram praticadas durante as seções

- ## The Monster Slayer Game 👾
    - [Repositório]()
    - [Deploy]()
- ## Learning Resources ✏️
    - [Repositório]()
    - [Deploy]()

# Seções  <a id="section"></a> 🗂️

<a id="intro"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Introdução</h2>
    </summary>

[Ir ao topo](#topo)

### O que é Vue JS?

### Formas de utilização

#### CDN

#### Vue CLI / Node JS

</details>

---

<a id="concepts"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Conceitos Fundamentais</h2>
    </summary>

[Ir ao topo](#topo)

### Mount
[Documentação](https://v3.vuejs.org/guide/migration/mount-changes.html)


### Data

### Methods

### Interpolação

Vue utiliza uma sintaxe onde vinculamos declarativamente o DOM no HTML, e toda sua manipulação e renderização é realizada através do [**Virtual DOM**](https://www.treinaweb.com.br/blog/o-que-e-dom-virtual-dom-e-shadow-dom).

Existe as seguintes possibilidades

- Texto: É possível através de chaves duplas e o valor dinâmico em seu escopo
```html
<!-- Variavel contendo algo dinâmico -->
<span>Mensagem: {{ msg }}</span>

<!-- Podemos utilizar expressões Javascript -->
<span>O que acha de Vue? {{ msg === 'Amo Vue' ? 'Vue <3' : 'Ainda vou amar' }} </span>

<span>Quanto é 1 + 10? {{ 1 + 10 }}</span>

<span>{{ msg.split(' ')[0] }}</span>
```

### Diretivas


#### v-html

#### v-once

Caso queira prevenir que o elemento mantenha sua informação, podemos utilizar a diretiva `v-once`

```html
<span v-once>Este valor nunca será modificado: {{ msg }}</span>
```

#### v-bind

Quando queremos algo dinâmico presente em algum atributo no elemento utilizamos v-bind para essa possibilidade

```html
<!-- Forma completa -->
<button v-bind:disabled="isButtonDisabled">Botão</button>

<!-- Forma abreviada -->
<button :disabled="isButtonDisabled">Botão</button>
```
> Se o valor atribuido for `null` ou `undefined` o atributo não será renderizado

#### v-on

##### Native event

### Data Binding

#### One-way

#### Two-way


### Computed

### Watchers

### Dynamic Classes

#### Array Syntax

#### Ternary Syntax

</details>

---

<a id="rendering"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Renderização</h2>
    </summary>

[Ir ao topo](#topo)

### v-if

### v-else

### v-else-if

### v-show

### v-for

#### key

</details>

---

<a id="behind"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Por trás das cenas</h2>
    </summary>

[Ir ao topo](#topo)

### Reactividade (conceitos)

### Múltiplos Apps

### Templates

### Refs

### Como Vue atualiza o DOM

### Ciclo da Vida

</details>

---

<a id="components"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Componetização</h2>
    </summary>

[Ir ao topo](#topo)

### Problema

### Solução

### Boas práticas

</details>

---

<a id="forms"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Formulários</h2>
    </summary>

[Ir ao topo](#topo)

### v-model

### Validações

</details>

---

<a id="http"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Requisições HTTP</h2>
    </summary>

[Ir ao topo](#topo)

### v-model

### Validações

</details>

---

<a id="router"></a>
<details>
    <summary>
        <h2 style="display: inline; border: 0">Roteamento / (Rotas na aplicação)</h2>
    </summary>

[Ir ao topo](#topo)

### v-model

### Validações

</details>

---

[Ir ao topo](#topo)