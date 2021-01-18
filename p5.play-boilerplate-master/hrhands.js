class hrHands{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    display(){
    var hr
    var sc
    var min
    var hrAngle

    hr = hour()
    sc = second()
    min = minute()
    hrAngle = map(hr, 0, 12, 0, 360) ;
        push() ;
translate(this.x,this.y)
    stroke(0,255,0)
    strokeWeight(7)
    //nofill()
    fill(0)
    arc(0, 0, 520, 520, 0, hrAngle);
    rotate(hrAngle); //rotate the hand based on angle calculated
    stroke(0, 255,0) ;

    strokeWeight(7);
    
    line(0,0,100,0);
    pop()

    }
}