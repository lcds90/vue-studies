import { ref, computed, watch, isRef } from 'vue';

const search = (arr, keyToSearch, context = null) => {
    const items = isRef(arr) ? arr : ref(arr);
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');
    if(context) context.emit('hello');
    const availableItems = computed(function () {
      let filteredItems = [];
      if (activeSearchTerm.value) {
        filteredItems = items.value.filter((item) =>
          item[keyToSearch].includes(activeSearchTerm.value)
        );
      } else if (items.value) {
        filteredItems = items.value;
      }
      return filteredItems;
    });

    watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    const updateSearch = (val) => {
      enteredSearchTerm.value = val;
    }

    return [
        enteredSearchTerm,
        updateSearch,
        availableItems,
    ]
}

export default search;