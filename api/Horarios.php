<?php
    include("Conexao.php");
    class Horarios extends Conexao{
        #exibe os clientes em um json
        public function exibeHorarios(){
            // $BFetch = $this->conectDB()->prepare("
            // SELECT medico.id,medico.nome,medico.email, medico.senha, JSON_OBJECTAGG(horario.id,horario.data_horario) AS data_horario 
            // FROM medico 
            // LEFT JOIN horario on horario.id_medico = medico.id 
            // WHERE horario.horario_agendado != 1
            // GROUP BY medico.id 
            // ORDER BY data_horario ASC");
            // $BFetch = $this->conectDB()->prepare("
            // SELECT * FROM(
            //     SELECT medico.id,medico.nome,medico.email, medico.senha, GROUP_CONCAT(horario.id) AS 'id_horario',TIMESTAMPDIFF(SECOND, NOW(), MIN(horario.data_horario)) as min_data,
            //     GROUP_CONCAT(horario.data_horario) as data_horario
            //     FROM medico LEFT JOIN horario on horario.id_medico = medico.id
            //     WHERE COALESCE(horario.horario_agendado, 0) = 0 AND (TIMESTAMPDIFF(SECOND, NOW(), horario.data_horario) > 0 OR horario.data_horario IS NULL) 
            //     GROUP BY 1,2,3,4
            // )T
            // ");
            $BFetch = $this->conectDB()->prepare("
            SELECT id,nome,email,senha,GROUP_CONCAT(id_horar,data_horario) as 'data_horario' FROM( SELECT medico.id,medico.nome,medico.email, medico.senha, horario.id as 'id_horar',horario.data_horario FROM medico LEFT JOIN horario on horario.id_medico = medico.id WHERE COALESCE(horario.horario_agendado, 0) = 0 AND (TIMESTAMPDIFF(SECOND, NOW(), horario.data_horario) > 0 OR horario.data_horario IS NULL) ORDER BY TIMESTAMPDIFF(SECOND, NOW(), horario.data_horario) ASC )T GROUP BY 1,2,3,4
            ");
            $BFetch->execute();

            $j = [];
            $i = 0;

            while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)){
                $j[$i] = [
                    "id"=>$Fetch['id'],
                    "nome"=>$Fetch['nome'],
                    "email"=>$Fetch['email'],
                    "senha"=>$Fetch['senha'],
                    "id_hours"=>explode(",",$Fetch['id_horario']),
                    "data_horario"=>explode(",",$Fetch['data_horario'])
                ];
                $i++;
            }

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");

            echo json_encode($j);
        }

    }