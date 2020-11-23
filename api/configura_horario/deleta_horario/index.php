<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    $id = $_POST['id'];
    
    $pdo = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");
            
    $id = $_POST['id'];
    $sql = "DELETE FROM horario WHERE id = $id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

   

    echo json_encode($id);
