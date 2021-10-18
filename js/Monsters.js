class Monster {
    constructor(x,y,type){
        this.body = createSprite(x,y,20,20);
        this.type = type; //what type of monster red pink yellow etc
        this.hearts = type; //how much lifetime (hearts = health)type of monster = type of hearts
        this.kill = 0; // (kill = hits)
        this.image = M1Img;
        
    }//end of constructor


   changeImages2(){
         switch(this.type){
            case 1: this.image = M1Img;
                    this.body.scale = 0.5;
                    this.hearts = 1;
                    break;
            case 2: this.image = M2Img;
                    this.body.scale = 0.5;
                    this.hearts = 2;
                    break;
            case 3: this.image = M3Img;
                    this.body.scale = 0.5;
                    this.hearts = 3;
                    break;
            case 4: this.image = M4Img;
                    this.body.scale = 0.5;
                    this.hearts = 4;
                    break;    
            case 5: this.image = M5Img;
                    this.body.scale = 0.5;
                    this.hearts = 5;
                    break;    
            case 6: this.image = M6Img;
                    this.body.scale = 0.5;
                    this.hearts = 6;
                    break;    
       }//end of switch(This,tye)
       this.body.addImage(this.image);

       switch(this.hearts){
               case 1:switch(this.kill){
                        case 0: break;
                        case 1: this.body.scale = 0.0;
                                break;
                        
               } break;

               case 2:switch(this.kill){
                        case 0: break;
                        case 1: this.body.scale = 0.2;
                                break;
                        case 2: this.body.scale = 0.0;
                                break;
               }break;

               case 3:switch(this.kill){
                        case 0:break;
                        case 1: this.body.scale = 0.3;
                                break;
                        case 2: this.body.scale = 0.2;
                                break;
                        case 3: this.body.scale = 0.0;
                                break;
               }break;

               case 4:switch(this.kill){
                        case 0:break;
                        case 1: this.body.scale = 0.4;
                                break;
                        case 2: this.body.scale = 0.3;
                                break;
                        case 3: this.body.scale = 0.2;
                                break;
                        case 4: this.body.scale = 0.0;
                                break; 
               }break;

               case 5:switch(this.kill){
                        case 0:break;
                        case 1: this.body.scale = 0.5;
                                break;
                        case 2: this.body.scale = 0.4;
                                break;
                        case 3: this.body.scale = 0.3;
                                break;
                        case 4: this.body.scale = 0.2;
                                break; 
                        case 5: this.body.scale = 0.0;
                                break;

               }break;

               case 6:switch(this.kill){
                        case 0:break;
                        case 1: this.body.scale = 0.5;
                                break;
                        case 2: this.body.scale = 0.4;
                                break;
                        case 3: this.body.scale = 0.3;
                                break;
                        case 4: this.body.scale = 0.2;
                                break; 
                        case 5: this.body.scale = 0.1;
                                break;  
                        case 6: this.body.scale = 0.0;
                                break;
               }break;

       }//end of switch(this.hearts)

       if(keyWentDown("space") && pc.body.isTouching(this.body)){       
        this.kill++;
}
    
} //end of changeImages2()   

   /*killiingMonster(){
        if(keyWentDown("space") && pc.body.isTouching(this.body)){       
                this.kill++;
        }
           }//end of killingMonster*/
}//end of class