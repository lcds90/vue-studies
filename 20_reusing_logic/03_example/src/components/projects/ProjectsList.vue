<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <div>
        <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
          Sort Ascending
        </button>
        <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
          Sort Descending
        </button>
      </div>
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, toRefs, watch } from 'vue';
import { useSearch, useSort } from '../../composables';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props);
    const projects = computed(() => (user.value ? user.value.projects : []));
    const [enteredSearchTerm, updateSearch, availableProjects] = useSearch(
      projects,
      'title'
    );
    const [sort, sorting, displayedProjects] = useSort(
      availableProjects,
      'title'
    );
    const hasProjects = computed(function () {
      return user.value.projects && availableProjects.value.length > 0;
    });

    watch(user, () => {
      updateSearch('');
    });

    return {
      enteredSearchTerm,
      availableProjects: displayedProjects,
      hasProjects,
      updateSearch,
      sort,
      sorting,
    };
  },
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = '';
  //   },
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>