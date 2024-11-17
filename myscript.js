
mycanvas = document.getElementById("mycanvas");
pen = mycanvas.getContext("2d")
width = window.innerWidth-10;
height= window.innerHeight-10;

mycanvas.width=width;
mycanvas.height=height

x =  width/2
y= height/2

sa=0;
ea=2*Math.PI
r = 30

speedX=1
speedY=1

class MyCirlce
{
    constructor(x,y,r,sa,ea,pen)
    {
        this.x =x;
        this.y=y;
        this.sa=sa;
        this.ea=ea 
        this.r=r;
        this.pen=pen
    }

   
        
    draw()
    {

        this.pen.clearRect(0,0,width,height)
        this.pen.beginPath();
        this.pen.arc(this.x,this.y,this.r,this.sa,this.ea)
        this.pen.stroke()
        this.pen.closePath();
    }


    update()
    {
        this.x+=speedX
        this.y+=speedY

        if(this.x+r>width)
        {
            speedX=-1;
        }

        else if(this.x-r<0)
        {
            speedX=1
        }

        if(this.y+r>height)
        {
            speedY=-1;

        }
        else if(this.y-r<0)
        {
            speedY=1
        }
       
       
    }

   
    
}



var c1 = new MyCirlce(x,y,r,sa,ea,pen);

function animate()
{
        c1.draw();
        c1.update();

        c2.draw();
        c2.update();
  
}
 

setInterval(animate,1);