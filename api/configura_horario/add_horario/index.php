<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    $pdo = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");

  
    $data = $_POST['data'];
    $id = $_POST['id'];
    
    
    
        $sql = "INSERT INTO horario(horario.id_medico,horario.data_horario, horario.horario_agendado, horario.data_criacao, horario.data_alteracao) VALUES ('$id','$data',0,NOW(),NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        echo json_encode('sucesso');

    
    
    