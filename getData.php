<?php
   $jsonString = file_get_contents('users.json');
    $data = json_decode($jsonString, true);

    $id = $_POST["_id"];
    foreach ($data as $key => $entry) {
        if ($entry['_id'] == $id) {
            //$data[$key]['activity_name'] = "TENNIS";
            echo $entry['numEmails'];
        }
        else{

            $tempArray = json_decode($jsonString);
            array_push($data, $id);
            $jsonData = json_encode($tempArray);
            file_put_contents('results.json', $jsonData);

            echo 3;
        }
    }



