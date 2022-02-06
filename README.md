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
        Introdução</h2>
    </summary>

[Ir ao topo](#topo)

### O que é Vue JS?
 É um framework Javascript progressivo, sendo escalavel como uma biblioteca em um projeto ou utilizado como um framework para o desenvolvimento de interfaces.
 Sendo necessário o conhecimento de HTML, CSS e Javascript, sendo a junção das melhores partes referente ao React e Angular!
### Formas de utilização

Vue possibilita a integração em um projeto existente através da CDN ou através da utilização do terminal com Vue CLI e Vue UI.
#### CDN

```html
<script src="https://unpkg.com/vue@next"></script>
```

### npm

```sh
npm install vue@next
```

#### Vue CLI / Node JS

Vue oferece seu [CLI oficial](https://cli.vuejs.org/), 

```sh
npm install -g @vue/cli
```

Com ele você tem a possibilidade de criar sua aplicação através de:

```sh
vue create project-name

# Interface gráfica para utilização
vue ui
```

</details>

---

<a id="concepts"></a>
<details>
    <summary>
        Conceitos Fundamentais
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

<a id="curiosityProps"></a>

##### Curiosidade
> Passar todas as props de um componente de uma vez
O v-bind sem argumento possibilita passar todas as props de uma só vez para o componente
```html
<blog-post v-bind="post"></blog-post> <!-- post: { id: 1, title: 'My Journey with Vue' } -->
```
#### v-on

Para o clássico `addEventListener` do Javascript, Vue oferece observadores de evento com o uso da diretiva `v-on`, possibilitando a utilização de métodos para tais eventos.

``

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
        Renderização</h2>
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
        Por trás das cenas</h2>
    </summary>

[Ir ao topo](#topo)

### Reactividade (conceitos)

### Múltiplos Apps

### Templates

### Refs

Refs em um elemento são utilizadas para referênciar o uso do elemento e sua manipulação dentro do ecosistema do Vue, o clássico `document.querySelector(SELETOR)` 

```html
<input type="text" @input="saveInput" ref="userText">
```

```js
// Através da chave global com $ podemos acessar refs que contém um array de objetos referênciados
console.log(this.$refs.userText);
```

### Ciclo de Vida

<details>
    <summary>Imagem oficial da documentação</summary>

![Ciclo de vida do Vue](https://v3.vuejs.org/images/lifecycle.svg)

</details>

Assim como outros frameworks, Vue também possui seus ciclos de vidas *(lifecycles)*.
Em ordem subsequente são eles:

> Não inicialize suas funções com arrow functions pois perde-se a referência de **this**!

- beforeCreate()
- created()
- beforeMount()
- mounted()
- beforeUpdate()
- updated()
- beforeUnmount()
- unmounted()

</details>

---

<a id="components"></a>
<details>
    <summary>
        Componetização</h2>
    </summary>

[Ir ao topo](#topo)

### Problema

O maior problema é que a tendência que a aplicação aumente, muitas coisas vão se repetir caso venha manter listas encapsulado em determinada lógica.

### Solução

Componetizar é a solução, pois além de reaproveitamos lógica podemos encapsular com algo interno e ainda assim ter acesso a informações externas, como veremos a mais na seção. 

### Boas práticas

### Props

São como atributos HTML, é a forma mais básica para passar dados de um componente pai para o filho

```html
<!-- Passando dados do pai -->
<friend-contact
    name="A very cool person"
    phone-number="123 678 000"
    email-address="cool@email.com" 
/>

<!-- Passando valores em um v-for,
você precisa atribuir um v-bind para acesso aos valores
do indice atual do item percorrido -->
<friend-contact
    v-for="friend in friends"
    :key="friend.id"
    :name="friend.name"
    :phone-number="friend.phoneNumber"
    :email-address="friend.email" 
/>
```
[É possível passar todas as props de uma única vez](#curiosityProps)

```html
<!-- Na options API, você utiliza a chave props para receber-las no filho -->
<!-- Vue traduz automaticamente o hifen para camelCase -->
<script>
    export default {
        // Sem validação
        // props: ["name", "emailAddress", "phoneNumber"],
        // Podemos validar as props, caso serem erradas será lançado um alerta no console no navegador
        props: {
            name: String,
            phoneNumber: String,
            emailAddress: String,
            isFavorite: {
                type: Boolean,
                default: false,
                validator: function(value){
                    // Isso é só um exemplo, sabemos que Boolean é só um ou outro 😅
                    return value === true || value === false
                }
            }
        }
        
        data(){
            // ...
        }
    }
</script>
```

#### Tipos de props
Os seguintes tipos são suportados:
- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol
- Qualquer função com `constructor`

Você não pode mudar as props diretamente do filho através da atribuição com this
```js
toggleFavorite(){
    if(this.isFavorite === '1') this.isFavorite = '0'
    else this.isFavorite = '1'
}
```
[Uma forma alternativa seria essa implementação](/05_components/02_communication/src/components/FriendContact.vue#29)

### Emits

O problema que quando estamos alterando algo dentro do componente, a alteração não é realizada no componente pai. 
Para que o pai possa escutar eventos do filho, e que a mudança seja realizada em ambos, utilizamos o emit

A chave emits serve para **documentar** e mostrar quais eventos customizados estão sendo utilizados no componente

</details>

---

<a id="forms"></a>
<details>
    <summary>
        Formulários</h2>
    </summary>

[Ir ao topo](#topo)

### v-model

### Validações

</details>

---

<a id="http"></a>
<details>
    <summary>
        Requisições HTTP</h2>
    </summary>

[Ir ao topo](#topo)

### v-model

### Validações

</details>

---

<a id="router"></a>
<details>
    <summary>
        Roteamento / (Rotas na aplicação)</h2>
    </summary>

[Ir ao topo](#topo)

### v-model

### Validações

</details>

---

[Ir ao topo](#topo)