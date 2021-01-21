<template>
    <div id="bg">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-lg-6 col-md-10 col-sm-12" id="box-login">
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control custom-input" id="email" placeholder="E-mail">
                            <div id="m-email" class="messages"></div>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control custom-input" id="senha" placeholder="Senha">
                            <div id="m-senha" class="messages"></div>
                        </div>

                        <button id="btn-submit"  class="btn-default" @click="sendRequisicao()" type="submit">Entrar</button>

                        <div class="mt-3">
                            <button class="btn-default" id="btn-criar-conta" @click="goToRegister()">Criar conta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Login.js"/>

<style scoped>
    #bg{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: #5B8EFB;
    }

    .custom-input{
        padding: 25px 0px;
        padding-left: 10px;
    }

    #box-login{
        background-color: white;
        border-radius: 10px;
        padding: 50px;
    }

    .btn-default{
        width: 100%;
        padding: 15px 0px;
        border:none;
        font-size: 18px;
        font-weight: bold;
        transition: 0.5s !important;
    }

    #btn-submit{
        background-color: #5B8EFB;
        color: white;
    }

    #btn-criar-conta{
        background-color: white;
        color: #5B8EFB;
    }

    #btn-criar-conta:hover{
        background-color: #5b8efb2a;
    }

    .messages{
        color: red;
        font-size: 14px;
    }
</style>