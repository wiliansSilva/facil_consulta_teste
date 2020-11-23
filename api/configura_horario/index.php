<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    $id_medico = $_POST['id_medico'];
    
    $pdo = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");
            
    //$sql = "SELECT * FROM `horario` INNER JOIN medico ON medico.id = horario.id_medico WHERE id_medico = $id_medico";
    $sql = "SELECT * FROM medico LEFT JOIN horario ON horario.id_medico = medico.id WHERE id_medico = 2";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $j = [];
    $i = 0;

    while ($Fetch = $stmt->fetch(PDO::FETCH_ASSOC)){
        $j[$i] = [
            "id"=>$Fetch['id'],
            "id_medico"=>$Fetch['id_medico'],
            "horario_agendado"=>$Fetch['horario_agendado'],
            "nome"=>$Fetch['nome'],
            "data_horario"=>$Fetch['data_horario'],
        ];
        $i++;
    }

    echo json_encode($j);
