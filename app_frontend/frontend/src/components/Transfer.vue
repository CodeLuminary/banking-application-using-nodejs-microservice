<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();

    import {ref} from "vue";
    const isMake = ref(false);
</script>
<template>
    <div>
        <div class="ta-header col-12">
            <h1>
                ACCOUNT            
            </h1>
            <p>
                Manage account here           
            </p>
        </div>
        <div class="contentdiv maincontent">
           <div>
                <button @click="setMenu(false)" :class="{txthighlight: !isCreate}">View Transfer</button>
                <button v-if="banking.users[banking.currentUser].userRole=='admin'" @click="setMenu(true)" :class="{txthighlight: isCreate}">Make Transfer</button>
            </div>
            <div>
                <div>
                    
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>