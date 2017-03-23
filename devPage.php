<?php include 'mepage.php'; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Ario Widiatmoko">

        <title><?php echo $title;?></title>

        <!-- Bootstrap core CSS -->
        <link href="css/bootstrap.css" rel="stylesheet">

        <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">
        
        <!-- Custom styles for this template -->
        <link href="css/custom.css" rel="stylesheet">
    </head>
    <body>
        <?php Template('navbar');?>
        <?php Template('loader');?>
                
        <div class="container">
            <div class="pages row">            
                <?php foreach($pages->page as $page => $name){
                    if($pages->home == $page){
                        echo '<div class="page page-'.$page.' home-page" data-page="'.$page.'">';
                        echo '<div class="page-body">';
                        Page($page);
                        echo '</div></div>';
                    }else{
                        echo '<div class="page page-'.$page.'" data-page="'.$page.'">';
                        echo '<div class="page-body">';
                        Page($page);
                        echo '</div></div>';
                    }
                }?>                
            </div>
        </div>
    </body>
    
    <!-- Mainly scripts -->
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/routing.js"></script>
</html>