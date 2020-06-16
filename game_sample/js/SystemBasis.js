class SystemBasis{
    constructor(){

    }
    Update(){

    }
    SendMessage(){

    }
    GetMessage(){
        
        
    }


}
class DrawingSys{
    constructor(map){
        this._tiles = map;
    }
    DrawMap(ctx,map){
        let thisPos = {x:0,y:0};
        for (let m = 0; m < this._tileSize.height; m++) {
            thisPos.x = 0;
            for(let n = 0; n < this._tileSize.width; n++){               
                map[m][n].draw(ctx);
                thisPos.x +=  this._offsetPerTile.x
            }            
            thisPos.y +=  this._offsetPerTile.y
        }
    }
    _CreateAllTiles = function(){  
        
        this._size.x =  thisPos.x - this._offsetPerTile.x ;
        this._size.y =  thisPos.y - this._offsetPerTile.y ;    
    }
}