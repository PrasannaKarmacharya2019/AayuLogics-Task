<script setup>
import { ref } from 'vue';

const todoItem=ref("");
const data=ref([])

const addItem=()=>{
    data.value.push({
        title:todoItem.value, 
        id:data.value.length+1});
}
const deleteButton=(itemId)=>
{
console.log(itemId);
const a=data.value.filter((d)=>{
   
       return d.id!==itemId;
       })

       data.value=a;
    console.log(a)
}

</script>

<template>
    <div>
        <div>
            <input type="text" v-model="todoItem" placeholder="Enter todo tasks" />
            {{ todoItem }}
        </div>
        <button @click="addItem"> Add</button>
        <div>
            <ul>
                <template v-for="item in data">
            {{ item }}
                    
            <li>{{item.title}}<button @click="deleteButton(item.id)">Delete</button></li>
                </template>
            </ul>
        </div>
    </div>

    
</template>