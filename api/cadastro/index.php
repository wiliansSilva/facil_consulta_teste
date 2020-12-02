<?php
    $pdo = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");

    $errors = array();      
    $data = array();  

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $senhaCrip = sha1($senha);

    if(strlen($nome) >= 6 && strlen($email) >= 6 && filter_var($email,FILTER_VALIDATE_EMAIL) &&strlen($senha) >= 6){
        $sql = "INSERT INTO medico (email,nome,senha,data_criacao,data_alteracao) VALUES('$email','$nome','$senhaCrip', NOW(), NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        header("Location: http://localhost:3000");
    }else{
        echo 'Erro ao cadastrar';
    }
    
    