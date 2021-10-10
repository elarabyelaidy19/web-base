import turtle as t


col=['red','red','red','red','red','blue','blue','blue','blue','blue','orange','orange','orange','orange','orange','brown','brown','brown','brown','brown','magenta','magenta','magenta','magenta','magenta']
offset = 10
r = 10
t.speed(0.5)
t.pensize(3)
t.hideturtle()
t.setx(0)
t.sety(0)
i = 1
for i in range(20):
    t.color(col[i])
    t.circle((r*2)+(i*10))
    t.up()

    t.sety((r *(i+1))*(-1))
    t.down()