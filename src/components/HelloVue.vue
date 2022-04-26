<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import ChildComp from "./ChildComp.vue";

const todoId = ref(1);
const todoData = ref(null);

const route = useRoute();
console.log(route.params.helloParam);

// Ajax(fetch) 통신
// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  msg: String,
});
</script>

<template>
  {{ msg }}
  {{ "파라미터 : " + $route.params.helloParam }}
  <ChildComp msg="child"> Parent에서 보낸 슬롯! </ChildComp>
</template>
