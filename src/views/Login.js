import router from "../routes/"
const axios = require('axios').default;
import $ from 'jquery'

export default{
    data(){
        return{
            data: {},
            messages: {
                usr_email: '',
                usr_senha: ''
            }
        }
    },

    methods: {
        sendRequisicao: function(){
            axios.get('http://127.0.0.1:8000/api/ping')
            .then(resp => {
                console.log('requisicao', resp);
            })
        },

        goToHome: function(){
            router.push('/')
        },

        sendLogin: function(){
            if(this.data.email === undefined || this.data.senha === undefined){
                console.log('teste');
            }else{
                axios.post('http://localhost:8888/user/login', {data: this.data})
                .then(resp => {
                    if(resp.data.messages != undefined){
                        var response = resp.data.messages
                        var inputs = Object.keys(resp.data.messages)
    
                        inputs.forEach(function(chave){
                            $('input[syncid='+chave+']').addClass('is-invalid')
                            response[chave] = response[chave][0]
                        })
    
                        this.messages = response
                    }else{
                        alert('Logado')
                    }
                })
            }
        },

        limpaCampos: function(event){
            var syncid = event.srcElement.getAttribute('syncid');

            $('input[syncid= '+syncid+']').removeClass('is-invalid')
            this.messages[syncid] = ''
        }
    }
}