class scHands{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    display(){
    var hr
    var sc
    var min
    var scAngle

    hr = hour()
    sc = second()
    min = minute()
    scAngle = map(sc, 0, 60, 0, 360) ;
        push() ;
translate(this.x,this.y)
    stroke(255,0,0)
    strokeWeight(7)
    //nofill()
    fill(0)
    arc(0, 0, 560, 560, 0, scAngle);
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255, 0, 0) ;

    strokeWeight(7);
    fill(0)
    
    line(0,0,220,0);
    pop()

    }
}