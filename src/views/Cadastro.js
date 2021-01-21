import router from "../routes/"

export default{
    data(){
        return{
            data: {}
        }
    },

    methods: {
        goToHome: function(){
            router.push('/')
        }
    }
}