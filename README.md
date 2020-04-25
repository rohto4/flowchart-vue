# This site is quoted
- FlowChart-vue
https://vuejsexamples.com/flowchart-flowchart-designer-component-for-vue-js/
- Bootstrap を Vue.js で使ってみよう
https://qiita.com/kurararara/items/620dd4de798a941099f5
- 初心者向け！Vue.jsの開発環境の構築
https://qiita.com/Mitsuzara/items/4dea8c0aa95d6284980a

# flowchart-vue and cloudshell[![Open in Cloud Shell]
(http://gstatic.com/cloudssh/images/open-btn.svg)](https://console.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/rohto4/flowchart-vue.git)


# Flowchart

Flowchart & Flowchart designer component for Vue.js.

## Usage

```shell script
yarn add flowchart-vue
```

```vue
<template>
    <div id="app">
        <button type="button" @click="$refs.chart.add(10, 10)">
            Add
        </button>
        <button type="button" @click="$refs.chart.remove()">
            Del
        </button>
        <button type="button" @click="$refs.chart.editCurrent()">
            Edit
        </button>
        <button type="button" @click="$refs.chart.save()">
            Save
        </button>
        <flowchart :nodes="nodes" :connections="connections" @editnode="handleEditNode"
                    @editconnection="handleEditConnection" @save="handleChartSave" ref="chart">
        </flowchart>
    </div>
</template>
<script>
  import Vue from 'vue';
  import FlowChart from 'flowchart-vue';

  Vue.use(FlowChart);

  export default {
    name: 'App',
    data: function() {
      return {
        nodes: [
          {id: 1, x: 140, y: 270, name: 'Start', type: 'start'},
          {id: 2, x: 540, y: 270, name: 'End', type: 'end'},
        ],
        connections: [
          {
            source: {id: 1, position: 'right'},
            destination: {id: 2, position: 'left'},
            id: 1,
            type: 'pass',
          },
        ],
      };
    },
    methods: {
      handleChartSave(nodes, connections) {
        // axios.post(url, {nodes, connections}).then(resp => {
        //   this.nodes = resp.data.nodes;
        //   this.connections = resp.data.connections;
        //   // Flowchart will refresh after this.nodes and this.connections changed
        // });
      },
      handleEditNode(node) {
      },
      handleEditConnection(connection) {
      },
    }
  };
</script>
```

See more at [src/views/App.vue](https://github.com/joyceworks/flowchart-vue/blob/master/src/views/App.vue).

## Demo

- [GitHub Pages](https://joyceworks.github.io/flowchart-vue/)

- Development Environment

  ``` shell
  git clone https://github.com/joyceworks/flowchart-vue.git
  cd flowchart-vue
  yarn install
  yarn run serve
  ```

  Then open http://localhost:yourport/ in browser.

## API

See [Wiki](https://github.com/joyceworks/flowchart-vue/wiki).
