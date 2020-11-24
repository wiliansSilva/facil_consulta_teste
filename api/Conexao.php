<?php
    abstract class Conexao{
        
        #faz conexao com DB
        protected function conectDB(){
            $DB_HOST = 'localhost';
            $DB_NAME = 'facil_consulta';
            $DB_USER = 'wilians';
            $DB_PASS = '12345678';
            try{
                $Con = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME","$DB_USER","$DB_PASS");
                return $Con;
            }catch(PDOException $erro){
                echo $erro->getMessage();
            }
        }
    }