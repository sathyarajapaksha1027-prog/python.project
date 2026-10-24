import tkinter

root = tkinter.Tk()
root.title("赤いBox")

canvas = tkinter.Canvas(root, width=600, height=300, bg="white")
canvas.pack()

box = canvas.create_rectangle(10, 120, 60, 170, fill="red")

def move_box():
        canvas.move(box, 5, 0)
        root.after(30, move_box)

move_box()
root.mainloop()