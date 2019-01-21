<template>
  <div style="padding: 10px;">
    <div style="margin-bottom:10px;">
        Select player:
        <select>
            <option>s3llison</option>
            <option>BeardedMonkey</option>
        </select>
    </div>

    <b-container fluid >
        <b-row style="height: -webkit-fill-available">
            <b-col cols="3">
                <draggable class="list-group" element="ul" v-model="draggableWidgets" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group type="transition" :name="'flip-list'">
                    <li class="list-group-item" v-for="element in draggableWidgets" :key="element.order">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                        <b-card :title="element.name"
                            tag="article"
                            class="mb-2 cardtitle">
                            <p class="card-text"><span>{{ element.desc }}</span></p>
                            <li v-for="stat in element.stats" :key="stat.name">
                                <span style="font-weight: bold;">{{ stat.name }}:</span>
                                <span>{{ stat.value }}</span>
                            </li>
                        
                        </b-card>
                    </li>
                    </transition-group>
                </draggable>
            </b-col>
            <b-col cols="3">
            <draggable element="span" v-model="draggableWidgets2" :options="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">
                <li class="list-group-item" v-for="element in draggableWidgets2" :key="element.order">
                    <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                    <b-card :title="element.name"
                            tag="article"
                            class="mb-2 cardtitle">
                            <p class="card-text"><span>{{ element.desc }}</span></p>
                            <li v-for="stat in element.stats" :key="stat.name">
                                <span style="font-weight: bold;">{{ stat.name }}:</span>
                                <span>{{ stat.value }}</span>
                            </li>
                        
                    </b-card>
                </li>
                </transition-group>
            </draggable>
            </b-col>
             <b-col cols="3">
            <draggable element="span" v-model="draggableWidgets3" :options="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">
                <li class="list-group-item" v-for="element in draggableWidgets3" :key="element.order">
                    <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                    <b-card :title="element.name"
                            tag="article"
                            class="mb-2 cardtitle">
                            <p class="card-text"><span>{{ element.desc }}</span></p>
                            <li v-for="stat in element.stats" :key="stat.name">
                                <span style="font-weight: bold;">{{ stat.name }}:</span>
                                <span>{{ stat.value }}</span>
                            </li>
                        
                    </b-card>
                </li>
                </transition-group>
            </draggable>
            </b-col>
        </b-row>
    </b-container>

    <div class="list-group col-md-3">
      <pre>{{listString}}</pre>
    </div>
    <div class="list-group col-md-3">
      <pre>{{list2String}}</pre>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

export default {
  name: "hello",
  components: {
    draggable
  },
  data() {
    return {
      draggableWidgets: [
           {
            order: 1,
            name: 'Most Recent Game',
            desc: "Stats from the most recent game",
            stats: [
                {
                    name: "Kills",
                    value: 2
                },
                {
                    name: "Damage",
                    value: 247
                },
                {
                    name: "Shots",
                    value: 111
                },
                {
                    name: "Hits",
                    value: 29
                },
                {
                    name: "Percentage Hit",
                    value: '20%'
                }
            ]
        }
      ],
      draggableWidgets2:  [{
            order: 1,
            name: 'All Time - Solos',
            desc: "Stats from the every Duo game played",
            stats: [
                {
                    name: "Kills",
                    value: 147
                },
                {
                    name: "Damage",
                    value: 2054
                },
                {
                    name: "Shots",
                    value: 9847
                },
                {
                    name: "Hits",
                    value: 523
                },
                {
                    name: "Percentage Hit",
                    value: '11%'
                }
            ]
        },
        {
            order: 1,
            name: 'All Time - Duos',
            desc: "Stats from the every Duo game played",
            stats: [
                {
                    name: "Kills",
                    value: 298
                },
                {
                    name: "Damage",
                    value: 9247
                },
                {
                    name: "Shots",
                    value: 18911
                },
                {
                    name: "Hits",
                    value: 2997
                },
                {
                    name: "Percentage Hit",
                    value: '12%'
                }
            ]
        },
        {
            order: 1,
            name: 'All Time - Quads',
            desc: "Stats from the every Duo game played",
            stats: [
                {
                    name: "Kills",
                    value: 298
                },
                {
                    name: "Damage",
                    value: 9247
                },
                {
                    name: "Shots",
                    value: 18911
                },
                {
                    name: "Hits",
                    value: 2997
                },
                {
                    name: "Percentage Hit",
                    value: '12%'
                }
            ]
        }
      ], 
      draggableWidgets3:  [{
            order: 1,
            name: 'Best video clip',
            desc: "Most recent video highlight"
            
            
        }
      ],
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style>
.cardtitle {
    background-color: antiquewhite
}
.card-text span {
    font-size: smaller;
    font-style: italic
}

ul {
  list-style-type: none;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>