let GameStart =  Framework.Class(Framework.Level , {
    //初始化loadingProgress需要用到的圖片
    
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },

    //在initialize時會觸發的事件
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },

    load: function(){
        this.backgroundColor = new Framework.Sprite(define.imagePath + 'black.png');
        this.backgroundColor.position = {
            x: Framework.Game.getCanvasWidth() / 2, 
            y: Framework.Game.getCanvasHeight() / 2 
        }

        this.startButton = new Framework.Sprite(define.imageSpritesPath + 'startButton.png');
        this.startButton.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        }
        this.startButton.scale = 0.5;
        this.startButton2 = new Framework.Sprite(define.imageSpritesPath + 'startButton.png');
        this.startButton2.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2+250
        }
        this.startButton2.scale = 0.5;
        this.decortaionCastle = new Framework.Sprite(define.imageSpritesPath + 'BG.png');
        this.decortaionCastle.position = {
            x: Framework.Game.getCanvasHeight() / 2,
            y: Framework.Game.getCanvasWidth() / 2
        }

        this.rootScene.attach(this.backgroundColor);
        this.rootScene.attach(this.decortaionCastle);
        this.rootScene.attach(this.startButton);
        this.rootScene.attach(this.startButton2);
        this._mouseSprite = new Framework.Sprite(define.imageSpritesPath+"cursor.png");
        this._mouseSprite.scale = 0.3;
        this._mouseSprite.rotation = -25;
    },
    update:function(){
        this.startButton.scale+=0.000000001;
    },
    draw: function(parentCtx) {
        this.rootScene.draw(parentCtx);
        this._mouseSprite.draw(parentCtx);
        parentCtx.canvas.style.cursor =  "none";
    },
    mousemove: function(e) {
        
        this._mousePos =e;
        this._mouseSprite.position =  {x:e.x+25,y:e.y+35};
       
    },
    mousedown: function(e) {
        if( this.startButton.OnClick(e) ){
            Framework.Game.goToLevel("Level1");
        }
        if( this.startButton2.OnClick(e) ){
            Framework.Game.goToLevel("Level2");
        }    
    },

    touchstart: function(e) {
        this.mousedown({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
} ) 