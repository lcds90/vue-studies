import { computed, isRef, ref } from 'vue';
const sort = (arr, keyToSort) => {
    const items = isRef(arr) ? arr : ref(arr);
    const sorting = ref(null);
    
    const displayedItems = computed(function () {
        if (!sorting.value) {
          return items.value;
        }
        return items.value.slice().sort((u1, u2) => {
          if (sorting.value === 'asc' && u1[keyToSort] > u2[keyToSort]) {
            return 1;
          } else if (sorting.value === 'asc') {
            return -1;
          } else if (sorting.value === 'desc' && u1[keyToSort] > u2[keyToSort]) {
            return -1;
          } else {
            return 1;
          }
        });
      });
  
      function sort(mode) {
        sorting.value = mode;
      }
    return [
        sort,
        sorting,
        displayedItems,
    ]
}

export default sort;