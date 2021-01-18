class minHands{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    display(){
    var hr
    var sc
    var min
    var minAngle

    hr = hour()
    sc = second()
    min = minute()
    minAngle = map(min, 0, 60, 0, 360) ;
        push() ;
translate(this.x,this.y)
    stroke(0,0,255)
    strokeWeight(7)
    //nofill()
    fill(0)
    arc(0, 0, 540, 540, 0, minAngle);
    rotate(minAngle); //rotate the hand based on angle calculated
    stroke(0, 0, 255) ;

    strokeWeight(7);
    
    line(0,0,160,0);
    pop()

    }
}