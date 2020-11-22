<?php
    include("Conexao.php");
    class Horarios extends Conexao{
        #exibe os clientes em um json
        public function exibeHorarios(){
            $BFetch = $this->conectDB()->prepare("
            SELECT medico.id,medico.nome,medico.email, medico.senha, JSON_OBJECTAGG(horario.id,horario.data_horario) AS data_horario 
            FROM medico 
            LEFT JOIN horario on horario.id_medico = medico.id 
            WHERE horario.horario_agendado != 1
            GROUP BY medico.id 
            ORDER BY data_horario ASC");
            
            $BFetch->execute();

            $j = [];
            $i = 0;

            while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)){
                $j[$i] = [
                    "id"=>$Fetch['id'],
                    "nome"=>$Fetch['nome'],
                    "email"=>$Fetch['email'],
                    "senha"=>$Fetch['senha'],
                    "data_horario"=>explode(",",$Fetch['data_horario'])
                ];
                $i++;
            }

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");

            echo json_encode($j);
        }

    }