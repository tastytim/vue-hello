Vue.config.devtools = true;

const vueApp = new Vue({
    el: "#app",
    data:{
        username: "User",
        userimg: "Logo.png"
    },
    methods:{
        
    }
});


console.dir(vueApp);