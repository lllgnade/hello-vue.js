<script setup>
/*eslint no-unused-vars: "error"*/
import { ref, reactive, computed, watch, onMounted } from "vue";
import ChildComp from "./ChildComp.vue";

const todoId = ref(1);
const todoData = ref(null);

// Ajax(fetch) 통신
async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    this.posts.push({
                        userId: json.userId,
                        title: json.title,
                        body: json.body
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
*/

const props = defineProps({
  msg: String,
});
</script>

<template>
  {{ msg }}
  <ChildComp msg="child"> Parent에서 보낸 슬롯! </ChildComp>
</template>
