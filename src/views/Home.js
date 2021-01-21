import router from "../routes/"


export default{
    data(){
        return{
            data: {}
        }
    },

    methods: {
        goToLogin: function(){
            router.push('login')
        },
    }
}