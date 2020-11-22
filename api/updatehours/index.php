<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $pdo = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");
            
    $id = $_POST['id'];
    $sql = "UPDATE horario SET horario_agendado = 1, data_alteracao = NOW() WHERE id = $id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();


    echo json_encode($id);
    header("Location: http://localhost:3000");
    

?>
       
    
    