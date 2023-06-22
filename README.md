# Scope Color Merger

O "Scope Color Merger" é um script TypeScript utilizado para combinar entradas de configuração de cores de escopo com as mesmas definições de cores. Dado um array de objetos de configuração de cores, cada um contendo um array de escopos e uma definição de cor, o script agrupa todas as entradas com a mesma definição de cor, combinando seus escopos. O resultado é um conjunto simplificado de configurações de cores, onde cada definição de cor única aparece apenas uma vez na saída, com todos os escopos associados a essa cor agrupados. Isso torna mais fácil gerenciar e entender as configurações de cores de escopo em um ambiente de desenvolvimento de software.

## Exemplo

### Antes:

```json
[
  {
    "scope": ["meta.diff", "meta.diff.header"],
    "settings": {
      "foreground": "#50FA7B"
    }
  },
  {
    "scope": ["markup.inserted"],
    "settings": {
      "foreground": "#50FA7B"
    }
  }
]
```

### Depois:

```json
[
  {
    "scope": ["meta.diff", "meta.diff.header", "markup.inserted"],
    "settings": {
      "foreground": "#50FA7B"
    }
  }
]
```
