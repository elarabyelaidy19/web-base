import turtle as t

col=['red','blue','orange','brown','magenta']


t.color("red")
t.up()
t.goto(0,-50)
t.down() 
t.circle(20)


t.color("red")
t.up()
t.goto(0,-70)
t.down() 
t.circle(40) 


t.color("red")
t.up()
t.goto(0,-90)
t.down() 
t.circle(60)


t.color("red")
t.up()
t.goto(0,-110)
t.down() 
t.circle(80)


t.color("red")
t.up()
t.goto(0,-130)
t.down() 
t.circle(100)



 
import turtle
    
      
t = turtle.Turtle()
  
# radius of the circle
r = 10
  
# Loop for printing concentric circles
for i in range(50):
    t.circle(r * i)
    t.up()
    t.sety((r * i)*(-1))
    t.down()




import turtle as t

col=['red','red','red','red','red','red','blue','blue','blue','blue','blue','orange','orange','orange','orange','brown','brown','brown','brown','brown','magenta','magenta','magenta','magenta','magenta']
t.size(1)
r = 20
for i in range(10):
    t.color(col[i])
    t.circle(r * i)
    t.up()
    t.sety((r * i)*(-1))
    t.down()



for i in range(50):
  t.circle(10*i)
  t.up()
  t.sety((10*i)*(-1))
  t.down()