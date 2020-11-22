<?php
    

    $pdo = new PDO("mysql:host=localhost;dbname=facil_consulta","wilians","12345678");

   

    $nome = $_POST["nome"];
    $senha = $_POST["senha"];
    $nova_senha = $_POST["novasenha"];
    $clientId = $_POST["clientId"];
    $clienPass = $_POST["clientPass"];
    $crip_old = md5($senha);
    $crip_senha = md5($nova_senha);

    echo md5($senha);
    echo '\n';
    echo $clienPass;
    
    if(strlen($nome) >= 6 && strlen($senha) >=6 && strlen($nova_senha) >= 6 && strcmp($clienPass,$crip_old) == 0){
        $sql = "UPDATE medico SET nome = '$nome', senha = '$crip_senha', data_alteracao = NOW() WHERE id = $clientId";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        header("Location: http://localhost:3000");
    }else{
        header("Location: http://localhost:3000/Editar");
    }