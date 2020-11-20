<?php
    abstract class Conexao{
        #faz conexao com DB
        protected function conectDB(){
            try{
                $Con = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");
                return $Con;
            }catch(PDOException $erro){
                echo $erro->getMessage();
            }
        }
    }