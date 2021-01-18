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

                        <button id="btn-submit" type="submit" class="btn">Entrar</button>

                        <div class="row justify-content-between">
                            <div class="col-6"><a href="" width="100%">Esqueci a minha senha</a></div>
                            <div class="col-6"><a href="">Criar uma conta grátis</a></div>
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

    #btn-submit{
        width: 100%;
        background-color: #5B8EFB;
        color: white;
        padding: 15px 0px;
    }

    .messages{
        color: red;
        font-size: 14px;
    }
</style>