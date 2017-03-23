<div class="navbar">
    <?php foreach($pages->page as $page => $name){
        if($pages->home == $page){
            echo '<button class="btn btn-active" page="'.$page.'" >'.$name.'</button>';
        }else{
            echo '<button class="btn btn-unactive" page="'.$page.'" >'.$name.'</button>';
        }
    }?>
</div>