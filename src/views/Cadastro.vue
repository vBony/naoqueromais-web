<template>
    <div id="bg">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-lg-12 text-center" >
                    <img width="250" src="../assets/sys_imgs/logoEnome_branco.png" id="logo" @click="goToHome()" alt="">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12" id="box-login">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <h3>Preencha os seus dados</h3>
                        </div>
                        <div class="col-6 mb-3 text-right">
                            <a href="#" class="default-link">Criar conta de empresa <svg width="6" height="10" viewBox="0 0 6 10" class="right-arrow"><path fill="none" fill-rule="evenodd" stroke="#3483FA" stroke-width="1.5" d="M1 1l4 4-4 4"></path></svg></a>
                        </div>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" class="form-control custom-input" id="nome" placeholder="Nome">
                                <div id="m-nome" class="messages"></div>
                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" class="form-control custom-input" id="sobrenome" placeholder="Sobrenome">
                                <div id="m-sobrenome" class="messages"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" class="form-control custom-input" id="email" placeholder="E-mail">
                                <div id="m-email" class="messages"></div>
                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" class="form-control custom-input" id="cpf" placeholder="CPF">
                                <div id="m-cpf" class="messages"></div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <input type="password" class="form-control custom-input" id="senha" placeholder="Senha">
                                <div id="m-senha" class="messages"></div>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-12">
                                <button id="btn-submit"  class="btn-default col-3" type="submit">Criar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Cadastro.js"/>
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
        padding: 30px;
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

    .right-arrow{
        margin-left: 10px;
    }

    #btn-criar-conta:hover{
        background-color: #5b8efb2a;
    }

    .messages{
        color: red;
        font-size: 14px;
    }

    .default-link:link {
        color: #5B8EFB;
    }

    .default-link:visited {
        color: #5B8EFB;
    }

    .default-link:hover {
        text-decoration: underline;
    }

    .default-link:active {
        color: #5B8EFB;
    }

    #logo{
        cursor: pointer
    }
</style>
