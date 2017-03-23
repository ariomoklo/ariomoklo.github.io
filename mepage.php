<?php
class MePage{
    protected static $config;
    protected static $page_path;
    protected static $data_path;
    protected static $template;
    protected static $template_path;
    protected static $data;
    
    public static $pages;
    
    public function run(){
        $config = file_get_contents('config.json');
        $config = json_decode($config);
        
        self::$pages = $config->paging;
        self::$page_path = $config->paging->path.'/';
        
        self::$data = $config->data->json;
        self::$data_path = $config->data->path.'/';
        
        self::$template = $config->template->part;
        self::$template_path = $config->template->path;
        
        self::$config = $config;
    }
    
    public static function getPage($NAME){
        return self::$page_path.$NAME.'.php';
    }
    
    public static function dataPath($NAME){
        return self::$data_path.$NAME.'.json';
    }
    
    public static function data($NAME){
        $data = file_get_contents(self::$data_path.$NAME.'.json');
        return json_decode($data);
    }
    
    public static function template($NAME){
        return self::$template_path.'/'.$NAME.'.php';
    }
    
    public static function getBase($url=null){
        if(is_null($url)){
            return self::$config->domain;
        }else{
            return self::$config->domain.$url;
        }
    }
    
    public static function title(){
        return self::$config->title;
    }
}

MePage::run();

$pages = MePage::$pages;
$title = MePage::title();

function Page($NAME){
    if(file_exists(MePage::dataPath($NAME))){
        extract(array($NAME => MePage::data($NAME)));
    }
    
    ob_start();
    include(MePage::getPage($NAME));
}

function getData($NAME){
    $file = file_get_contents(DATA_PATH.'/'.$NAME.'.json');
    return json_decode($file);
}

function imgUrl($KEY, $NAME){
    return DOMAIN.IMG_PATH.'/'.$KEY.'/'.$NAME;
}

function Template($NAME){
    global $pages;
    ob_start();
    include(MePage::template($NAME));
}